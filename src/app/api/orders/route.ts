import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const body = await request.json()

    const {
      customerInfo,
      items,
      totalAmount,
      deliveryCharge,
      codCharge,
      paymentMethod,
      paymentId
    } = body

    // Create the order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        delivery_date: customerInfo.deliveryDate || null,
        order_date: new Date().toISOString(),
        total_amount: totalAmount,
        status: paymentMethod === 'online' ? 'confirmed' : 'pending',
        notes: `Delivery Address: ${customerInfo.address}, ${customerInfo.city} - ${customerInfo.pincode}
${customerInfo.deliveryTime ? `Preferred Time: ${customerInfo.deliveryTime}` : ''}
${customerInfo.specialInstructions ? `Special Instructions: ${customerInfo.specialInstructions}` : ''}
Payment Method: ${paymentMethod}
${paymentId ? `Payment ID: ${paymentId}` : ''}
Delivery Charge: ₹${deliveryCharge}
${codCharge > 0 ? `COD Charge: ₹${codCharge}` : ''}`
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    // Create order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      quantity: item.quantity,
      unit_price: item.price
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Order items creation error:', itemsError)
      // Try to delete the order if items creation failed
      await supabase.from('orders').delete().eq('id', order.id)
      return NextResponse.json({ error: 'Failed to create order items' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: `WS${order.id.slice(-8).toUpperCase()}`
    })

  } catch (error) {
    console.error('Order API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)

    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = supabase
      .from('orders')
      .select(`
        *,
        order_items (
          id,
          quantity,
          unit_price,
          products (
            id,
            name
          )
        )
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    const { data: orders, error } = await query

    if (error) {
      console.error('Orders fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
    }

    return NextResponse.json({ orders })

  } catch (error) {
    console.error('Orders API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { id } = params

    const { data: order, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          id,
          quantity,
          unit_price,
          products (
            id,
            name,
            price
          )
        )
      `)
      .eq('id', id)
      .single()

    if (error) {
      console.error('Order fetch error:', error)
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    return NextResponse.json({ order })

  } catch (error) {
    console.error('Order API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { id } = params
    const body = await request.json()

    const { status, notes } = body

    const updateData: any = {
      updated_at: new Date().toISOString()
    }

    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    const { data: order, error } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Order update error:', error)
      return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
    }

    return NextResponse.json({ order })

  } catch (error) {
    console.error('Order update API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { id } = params

    // First delete order items
    const { error: itemsError } = await supabase
      .from('order_items')
      .delete()
      .eq('order_id', id)

    if (itemsError) {
      console.error('Order items deletion error:', itemsError)
      return NextResponse.json({ error: 'Failed to delete order items' }, { status: 500 })
    }

    // Then delete the order
    const { error: orderError } = await supabase
      .from('orders')
      .delete()
      .eq('id', id)

    if (orderError) {
      console.error('Order deletion error:', orderError)
      return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Order deletion API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
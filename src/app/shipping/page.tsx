export default function ShippingPolicy() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">Shipping & Delivery Policy</h1>
            <div className="bg-warm-cream p-8 rounded-2xl shadow-lg border border-warm-coffee/20 prose prose-lg max-w-none">

              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>

              <p className="text-neutral-700 mb-6">
                At Whisked Stories, we are committed to delivering fresh, delicious baked goods to your doorstep. This policy outlines our shipping and delivery terms to ensure you receive your orders in perfect condition.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Delivery Areas</h2>
              <p className="text-neutral-700 mb-4">We currently deliver to the following areas:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Delhi</li>
                <li>Gurgaon (Gurugram)</li>
                <li>Noida</li>
                <li>Faridabad</li>
                <li>Ghaziabad</li>
              </ul>
              <p className="text-neutral-700 mb-6">
                We are continuously expanding our delivery network. If your area is not listed, please contact us to check if we can arrange special delivery.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Delivery Timings</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Standard Delivery:</strong> 10:00 AM to 8:00 PM</li>
                <li><strong>Same Day Delivery:</strong> Available for orders placed before 12:00 PM</li>
                <li><strong>Next Day Delivery:</strong> Available for orders placed after 12:00 PM</li>
                <li><strong>Express Delivery:</strong> 2-4 hours (subject to availability)</li>
                <li><strong>Scheduled Delivery:</strong> Choose your preferred date and time slot</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Delivery Charges</h2>
              <div className="text-neutral-700 mb-6">
                <p className="mb-4">Our delivery charges are based on distance and order value:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Orders above ₹1000:</strong> Free delivery within 10km</li>
                  <li><strong>Orders ₹500-999:</strong> ₹50 delivery charge</li>
                  <li><strong>Orders below ₹500:</strong> ₹80 delivery charge</li>
                  <li><strong>Express delivery:</strong> Additional ₹100</li>
                  <li><strong>Beyond 15km:</strong> ₹20 per additional km</li>
                </ul>
                <p>Delivery charges will be calculated automatically at checkout based on your location.</p>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Order Processing Time</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Regular Products:</strong> 2-4 hours preparation time</li>
                <li><strong>Custom Cakes:</strong> 24-48 hours advance notice required</li>
                <li><strong>Bulk Orders:</strong> 48-72 hours advance notice required</li>
                <li><strong>Special Occasion Orders:</strong> 3-5 days advance notice recommended</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Packaging</h2>
              <p className="text-neutral-700 mb-6">
                We use specialized food-grade packaging to ensure your baked goods remain fresh during transit:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Temperature-controlled packaging for sensitive items</li>
                <li>Moisture-resistant containers for cookies and dry goods</li>
                <li>Secure boxes with cushioning for cakes and delicate pastries</li>
                <li>Eco-friendly packaging materials wherever possible</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Delivery Instructions</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Please provide accurate delivery address with landmark</li>
                <li>Ensure someone is available to receive the order</li>
                <li>Provide alternate contact number for delivery coordination</li>
                <li>Mention any specific delivery instructions (gate number, floor, etc.)</li>
                <li>Keep your phone reachable during delivery window</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Failed Delivery</h2>
              <p className="text-neutral-700 mb-4">If delivery fails due to the following reasons:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Incorrect or incomplete address</li>
                <li>Customer not available or unreachable</li>
                <li>Refusal to accept the order</li>
              </ul>
              <p className="text-neutral-700 mb-6">
                We will attempt delivery once more. If the second attempt fails, the order will be returned to our facility. Redelivery charges will apply for subsequent delivery attempts.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Product Freshness</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>All products are freshly baked on the day of delivery</li>
                <li>Consume perishable items within 24 hours of delivery</li>
                <li>Store cakes and pastries in refrigerator as recommended</li>
                <li>Dry items like cookies can be stored for 3-5 days in airtight containers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Quality Assurance</h2>
              <p className="text-neutral-700 mb-6">
                We inspect all products before dispatch. However, if you receive damaged or unsatisfactory products:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Report the issue within 2 hours of delivery</li>
                <li>Provide photos of the damaged products</li>
                <li>We will arrange for replacement or full refund</li>
                <li>Quality issues due to delivery delays will be fully compensated</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Weather and External Factors</h2>
              <p className="text-neutral-700 mb-6">
                Delivery may be delayed or rescheduled due to:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Extreme weather conditions (heavy rain, storms)</li>
                <li>Traffic congestion or road blocks</li>
                <li>Public holidays or festivals</li>
                <li>Government restrictions or lockdowns</li>
              </ul>
              <p className="text-neutral-700 mb-6">
                We will notify customers in advance about any expected delays and work to minimize inconvenience.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Contact for Delivery</h2>
              <div className="text-neutral-700 mb-6">
                <p className="mb-4">For delivery-related queries, contact us:</p>
                <p><strong>Delivery Support:</strong></p>
                <p>Phone: +91 12345 67890</p>
                <p>WhatsApp: +91 12345 67890</p>
                <p>Email: delivery@whiskedstories.com</p>
                <p>Hours: 9:00 AM - 9:00 PM (Daily)</p>
              </div>

              <p className="text-sm text-neutral-500 mt-8">
                This policy was last updated on {new Date().toLocaleDateString('en-IN')}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
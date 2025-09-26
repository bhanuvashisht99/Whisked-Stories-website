export default function RefundPolicy() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">Refund & Cancellation Policy</h1>
            <div className="bg-warm-cream p-8 rounded-2xl shadow-lg border border-warm-coffee/20 prose prose-lg max-w-none">

              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>

              <p className="text-neutral-700 mb-6">
                At Whisked Stories, customer satisfaction is our priority. This policy outlines our refund and cancellation terms to ensure transparency and fair treatment for all customers.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Order Cancellation</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">1.1 Customer-Initiated Cancellation</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Standard Orders:</strong> Can be cancelled up to 4 hours before scheduled delivery</li>
                <li><strong>Custom Cakes/Special Orders:</strong> Require 24 hours notice for cancellation</li>
                <li><strong>Same Day Orders:</strong> Can be cancelled within 1 hour of placing the order</li>
                <li><strong>Bulk Orders:</strong> Require 48 hours notice for cancellation</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">1.2 How to Cancel</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Call our customer support: +91 12345 67890</li>
                <li>Send email to: orders@whiskedstories.com</li>
                <li>WhatsApp: +91 12345 67890</li>
                <li>Provide your order number and reason for cancellation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Refund Eligibility</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.1 Eligible for Full Refund</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Order cancelled within the allowed time frame</li>
                <li>Wrong product delivered</li>
                <li>Damaged or spoiled products upon delivery</li>
                <li>Delivery delay beyond 2 hours from promised time</li>
                <li>Quality issues reported within 2 hours of delivery</li>
                <li>Order not delivered due to our operational issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.2 Partial Refund Scenarios</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Late cancellation (within 2 hours of delivery) - 50% refund</li>
                <li>Partially consumed products with valid quality complaints - Pro-rated refund</li>
                <li>Custom orders cancelled after production has started - Material cost deducted</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.3 No Refund Scenarios</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Change of mind after delivery completion</li>
                <li>Cancellation requests beyond allowed time frame</li>
                <li>Customer unavailable for delivery (after 2 attempts)</li>
                <li>Incorrect delivery address provided by customer</li>
                <li>Products consumed completely before reporting quality issues</li>
                <li>Damage due to customer mishandling</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Refund Process</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">3.1 Refund Timeline</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>UPI/Net Banking:</strong> 2-3 business days</li>
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                <li><strong>Wallets:</strong> 1-2 business days</li>
                <li><strong>Bank Transfer:</strong> 3-5 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">3.2 Refund Method</h3>
              <p className="text-neutral-700 mb-6">
                Refunds will be processed to the original payment method used for the purchase. We do not offer cash refunds or store credits unless specifically requested and approved.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Quality Guarantee</h2>
              <p className="text-neutral-700 mb-6">
                We guarantee the quality and freshness of our products. If you are not satisfied with your order:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Report quality issues within 2 hours of delivery</li>
                <li>Provide clear photos of the product</li>
                <li>Describe the specific quality concern</li>
                <li>Our team will review and provide immediate resolution</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Special Circumstances</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">5.1 Weather/Natural Disasters</h3>
              <p className="text-neutral-700 mb-4">
                Orders cancelled or delayed due to extreme weather conditions, natural disasters, or government restrictions:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Full refund will be provided</li>
                <li>Option to reschedule delivery when conditions improve</li>
                <li>No cancellation charges will apply</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">5.2 Festival/High Demand Periods</h3>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Extended cancellation notice periods may apply</li>
                <li>Custom orders require earlier cancellation during peak seasons</li>
                <li>Specific terms will be communicated at the time of order</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Replacement Policy</h2>
              <p className="text-neutral-700 mb-6">
                In case of quality issues, we offer product replacement as an alternative to refunds:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Same product replacement within 4 hours</li>
                <li>Equivalent product if original item is unavailable</li>
                <li>Free delivery for replacement orders</li>
                <li>Full refund if replacement is not acceptable</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Dispute Resolution</h2>
              <p className="text-neutral-700 mb-6">
                For any disputes regarding refunds or cancellations:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Contact our customer support team first</li>
                <li>Provide all relevant order details and evidence</li>
                <li>We aim to resolve disputes within 24-48 hours</li>
                <li>Escalation to senior management if required</li>
                <li>Final decisions will be communicated in writing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Contact Information</h2>
              <div className="text-neutral-700 mb-6">
                <p className="mb-4">For cancellation and refund requests:</p>
                <p><strong>Customer Support:</strong></p>
                <p>Phone: +91 12345 67890</p>
                <p>WhatsApp: +91 12345 67890</p>
                <p>Email: orders@whiskedstories.com</p>
                <p>Refund Email: refunds@whiskedstories.com</p>
                <p>Support Hours: 9:00 AM - 8:00 PM (Daily)</p>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Policy Updates</h2>
              <p className="text-neutral-700 mb-6">
                We reserve the right to update this refund and cancellation policy. Any changes will be communicated to customers via email or website notification. The updated policy will apply to orders placed after the effective date of changes.
              </p>

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
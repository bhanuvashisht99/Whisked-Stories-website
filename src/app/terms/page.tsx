export default function TermsAndConditions() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">Terms & Conditions</h1>
            <div className="bg-warm-cream p-8 rounded-2xl shadow-lg border border-warm-coffee/20 prose prose-lg max-w-none">

              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>

              <p className="text-neutral-700 mb-6">
                Welcome to Whisked Stories. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and placing orders, you accept these terms and conditions in full.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Definitions</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>"Company"</strong> refers to Whisked Stories</li>
                <li><strong>"Customer"</strong> refers to you, the person placing orders</li>
                <li><strong>"Products"</strong> refers to baked goods and related items sold by us</li>
                <li><strong>"Services"</strong> refers to our baking, delivery, and customer support services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Order Acceptance</h2>
              <p className="text-neutral-700 mb-4">
                All orders are subject to acceptance and availability. We reserve the right to:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Accept or decline any order at our discretion</li>
                <li>Limit order quantities</li>
                <li>Discontinue products without prior notice</li>
                <li>Verify order details and customer information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Pricing and Payment</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>All prices are displayed in Indian Rupees (INR)</li>
                <li>Prices may change without prior notice</li>
                <li>Payment must be made in full before order processing</li>
                <li>We accept payments through Razorpay (UPI, Cards, Net Banking, Wallets)</li>
                <li>Additional delivery charges may apply based on location</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Product Information</h2>
              <p className="text-neutral-700 mb-6">
                We strive to provide accurate product descriptions and images. However, actual products may vary slightly in appearance, taste, or decoration due to the handmade nature of our baked goods. We are not liable for minor variations in color, size, or design.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Allergen Information</h2>
              <p className="text-neutral-700 mb-6">
                Our products may contain common allergens including wheat, eggs, dairy, nuts, and soy. Please inform us of any allergies when placing your order. We cannot guarantee that our products are free from cross-contamination with allergens.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Delivery Terms</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Someone must be available to receive the order at the delivery address</li>
                <li>We are not responsible for orders that cannot be delivered due to incorrect addresses</li>
                <li>Perishable items must be consumed within recommended timeframes</li>
                <li>Delivery areas are limited to our serviceable locations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Cancellation Policy</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Orders can be cancelled up to 4 hours before the scheduled delivery time</li>
                <li>Custom orders may require 24 hours notice for cancellation</li>
                <li>Cancellation requests must be made through phone or email</li>
                <li>Processing fees may apply for last-minute cancellations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Refund Policy</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Refunds are processed for cancelled orders as per our cancellation policy</li>
                <li>Quality issues must be reported within 2 hours of delivery</li>
                <li>Refunds will be processed to the original payment method within 5-7 business days</li>
                <li>Partial consumption of products may affect refund eligibility</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Intellectual Property</h2>
              <p className="text-neutral-700 mb-6">
                All content on this website, including text, graphics, logos, images, and recipes, is the property of Whisked Stories and is protected by intellectual property laws. Unauthorized use is prohibited.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-neutral-700 mb-6">
                Whisked Stories shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the value of the purchased products.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Privacy</h2>
              <p className="text-neutral-700 mb-6">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Governing Law</h2>
              <p className="text-neutral-700 mb-6">
                These terms and conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Mumbai, Maharashtra.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">13. Contact Information</h2>
              <div className="text-neutral-700 mb-6">
                <p><strong>Whisked Stories</strong></p>
                <p>Email: support@whiskedstories.com</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: Mumbai, India</p>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">14. Changes to Terms</h2>
              <p className="text-neutral-700 mb-6">
                We reserve the right to update these terms and conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the revised terms.
              </p>

              <p className="text-sm text-neutral-500 mt-8">
                These terms were last updated on {new Date().toLocaleDateString('en-IN')}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
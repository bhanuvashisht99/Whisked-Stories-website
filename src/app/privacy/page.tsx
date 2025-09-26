export default function PrivacyPolicy() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
            <div className="bg-warm-cream p-8 rounded-2xl shadow-lg border border-warm-coffee/20 prose prose-lg max-w-none">

              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Information We Collect</h2>
              <p className="text-neutral-700 mb-6">
                At Whisked Stories, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Place an order for our baked goods</li>
                <li>Create an account on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Types of Information Collected</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address</li>
                <li><strong>Payment Information:</strong> Payment details processed securely through Razorpay</li>
                <li><strong>Order Information:</strong> Details about products ordered, delivery preferences</li>
                <li><strong>Usage Information:</strong> How you interact with our website and services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-neutral-700 mb-4">We use the information we collect to:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send you order confirmations and delivery updates</li>
                <li>Improve our products and services</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibent text-neutral-900 mb-4">4. Payment Processing</h2>
              <p className="text-neutral-700 mb-6">
                We use Razorpay for payment processing. Your payment information is transmitted directly to Razorpay and is not stored on our servers. Razorpay's privacy policy governs the collection and use of payment information.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Information Sharing</h2>
              <p className="text-neutral-700 mb-4">We may share your information with:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Delivery partners to fulfill your orders</li>
                <li>Payment processors (Razorpay) for transaction processing</li>
                <li>Service providers who assist with our business operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Data Security</h2>
              <p className="text-neutral-700 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Your Rights</h2>
              <p className="text-neutral-700 mb-4">You have the right to:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and personal information</li>
                <li>Opt-out of promotional communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Cookies</h2>
              <p className="text-neutral-700 mb-6">
                We use cookies to enhance your browsing experience, analyze site usage, and assist in marketing efforts. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-neutral-700 mb-6">
                <p><strong>Whisked Stories</strong></p>
                <p>Email: privacy@whiskedstories.com</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: Mumbai, India</p>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Updates</h2>
              <p className="text-neutral-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
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
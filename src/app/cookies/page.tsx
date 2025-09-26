export default function CookiesPolicy() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">Cookies Policy</h1>
            <div className="bg-warm-cream p-8 rounded-2xl shadow-lg border border-warm-coffee/20 prose prose-lg max-w-none">

              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>

              <p className="text-neutral-700 mb-6">
                This Cookies Policy explains what cookies are, how Whisked Stories uses cookies on our website, and your choices regarding cookies. By using our website, you consent to our use of cookies as described in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-neutral-700 mb-6">
                Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how visitors use our website and improve their experience.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.1 Essential Cookies</h3>
              <p className="text-neutral-700 mb-4">These cookies are necessary for the website to function properly:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Session Management:</strong> Keep you logged in during your visit</li>
                <li><strong>Shopping Cart:</strong> Remember items in your cart</li>
                <li><strong>Security:</strong> Protect against fraudulent activity</li>
                <li><strong>Payment Processing:</strong> Enable secure transactions with Razorpay</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.2 Performance Cookies</h3>
              <p className="text-neutral-700 mb-4">These cookies help us analyze website performance:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Analytics:</strong> Count visits and traffic sources</li>
                <li><strong>Site Speed:</strong> Monitor page loading times</li>
                <li><strong>Error Tracking:</strong> Identify and fix technical issues</li>
                <li><strong>Usage Patterns:</strong> Understand how visitors navigate our site</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.3 Functionality Cookies</h3>
              <p className="text-neutral-700 mb-4">These cookies enhance your browsing experience:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Preferences:</strong> Remember your settings and preferences</li>
                <li><strong>Language:</strong> Store your preferred language</li>
                <li><strong>Location:</strong> Remember your delivery area</li>
                <li><strong>Theme:</strong> Save your display preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.4 Marketing Cookies</h3>
              <p className="text-neutral-700 mb-4">These cookies help us deliver relevant content:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Personalization:</strong> Show relevant product recommendations</li>
                <li><strong>Email Marketing:</strong> Track email campaign effectiveness</li>
                <li><strong>Social Media:</strong> Enable sharing on social platforms</li>
                <li><strong>Advertising:</strong> Measure ad campaign performance</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Third-Party Cookies</h2>
              <p className="text-neutral-700 mb-6">
                We may use third-party services that set their own cookies on our website:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Razorpay:</strong> Payment processing and security</li>
                <li><strong>Google Analytics:</strong> Website usage analytics</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and login features</li>
                <li><strong>Customer Support:</strong> Chat and help desk services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Cookie Duration</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.1 Session Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These are temporary cookies that expire when you close your browser. They are used for:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Shopping cart management</li>
                <li>Login session maintenance</li>
                <li>Form data during checkout</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.2 Persistent Cookies</h3>
              <p className="text-neutral-700 mb-4">
                These cookies remain on your device for a set period or until you delete them:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Preferences:</strong> 1 year</li>
                <li><strong>Analytics:</strong> 2 years</li>
                <li><strong>Marketing:</strong> 90 days</li>
                <li><strong>Security:</strong> 1 month</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Managing Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">5.1 Browser Settings</h3>
              <p className="text-neutral-700 mb-4">You can control cookies through your browser settings:</p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Chrome:</strong> Settings {`>`} Privacy & Security {`>`} Cookies</li>
                <li><strong>Firefox:</strong> Settings {`>`} Privacy & Security {`>`} Cookies</li>
                <li><strong>Safari:</strong> Preferences {`>`} Privacy {`>`} Cookies</li>
                <li><strong>Edge:</strong> Settings {`>`} Privacy {`>`} Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">5.2 Cookie Banner</h3>
              <p className="text-neutral-700 mb-6">
                When you first visit our website, you'll see a cookie banner allowing you to:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about each cookie type</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-neutral-700 mb-6">
                Disabling certain cookies may affect your website experience:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>Essential Cookies:</strong> Website may not function properly</li>
                <li><strong>Performance Cookies:</strong> Cannot improve website performance</li>
                <li><strong>Functionality Cookies:</strong> Loss of personalized features</li>
                <li><strong>Marketing Cookies:</strong> Less relevant content and offers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Data Security</h2>
              <p className="text-neutral-700 mb-6">
                We implement appropriate security measures to protect cookie data:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Secure transmission using HTTPS</li>
                <li>Encryption of sensitive cookie data</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to cookie data</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Children's Privacy</h2>
              <p className="text-neutral-700 mb-6">
                Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children through cookies. If we become aware of such collection, we will delete the information immediately.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Updates to This Policy</h2>
              <p className="text-neutral-700 mb-6">
                We may update this Cookies Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
              </p>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li>Posting the updated policy on our website</li>
                <li>Updating the effective date</li>
                <li>Sending email notifications for major changes</li>
                <li>Displaying a website notification</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Contact Us</h2>
              <div className="text-neutral-700 mb-6">
                <p className="mb-4">If you have questions about our Cookies Policy:</p>
                <p><strong>Whisked Stories</strong></p>
                <p>Email: privacy@whiskedstories.com</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: Mumbai, India</p>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Useful Links</h2>
              <ul className="text-neutral-700 mb-6 list-disc pl-6">
                <li><strong>AllAboutCookies.org:</strong> Independent information about cookies</li>
                <li><strong>Your Online Choices:</strong> Opt out of targeted advertising</li>
                <li><strong>Network Advertising Initiative:</strong> Control advertising cookies</li>
                <li><strong>Digital Advertising Alliance:</strong> Consumer choice tools</li>
              </ul>

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
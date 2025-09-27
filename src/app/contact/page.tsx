import { ContactForm } from '@/components/contact-form'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Sweet
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're dreaming of a custom cake, planning a special event, or just want to say hello,
            we're here to listen and help bring your sweet vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-lg text-gray-600">
              Prefer to connect differently? Here are all the ways you can get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <a
              href="tel:+911234567890"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">+91 12345 67890</p>
              <p className="text-xs text-gray-500">Mon-Sat, 9 AM - 8 PM</p>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@whiskedstories.com"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-2">hello@whiskedstories.com</p>
              <p className="text-xs text-gray-500">Response within 24 hours</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/whiskedstories"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm mb-2">@whiskedstories</p>
              <p className="text-xs text-gray-500">Daily updates & DMs</p>
            </a>

            {/* Visit */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit</h3>
              <p className="text-gray-600 text-sm mb-2">Delhi, India</p>
              <p className="text-xs text-gray-500">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions before you reach out.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How far in advance should I place my order?",
                answer: "For custom cakes, we recommend placing orders at least 1 week in advance. For special events or complex designs, 2-3 weeks notice helps us ensure perfection. Same-day orders may be available for our signature items - just call to check!"
              },
              {
                question: "Do you deliver? What's your delivery area?",
                answer: "Yes! We deliver across Delhi and NCR. Delivery is free for orders above ₹2000. For smaller orders, a nominal delivery fee applies. We also offer contactless pickup from our kitchen location."
              },
              {
                question: "Can you accommodate dietary restrictions?",
                answer: "Absolutely! We can create eggless, sugar-free, and gluten-free versions of most of our cakes. Please mention your requirements when ordering so we can suggest the best options for you."
              },
              {
                question: "What's your cancellation policy?",
                answer: "Orders can be cancelled up to 48 hours before the delivery date for a full refund. For cancellations within 48 hours, we offer a 50% refund or full credit for future orders."
              },
              {
                question: "Do you offer cake decorating classes?",
                answer: "We host intimate baking gatherings where we share techniques and stories. These aren't formal classes but fun, learning experiences. Follow us on Instagram for announcements!"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have a different question?</p>
            <a
              href="#contact-form"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              Ask us anything →
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="hero" />
        </div>
      </section>
    </main>
  )
}
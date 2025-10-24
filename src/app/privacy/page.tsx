import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Noble Black Car Service',
  description: 'Privacy policy for Noble Black Car Service. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: October 21, 2025</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-bold text-black">Information We Collect</h2>
          <p>We collect information you provide when <Link href="/quote" className="text-blue-600 hover:underline">booking services</Link> including name, email, phone number, pickup/drop-off locations, and payment information.</p>

          <h2 className="text-2xl font-bold text-black">How We Use Your Information</h2>
          <p>Your information is used to provide <Link href="/services" className="text-blue-600 hover:underline">transportation services</Link>, process payments, send booking confirmations, and communicate about your reservations.</p>

          <h2 className="text-2xl font-bold text-black">Information Sharing</h2>
          <p>We do not sell your personal information. We share information only with service providers necessary to complete your booking (payment processors, dispatch systems).</p>

          <h2 className="text-2xl font-bold text-black">Data Security</h2>
          <p>We use industry-standard security measures to protect your personal information. Payment information is processed through secure, PCI-compliant systems.</p>

          <h2 className="text-2xl font-bold text-black">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. Contact us at info@nobleblackcarservice.com for any privacy-related requests.</p>

          <h2 className="text-2xl font-bold text-black">Contact</h2>
          <p>For privacy questions, email info@nobleblackcarservice.com or call (404) 513-8803. You can also visit our <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.</p>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Homepage</h3>
              <p className="text-gray-600 text-sm">Return to our homepage</p>
            </Link>
            <Link href="/services/airport-transfer" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">Learn about our airport services</p>
            </Link>
            <Link href="/fleet" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Our Fleet</h3>
              <p className="text-gray-600 text-sm">View our vehicle options</p>
            </Link>
            <Link href="/corporate" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Corporate Services</h3>
              <p className="text-gray-600 text-sm">Business travel solutions</p>
            </Link>
            <Link href="/about" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">About Us</h3>
              <p className="text-gray-600 text-sm">Learn more about Noble</p>
            </Link>
            <Link href="/terms" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Terms of Service</h3>
              <p className="text-gray-600 text-sm">View our service terms</p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
            <p className="mt-4 text-gray-600">
              Or <Link href="/quote" className="text-blue-600 hover:underline">get an instant quote</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

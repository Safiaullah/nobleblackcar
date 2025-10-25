import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Noble Black Car Service',
  description: 'Terms and conditions for Noble Black Car Service. Booking policies, cancellations, and service agreements.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last Updated: October 21, 2025</p>

        <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
          <h2 className="text-2xl font-bold text-white">Booking and Reservations</h2>
          <p>Reservations are confirmed upon receipt of booking confirmation. We recommend <Link href="/quote" className="text-blue-600 hover:underline">booking</Link> 24-48 hours in advance for guaranteed availability.</p>

          <h2 className="text-2xl font-bold text-white">Cancellation Policy</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>24+ hours notice: Full refund</li>
            <li>12-24 hours notice: 50% charge</li>
            <li>Less than 12 hours: Full charge</li>
            <li>No-shows: Full charge</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
          <p>Payment is due at the end of service unless you have a <Link href="/corporate" className="text-blue-600 hover:underline">corporate account</Link> with NET 30 terms. We accept all major credit cards and cash.</p>

          <h2 className="text-2xl font-bold text-white">Pricing</h2>
          <p>Quoted rates are flat-rate prices. Additional charges may include tolls (at cost), parking fees if required, and wait time beyond the complimentary period. Gratuity is not included and is typically 15-20%. View our <Link href="/services" className="text-blue-600 hover:underline">services</Link> for more information.</p>

          <h2 className="text-2xl font-bold text-white">Service Standards</h2>
          <p>We strive for on-time service. However, unforeseen circumstances (traffic, weather) may cause delays. We are not liable for missed flights, meetings, or events due to circumstances beyond our control. Learn more about our <Link href="/fleet" className="text-blue-600 hover:underline">fleet</Link> and service standards.</p>

          <h2 className="text-2xl font-bold text-white">Liability</h2>
          <p>Noble Black Car Service is fully licensed and insured. Our liability is limited to the amount paid for the specific service.</p>

          <h2 className="text-2xl font-bold text-white">Contact</h2>
          <p>For questions about these terms, <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> at info@nobleblackcarservice.com or (404) 513-8803.</p>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Homepage</h3>
              <p className="text-gray-400 text-sm">Return to our homepage</p>
            </Link>
            <Link href="/services/airport-transfer" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Airport Transfers</h3>
              <p className="text-gray-400 text-sm">Reliable airport transportation</p>
            </Link>
            <Link href="/services/executive-car-service" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Executive Car Service</h3>
              <p className="text-gray-400 text-sm">Premium executive transportation</p>
            </Link>
            <Link href="/airports/jfk" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">JFK Airport Service</h3>
              <p className="text-gray-400 text-sm">Service to JFK Airport</p>
            </Link>
            <Link href="/fleet" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Our Fleet</h3>
              <p className="text-gray-400 text-sm">View our vehicle options</p>
            </Link>
            <Link href="/privacy" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Privacy Policy</h3>
              <p className="text-gray-400 text-sm">View our privacy policy</p>
            </Link>
            <Link href="/about" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">About Us</h3>
              <p className="text-gray-400 text-sm">Learn more about Noble</p>
            </Link>
            <Link href="/faq" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">FAQ</h3>
              <p className="text-gray-400 text-sm">Frequently asked questions</p>
            </Link>
            <Link href="/testimonials" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Testimonials</h3>
              <p className="text-gray-400 text-sm">Read customer reviews</p>
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
            <p className="mt-4 text-gray-400">
              Or <Link href="/quote" className="text-blue-600 hover:underline">get an instant quote</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

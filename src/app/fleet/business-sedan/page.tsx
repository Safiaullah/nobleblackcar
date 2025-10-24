import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Sedan - Lincoln MKZ Black Car Service NYC | Noble',
  description: 'Professional business sedan service in NYC. Lincoln MKZ luxury sedans. Perfect for executives, airport transfers, corporate travel.',
  keywords: 'business sedan NYC, Lincoln MKZ car service, executive sedan New York, corporate car service',
}

export default function BusinessSedanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Business Sedan</h1>
          <p className="text-xl">Professional transportation for up to 3 passengers</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Vehicle Details</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Primary Vehicle:</strong> Lincoln MKZ</li>
              <li><strong>Capacity:</strong> 3 passengers</li>
              <li><strong>Luggage:</strong> 2-3 large bags</li>
              <li><strong>Features:</strong> Leather seats, climate control, WiFi</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Best For</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Executive business travel</li>
              <li>✓ Airport transfers (1-2 people)</li>
              <li>✓ Corporate meetings</li>
              <li>✓ Professional appearance</li>
              <li>✓ Cost-effective luxury</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Business Sedan Service</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

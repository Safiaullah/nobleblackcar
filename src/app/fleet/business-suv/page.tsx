import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business SUV - Suburban, Navigator NYC Black Car | Noble',
  description: 'Business SUV service NYC. Chevrolet Suburban, Lincoln Navigator, GMC Yukon. Spacious luxury SUVs for groups, families, airport transfers. Seats 6 passengers.',
  keywords: 'Suburban car service NYC, Navigator limo New York, business SUV rental, 6 passenger black car',
}

export default function BusinessSUVPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Business SUV</h1>
          <p className="text-xl">Spacious luxury for up to 6 passengers</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Vehicle Options</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Chevrolet Suburban</strong> - Full-size SUV</li>
              <li><strong>Lincoln Navigator</strong> - Luxury full-size SUV</li>
              <li><strong>GMC Yukon XL</strong> - Premium SUV</li>
              <li><strong>Capacity:</strong> 6 passengers</li>
              <li><strong>Luggage:</strong> 5-6 large bags</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Best For</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Group airport transfers</li>
              <li>✓ Family travel with luggage</li>
              <li>✓ Corporate team transport</li>
              <li>✓ Event transportation</li>
              <li>✓ Extra cargo space needs</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Business SUV Service</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

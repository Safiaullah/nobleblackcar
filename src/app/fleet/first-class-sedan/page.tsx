import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'First Class Sedan - Mercedes S-Class, BMW 7 Series NYC | Noble',
  description: 'Luxury first-class sedan service NYC. Mercedes S-Class, BMW 7 Series. Premium executive transportation for VIPs, executives, special occasions. Seats 3.',
  keywords: 'Mercedes S-Class car service NYC, BMW 7 Series limo, first class sedan New York, luxury executive car',
}

export default function FirstClassSedanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">First Class Sedan</h1>
          <p className="text-xl">Ultimate luxury for discerning travelers</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Vehicle Options</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Mercedes-Benz S-Class</strong> - Flagship luxury sedan</li>
              <li><strong>BMW 7 Series</strong> - Executive performance sedan</li>
              <li><strong>Capacity:</strong> 3 passengers in supreme comfort</li>
              <li><strong>Luggage:</strong> 2-3 large bags</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Premium Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Premium leather interior</li>
              <li>✓ Advanced climate control</li>
              <li>✓ High-speed WiFi</li>
              <li>✓ Premium sound system</li>
              <li>✓ Complimentary refreshments</li>
              <li>✓ Privacy partition available</li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Perfect For VIP Service</h3>
          <p className="text-gray-300 mb-4">First-class sedans deliver the ultimate executive experience. Ideal for C-suite executives, VIP clients, special occasions, and anyone who demands the finest in ground transportation.</p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book First Class Sedan</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

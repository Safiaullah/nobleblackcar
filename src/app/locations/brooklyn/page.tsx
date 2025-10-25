import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brooklyn Black Car Service - All Neighborhoods | Noble',
  description: 'Black car service throughout Brooklyn NYC. Williamsburg, Park Slope, DUMBO, Brooklyn Heights. Airport transfers, corporate travel.',
  keywords: 'Brooklyn car service, Williamsburg black car, Park Slope limo, Brooklyn transportation',
}

export default function BrooklynPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Brooklyn Car Service</h1>
          <p className="text-xl md:text-2xl">Premium transportation across all Brooklyn neighborhoods</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Brooklyn Neighborhoods</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">North Brooklyn</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Williamsburg</li>
              <li>• Greenpoint</li>
              <li>• DUMBO</li>
              <li>• Brooklyn Heights</li>
              <li>• Downtown Brooklyn</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Central Brooklyn</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Park Slope</li>
              <li>• Prospect Heights</li>
              <li>• Fort Greene</li>
              <li>• Clinton Hill</li>
              <li>• Bed-Stuy</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">South Brooklyn</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Bay Ridge</li>
              <li>• Sunset Park</li>
              <li>• Borough Park</li>
              <li>• Bensonhurst</li>
              <li>• Coney Island</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Airport Service from Brooklyn</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <Link href="/airports/jfk" className="text-blue-600 hover:underline">JFK Airport</Link></li>
              <li>• <Link href="/airports/laguardia" className="text-blue-600 hover:underline">LaGuardia Airport</Link></li>
              <li>• <Link href="/airports/newark" className="text-blue-600 hover:underline">Newark Airport</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">To Manhattan</h3>
            <p className="text-gray-300">Service available from all Brooklyn neighborhoods</p>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-8">
          <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for flat-rate pricing from your Brooklyn location
        </p>

        {/* Related Pages Section */}
        <section className="mt-16 border-t border-gray-700 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/services/airport-transfer" className="bg-gray-900 p-6 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">Reliable transportation to all NYC airports</p>
            </Link>
            <Link href="/services/corporate-shuttle" className="bg-gray-900 p-6 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Corporate Shuttle</h3>
              <p className="text-gray-600 text-sm">Professional shuttle services for your business</p>
            </Link>
            <Link href="/services/point-to-point" className="bg-gray-900 p-6 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Point to Point</h3>
              <p className="text-gray-600 text-sm">Direct service anywhere in NYC</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-white">Our Fleet</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/fleet/business-sedan" className="bg-gray-900 p-6 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Business Sedan</h3>
              <p className="text-gray-600 text-sm">Comfortable executive sedans</p>
            </Link>
            <Link href="/fleet/business-suv" className="bg-gray-900 p-6 border border-gray-700 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-white">Business SUV</h3>
              <p className="text-gray-600 text-sm">Spacious luxury SUVs</p>
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
              Or <Link href="/quote" className="text-blue-600 hover:underline">get a quote</Link> for your Brooklyn pickup
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}

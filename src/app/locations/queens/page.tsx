import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Queens Black Car Service - All Neighborhoods | Noble',
  description: 'Black car service throughout Queens NYC. Astoria, Long Island City, Flushing, Forest Hills. Airport proximity, corporate travel.',
  keywords: 'Queens car service, Astoria black car, Long Island City limo, Queens transportation',
}

export default function QueensPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Queens Car Service</h1>
          <p className="text-xl md:text-2xl">Professional transportation throughout Queens</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Queens Neighborhoods</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Western Queens</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Long Island City</li>
              <li>• Astoria</li>
              <li>• Sunnyside</li>
              <li>• Woodside</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Central Queens</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Forest Hills</li>
              <li>• Rego Park</li>
              <li>• Kew Gardens</li>
              <li>• Elmhurst</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Eastern Queens</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Flushing</li>
              <li>• Bayside</li>
              <li>• Jamaica</li>
              <li>• Hollis</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border border-gray-200 mb-8">
          <h3 className="font-bold text-xl mb-4 text-black">Airport Service from Queens</h3>
          <p className="text-gray-700 mb-4">Queens has excellent airport proximity to both JFK and LaGuardia:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <Link href="/airports/jfk" className="text-blue-600 hover:underline">JFK Airport</Link> (closest borough)</li>
            <li>• <Link href="/airports/laguardia" className="text-blue-600 hover:underline">LaGuardia Airport</Link></li>
            <li>• Service to Manhattan</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for competitive flat-rate pricing from your Queens location
          </p>
        </div>

        {/* Related Pages Section */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/services/airport-transfer" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">Perfect for Queens airport proximity</p>
            </Link>
            <Link href="/services/point-to-point" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Point to Point</h3>
              <p className="text-gray-600 text-sm">Direct service throughout NYC</p>
            </Link>
            <Link href="/services/hourly" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Hourly Service</h3>
              <p className="text-gray-600 text-sm">Flexible hourly rentals</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-black">Other Airports</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/airports/newark" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Newark Airport</h3>
              <p className="text-gray-600 text-sm">Service to Newark Liberty International</p>
            </Link>
            <Link href="/airports/westchester" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Westchester Airport</h3>
              <p className="text-gray-600 text-sm">Service to Westchester County Airport</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-black">Explore Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/fleet/business-sedan" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Business Sedan</h3>
              <p className="text-gray-600 text-sm">Executive sedans for 1-3 passengers</p>
            </Link>
            <Link href="/fleet/business-suv" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Business SUV</h3>
              <p className="text-gray-600 text-sm">Luxury SUVs for 1-5 passengers</p>
            </Link>
            <Link href="/fleet" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">View All Vehicles</h3>
              <p className="text-gray-600 text-sm">See our complete fleet</p>
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
              Or <Link href="/quote" className="text-blue-600 hover:underline">get a quote</Link> for your Queens pickup | <Link href="/" className="text-blue-600 hover:underline">Return to homepage</Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}

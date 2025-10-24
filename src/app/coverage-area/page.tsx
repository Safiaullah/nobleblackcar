import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Coverage Area - NYC Black Car Service | Noble',
  description: 'Noble Black Car Service coverage area. NYC five boroughs, Long Island, Westchester, New Jersey, Connecticut. Airport service, corporate travel.',
  keywords: 'NYC car service coverage, black car service area, tri-state car service, NYC metro area transportation',
}

export default function CoverageAreaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Service Coverage Area</h1>
          <p className="text-xl md:text-2xl">NYC Metro Area & Tri-State Region</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">Noble provides luxury black car service throughout the New York City metropolitan area and tri-state region, covering NYC's five boroughs and surrounding areas.</p>

        <h2 className="text-3xl font-bold mb-8 text-black">Primary Service Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">New York City</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Manhattan (all neighborhoods)</li>
              <li>✓ Brooklyn</li>
              <li>✓ Queens</li>
              <li>✓ Bronx</li>
              <li>✓ Staten Island</li>
            </ul>
            <Link href="/locations/manhattan" className="text-black underline text-sm mt-3 inline-block">Manhattan details →</Link>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Long Island</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Nassau County</li>
              <li>✓ Suffolk County</li>
              <li>✓ The Hamptons</li>
              <li>✓ North Fork</li>
              <li>✓ All towns and villages</li>
            </ul>
            <Link href="/routes/long-island" className="text-black underline text-sm mt-3 inline-block">Long Island service →</Link>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Westchester County</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ White Plains</li>
              <li>✓ Yonkers</li>
              <li>✓ New Rochelle</li>
              <li>✓ Scarsdale</li>
              <li>✓ All Westchester towns</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">New Jersey</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Jersey City</li>
              <li>✓ Hoboken</li>
              <li>✓ Newark</li>
              <li>✓ Princeton</li>
              <li>✓ Bergen County</li>
            </ul>
            <Link href="/routes/new-jersey" className="text-black underline text-sm mt-3 inline-block">New Jersey routes →</Link>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Connecticut</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Greenwich</li>
              <li>✓ Stamford</li>
              <li>✓ Norwalk</li>
              <li>✓ New Haven</li>
              <li>✓ Hartford</li>
            </ul>
            <Link href="/routes/connecticut" className="text-black underline text-sm mt-3 inline-block">Connecticut routes →</Link>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Major Airports</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ JFK Airport</li>
              <li>✓ LaGuardia Airport</li>
              <li>✓ Newark Airport</li>
              <li>✓ Teterboro Airport</li>
              <li>✓ Westchester Airport</li>
            </ul>
            <Link href="/services/airport-transfer" className="text-black underline text-sm mt-3 inline-block">Airport service →</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Extended Service Areas</h2>
        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <p className="text-gray-700 mb-4">We also serve destinations beyond our primary coverage area for long-distance travel:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-black">Northeast Cities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Boston, MA (4 hours)</li>
                <li>• Philadelphia, PA (2 hours)</li>
                <li>• Washington DC (4-5 hours)</li>
                <li>• Atlantic City, NJ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-black">Upstate NY</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hudson Valley</li>
                <li>• Finger Lakes region</li>
                <li>• Catskills</li>
                <li>• Albany</li>
              </ul>
            </div>
          </div>
          <Link href="/services/long-distance" className="text-black underline mt-4 inline-block">Long-distance service →</Link>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Outside Our Coverage Area?</h2>
        <div className="bg-white p-6 border border-gray-200 mb-12">
          <p className="text-gray-700 mb-4">If your destination isn&apos;t listed, contact us! We can arrange custom transportation to most Northeast destinations. For destinations outside the tri-state area, we may be able to coordinate service with our partner network.</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-black text-white px-6 py-3 font-semibold">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black px-6 py-3 font-semibold">Request Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

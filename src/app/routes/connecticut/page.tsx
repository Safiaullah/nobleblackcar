import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC to Connecticut Car Service | Noble',
  description: 'Black car service from NYC to Connecticut. Greenwich, Stamford, Norwalk, New Haven, Hartford. Corporate travel, airport connections, flat-rate pricing.',
  keywords: 'NYC to Connecticut car service, Greenwich limo, Stamford black car, Connecticut transportation',
}

export default function ConnecticutPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">NYC to Connecticut</h1>
          <p className="text-xl md:text-2xl">Executive transportation to CT destinations</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto bg-black">
        <p className="text-gray-300 text-lg mb-12">Noble provides luxury black car service from NYC to Connecticut including Greenwich, Stamford, New Haven, Hartford, and throughout the state.</p>

        <h2 className="text-3xl font-bold mb-6 text-white">Popular Destinations</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Fairfield County</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Greenwich</li>
              <li>• Stamford</li>
              <li>• Norwalk</li>
              <li>• Westport</li>
            </ul>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Other CT Cities</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• New Haven</li>
              <li>• Hartford</li>
              <li>• Bridgeport</li>
              <li>• Danbury</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-300 mb-12">Contact us for flat-rate pricing to your Connecticut destination</p>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

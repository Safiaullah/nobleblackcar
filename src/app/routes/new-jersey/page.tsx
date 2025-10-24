import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC to New Jersey Car Service | Noble',
  description: 'Black car service from NYC to New Jersey. Jersey City, Hoboken, Newark, Princeton. Corporate travel, airport connections, flat-rate pricing.',
  keywords: 'NYC to New Jersey car service, Jersey City limo, Hoboken black car, Princeton transportation',
}

export default function NewJerseyPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">NYC to New Jersey</h1>
          <p className="text-xl md:text-2xl">Professional transportation across the Hudson</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto bg-black">
        <p className="text-gray-300 text-lg mb-12">Noble provides reliable black car service from NYC to New Jersey destinations including Jersey City, Hoboken, Newark, Princeton, and throughout the Garden State.</p>

        <h2 className="text-3xl font-bold mb-6 text-white">Popular Destinations</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Northern NJ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Jersey City</li>
              <li>• Hoboken</li>
              <li>• Newark</li>
              <li>• Fort Lee</li>
            </ul>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Central/South NJ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Princeton</li>
              <li>• New Brunswick</li>
              <li>• Atlantic City</li>
              <li>• Trenton</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-300 mb-12">Contact us for flat-rate pricing to your New Jersey destination</p>

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

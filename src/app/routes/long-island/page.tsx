import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC to Long Island Car Service - Hamptons, North Fork | Noble',
  description: 'Black car service from NYC to Long Island. Hamptons, North Fork, Nassau, Suffolk County. Flat-rate pricing, luxury vehicles, professional drivers.',
  keywords: 'NYC to Long Island car service, Hamptons transportation, North Fork limo, Long Island black car',
}

export default function LongIslandPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">NYC to Long Island</h1>
          <p className="text-xl md:text-2xl">Premium transportation to Hamptons, North Fork & Nassau/Suffolk</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto bg-black">
        <p className="text-gray-300 text-lg mb-12">Noble provides luxury black car service from NYC to all Long Island destinations including the Hamptons, North Fork wine country, and Nassau/Suffolk counties.</p>

        <h2 className="text-3xl font-bold mb-6 text-white">Popular Destinations</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">The Hamptons</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Southampton</li>
              <li>• East Hampton</li>
              <li>• Montauk</li>
              <li>• Bridgehampton</li>
            </ul>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">North Fork & Other</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Greenport</li>
              <li>• Nassau County</li>
              <li>• Suffolk County</li>
              <li>• Long Island City</li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Weekend Getaway Service</h3>
          <p className="text-gray-300 mb-4">Book round-trip service for your weekend escape. We'll drop you off and pick you up when you're ready to return. Perfect for Hamptons summer weekends or North Fork wine tours. Contact us for special round-trip pricing.</p>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC Concert Transportation | MSG Car Service | Noble',
  description: 'Concert transportation in NYC. Black car service to Madison Square Garden, Barclays Center, Radio City. No parking hassles, round-trip packages.',
  keywords: 'concert transportation NYC, Madison Square Garden car service, Barclays Center black car, concert limo NYC',
}

export default function ConcertsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">NYC Concert Transportation</h1>

        <h2 className="text-2xl font-bold text-black mb-4">Major NYC Concert Venues</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black">Madison Square Garden</h3>
            <p className="text-gray-700">Midtown Manhattan</p>
            <p className="text-sm text-gray-600">Round-trip service available</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black">Barclays Center</h3>
            <p className="text-gray-700">Brooklyn</p>
            <p className="text-sm text-gray-600">Round-trip service available</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black">Radio City Music Hall</h3>
            <p className="text-gray-700">Midtown Manhattan</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black">Forest Hills Stadium</h3>
            <p className="text-gray-700">Queens</p>
          </div>
        </div>
        <p className="text-center text-gray-700 mb-12">Contact us for concert transportation pricing</p>

        <h2 className="text-2xl font-bold text-black mb-4">Why Black Car for Concerts</h2>
        <ul className="space-y-2 text-gray-700 mb-12">
          <li>✓ No parking hassle - avoid venue parking fees</li>
          <li>✓ Avoid post-concert traffic and surge pricing</li>
          <li>✓ Enjoy drinks without worrying about driving</li>
          <li>✓ Professional pickup after show ends</li>
        </ul>

        <div className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Book Concert Transportation</h2>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

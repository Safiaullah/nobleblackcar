import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sporting Event Transportation NYC | Noble',
  description: 'NYC sporting event transportation. Black car service to Yankee Stadium, Citi Field, MSG, MetLife. No parking hassles, tailgating packages.',
}

export default function SportingEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">Sporting Event Transportation</h1>

        <p className="text-lg text-gray-700 mb-12">Professional black car service to all major NYC sports venues</p>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Major Sporting Venues</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span><strong className="text-black">Yankee Stadium</strong> (Yankees)</span>
              <span>Bronx</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span><strong className="text-black">Citi Field</strong> (Mets)</span>
              <span>Queens</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span><strong className="text-black">Madison Square Garden</strong> (Knicks, Rangers)</span>
              <span>Manhattan</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span><strong className="text-black">Barclays Center</strong> (Nets, Islanders)</span>
              <span>Brooklyn</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span><strong className="text-black">MetLife Stadium</strong> (Giants, Jets)</span>
              <span>New Jersey</span>
            </div>
          </div>
          <p className="text-gray-700 mt-6">Contact us for round-trip pricing to your sporting event</p>
        </div>

        <p className="text-lg text-gray-700 mb-6">For complete details on sporting event transportation including tailgating packages:</p>
        <Link href="/services/sporting-events" className="text-black underline text-lg mb-12 inline-block">View Full Sporting Events Service →</Link>

        <div className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Book Game Day Transportation</h2>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

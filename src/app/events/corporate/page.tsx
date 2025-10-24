import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Event Transportation NYC | Noble',
  description: 'Corporate event transportation for conferences, galas, team building in NYC. Multi-vehicle coordination, group packages, volume discounts.',
}

export default function CorporateEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">Corporate Event Transportation</h1>
        <p className="text-xl text-gray-700 mb-12">Professional group transportation for business events, conferences, and corporate gatherings</p>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Services</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Conference shuttle service (hotels to Javits Center, convention centers)</li>
            <li>✓ Corporate gala transportation (Cipriani, Plaza Hotel, museum venues)</li>
            <li>✓ Team building event coordination (Hamptons, Hudson Valley retreats)</li>
            <li>✓ Board meeting executive transport</li>
            <li>✓ Multi-vehicle logistics for 50-500+ attendees</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mb-6">For detailed information about corporate event transportation, visit our comprehensive guide:</p>
        <Link href="/blog/corporate-event-transportation" className="text-black underline text-lg mb-12 inline-block">Read Corporate Event Transportation Guide →</Link>

        <div className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Plan Your Corporate Event Transport</h2>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Request Group Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

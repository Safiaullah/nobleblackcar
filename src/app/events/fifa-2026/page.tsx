import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Transportation NYC | Noble',
  description: 'FIFA World Cup 2026 transportation for matches at MetLife Stadium NJ. Book now for guaranteed service and locked-in rates.',
}

export default function FIFA2026EventPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">FIFA World Cup 2026 Event Transportation</h1>

        <div className="bg-black text-white p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">MetLife Stadium Hosting 8 Matches Including THE FINAL</h2>
          <p className="text-lg mb-4">July 19, 2026 - The Final at MetLife Stadium (82,500 capacity)</p>
          <p>Book NOW to lock in today's rates and guarantee availability</p>
        </div>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Transportation Packages</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong className="text-black">Manhattan to MetLife</strong> - Round-trip service</li>
            <li>• <strong className="text-black">JFK to MetLife</strong> - Airport to stadium service</li>
            <li>• <strong className="text-black">Group Sprinter</strong> - Up to 14 passengers</li>
            <li>• <strong className="text-black">Multi-day packages</strong> - Airport + hotel + match + return</li>
          </ul>
          <p className="text-gray-700 mt-6">Contact us now to lock in pricing for FIFA 2026 matches. Early booking recommended as availability is limited.</p>
        </div>

        <h2 className="text-2xl font-bold text-black mb-4">Why Book Now</h2>
        <ul className="space-y-2 text-gray-700 mb-12">
          <li>⚠️ Significant price increases expected as June 2026 approaches</li>
          <li>⚠️ Limited availability for The Final (July 19)</li>
          <li>⚠️ Rideshare surge pricing will be extremely high</li>
          <li>⚠️ Book early to guarantee service and lock in current rates</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">For complete FIFA 2026 transportation guide:</p>
        <Link href="/blog/fifa-2026-nyc-transportation" className="text-black underline text-lg mb-12 inline-block">Read Full FIFA 2026 Transportation Guide →</Link>

        <div className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Reserve FIFA 2026 Transportation NOW</h2>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Book FIFA Package</Link>
          </div>
          <p className="text-sm mt-4">Mention "FIFA 2026" when calling</p>
        </div>
      </section>
    </main>
  )
}

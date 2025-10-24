import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 NYC Transportation | MetLife Stadium Car Service',
  description: 'FIFA World Cup 2026 transportation in NYC and MetLife Stadium. Black car service for matches, hotels, airports. Book early for guaranteed service.',
  keywords: 'FIFA 2026 NYC transportation, World Cup car service, MetLife Stadium black car, FIFA 2026 matches NYC',
}

export default function FIFA2026TransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">FIFA World Cup 2026: NYC Transportation Guide</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">NYC/NJ Hosting World Cup Matches</h2>
          <p className="text-gray-700 mb-4">MetLife Stadium in East Rutherford, NJ will host 8 FIFA World Cup 2026 matches including the Final on July 19, 2026.</p>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-lg text-black mb-3">Key Dates</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong className="text-black">June 12-15, 2026:</strong> Group stage matches</li>
              <li>• <strong className="text-black">July 3-7, 2026:</strong> Round of 16 / Quarterfinals</li>
              <li>• <strong className="text-black">July 19, 2026:</strong> THE FINAL (82,500 capacity)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Transportation Challenges</h2>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li>⚠️ <strong className="text-black">300,000+ visitors</strong> expected in NYC/NJ during tournament</li>
            <li>⚠️ <strong className="text-black">82,500 fans</strong> at each match = massive traffic</li>
            <li>⚠️ <strong className="text-black">Public transit overwhelmed</strong> - trains packed 3+ hours before kickoff</li>
            <li>⚠️ <strong className="text-black">Parking nightmare</strong> - MetLife lots $100+, sell out weeks early</li>
            <li>⚠️ <strong className="text-black">Rideshare surge pricing</strong> - expect 3-5x normal rates</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Black Car Service: The Smart Choice</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white p-6">
              <h3 className="font-bold text-xl mb-4">Why Book with Noble</h3>
              <ul className="space-y-2">
                <li>✓ Flat-rate pricing locked in NOW (no surge)</li>
                <li>✓ Guaranteed vehicle and driver reserved</li>
                <li>✓ Direct MetLife drop-off/pickup</li>
                <li>✓ Avoid parking and public transit chaos</li>
                <li>✓ Professional chauffeur handles traffic</li>
                <li>✓ Group packages (Sprinter 14 passengers)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-4">Pricing (2026 Rates)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Manhattan to MetLife: <strong>$140-180</strong></li>
                <li>JFK to MetLife: <strong>$160-200</strong></li>
                <li>Newark to MetLife: <strong>$95-120</strong></li>
                <li>Sprinter (14 pass.): <strong>$250-300</strong></li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Round-trip bookings save 5%</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Sample Packages</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-2">International Fan Package</h3>
              <p className="text-gray-700 mb-3">Airport → Hotel → MetLife → Hotel → Airport</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• JFK arrival pickup + luggage assistance</li>
                <li>• Hotel check-in (Manhattan/Jersey City)</li>
                <li>• Match day: Hotel → MetLife → Hotel</li>
                <li>• Departure day: Hotel → Airport</li>
              </ul>
              <p className="font-semibold text-black">Package Price: $650-850 (Business Sedan)</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-2">Group Match Day Package</h3>
              <p className="text-gray-700 mb-3">Sprinter van for 10-14 fans</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• Manhattan hotel pickups (multiple stops)</li>
                <li>• Direct to MetLife Stadium</li>
                <li>• Return after match (driver waits)</li>
              </ul>
              <p className="font-semibold text-black">Package Price: $550-650 (split among group = $40-65/person)</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-2">VIP Final Package</h3>
              <p className="text-gray-700 mb-3">July 19, 2026 - The Final</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• First-class vehicle (S-Class or Escalade)</li>
                <li>• Premium departure time (arrive 90 min early)</li>
                <li>• Champagne service</li>
                <li>• Post-match return (expedited exit route)</li>
              </ul>
              <p className="font-semibold text-black">Package Price: $450-600</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Booking Timeline</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              <li>📅 <strong className="text-black">NOW - March 2026:</strong> Book your transportation NOW to lock in rates and guarantee availability</li>
              <li>📅 <strong className="text-black">April-May 2026:</strong> Expect 50-100% price increases as demand surges</li>
              <li>📅 <strong className="text-black">June 2026:</strong> Most services fully booked for Final and semifinals</li>
              <li>📅 <strong className="text-black">Match Week:</strong> Limited to no availability, surge pricing 3-5x normal</li>
            </ul>
          </div>
          <p className="text-black font-bold mt-4 text-lg">⚠️ Book by March 2026 to guarantee your service at today's rates</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Manhattan Hotels Near FIFA Fan Zones</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-bold text-black mb-2">Midtown</h3>
              <p className="text-sm">Times Square, Herald Square - 25 min to MetLife</p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-2">Hudson Yards</h3>
              <p className="text-sm">Near Javits Center - 20 min to MetLife</p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-2">Jersey City</h3>
              <p className="text-sm">Closest hotels - 15 min to MetLife</p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-2">Newark Airport Area</h3>
              <p className="text-sm">Budget option - 20 min to MetLife</p>
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Reserve FIFA 2026 Transportation NOW</h2>
          <p className="text-lg mb-6">Lock in today's rates. Guarantee your vehicle. Avoid surge pricing.</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Book FIFA Package</a>
          </div>
          <p className="text-sm mt-4">Mention "FIFA 2026" for priority booking</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/sporting-events" className="text-black underline">Sporting Events</Link>
            <Link href="/fleet/sprinter" className="text-black underline">Sprinter Van (Groups)</Link>
            <Link href="/services/event-transportation" className="text-black underline">Event Transportation</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

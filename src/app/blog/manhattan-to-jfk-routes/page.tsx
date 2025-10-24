import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manhattan to JFK Routes | Best Routes & Travel Times | Noble Black Car',
  description: 'Complete guide to Manhattan to JFK airport routes. Fastest routes from all Manhattan neighborhoods, travel times, traffic patterns, flat-rate pricing.',
  keywords: 'Manhattan to JFK routes, fastest route to JFK, JFK airport car service, Manhattan airport transfer, JFK travel time',
}

export default function ManhattanToJFKRoutesPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">Manhattan to JFK: Routes, Times & Best Practices</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Primary Routes from Manhattan to JFK</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-3">Route 1: Midtown Tunnel → LIE → Van Wyck</h3>
              <p className="text-gray-700 mb-3"><strong>Best For:</strong> Midtown East, Upper East Side, Murray Hill</p>
              <p className="text-gray-700 mb-2"><strong>Distance:</strong> ~17 miles | <strong>Time:</strong> 40-75 minutes</p>
              <p className="text-sm text-gray-600 mb-3">Pros: Most direct route. Cons: Midtown Tunnel can backup 5pm-7pm</p>
              <p className="text-black font-semibold">Flat Rate: $95-110</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-3">Route 2: FDR → Grand Central → LIE</h3>
              <p className="text-gray-700 mb-3"><strong>Best For:</strong> Lower Manhattan, Financial District, East Village</p>
              <p className="text-gray-700 mb-2"><strong>Distance:</strong> ~16 miles | <strong>Time:</strong> 45-80 minutes</p>
              <p className="text-sm text-gray-600 mb-3">Pros: Avoids tunnel toll. Cons: FDR congestion during rush hour</p>
              <p className="text-black font-semibold">Flat Rate: $95-110</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-3">Route 3: West Side → Queens Midtown Tunnel → LIE</h3>
              <p className="text-gray-700 mb-3"><strong>Best For:</strong> Midtown West, Hell's Kitchen, Times Square</p>
              <p className="text-gray-700 mb-2"><strong>Distance:</strong> ~18 miles | <strong>Time:</strong> 45-85 minutes</p>
              <p className="text-sm text-gray-600 mb-3">Pros: Fastest from West Side. Cons: Tunnel bottleneck evenings</p>
              <p className="text-black font-semibold">Flat Rate: $95-110</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-3">Route 4: Brooklyn Bridge → BQE → Belt Parkway</h3>
              <p className="text-gray-700 mb-3"><strong>Best For:</strong> Downtown, Financial District (avoiding FDR)</p>
              <p className="text-gray-700 mb-2"><strong>Distance:</strong> ~21 miles | <strong>Time:</strong> 50-90 minutes</p>
              <p className="text-sm text-gray-600 mb-3">Pros: Scenic. Cons: Longer distance, BQE notorious for congestion</p>
              <p className="text-black font-semibold">Flat Rate: $95-110</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Travel Times by Neighborhood</h2>
          <div className="bg-white p-6 border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 text-black">Manhattan Neighborhood</th>
                  <th className="text-center py-2 text-black">Off-Peak</th>
                  <th className="text-center py-2 text-black">Rush Hour</th>
                  <th className="text-right py-2 text-black">Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-2">Midtown East</td>
                  <td className="text-center">40-50 min</td>
                  <td className="text-center">60-75 min</td>
                  <td className="text-right">$95</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Upper East Side</td>
                  <td className="text-center">45-55 min</td>
                  <td className="text-center">65-80 min</td>
                  <td className="text-right">$105</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Financial District</td>
                  <td className="text-center">45-55 min</td>
                  <td className="text-center">65-80 min</td>
                  <td className="text-right">$95</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Upper West Side</td>
                  <td className="text-center">50-60 min</td>
                  <td className="text-center">70-85 min</td>
                  <td className="text-right">$110</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Chelsea/West Village</td>
                  <td className="text-center">45-55 min</td>
                  <td className="text-center">65-80 min</td>
                  <td className="text-right">$100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Best Departure Times</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-3">AVOID These Times</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 7:30am-9:30am (morning rush)</li>
                <li>• 4:00pm-7:00pm (evening rush)</li>
                <li>• Friday 3pm-8pm (weekend exodus)</li>
                <li>• Sunday 4pm-8pm (return traffic)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Add 20-30 minutes during these periods</p>
            </div>

            <div className="bg-black text-white p-6">
              <h3 className="font-bold text-lg mb-3">OPTIMAL Departure Times</h3>
              <ul className="space-y-2">
                <li>✓ Before 6:30am (minimal traffic)</li>
                <li>✓ 10am-3pm (off-peak midday)</li>
                <li>✓ After 8pm (evening clear-out)</li>
                <li>✓ Weekends before 10am</li>
              </ul>
              <p className="text-sm mt-3">Fastest travel times during these windows</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Why Choose Black Car over Alternatives</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-2">vs. Taxi/Rideshare</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Flat rate ($95-110) vs. metered ($52 flat + tolls + tip = $70-90 + surge)</li>
                <li>✓ Professional chauffeur vs. random driver</li>
                <li>✓ Luxury sedan vs. standard vehicle</li>
                <li>✓ No surge pricing during peak times</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-2">vs. Subway/AirTrain</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ 40-75 min door-to-door vs. 60-90 min with transfers</li>
                <li>✓ No luggage hassles or stairs</li>
                <li>✓ Direct service, no waiting for trains</li>
                <li>✓ Arrive refreshed, not sweaty from subway</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Pro Tips from Our Chauffeurs</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              <li>🚗 <strong className="text-black">Book 48+ hours in advance</strong> for guaranteed vehicle availability</li>
              <li>🚗 <strong className="text-black">International flights:</strong> Depart 3.5 hours before departure during rush hour</li>
              <li>🚗 <strong className="text-black">Domestic flights:</strong> 2.5 hours before departure is safe</li>
              <li>🚗 <strong className="text-black">JFK Terminal Tip:</strong> Terminal 4 & 8 have heaviest traffic - allow extra time</li>
              <li>🚗 <strong className="text-black">Weather:</strong> Add 15-20 minutes for rain/snow</li>
            </ul>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Manhattan to JFK Transfer</h2>
          <p className="text-lg mb-6">Flat-rate pricing, professional drivers, guaranteed on-time arrival</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Book Now</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/airports/jfk" className="text-black underline">JFK Airport Service</Link>
            <Link href="/services/airport-transfer" className="text-black underline">Airport Transfer Service</Link>
            <Link href="/locations/manhattan" className="text-black underline">Manhattan Service Areas</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

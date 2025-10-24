import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Event Transport NYC | Noble',
  description: 'Professional corporate event transportation in NYC. Multi-vehicle coordination for conferences, galas, team building. Flat-rate pricing, 24/7 service.',
  keywords: 'corporate event transportation NYC, conference shuttle service, gala transportation, business event car service, corporate group transport',
}

export default function CorporateEventTransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Corporate Event Transportation in NYC: Complete Planning Guide</h1>
          <p className="text-xl text-gray-600">Professional group transportation for conferences, galas, team building events, and corporate gatherings</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Why Corporate Events Need Professional Transportation</h2>
          <p className="text-gray-700 mb-4">The success of your corporate event often depends on logistics. When executives, clients, or employees need to arrive on time and in style, professional black car service is essential.</p>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-xl mb-4 text-black">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Guaranteed on-time arrival for all attendees</li>
              <li>✓ Professional impression for clients and VIPs</li>
              <li>✓ No parking hassles at venue</li>
              <li>✓ Coordinated multi-vehicle logistics</li>
              <li>✓ Flat-rate pricing for budgeting ease</li>
              <li>✓ 24/7 availability for early/late events</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Types of Corporate Events We Serve</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-xl mb-2 text-black">Conferences & Conventions</h3>
              <p className="text-gray-700 mb-2">Javits Center, hotel conference rooms, convention centers</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Airport to hotel transfers for attendees</li>
                <li>• Shuttle service between hotels and venue</li>
                <li>• VIP executive transportation</li>
                <li>• Multi-day event packages</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-xl mb-2 text-black">Corporate Galas & Awards Dinners</h3>
              <p className="text-gray-700 mb-2">Cipriani, Rainbow Room, Plaza Hotel, Museum venues</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Red carpet arrival service</li>
                <li>• Timed departures for groups</li>
                <li>• Late-night return transportation</li>
                <li>• Photo-worthy luxury vehicles</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-xl mb-2 text-black">Team Building & Retreats</h3>
              <p className="text-gray-700 mb-2">Hamptons, Hudson Valley, Long Island venues</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Group transportation in Sprinters (14 passengers)</li>
                <li>• Multiple SUVs for larger groups</li>
                <li>• Round-trip packages with savings</li>
                <li>• Flexible pickup times</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-xl mb-2 text-black">Board Meetings & Investor Events</h3>
              <p className="text-gray-700 mb-2">Manhattan offices, financial district venues</p>
              <ul className="space-y-1 text-gray-700">
                <li>• First-class vehicles for VIPs</li>
                <li>• Discreet, professional service</li>
                <li>• Airport pickup for out-of-town participants</li>
                <li>• Multi-stop itineraries</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Fleet Options for Corporate Events</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Business Sedan</h3>
              <p className="text-gray-700 mb-3">Lincoln MKZ - 3 passengers</p>
              <p className="font-semibold text-black mb-2">From $75/transfer</p>
              <p className="text-sm text-gray-600">Best for: Individual executives, airport transfers</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">First-Class Sedan</h3>
              <p className="text-gray-700 mb-3">Mercedes S-Class, BMW 7 Series</p>
              <p className="font-semibold text-black mb-2">From $95/transfer</p>
              <p className="text-sm text-gray-600">Best for: C-suite, VIP clients, board members</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Business SUV</h3>
              <p className="text-gray-700 mb-3">Suburban, Navigator, Yukon - 6 passengers</p>
              <p className="font-semibold text-black mb-2">From $120/transfer</p>
              <p className="text-sm text-gray-600">Best for: Small groups, luggage capacity</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Sprinter Van</h3>
              <p className="text-gray-700 mb-3">Mercedes Sprinter - 14 passengers</p>
              <p className="font-semibold text-black mb-2">From $150/transfer, $125/hour</p>
              <p className="text-sm text-gray-600">Best for: Group shuttles, team events</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Event Transportation Planning Checklist</h2>

          <div className="space-y-4">
            <div className="bg-white p-4 border border-gray-200">
              <h3 className="font-bold mb-2 text-black">4-6 Weeks Before Event</h3>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Determine number of attendees needing transportation</li>
                <li>☐ Identify pickup locations (airports, hotels, offices)</li>
                <li>☐ Book vehicles with Noble Black Car Service</li>
                <li>☐ Request group discount quote (10% off for 3+ vehicles)</li>
              </ul>
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <h3 className="font-bold mb-2 text-black">2 Weeks Before Event</h3>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Provide final headcount</li>
                <li>☐ Confirm all pickup times and locations</li>
                <li>☐ Share contact information for event coordinator</li>
                <li>☐ Arrange for return transportation timing</li>
              </ul>
            </div>

            <div className="bg-white p-4 border border-gray-200">
              <h3 className="font-bold mb-2 text-black">Day Before Event</h3>
              <ul className="space-y-1 text-gray-700">
                <li>☐ Reconfirm all reservations</li>
                <li>☐ Share day-of coordinator phone number</li>
                <li>☐ Verify venue address and drop-off location</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Pricing & Group Discounts</h2>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-xl mb-4 text-black">Volume Discounts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 3-5 vehicles: 10% discount</li>
              <li>• 6-9 vehicles: 15% discount</li>
              <li>• 10+ vehicles: Custom corporate rate (contact for quote)</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Sample Event Pricing</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 text-black">Service</th>
                  <th className="text-right py-2 text-black">Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-2">JFK to Manhattan Conference (sedan)</td>
                  <td className="text-right">$95</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Hotel to Gala Round-trip (S-Class)</td>
                  <td className="text-right">$180</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Manhattan to Hamptons Retreat (Sprinter)</td>
                  <td className="text-right">$475</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">4-hour Shuttle Service (Sprinter)</td>
                  <td className="text-right">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Why Choose Noble for Corporate Events</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Experience</h3>
              <p className="text-gray-700">500+ corporate clients trust us for events from 10 to 500+ attendees</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Reliability</h3>
              <p className="text-gray-700">100% on-time record with backup vehicles always available</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Coordination</h3>
              <p className="text-gray-700">Dedicated event coordinator for complex multi-vehicle logistics</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Billing</h3>
              <p className="text-gray-700">Monthly invoicing, corporate accounts, expense reports provided</p>
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Your Corporate Event Transportation</h2>
          <p className="text-lg mb-6">Get a custom quote for your event with group discount pricing</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Request Group Quote</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/event-transportation" className="text-black underline">Event Transportation Services</Link>
            <Link href="/fleet/sprinter" className="text-black underline">Sprinter Van Details</Link>
            <Link href="/corporate/accounts" className="text-black underline">Corporate Accounts</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cruise Terminal Transportation NYC - Manhattan Cruise Port | Noble',
  description: 'Black car service to NYC cruise terminals. Manhattan & Brooklyn terminals. Pre/post-cruise transport with luggage assistance.',
  keywords: 'NYC cruise terminal car service, Manhattan cruise port transportation, Brooklyn cruise terminal limo',
}

export default function CruiseTerminalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cruise Terminal Transportation</h1>
          <p className="text-xl md:text-2xl">Seamless transfers to Manhattan & Brooklyn cruise ports</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg mb-12">Start or end your cruise vacation stress-free with Noble&apos;s luxury cruise terminal transportation. We provide door-to-door service from anywhere in NYC to Manhattan and Brooklyn cruise terminals, with professional luggage assistance and timing coordination.</p>

        <h2 className="text-3xl font-bold mb-6 text-black">NYC Cruise Terminals We Serve</h2>
        <div className="space-y-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Manhattan Cruise Terminal (Hell&apos;s Kitchen)</h3>
            <p className="text-gray-700 mb-3">Located on the Hudson River at W 55th Street</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Cruise Lines:</strong> Norwegian, Carnival, Princess, MSC, Cunard</li>
              <li>• <strong>Service from:</strong> Manhattan Hotels, JFK Airport, LaGuardia, Newark</li>
              <li>• <strong>Early Morning Available:</strong> 4 AM pickups for embarkation</li>
              <li>• <strong>Contact for pricing:</strong> <a href="tel:+14045138803" className="font-bold hover:underline">(404) 513-8803</a></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Brooklyn Cruise Terminal (Red Hook)</h3>
            <p className="text-gray-700 mb-3">Located at Pier 12, Atlantic Basin</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Cruise Lines:</strong> Queen Mary 2, Cunard, select seasonal cruises</li>
              <li>• <strong>Service from:</strong> Manhattan Hotels, JFK Airport, LaGuardia, Newark</li>
              <li>• <strong>Note:</strong> Less accessible than Manhattan terminal—car service recommended</li>
              <li>• <strong>Contact for pricing:</strong> <a href="tel:+14045138803" className="font-bold hover:underline">(404) 513-8803</a></li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Service Options</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-black">Pre-Cruise Transfer</h3>
            <p className="text-gray-700 mb-4">Get to the ship on time, relaxed and ready to vacation</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Airport to cruise terminal direct</li>
              <li>✓ Hotel to cruise terminal</li>
              <li>✓ Home to cruise terminal</li>
              <li>✓ Early morning departures (4-7 AM typical)</li>
              <li>✓ Luggage assistance to check-in</li>
              <li>✓ Timing coordinated with ship boarding</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-black">Post-Cruise Transfer</h3>
            <p className="text-gray-700 mb-4">Continue your vacation comfort through the last mile</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Cruise terminal to airport</li>
              <li>✓ Cruise terminal to hotel</li>
              <li>✓ Cruise terminal to home</li>
              <li>✓ Flexible pickup based on disembarkation time</li>
              <li>✓ Meet & greet inside terminal</li>
              <li>✓ Luggage assistance to vehicle</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-black">Round-Trip Package</h3>
            <p className="text-gray-700 mb-4">Book both directions and save 5%</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Pre-cruise and post-cruise service</li>
              <li>✓ Same reliable driver when possible</li>
              <li>✓ Discounted pricing on round-trip bookings</li>
              <li>✓ One booking for complete peace of mind</li>
              <li>✓ Simplified payment and coordination</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-black">Pre-Cruise Hotel + Terminal</h3>
            <p className="text-gray-700 mb-4">Stay overnight near port before departure</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Airport to Manhattan hotel</li>
              <li>✓ Next morning: hotel to cruise terminal</li>
              <li>✓ Recommended for early departures</li>
              <li>✓ Reduces morning-of-cruise stress</li>
              <li>✓ Package pricing available</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Why Choose Noble for Cruise Transportation?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">Timing Expertise</h3>
            <p className="text-gray-700">We know cruise check-in times (typically noon-4 PM) and build in buffer time. For disembarkation, we monitor ship arrival and adjust pickup time if needed.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">Luggage Capacity</h3>
            <p className="text-gray-700">SUVs accommodate 4-6 passengers plus 6+ large suitcases—perfect for cruise luggage. Sprinter van available for larger groups or extra baggage.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">Terminal Navigation</h3>
            <p className="text-gray-700">Drivers know exactly where to drop-off and pick up at each terminal. For disembarkation, we meet you inside with luggage assistance to the vehicle.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">No Surge Pricing</h3>
            <p className="text-gray-700">Flat rates locked in when you book. Cruise embarkation days can see 3x surge pricing with rideshare—our rates never change.</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Popular Cruise Routes from NYC</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h4 className="font-bold text-white mb-2">Caribbean (Year-round)</h4>
              <p className="text-sm">Norwegian, Carnival, Princess - 7-14 days</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Canada/New England (Summer/Fall)</h4>
              <p className="text-sm">Holland America, Princess - 7-10 days</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Transatlantic (Spring/Fall)</h4>
              <p className="text-sm">Cunard Queen Mary 2 - 7 days to UK</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Bermuda (Summer)</h4>
              <p className="text-sm">Norwegian, Carnival - 7 days</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Booking Tips</h2>
        <div className="bg-gray-50 p-6 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Book early:</strong> Reserve when you book your cruise. Popular sail dates fill up.</li>
            <li>• <strong>Provide details:</strong> Ship name, sail date, embarkation/disembarkation times</li>
            <li>• <strong>Pre-cruise timing:</strong> Arrive 90-120 minutes before boarding starts (usually 11 AM-12 PM)</li>
            <li>• <strong>Post-cruise:</strong> Disembarkation typically 7-10 AM. We recommend pickup 10-11 AM.</li>
            <li>• <strong>Flight connections:</strong> Book afternoon flights (2 PM+) for post-cruise airport transfers</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Cruise Terminal Transportation</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sporting Event Transportation NYC - Yankees, Mets, Knicks | Noble',
  description: 'Black car service to NYC sporting events. Yankees, Mets, Knicks, Rangers, Giants, Jets games. Avoid parking, arrive in style. Round-trip service available.',
  keywords: 'Yankee Stadium car service, Madison Square Garden limo, MetLife Stadium transportation, sporting event black car NYC',
}

export default function SportingEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sporting Event Transportation</h1>
          <p className="text-xl md:text-2xl">Arrive at the game in style, skip the parking hassle</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg mb-12">Enjoy NYC sporting events without the stress of driving, parking, or post-game traffic. Noble provides luxury transportation to all major sports venues throughout New York City and New Jersey.</p>

        <h2 className="text-3xl font-bold mb-6 text-black">Venues We Serve</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Yankee Stadium (Bronx)</h3>
            <p className="text-gray-700 mb-3">NY Yankees Baseball</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Travel time from Manhattan: 20-30 minutes</li>
              <li>• Drop-off: Main entrance or VIP areas</li>
              <li>• Pick-up: After game or set time</li>
              <li>• <strong>Contact for round-trip pricing</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Citi Field (Queens)</h3>
            <p className="text-gray-700 mb-3">NY Mets Baseball</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Travel time from Manhattan: 25-35 minutes</li>
              <li>• Drop-off: Designated areas</li>
              <li>• Traffic-free return home</li>
              <li>• <strong>Contact for round-trip pricing</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Madison Square Garden</h3>
            <p className="text-gray-700 mb-3">Knicks, Rangers, Concerts</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Travel time within Manhattan: 10-20 minutes</li>
              <li>• Drop-off: Penn Station entrance</li>
              <li>• Perfect for evening games</li>
              <li>• <strong>Contact for round-trip pricing</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">MetLife Stadium (NJ)</h3>
            <p className="text-gray-700 mb-3">Giants, Jets Football</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Travel time from Manhattan: 30-45 minutes</li>
              <li>• Tailgating packages available</li>
              <li>• Post-game traffic avoidance</li>
              <li>• <strong>Contact for round-trip pricing</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Barclays Center (Brooklyn)</h3>
            <p className="text-gray-700 mb-3">Nets Basketball, Islanders Hockey</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Travel time from Manhattan: 15-25 minutes</li>
              <li>• Atlantic Terminal drop-off</li>
              <li>• Easy Brooklyn access</li>
              <li>• <strong>Contact for round-trip pricing</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Other Venues</h3>
            <p className="text-gray-700 mb-3">USTA Tennis Center, Belmont Park, UBS Arena</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• US Open tennis at USTA Center</li>
              <li>• Horse racing at Belmont Park</li>
              <li>• Islanders at UBS Arena</li>
              <li>• Custom quotes available</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Service Options</h2>
        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Round-Trip Service (Most Popular)</h3>
            <p className="text-gray-700">Drop-off before the game, pickup after. Your driver coordinates pickup time based on game end (we monitor live). No surge pricing like rideshare.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">One-Way Drop-Off</h3>
            <p className="text-gray-700">Perfect if you want to stay downtown after the game or have alternative transportation home. Point-to-point pricing applies.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Hourly Service with Wait Time</h3>
            <p className="text-gray-700">For groups wanting to tailgate or attend pre/post-game events. Vehicle and driver available for entire duration (4-hour minimum).</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Why Choose Noble for Games?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">No Parking Nightmare</h3>
            <p className="text-gray-700">Avoid parking fees and post-game traffic jams. Get dropped at the entrance and picked up when you're ready.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">Enjoy Responsibly</h3>
            <p className="text-gray-700">Have a few beers without worrying about driving home. Safe, professional transportation ensures everyone gets home safely.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">Group Transportation</h3>
            <p className="text-gray-700">SUVs fit 6 people, Sprinter van accommodates 14. Split the cost among friends—often cheaper than parking + rideshare surge pricing.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold mb-2 text-black">VIP Experience</h3>
            <p className="text-gray-700">Arrive in luxury, skip the crowded parking lots and shuttle buses. Make your game day special from start to finish.</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Corporate Suite Transportation</h3>
          <p className="text-gray-300 mb-4">Hosting clients or employees at your corporate suite? We provide seamless transportation for your guests, with multiple vehicle options and flexible scheduling.</p>
          <Link href="/corporate" className="text-white underline hover:text-gray-300">Learn about corporate accounts →</Link>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Game Day Transportation</h3>
          <p className="text-gray-700 mb-6">Reserve early for popular games—Yankees playoff games, Giants home openers, and Rangers playoffs book quickly!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

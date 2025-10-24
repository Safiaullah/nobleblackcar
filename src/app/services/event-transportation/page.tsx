import React from 'react'
import Link from 'next/link'

export default function EventTransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Event Transportation</h1>
          <p className="text-xl md:text-2xl text-gray-200">Seamless group transportation for any occasion</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Noble provides professional event transportation for corporate functions, galas, weddings, parties, and special occasions throughout NYC. From executive transport to large group coordination, we ensure your guests arrive on time and in style.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-black">Event Types We Serve</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Corporate Events</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Company galas and award ceremonies</li>
              <li>• Holiday parties and celebrations</li>
              <li>• Team-building outings</li>
              <li>• Board meetings and retreats</li>
              <li>• Client appreciation events</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Weddings</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bridal party transportation</li>
              <li>• Guest shuttles from hotels</li>
              <li>• Ceremony to reception transfers</li>
              <li>• VIP family transport</li>
              <li>• Complimentary champagne service</li>
            </ul>
            <Link href="/services/wedding" className="inline-block mt-3 text-black font-bold hover:underline">View Wedding Details →</Link>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Private Events</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Birthday parties and anniversaries</li>
              <li>• Prom and school formals</li>
              <li>• Bachelor/bachelorette parties</li>
              <li>• Theater and concert groups</li>
              <li>• Sporting event transportation</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Conferences & Trade Shows</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Airport shuttles for attendees</li>
              <li>• Hotel to venue transfers</li>
              <li>• VIP speaker transport</li>
              <li>• Multi-day coordination</li>
              <li>• Dedicated event manager</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Services Included</h2>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Planning & Coordination</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Dedicated event coordinator</li>
                <li>✓ Custom transportation timeline</li>
                <li>✓ Guest list management</li>
                <li>✓ Day-of logistics support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Service Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Professional chauffeurs in formal attire</li>
                <li>✓ Multiple vehicle types available</li>
                <li>✓ Real-time tracking and updates</li>
                <li>✓ Backup vehicles on standby</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Fleet Options for Events</h2>

        <div className="space-y-4 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <div>
              <h3 className="font-bold text-lg text-black">Luxury Sedans (3 passengers)</h3>
              <p className="text-gray-600">Mercedes S-Class, BMW 7 Series</p>
              <p className="text-gray-700 mt-2">Perfect for: Executive transport, VIPs, bridal party</p>
              <p className="text-black font-bold mt-3"><a href="tel:+14045138803" className="hover:underline">Contact for Quote</a></p>
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <div>
              <h3 className="font-bold text-lg text-black">Luxury SUVs (6 passengers)</h3>
              <p className="text-gray-600">Cadillac Escalade, Suburban, Lincoln Navigator</p>
              <p className="text-gray-700 mt-2">Perfect for: Small groups, families, luggage capacity</p>
              <p className="text-black font-bold mt-3"><a href="tel:+14045138803" className="hover:underline">Contact for Quote</a></p>
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <div>
              <h3 className="font-bold text-lg text-black">Mercedes Sprinter (14 passengers)</h3>
              <p className="text-gray-600">Executive van with luxury seating</p>
              <p className="text-gray-700 mt-2">Perfect for: Shuttle service, group transport, parties</p>
              <p className="text-black font-bold mt-3"><a href="tel:+14045138803" className="hover:underline">Contact for Quote</a></p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Special Event Packages</h2>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Multi-Vehicle Discount</h3>
          <p className="text-gray-300 mb-6">Book 3 or more vehicles for your event and receive special discounted pricing. Contact us for a custom quote tailored to your specific needs.</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3+ Vehicles</div>
              <p className="text-gray-300">Discounted rates</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+ Vehicles</div>
              <p className="text-gray-300">Additional savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+ Vehicles</div>
              <p className="text-gray-300">Custom pricing</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">How Event Transportation Works</h2>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-bold mb-2 text-black">Consultation</h3>
            <p className="text-sm text-gray-700">Discuss event details, guest count, and logistics</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-bold mb-2 text-black">Custom Quote</h3>
            <p className="text-sm text-gray-700">Receive detailed proposal with vehicle options</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-bold mb-2 text-black">Planning</h3>
            <p className="text-sm text-gray-700">Work with event coordinator on timeline</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
            <h3 className="font-bold mb-2 text-black">Execution</h3>
            <p className="text-sm text-gray-700">Flawless day-of coordination and service</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">How far in advance should I book for an event?</h3>
            <p className="text-gray-700">For weddings and large corporate events, book 3-6 months in advance. Smaller events can be booked 2-4 weeks ahead. Peak wedding season (May-October) requires earlier booking.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Can you handle last-minute changes to the schedule?</h3>
            <p className="text-gray-700">Yes, our event coordinator remains in contact throughout the event and can adjust pickup times, add stops, or accommodate other changes as needed.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Do you provide transportation outside NYC?</h3>
            <p className="text-gray-700">Yes, we serve events throughout the tri-state area including Long Island, Westchester, Connecticut, and New Jersey venues.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">What&apos;s your cancellation policy for events?</h3>
            <p className="text-gray-700">Cancellations made 30+ days before event: full refund. 14-30 days: 50% charge. Less than 14 days: full charge. We understand event details change—contact us to discuss modifications.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Event Transportation</h2>
          <p className="text-xl mb-8 text-gray-300">Speak with an event coordinator today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Request Event Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

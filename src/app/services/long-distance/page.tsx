import React from 'react'
import Link from 'next/link'

export default function LongDistancePage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Long-Distance Service</h1>
          <p className="text-xl md:text-2xl text-gray-200">NYC to Boston, Philadelphia, Washington DC, and beyond</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Noble Black Car Service specializes in long-distance ground transportation from NYC to major Northeast cities. Skip the stress of driving, traffic, and parking—arrive relaxed and ready for business or leisure.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-white">Popular Long-Distance Routes</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-white">NYC to Boston</h3>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>• Distance: 215 miles</li>
              <li>• Travel Time: 4 hours</li>
              <li>• <strong><a href="tel:+14045138803" className="hover:underline">Contact for flat rate</a></strong></li>
            </ul>
            <Link href="/routes/boston" className="text-white font-bold hover:underline">View Boston Details →</Link>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-white">NYC to Philadelphia</h3>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>• Distance: 95 miles</li>
              <li>• Travel Time: 2 hours</li>
              <li>• <strong><a href="tel:+14045138803" className="hover:underline">Contact for flat rate</a></strong></li>
            </ul>
            <Link href="/routes/philadelphia" className="text-white font-bold hover:underline">View Philadelphia Details →</Link>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-white">NYC to Washington DC</h3>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>• Distance: 225 miles</li>
              <li>• Travel Time: 4-5 hours</li>
              <li>• <strong><a href="tel:+14045138803" className="hover:underline">Contact for flat rate</a></strong></li>
            </ul>
            <Link href="/routes/washington-dc" className="text-white font-bold hover:underline">View DC Details →</Link>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-white">Custom Destinations</h3>
            <p className="text-gray-300 mb-4">We serve destinations throughout the Northeast including Connecticut, upstate New York, Pennsylvania, and more.</p>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="text-white font-bold hover:underline">Request Custom Quote →</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Noble for Long-Distance Travel?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-white">More Productive Than Flying</h3>
            <p className="text-gray-300">Avoid airport security, delays, and baggage claim. Use travel time for work with WiFi and privacy. Door-to-door service saves 2-3 hours vs. air travel for nearby cities.</p>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-white">More Comfortable Than Train</h3>
            <p className="text-gray-300">No transfers, no strangers, no station waits. Luxury sedan with reclining seats, temperature control. Schedule departure on YOUR timeline, not Amtrak&apos;s.</p>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-white">More Relaxing Than Driving</h3>
            <p className="text-gray-300">Avoid highway fatigue, GPS navigation, and tolls. Arrive refreshed instead of exhausted. Your chauffeur handles traffic, parking, and route planning.</p>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-white">Cost-Effective for Groups</h3>
            <p className="text-gray-300">Split the cost among 2-3 colleagues and it&apos;s competitive with train tickets, while being far more convenient and productive.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">What&apos;s Included</h2>

        <div className="bg-gray-900 p-8 border border-gray-700 mb-12">
          <ul className="space-y-3 text-gray-300 grid md:grid-cols-2 gap-4">
            <li>✓ Professional chauffeur</li>
            <li>✓ Luxury sedan or SUV</li>
            <li>✓ WiFi for productivity</li>
            <li>✓ Complimentary bottled water</li>
            <li>✓ Phone chargers</li>
            <li>✓ Climate control</li>
            <li>✓ Luggage assistance</li>
            <li>✓ Real-time flight/traffic monitoring</li>
          </ul>
          <p className="text-sm text-gray-400 mt-6">Additional costs: Tolls (passed through at actual cost), parking if required at destination, and gratuity (typically 15-20%).</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Common Use Cases</h2>

        <div className="space-y-6 mb-12">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">Business Meetings & Client Visits</h3>
            <p className="text-gray-300">Executives traveling for client meetings, sales calls, or conferences. Prepare presentations during travel time.</p>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">University Visits & Student Transport</h3>
            <p className="text-gray-300">Parents visiting students at Boston, Philadelphia, or DC universities. Students traveling home for holidays with luggage.</p>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">Weekend Getaways</h3>
            <p className="text-gray-300">Start your vacation relaxed. Visit Boston, Philadelphia, or DC without rental car hassles. We can arrange return transportation too.</p>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">Medical Travel</h3>
            <p className="text-gray-300">Comfortable transport to specialist appointments, treatments, or hospitals in other cities. Extra care for mobility-limited passengers.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">Can I make stops along the way?</h3>
            <p className="text-gray-300">Yes, brief stops (under 15 minutes) are accommodated within the flat rate. Longer stops may incur wait time charges.</p>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">Do you offer round-trip service?</h3>
            <p className="text-gray-300">Yes! Book both directions when making your reservation and save 5% on the total cost. We can pick you up days or weeks later for your return.</p>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">How far in advance should I book?</h3>
            <p className="text-gray-300">We recommend 3-7 days for long-distance trips to ensure vehicle and chauffeur availability. Last-minute bookings may be available—call (404) 513-8803 to check.</p>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-lg mb-2 text-white">What if my schedule changes?</h3>
            <p className="text-gray-300">Free cancellation up to 48 hours before pickup for long-distance trips. Changes made 24-48 hours prior: 50% charge. Less than 24 hours: full charge.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Long-Distance Service</h2>
          <p className="text-xl mb-8 text-gray-300">Travel in comfort and arrive refreshed</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote Online</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

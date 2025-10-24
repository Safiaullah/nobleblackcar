import Link from 'next/link'

export default function PreBookJFKTransferPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">Why You Should Always Pre-Book Your JFK Transfer</h1>

        <section className="mb-12">
          <p className="text-xl text-gray-700 mb-6">Landing at JFK after a long flight? The last thing you want is surge pricing, long waits, or uncertainty. Here's why smart travelers pre-book their airport transfer.</p>

          <div className="bg-black text-white p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-lg">Pre-booking saves you $20-80 per trip, guarantees your pickup, and eliminates stress. Always book 48+ hours in advance.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Pre-Book vs. On-Demand: The Reality</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl text-black mb-4">On-Demand Rideshare at JFK</h3>
              <ul className="space-y-3 text-gray-700">
                <li>❌ Surge pricing: $80-140 to Manhattan (vs $52 yellow cab flat rate)</li>
                <li>❌ 15-30 min wait for pickup</li>
                <li>❌ Walk to rideshare lot in all weather</li>
                <li>❌ Driver may not know best routes</li>
                <li>❌ Standard/basic vehicle</li>
                <li>❌ No guaranteed availability during peak times</li>
              </ul>
              <p className="font-bold text-red-700 mt-4">Total: $80-140 + 30-45 min to start trip</p>
            </div>

            <div className="bg-black text-white p-6">
              <h3 className="font-bold text-xl mb-4">Pre-Booked Black Car</h3>
              <ul className="space-y-3">
                <li>✓ Flat rate: $95-110 to Manhattan (locked in)</li>
                <li>✓ Driver waits at arrivals with name sign</li>
                <li>✓ Curbside pickup, no walking</li>
                <li>✓ Professional chauffeur, knows shortcuts</li>
                <li>✓ Luxury sedan (Lincoln, Mercedes, BMW)</li>
                <li>✓ 100% guaranteed, reserved in advance</li>
              </ul>
              <p className="font-bold text-green-400 mt-4">Total: $95-110 flat + immediate pickup</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">6 Major Benefits of Pre-Booking</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">1. Guaranteed Flat-Rate Pricing</h3>
              <p className="text-gray-700">JFK to Manhattan: $95-110 regardless of traffic, time of day, or demand. No surge pricing ever.</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">2. Flight Tracking Included</h3>
              <p className="text-gray-700">We monitor your flight in real-time. Early arrival? We're there. Delayed 2 hours? Your driver adjusts automatically. No extra charge.</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">3. Meet & Greet Service</h3>
              <p className="text-gray-700">Your chauffeur waits inside arrivals terminal with name sign. No searching, no phone calls, no confusion.</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">4. 60-Minute Free Wait Time</h3>
              <p className="text-gray-700">Slow customs? Lost luggage? We wait up to 60 minutes after landing at no extra charge. (Rideshare charges $0.50/min after 5 min)</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">5. Professional Chauffeur</h3>
              <p className="text-gray-700">Background-checked, trained, uniformed drivers who know the fastest routes from JFK to all Manhattan neighborhoods.</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl text-black mb-2">6. Luxury Vehicle Guaranteed</h3>
              <p className="text-gray-700">Lincoln MKZ, Mercedes S-Class, BMW 7 Series, or SUVs. Never a mystery vehicle or downgrade.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">When to Pre-Book</h2>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-lg text-black mb-3">Critical Times to Pre-Book</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🔴 <strong className="text-black">International arrivals:</strong> Always pre-book. Customs delays are unpredictable.</li>
              <li>🔴 <strong className="text-black">Late night/early morning:</strong> Fewer drivers available 11pm-6am</li>
              <li>🔴 <strong className="text-black">Holidays:</strong> Thanksgiving, Christmas, New Year's - high demand</li>
              <li>🔴 <strong className="text-black">Bad weather:</strong> Rain/snow = surge pricing + long waits</li>
              <li>🔴 <strong className="text-black">Business travel:</strong> Expense reports easier with pre-set rates</li>
              <li>🔴 <strong className="text-black">Group travel:</strong> SUV/Sprinter availability limited without advance booking</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">How Far in Advance to Book</h2>

          <div className="space-y-3 text-gray-700">
            <p>✓ <strong className="text-black">48+ hours:</strong> Recommended minimum for guaranteed availability</p>
            <p>✓ <strong className="text-black">1 week:</strong> Ideal for standard sedans and SUVs</p>
            <p>✓ <strong className="text-black">2-4 weeks:</strong> Required for Sprinter vans (14 passengers)</p>
            <p>✓ <strong className="text-black">1-3 months:</strong> Holiday travel, FIFA 2026, major events</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Real Cost Comparison</h2>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black mb-4">JFK to Midtown Manhattan (Friday 6pm arrival)</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 text-black">Option</th>
                  <th className="text-center py-2 text-black">Price</th>
                  <th className="text-center py-2 text-black">Wait Time</th>
                  <th className="text-center py-2 text-black">Vehicle</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-2">Rideshare (surge)</td>
                  <td className="text-center font-semibold">$90-140</td>
                  <td className="text-center">20-30 min</td>
                  <td className="text-center">Random</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Yellow Cab</td>
                  <td className="text-center font-semibold">$70</td>
                  <td className="text-center">10-40 min</td>
                  <td className="text-center">Taxi</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Subway/AirTrain</td>
                  <td className="text-center font-semibold">$11</td>
                  <td className="text-center">5-15 min</td>
                  <td className="text-center">Public</td>
                </tr>
                <tr className="bg-black text-white">
                  <td className="py-2 font-bold">Pre-Booked Black Car</td>
                  <td className="text-center font-bold">$95-110</td>
                  <td className="text-center font-bold">0 min (waiting)</td>
                  <td className="text-center font-bold">Luxury Sedan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">How to Pre-Book with Noble</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-3">Step 1: Request Quote</h3>
              <p className="text-gray-700 mb-3">Provide flight details, destination, passenger count</p>
              <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="text-black underline">Get Quote →</a>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-3">Step 2: Confirm Booking</h3>
              <p className="text-gray-700 mb-3">Receive flat-rate price, confirm via email or phone</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-black mb-3">Step 3: Fly Worry-Free</h3>
              <p className="text-gray-700 mb-3">We track your flight, driver waits at arrivals with sign</p>
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Pre-Book Your JFK Transfer Now</h2>
          <p className="text-lg mb-6">Lock in flat-rate pricing, guarantee your pickup, eliminate stress</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Book JFK Transfer</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/airports/jfk" className="text-black underline">JFK Airport Service</Link>
            <Link href="/blog/manhattan-to-jfk-routes" className="text-black underline">Manhattan to JFK Routes</Link>
            <Link href="/blog/nyc-airport-transportation-guide" className="text-black underline">NYC Airport Guide</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

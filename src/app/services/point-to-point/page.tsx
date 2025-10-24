import React from 'react'
import Link from 'next/link'

export default function PointToPointPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Point-to-Point Service</h1>
          <p className="text-xl md:text-2xl text-gray-200">Direct transportation with flat-rate pricing</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Noble&apos;s point-to-point service provides direct, no-stops transportation from your pickup location to your destination. Whether you&apos;re traveling across Manhattan, between boroughs, or to surrounding areas, our flat-rate pricing ensures you know the exact cost before you book—no surge pricing, no surprises.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">How Point-to-Point Service Works</h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="font-bold text-lg mb-2 text-black">Request Quote</h3>
              <p className="text-gray-700">Provide pickup and drop-off locations</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="font-bold text-lg mb-2 text-black">Get Flat Rate</h3>
              <p className="text-gray-700">Receive guaranteed price instantly</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="font-bold text-lg mb-2 text-black">Direct Transport</h3>
              <p className="text-gray-700">Non-stop service to your destination</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Common Point-to-Point Routes</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Within Manhattan</h3>
          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>• Midtown to Financial District</li>
              <li>• Upper East Side to SoHo</li>
              <li>• Chelsea to Upper West Side</li>
              <li>• Times Square to Greenwich Village</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4"><strong>Contact us for exact flat-rate pricing</strong></p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Between Boroughs</h3>
          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>• Manhattan to Brooklyn</li>
              <li>• Manhattan to Queens</li>
              <li>• Manhattan to Bronx</li>
              <li>• Brooklyn to Queens</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4"><strong>Contact us for exact flat-rate pricing</strong></p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">NYC to Surrounding Areas</h3>
          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>• Manhattan to Westchester</li>
              <li>• Manhattan to Long Island</li>
              <li>• Manhattan to New Jersey</li>
              <li>• Manhattan to Connecticut</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4"><strong>Contact us for exact flat-rate pricing</strong></p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Why Choose Point-to-Point Service?</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Flat-Rate Pricing</h3>
              <p className="text-gray-700">Know your exact cost before booking. No meter running, no surge pricing during rush hour or bad weather. The price we quote is the price you pay.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Direct Route</h3>
              <p className="text-gray-700">No detours, no additional pickups. Your driver takes you straight to your destination via the most efficient route.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Professional Service</h3>
              <p className="text-gray-700">Experienced, vetted chauffeurs in business attire driving immaculate luxury vehicles. Door opening, luggage assistance included.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Time Efficiency</h3>
              <p className="text-gray-700">Drivers arrive 5-10 minutes before pickup time. Real-time traffic monitoring ensures fastest route selection.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Ideal Use Cases</h2>

          <div className="space-y-4 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Business Meetings</h3>
              <p className="text-gray-700">Travel between offices, client meetings, or business events with guaranteed on-time arrival. WiFi available for productivity during transit.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Restaurant & Theater</h3>
              <p className="text-gray-700">Arrive at your dinner reservation or show on time without parking stress. Your driver can wait and return you home afterward (see hourly service for multi-stop trips).</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Medical Appointments</h3>
              <p className="text-gray-700">Reliable, comfortable transportation to hospitals, clinics, or specialist appointments. Drivers assist with mobility needs and provide extra time for boarding.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Shopping & Errands</h3>
              <p className="text-gray-700">Point-to-point service to shopping districts, with trunk space for packages. Drivers can wait up to 15 minutes at no charge (longer waits charged at $1/minute).</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Vehicles Available</h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Business Sedan</h3>
              <p className="text-gray-600 text-sm mb-3">3 passengers</p>
              <p className="text-gray-700 mb-3">Lincoln MKZ or similar</p>
              <a href="tel:+14045138803" className="text-black font-bold hover:underline">Contact for Quote</a>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">First Class Sedan</h3>
              <p className="text-gray-600 text-sm mb-3">3 passengers</p>
              <p className="text-gray-700 mb-3">Mercedes S-Class, BMW 7 Series</p>
              <a href="tel:+14045138803" className="text-black font-bold hover:underline">Contact for Quote</a>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Business SUV</h3>
              <p className="text-gray-600 text-sm mb-3">6 passengers</p>
              <p className="text-gray-700 mb-3">Chevrolet Suburban, Lincoln Navigator</p>
              <a href="tel:+14045138803" className="text-black font-bold hover:underline">Contact for Quote</a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">How We Calculate Pricing</h2>

          <p className="text-gray-700 mb-6">
            Our point-to-point pricing is based on distance, expected travel time, and vehicle type. Unlike metered taxis or surge-pricing rideshare, we use a transparent formula:
          </p>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Base Rate:</strong> Covers first 5 miles and vehicle preparation</li>
              <li><strong>Distance Rate:</strong> Per-mile charge based on route distance</li>
              <li><strong>Time Factor:</strong> Accounts for typical traffic patterns at scheduled pickup time</li>
              <li><strong>Vehicle Class:</strong> First-class and larger vehicles have higher base rates</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>What&apos;s NOT included in the quote:</strong> Tolls (passed through at cost), gratuity (typically 15-20%), and wait time beyond the complimentary 15 minutes ($1/minute thereafter).
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Booking Process</h2>

          <ol className="space-y-4 mb-8 text-gray-700">
            <li className="flex items-start">
              <strong className="mr-3 text-black">1.</strong>
              <div>
                <strong className="text-black">Request Quote:</strong> Call, email, or use our online quote form. Provide pickup address, destination, date, and time.
              </div>
            </li>
            <li className="flex items-start">
              <strong className="mr-3 text-black">2.</strong>
              <div>
                <strong className="text-black">Receive Pricing:</strong> We provide an instant flat-rate quote valid for 24 hours. No obligation to book.
              </div>
            </li>
            <li className="flex items-start">
              <strong className="mr-3 text-black">3.</strong>
              <div>
                <strong className="text-black">Confirm Reservation:</strong> Accept quote and provide payment details. You&apos;ll receive confirmation via email with driver details sent 30 minutes before pickup.
              </div>
            </li>
            <li className="flex items-start">
              <strong className="mr-3 text-black">4.</strong>
              <div>
                <strong className="text-black">Day of Service:</strong> Driver arrives 5-10 minutes early. You receive a text when driver is en route and upon arrival.
              </div>
            </li>
          </ol>

          <div className="bg-black text-white p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Need Multiple Stops?</h3>
            <p className="text-gray-300 mb-6">Point-to-point service is for direct A-to-B transportation. If you need multiple stops, wait time, or a full day of availability, consider our hourly service instead (3-hour minimum). Contact us for hourly service rates.</p>
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 inline-block font-semibold hover:bg-gray-100 transition-colors">
              Contact for Hourly Rates
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Can I make one quick stop?</h3>
              <p className="text-gray-700">Yes, brief stops (under 15 minutes) can be accommodated within point-to-point pricing. Stops longer than 15 minutes are charged $1/minute. For trips with multiple planned stops, hourly service is more cost-effective.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">What if traffic is bad?</h3>
              <p className="text-gray-700">Your flat rate doesn&apos;t change regardless of traffic conditions. We build typical traffic patterns into our pricing and use real-time traffic data to select the fastest route.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">How far in advance should I book?</h3>
              <p className="text-gray-700">We recommend 24-48 hours for guaranteed availability, but we often accommodate same-day requests. Peak times (weekday mornings 7-9 AM, evenings 5-7 PM) require earlier booking.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Is point-to-point service cheaper than hourly?</h3>
              <p className="text-gray-700">For single-destination trips, yes. Hourly service has a 3-hour minimum, making point-to-point more economical for trips under 2 hours with no wait time. Contact us to compare pricing for your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Point-to-Point Service</h2>
          <p className="text-xl mb-8 text-gray-300">Get a free quote in minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Get Quote Online</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Point-to-Point Car Service",
        "provider": {
          "@type": "Organization",
          "name": "Noble Black Car Service",
          "telephone": "+1-404-513-8803"
        },
        "areaServed": {
          "@type": "City",
          "name": "New York"
        },
      })}} />
    </main>
  )
}

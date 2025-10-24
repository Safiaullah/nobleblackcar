import React from 'react'
import Link from 'next/link'

export default function HourlyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Hourly Service</h1>
          <p className="text-xl md:text-2xl text-gray-200">Your professional chauffeur, by the hour</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">3 Hour Min</div>
              <p className="text-gray-600">Flexible hourly service</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">Unlimited Stops</div>
              <p className="text-gray-600">Within service area</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Noble&apos;s hourly service provides you with a professional chauffeur and luxury vehicle at your disposal for as long as you need. Perfect for business meetings across the city, event attendance, shopping trips with multiple stops, or any situation where you need the flexibility of having a driver wait while you handle your business.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">How Hourly Service Works</h2>

          <p className="text-gray-700 mb-6">
            Book your vehicle and chauffeur for a minimum of 3 hours. During that time, your driver remains with you for the entire duration, making as many stops as needed within the service area. The clock starts when your driver arrives at the pickup location and ends when you&apos;re dropped off at your final destination.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-black my-8">
            <h3 className="font-bold text-lg mb-3 text-black">What&apos;s Included</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Professional chauffeur for entire duration</li>
              <li>• Unlimited stops within NYC metro area</li>
              <li>• Wait time at all locations included</li>
              <li>• WiFi in vehicle for business productivity</li>
              <li>• Complimentary bottled water</li>
              <li>• Door opening and luggage assistance</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Available Vehicles</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-black">Vehicle Type</th>
                  <th className="px-4 py-3 text-left font-bold text-black">Capacity</th>
                  <th className="px-4 py-3 text-left font-bold text-black">Features</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold">Business Sedan</td>
                  <td className="px-4 py-3 text-gray-700">3 passengers</td>
                  <td className="px-4 py-3 text-gray-700">Professional service</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold">First Class Sedan</td>
                  <td className="px-4 py-3 text-gray-700">3 passengers</td>
                  <td className="px-4 py-3 text-gray-700">Luxury experience</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold">Business SUV</td>
                  <td className="px-4 py-3 text-gray-700">6 passengers</td>
                  <td className="px-4 py-3 text-gray-700">Group transportation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold">First Class SUV</td>
                  <td className="px-4 py-3 text-gray-700">6 passengers</td>
                  <td className="px-4 py-3 text-gray-700">Premium group service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Contact us for hourly rates and to book your service.</strong> Tolls passed through at cost, with a 3-hour minimum booking.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Common Use Cases</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Multiple Business Meetings</h3>
              <p className="text-gray-700 mb-3">Executives attending 3-4 meetings across Manhattan can work between appointments while the chauffeur navigates traffic and handles parking.</p>
              <div className="bg-white p-4 border border-gray-300 text-sm">
                <strong className="text-black">Example:</strong> 9 AM pickup at hotel → 10 AM meeting in Midtown → 12 PM lunch in SoHo → 2 PM meeting in Financial District → 4 PM return to hotel = 7 hours at $85/hr = $595 for Business Sedan
              </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Shopping & Personal Errands</h3>
              <p className="text-gray-700 mb-3">Shop at multiple stores without worrying about carrying bags or finding parking. Driver secures packages in trunk between stops.</p>
              <div className="bg-white p-4 border border-gray-300 text-sm">
                <strong className="text-black">Example:</strong> 3-hour shopping trip in Manhattan with stops at 5th Avenue, SoHo, and Meatpacking District = $255 minimum for Business Sedan
              </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Special Events & Night Out</h3>
              <p className="text-gray-700 mb-3">Enjoy dinner and theater without driving concerns. Your chauffeur waits during dinner, takes you to the show, then home afterward.</p>
              <div className="bg-white p-4 border border-gray-300 text-sm">
                <strong className="text-black">Example:</strong> 6 PM pickup → 7 PM dinner → 9 PM Broadway show → 11:30 PM drop-off home = 5.5 hours at $95/hr = $523 for First Class Sedan
              </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Corporate Roadshow</h3>
              <p className="text-gray-700 mb-3">Present to multiple clients or investors throughout the day. Use travel time to prepare for next meeting.</p>
              <div className="bg-white p-4 border border-gray-300 text-sm">
                <strong className="text-black">Example:</strong> Full 8-hour day of investor meetings across NYC = $760 for Business Sedan (vs. multiple point-to-point trips costing $900+)
              </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Airport Service with Errands</h3>
              <p className="text-gray-700 mb-3">Need to stop at the office or home before heading to the airport? Hourly service accommodates multiple stops without point-to-point pricing for each leg.</p>
              <div className="bg-white p-4 border border-gray-300 text-sm">
                <strong className="text-black">Example:</strong> Hotel → office (30 min stop) → JFK Airport = approximately 3 hours = $255 vs. two point-to-point trips at $180 total
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Hourly vs. Point-to-Point: Which to Choose?</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-black">Scenario</th>
                  <th className="px-4 py-3 text-left font-bold text-black">Better Choice</th>
                  <th className="px-4 py-3 text-left font-bold text-black">Why</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="px-4 py-3">Single destination</td>
                  <td className="px-4 py-3 text-gray-700">Point-to-Point</td>
                  <td className="px-4 py-3 text-gray-700">Lower cost for direct transport</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">2-3 quick stops</td>
                  <td className="px-4 py-3 text-gray-700">Point-to-Point</td>
                  <td className="px-4 py-3 text-gray-700">Brief stops (under 15 min) included in P2P</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">4+ stops or any wait over 15 min</td>
                  <td className="px-4 py-3 text-gray-700">Hourly</td>
                  <td className="px-4 py-3 text-gray-700">No wait time charges, unlimited stops</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Full day availability needed</td>
                  <td className="px-4 py-3 text-gray-700">Hourly</td>
                  <td className="px-4 py-3 text-gray-700">Driver remains with you entire time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Airport with 1-2 stops</td>
                  <td className="px-4 py-3 text-gray-700">Depends</td>
                  <td className="px-4 py-3 text-gray-700">P2P if under 3 hours total, hourly if longer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Booking & Policies</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">How to Book</h3>
          <p className="text-gray-700 mb-6">
            Call or use our online quote form. Provide your pickup time, estimated duration (minimum 3 hours), general itinerary, and preferred vehicle type. We recommend booking 24-48 hours in advance, especially for peak times and weekends.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Extending Your Booking</h3>
          <p className="text-gray-700 mb-6">
            Need more time? Simply notify your chauffeur at least 30 minutes before your scheduled end time. Additional hours are billed at the same hourly rate, subject to driver availability.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Service Area</h3>
          <p className="text-gray-700 mb-6">
            NYC metro area including Manhattan, Brooklyn, Queens, Bronx, Staten Island, Long Island, Westchester, and nearby New Jersey and Connecticut. For trips extending beyond this area, please discuss with our reservations team for appropriate pricing.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Cancellation Policy</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li>24+ hours notice: Full refund</li>
            <li>12-24 hours notice: 50% charge of 3-hour minimum</li>
            <li>Less than 12 hours: Full 3-hour minimum charge</li>
            <li>No-shows: Full 3-hour minimum charge</li>
          </ul>

          <div className="bg-black text-white p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Corporate Accounts Save More</h3>
            <p className="text-gray-300 mb-6">Set up a corporate account and receive volume discounts on hourly service: 5% off with 10+ rides/month, 10% off with 20+ rides/month. Monthly invoicing and NET 30 terms available.</p>
            <Link href="/corporate" className="bg-white text-black px-6 py-3 inline-block font-semibold hover:bg-gray-100 transition-colors">
              Set Up Corporate Account
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Can I book for less than 3 hours?</h3>
              <p className="text-gray-700">No, our minimum booking is 3 hours. For shorter trips with limited stops, consider our point-to-point service instead, which has no hourly minimum.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">What if I finish early?</h3>
              <p className="text-gray-700">You pay for the time booked, even if you finish early. For example, if you book 5 hours but finish in 4, you still pay for 5 hours. We recommend booking conservatively and extending if needed.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Does the driver wait during meetings or meals?</h3>
              <p className="text-gray-700">Yes, that&apos;s the point of hourly service. The driver remains with the vehicle for the entire duration, no matter how long each stop takes. They&apos;ll wait in the car or nearby as needed.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Can I have the driver run errands while I&apos;m in a meeting?</h3>
              <p className="text-gray-700">No, for safety and insurance reasons, the driver cannot leave the vehicle or run separate errands. The service is for your transportation only.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Are tolls included in the hourly rate?</h3>
              <p className="text-gray-700">No, tolls are billed separately at actual cost. Gratuity (typically 15-20%) is also not included in the hourly rate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Hourly Service</h2>
          <p className="text-xl mb-8 text-gray-300">3-hour minimum, unlimited stops</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Get Quote Online</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hourly Car Service",
        "provider": {
          "@type": "Organization",
          "name": "Noble Black Car Service",
          "telephone": "+1-404-513-8803"
        },
        "areaServed": {
          "@type": "City",
          "name": "New York"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "price": "85",
            "unitText": "HOUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "3",
              "unitText": "HOUR"
            }
          }
        }
      })}} />
    </main>
  )
}

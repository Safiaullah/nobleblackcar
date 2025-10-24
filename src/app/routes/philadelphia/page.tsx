import React from 'react'
import Link from 'next/link'

export default function PhiladelphiaRoutePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            NYC to Philadelphia Car Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Fast, reliable luxury transportation between New York and Philadelphia
          </p>
          <a
            href="tel:+14045138803"
            className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now: (404) 513-8803
          </a>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">⏱️</div>
              <div className="text-3xl font-bold text-white mb-2">2 Hours</div>
              <p className="text-gray-300">Average drive time</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📍</div>
              <div className="text-3xl font-bold text-white mb-2">95 Miles</div>
              <p className="text-gray-300">Via I-95 & Turnpike</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <div className="text-3xl font-bold text-white mb-2">Flat Rate</div>
              <p className="text-gray-300">Contact for quote</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚗</div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-300">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">Premium NYC to Philadelphia Transportation</h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Travel between New York City and Philadelphia in luxury and comfort with Noble&apos;s professional car service. At just 95 miles apart, these two major cities are perfectly suited for black car transportation—faster and more convenient than Amtrak, more comfortable than driving yourself, and more productive than dealing with airport security and delays.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The journey typically takes 2 hours via the New Jersey Turnpike and I-95, though travel time can vary based on traffic conditions. Our experienced chauffeurs know the best routes, optimal departure times, and how to navigate traffic to ensure you arrive on time. Whether you&apos;re heading to a business meeting in Center City, visiting University of Pennsylvania, exploring historic Old City, or attending an event at the Wells Fargo Center, we provide seamless door-to-door service.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            With Noble, you can work, relax, make calls, or simply enjoy the ride while we handle the driving. Our luxury fleet, professional chauffeurs, and commitment to punctuality make us the preferred choice for executives, professionals, and anyone who values their time and comfort.
          </p>
        </div>

        <div className="bg-black p-8 border-l-4 border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Noble for NYC-Philadelphia Travel?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong className="text-white">Time Efficient:</strong> Door-to-door in 2 hours, faster than train or flying when you include check-in/boarding time.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong className="text-white">Cost Effective:</strong> Competitive with Acela tickets, especially for 2+ passengers, with added luxury and privacy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong className="text-white">Maximize Productivity:</strong> Work during transit with Wi-Fi, power outlets, and quiet environment for calls.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong className="text-white">Schedule Flexibility:</strong> Leave on your schedule, not the train&apos;s. Make stops if needed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong className="text-white">Flat-Rate Pricing:</strong> All tolls included—no surge pricing, no surprises.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Vehicle Options Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Vehicle Options</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Sedans</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong className="text-white">Business Sedan</strong> - Lincoln MKZ, Chrysler 300 (Up to 3 passengers)</li>
                <li><strong className="text-white">First Class Sedan</strong> - Mercedes S-Class, BMW 7 Series (Up to 3 passengers)</li>
              </ul>
            </div>
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">SUVs</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong className="text-white">Business SUV</strong> - Suburban, Navigator (Up to 6 passengers)</li>
                <li><strong className="text-white">First Class SUV</strong> - Cadillac Escalade ESV (Up to 6 passengers)</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-6 border-l-4 border-gray-700">
            <p className="text-gray-300 mb-2">
              <strong className="text-white">All service includes:</strong> Professional chauffeur, all tolls (George Washington Bridge, NJ Turnpike, I-95), parking fees, and complimentary amenities.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Flexible options:</strong> One-way, round-trip, same-day returns, and multi-day Philadelphia stays available. Contact us for pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Philadelphia Destinations */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">Popular Philadelphia Destinations</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Center City & Business District</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Comcast Center and Liberty Place</li>
              <li>• Market Street offices and law firms</li>
              <li>• Rittenhouse Square area</li>
              <li>• Philadelphia Convention Center</li>
              <li>• City Hall and government offices</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Historic District</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Independence Hall and Liberty Bell</li>
              <li>• Old City restaurants and hotels</li>
              <li>• Society Hill neighborhood</li>
              <li>• Penn&apos;s Landing and waterfront</li>
              <li>• National Constitution Center</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Universities & Medical</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• University of Pennsylvania (Penn)</li>
              <li>• Drexel University</li>
              <li>• Temple University</li>
              <li>• Hospital of the University of Pennsylvania</li>
              <li>• Children&apos;s Hospital of Philadelphia (CHOP)</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Sports & Entertainment</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Wells Fargo Center (76ers, Flyers)</li>
              <li>• Citizens Bank Park (Phillies)</li>
              <li>• Lincoln Financial Field (Eagles)</li>
              <li>• Kimmel Center for the Performing Arts</li>
              <li>• South Street entertainment district</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">NYC to Philadelphia Travel Information</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Best Travel Times</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Early Morning (Before 7 AM):</strong> Fastest travel time, typically 1.5-2 hours. Perfect for 9 AM business meetings in Philadelphia.
              </p>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Mid-Morning to Early Afternoon (9 AM-2 PM):</strong> Moderate traffic with consistent 2-hour travel time. Ideal for most business and leisure trips.
              </p>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Late Evening (After 8 PM):</strong> Light traffic for 2-hour trips. Popular for overnight business travel or late events.
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Rush Hours to Avoid:</strong> Weekday mornings (7-9 AM) and afternoons (4-7 PM) can add 30-60 minutes, especially through New Jersey.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Route Details</h3>
              <p className="text-gray-300 mb-3">
                We typically take the New Jersey Turnpike (I-95) route, which is the fastest and most direct:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• <strong className="text-white">Start:</strong> Manhattan via Lincoln Tunnel or George Washington Bridge</li>
                <li>• <strong className="text-white">New Jersey Turnpike:</strong> Direct route through New Jersey</li>
                <li>• <strong className="text-white">I-95 South:</strong> Entry into Pennsylvania</li>
                <li>• <strong className="text-white">Schuylkill Expressway:</strong> Into Center City Philadelphia</li>
              </ul>
              <p className="text-gray-300 mt-3">
                Alternative routes via Route 1 or local roads available if needed. Rest stops at NJ Turnpike service areas (Joyce Kilmer, Molly Pitcher) for breaks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Comparing Transportation Options</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 bg-black mt-4">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">Method</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">Cost</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">Pros/Cons</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-bold text-white">Noble Car Service</td>
                      <td className="px-4 py-3 text-gray-300">2 hours</td>
                      <td className="px-4 py-3 text-gray-300">Flat rate</td>
                      <td className="px-4 py-3 text-gray-300">Door-to-door, luxury, productive</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-bold text-white">Acela Train</td>
                      <td className="px-4 py-3 text-gray-300">1.5 hrs + transit</td>
                      <td className="px-4 py-3 text-gray-300">Per person</td>
                      <td className="px-4 py-3 text-gray-300">Fast but requires station travel</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-bold text-white">Regional Train</td>
                      <td className="px-4 py-3 text-gray-300">2+ hrs + transit</td>
                      <td className="px-4 py-3 text-gray-300">Per person</td>
                      <td className="px-4 py-3 text-gray-300">Budget option, multiple stops</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-white">Personal Car</td>
                      <td className="px-4 py-3 text-gray-300">2 hours</td>
                      <td className="px-4 py-3 text-gray-300">Tolls + gas + parking</td>
                      <td className="px-4 py-3 text-gray-300">Stressful driving, parking hassles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">Popular Uses for Our Philadelphia Service</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Legal & Financial</h3>
            <p className="text-gray-300 mb-3">
              Law firms and financial companies frequently use our service for:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Court appearances and depositions</li>
              <li>• Client meetings in Philadelphia offices</li>
              <li>• Real estate closings</li>
              <li>• Multi-city deals and negotiations</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Healthcare</h3>
            <p className="text-gray-300 mb-3">
              Medical professionals and patients choose us for:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Appointments at specialty hospitals</li>
              <li>• Medical conferences and CME events</li>
              <li>• Second opinions at Penn Medicine</li>
              <li>• Children&apos;s Hospital visits</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">University Visits</h3>
            <p className="text-gray-300 mb-3">
              Families and students traveling for:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• College tours (Penn, Drexel, Temple)</li>
              <li>• Move-in and move-out days</li>
              <li>• Parent weekends</li>
              <li>• Graduation ceremonies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-black p-6 border-l-4 border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Is car service faster than the train?</h3>
              <p className="text-gray-300">
                It depends. The Acela train takes 1 hour 15 minutes, but you need to factor in getting to/from Penn Station on both ends (30-60 minutes total). With our service, you go directly from your door to your Philadelphia destination in about 2 hours total—often comparable or faster when you include all transit time.
              </p>
            </div>

            <div className="bg-black p-6 border-l-4 border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Do you offer same-day round trips?</h3>
              <p className="text-gray-300">
                Yes! We offer hourly service where your chauffeur waits in Philadelphia, or we can schedule a return pickup for later in the day. For meetings lasting 4-8 hours, many clients prefer the hourly option to avoid multiple vehicles.
              </p>
            </div>

            <div className="bg-black p-6 border-l-4 border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">What about parking in Philadelphia?</h3>
              <p className="text-gray-300">
                One major advantage of our service—no parking worries! Your chauffeur drops you at your destination and handles all parking. For hourly service, we stay with the vehicle or find nearby parking. Center City parking can cost $30-50/day, which is included in our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Philadelphia Trip?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Reserve your NYC to Philadelphia car service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (404) 513-8803
            </a>
            <Link
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "NYC to Philadelphia Car Service",
            "provider": {
              "@type": "Organization",
              "name": "Noble Black Car Service",
              "telephone": "+1-404-513-8803",
              "url": "https://nobleblackcarservice.com"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "New York"
              },
              {
                "@type": "City",
                "name": "Philadelphia"
              }
            ],
            "description": "Premium black car service from NYC to Philadelphia. 2-hour direct service with luxury sedans and SUVs.",
          })
        }}
      />
    </main>
  )
}

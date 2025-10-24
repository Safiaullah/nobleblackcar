import React from 'react'
import Link from 'next/link'

export default function BostonRoutePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            NYC to Boston Car Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Luxury ground transportation between New York City and Boston
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
              <div className="text-3xl font-bold text-white mb-2">4 Hours</div>
              <p className="text-gray-300">Direct drive time</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📍</div>
              <div className="text-3xl font-bold text-white mb-2">215 Miles</div>
              <p className="text-gray-300">Via I-95 corridor</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <div className="text-3xl font-bold text-white mb-2">Flat Rate</div>
              <p className="text-gray-300">Contact for quote</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚗</div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-300">Available anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-black">
        <h2 className="text-4xl font-bold mb-8 text-white">Premium NYC to Boston Transportation</h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Skip the train, avoid the hassle of driving, and travel in comfort with Noble&apos;s premium car service between New York City and Boston. Our professional chauffeur service provides door-to-door luxury transportation along the I-95 corridor, perfect for business travelers, special occasions, or anyone who values comfort and convenience.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The 215-mile journey typically takes 4 hours under normal traffic conditions, though we monitor real-time traffic and adjust routes as needed to ensure the most efficient travel. With Noble, you can work, relax, or sleep in complete comfort while we handle the driving. Our chauffeurs are experienced with the NYC-Boston route and know the best rest stops, dining options, and alternate routes.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you&apos;re heading to a business meeting in the Financial District, attending an event at Fenway Park, exploring Cambridge and Harvard, or visiting family in the Greater Boston area, we provide seamless transportation that starts and ends at your door.
          </p>
        </div>

        <div className="bg-black p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Noble for NYC-Boston Travel?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong>Flat-Rate Pricing:</strong> No surprises, no surge pricing. The price quoted is the price you pay, including all tolls and fees.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong>Luxury Fleet:</strong> Choose from Mercedes S-Class, BMW 7 Series, or Cadillac Escalade ESV for maximum comfort.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong>Professional Chauffeurs:</strong> Experienced drivers who know the route and prioritize your safety and comfort.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong>Productivity:</strong> Work during the journey with complimentary Wi-Fi, power outlets, and a quiet environment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white font-bold mr-3">✓</span>
              <span className="text-gray-300"><strong>Flexibility:</strong> Depart on your schedule, make stops as needed, and travel at your pace.</span>
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
                <li><strong>Business Sedan</strong> - Lincoln MKZ, Chrysler 300 (Up to 3 passengers)</li>
                <li><strong>First Class Sedan</strong> - Mercedes S-Class, BMW 7 Series (Up to 3 passengers)</li>
              </ul>
            </div>
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">SUVs</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>Business SUV</strong> - Suburban, Navigator (Up to 6 passengers)</li>
                <li><strong>First Class SUV</strong> - Cadillac Escalade ESV (Up to 6 passengers)</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <p className="text-gray-300 mb-2">
              <strong className="text-white">All service includes:</strong> Professional chauffeur, all tolls (George Washington Bridge, I-95 tolls, Tobin Bridge), parking fees, and complimentary amenities (Wi-Fi, water, phone chargers).
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Flexible options:</strong> One-way, round-trip, same-day round trips, and multi-day Boston bookings available. Contact us for pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Destinations in Boston */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-black">
        <h2 className="text-4xl font-bold mb-12 text-white">Popular Boston Destinations We Serve</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Financial District & Downtown</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• State Street offices and financial firms</li>
              <li>• Boston Common and Public Garden</li>
              <li>• Faneuil Hall and Quincy Market</li>
              <li>• Government Center</li>
              <li>• North End (Little Italy)</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Back Bay & Seaport</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Copley Square and Trinity Church</li>
              <li>• Newbury Street shopping</li>
              <li>• Prudential Center and Hynes Convention Center</li>
              <li>• Seaport District hotels and restaurants</li>
              <li>• Boston Convention and Exhibition Center</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Cambridge & Universities</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Harvard University and Harvard Square</li>
              <li>• MIT campus and Kendall Square</li>
              <li>• Boston University</li>
              <li>• Cambridge biotech and tech companies</li>
              <li>• Fenway Park</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Airport & Suburbs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Logan International Airport (BOS)</li>
              <li>• Brookline and Newton</li>
              <li>• Waltham and Lexington</li>
              <li>• Quincy and South Shore</li>
              <li>• Dedham and Route 128 corridor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">NYC to Boston Travel Guide</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Best Times to Travel</h3>
              <p className="text-gray-300 mb-3">
                <strong>Early Morning (5-7 AM):</strong> Lightest traffic on I-95. Ideal for business travelers who need to arrive for 9 AM meetings. Expect 3.5-4 hour travel time.
              </p>
              <p className="text-gray-300 mb-3">
                <strong>Mid-Day (10 AM-2 PM):</strong> Moderate traffic with consistent 4-4.5 hour travel time. Good for leisure travelers and flexible schedules.
              </p>
              <p className="text-gray-300 mb-3">
                <strong>Evening (After 7 PM):</strong> Traffic clears out after rush hour. Popular for overnight business trips or late arrivals. Plan for 4-4.5 hours.
              </p>
              <p className="text-gray-300">
                <strong>Avoid:</strong> Friday afternoons (3-7 PM) and Sunday evenings (3-8 PM) see the heaviest traffic, potentially adding 1-2 hours to travel time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Route & Stops</h3>
              <p className="text-gray-300 mb-3">
                Our chauffeurs typically take I-95 North through Connecticut, Rhode Island, and into Massachusetts. The route includes:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• <strong>George Washington Bridge</strong> or Bronx bridges to I-95</li>
                <li>• <strong>Connecticut Rest Stops:</strong> Greenwich, Milford, or Branford service plazas</li>
                <li>• <strong>Rhode Island:</strong> Quick passage through Providence corridor</li>
                <li>• <strong>Massachusetts:</strong> Entry via Route 128 or I-93 to downtown Boston</li>
              </ul>
              <p className="text-gray-300 mt-3">
                Need a coffee stop, meal break, or restroom? Just let your chauffeur know. We can stop at any service plaza, restaurant, or location along the way.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">What to Bring</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Work materials:</strong> Laptop, documents, chargers (we provide outlets and Wi-Fi)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Snacks and beverages:</strong> While we provide water, bring any special preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Entertainment:</strong> Books, tablets, headphones for a 4-hour journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Travel pillow:</strong> For those who want to rest during the drive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-black">
        <h2 className="text-4xl font-bold mb-12 text-white">Why Clients Choose Our Boston Service</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Business Travel</h3>
            <p className="text-gray-300 mb-4">
              Popular with executives, consultants, and professionals who need to:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Work during transit (Wi-Fi, power, privacy)</li>
              <li>• Arrive refreshed for important meetings</li>
              <li>• Make conference calls en route</li>
              <li>• Expense reliable transportation</li>
              <li>• Maintain productivity while traveling</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Special Events</h3>
            <p className="text-gray-300 mb-4">
              Perfect for graduations, weddings, and celebrations:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Harvard/MIT graduations</li>
              <li>• Boston Marathon events</li>
              <li>• Fenway Park games</li>
              <li>• TD Garden concerts and sports</li>
              <li>• Wedding transportation</li>
            </ul>
          </div>

          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Leisure & Family</h3>
            <p className="text-gray-300 mb-4">
              Ideal for family trips and getaways:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Stress-free family travel</li>
              <li>• No parking hassles in Boston</li>
              <li>• Visit colleges with prospective students</li>
              <li>• Extended Boston vacations</li>
              <li>• Elderly or disabled passenger comfort</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">How long does the drive take?</h3>
              <p className="text-gray-300">
                Under normal traffic conditions, the drive from Manhattan to Boston takes approximately 4 hours. Early morning and late evening trips can be as quick as 3.5 hours, while rush hour traffic (especially Friday afternoons) can extend the trip to 5-6 hours. We monitor traffic in real-time and adjust our departure time recommendations accordingly.
              </p>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Can we make stops along the way?</h3>
              <p className="text-gray-300">
                Absolutely. Brief rest stops, coffee breaks, or meal stops are included at no extra charge. Many clients stop at service plazas in Connecticut for a quick break. If you need a specific restaurant or location stop, just let us know when booking or tell your chauffeur during the journey.
              </p>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Do you provide service from Boston back to NYC?</h3>
              <p className="text-gray-300">
                Yes! We offer both one-way and round-trip service. For round trips, you can book a same-day return (chauffeur waits in Boston) or schedule a pickup for a later date. Round-trip bookings receive a discounted rate. We also provide local Boston transportation during your stay if needed.
              </p>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">What if my meeting time changes?</h3>
              <p className="text-gray-300">
                We understand that business schedules change. You can modify your reservation up to 2 hours before scheduled departure at no charge. For last-minute changes, we&apos;ll work with you to accommodate new timing based on chauffeur and vehicle availability.
              </p>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Is this more cost-effective than flying?</h3>
              <p className="text-gray-300">
                For many travelers, yes. When you factor in train tickets or flight costs plus ground transportation on both ends, taxis, and time spent in security/boarding, our service offers comparable or better value—especially for 2+ passengers sharing the cost. Plus, you gain 4 hours of productive time and door-to-door convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Boston Trip?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Reserve your NYC to Boston car service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call
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
            "serviceType": "NYC to Boston Car Service",
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
                "name": "Boston"
              }
            ],
            "description": "Premium black car service from NYC to Boston. Luxury sedans and SUVs with professional chauffeurs for business and leisure travel.",
          })
        }}
      />
    </main>
  )
}

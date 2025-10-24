import React from 'react'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Premium black car solutions for every occasion—from airport transfers to corporate events
          </p>
          <a
            href="tel:+14045138803"
            className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call
          </a>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Complete Black Car Solutions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional chauffeur services tailored to your needs, available 24/7 throughout the New York metropolitan area
          </p>
        </div>

        {/* Airport Transfer Service */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Airport Transfer Service</h3>
                <p className="text-lg text-gray-600">Reliable transportation to and from all NYC airports</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Start or end your journey stress-free with our premium airport transfer service. We serve all New York area airports including JFK, LaGuardia, Newark, Teterboro, and Westchester County Airport. Every airport pickup includes complimentary flight tracking, 60 minutes of wait time, and meet-and-greet service.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Real-time flight tracking—driver adjusts for delays automatically</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">60 minutes complimentary wait time from landing</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Meet and greet inside terminal with name sign</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Luggage assistance and door-to-door service</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Flat-rate pricing—no surge charges or hidden fees</span>
                </div>
              </div>
              <Link
                href="/services/airport-transfer"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">Popular Airport Routes</h4>
              <div className="space-y-4">
                <div className="pb-3 border-b border-gray-300">
                  <span className="text-gray-800">Manhattan to JFK Airport</span>
                </div>
                <div className="pb-3 border-b border-gray-300">
                  <span className="text-gray-800">Manhattan to LaGuardia</span>
                </div>
                <div className="pb-3 border-b border-gray-300">
                  <span className="text-gray-800">Manhattan to Newark (EWR)</span>
                </div>
                <div>
                  <span className="text-gray-800">Manhattan to Teterboro</span>
                </div>
              </div>
              <p className="text-sm text-black mt-4 font-semibold"><a href="tel:+14045138803" className="hover:underline">Contact for flat-rate pricing</a></p>
            </div>
          </div>
        </div>

        {/* Corporate Shuttle Service */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">Corporate Account Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Monthly invoicing with NET 30 payment terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Dedicated account manager for your company</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Volume discounts for frequent travelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Online booking portal with trip history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Detailed expense reporting and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Priority vehicle availability</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Corporate Shuttle Service</h3>
                <p className="text-lg text-gray-600">Professional transportation for your business</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Power your business with reliable corporate transportation. From daily employee shuttles to executive airport service and multi-city roadshows, we provide the consistency and professionalism your company deserves. Our corporate program is trusted by Fortune 500 companies, law firms, financial institutions, and growing startups.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Executive transport for C-suite and VIP clients</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Employee shuttle service between locations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Conference and event transportation coordination</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Multi-vehicle management for large teams</span>
                </div>
              </div>
              <Link
                href="/services/corporate-shuttle"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Executive Car Service */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Executive Car Service</h3>
                <p className="text-lg text-gray-600">First-class transportation for discerning clients</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Make the right impression with our executive car service. Featuring our premium First Class fleet—Mercedes-Benz S-Class, BMW 7 Series, and Cadillac Escalade ESV—you'll experience the pinnacle of luxury ground transportation. Perfect for VIP clients, C-suite executives, celebrities, and anyone who demands the very best.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Mercedes S-Class and BMW 7 Series sedans</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Executive seating with massage function and climate control</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Privacy, discretion, and professional service</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Premium amenities: Wi-Fi, entertainment, refreshments</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Experienced chauffeurs trained for high-profile clients</span>
                </div>
              </div>
              <Link
                href="/services/executive-car-service"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">First Class Fleet</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Mercedes-Benz S-Class</h5>
                  <p className="text-sm text-gray-700">The ultimate luxury sedan with executive rear seating, Burmester sound, and massage function</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">BMW 7 Series</h5>
                  <p className="text-sm text-gray-700">Executive lounge seating with gesture control and premium sound insulation</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Cadillac Escalade ESV</h5>
                  <p className="text-sm text-gray-700">First-class SUV with extended wheelbase, 38-speaker audio, and seating for up to 6</p>
                </div>
              </div>
              <Link href="/fleet" className="inline-block mt-4 text-black font-semibold hover:underline">
                View Complete Fleet →
              </Link>
            </div>
          </div>
        </div>

        {/* Wedding Transportation */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">Wedding Package Options</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Bride & Groom Package</h5>
                  <p className="text-sm text-gray-700">First Class sedan or SUV for the happy couple with red carpet service</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Wedding Party Transport</h5>
                  <p className="text-sm text-gray-700">SUVs and Sprinter vans for bridesmaids, groomsmen, and family</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Guest Shuttle Service</h5>
                  <p className="text-sm text-gray-700">Multiple vehicles for seamless guest transportation between venues</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-1">Full-Day Coverage</h5>
                  <p className="text-sm text-gray-700">From getting ready through reception send-off with dedicated vehicles</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Wedding Transportation</h3>
                <p className="text-lg text-gray-600">Make your special day unforgettable</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your wedding day deserves flawless transportation. We specialize in coordinating all aspects of wedding transport—from the bride and groom's arrival in a luxury sedan to guest shuttles between ceremony and reception. Our experienced team ensures every detail is perfect, allowing you to focus on celebrating your love.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Luxury vehicles for bride, groom, and wedding party</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Guest shuttle coordination between venues</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Red carpet service and vehicle decorations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Champagne service (where permitted)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Dedicated wedding coordinator for planning</span>
                </div>
              </div>
              <Link
                href="/services/wedding"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Hourly/As-Directed Service */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Hourly / As-Directed Service</h3>
                <p className="text-lg text-gray-600">Your personal chauffeur for the day</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Need flexibility? Our hourly service puts a professional chauffeur and luxury vehicle at your disposal for as long as you need. Perfect for multi-stop business meetings, city tours, shopping trips, wine tours, or any occasion where you want the convenience of a dedicated driver waiting for you.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">3-hour minimum, book for as long as you need</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Chauffeur and vehicle stay with you entire time</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Make as many stops as you need</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Change destinations on the fly</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Popular for wine tours, sightseeing, business days</span>
                </div>
              </div>
              <a
                href="tel:+14045138803"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Hourly Rates
              </a>
            </div>
            <div className="bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">Popular Hourly Uses</h4>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong className="text-black">Business Meetings:</strong> Multi-stop executive transport throughout the city
                </li>
                <li className="text-gray-700">
                  <strong className="text-black">Wine Tours:</strong> Long Island or Hudson Valley vineyard visits with designated driver
                </li>
                <li className="text-gray-700">
                  <strong className="text-black">Shopping Trips:</strong> Visit multiple stores with luggage assistance
                </li>
                <li className="text-gray-700">
                  <strong className="text-black">City Tours:</strong> See NYC sights with knowledgeable chauffeur
                </li>
                <li className="text-gray-700">
                  <strong className="text-black">Prom & Events:</strong> Safe, luxurious transport for special occasions
                </li>
                <li className="text-gray-700">
                  <strong className="text-black">Day Trips:</strong> Hamptons, Newport, or upstate destinations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Point-to-Point Service */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 p-8 border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-black">Common Point-to-Point Routes</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Manhattan to Westchester County</li>
                <li>• Brooklyn to Long Island</li>
                <li>• NYC to Connecticut</li>
                <li>• Manhattan to New Jersey</li>
                <li>• Between boroughs (any pickup/drop-off)</li>
                <li>• Business meetings across the city</li>
                <li>• Medical appointments</li>
                <li>• Restaurant reservations</li>
                <li>• Theater and entertainment venues</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Flat-rate pricing available</strong> for most common routes. No surge pricing, ever.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="border-l-4 border-black pl-6 mb-6">
                <h3 className="text-3xl font-bold mb-2 text-black">Point-to-Point Service</h3>
                <p className="text-lg text-gray-600">Direct transport to your destination</p>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sometimes you just need to get from point A to point B in comfort and style. Our point-to-point service provides direct, efficient transportation anywhere in the New York metropolitan area. Whether it's a business meeting in Midtown, dinner reservation in Brooklyn, or visiting family in Westchester, we'll get you there on time and in luxury.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Pickup and drop-off at any address</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Flat-rate pricing for transparency</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Professional chauffeur who knows the area</span>
                </div>
                <div className="flex items-start">
                  <span className="text-black font-bold mr-3">✓</span>
                  <span className="text-gray-700">Traffic monitoring and optimal routing</span>
                </div>
              </div>
              <Link
                href="https://book.mylimobiz.com/v4/nobleblackcar"
                className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Where We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">New York City</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Manhattan</li>
                <li>• Brooklyn</li>
                <li>• Queens</li>
                <li>• Bronx</li>
                <li>• Staten Island</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">Surrounding Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Westchester County</li>
                <li>• Long Island</li>
                <li>• New Jersey</li>
                <li>• Connecticut (Fairfield/New Haven)</li>
                <li>• The Hamptons</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">Long-Distance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Boston</li>
                <li>• Philadelphia</li>
                <li>• Washington DC</li>
                <li>• Newport, RI</li>
                <li>• Custom destinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Noble */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Why Choose Noble</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-3 text-black">Premium Fleet</h3>
            <p className="text-gray-700">Late-model luxury vehicles meticulously maintained and detailed before every ride</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👔</div>
            <h3 className="text-xl font-bold mb-3 text-black">Professional Chauffeurs</h3>
            <p className="text-gray-700">TLC licensed, background-checked, and trained in customer service excellence</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-black">Transparent Pricing</h3>
            <p className="text-gray-700">Flat rates with all fees included—no surge pricing or hidden charges</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-3 text-black">24/7 Availability</h3>
            <p className="text-gray-700">Round-the-clock service for early flights, late nights, and everything between</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Noble Service?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your ride online or speak with our team to discuss your transportation needs
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
            "serviceType": "Black Car Service",
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
                "@type": "State",
                "name": "New York"
              },
              {
                "@type": "State",
                "name": "New Jersey"
              },
              {
                "@type": "State",
                "name": "Connecticut"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Black Car Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airport Transfer Service",
                    "description": "Premium transportation to JFK, LaGuardia, Newark, and Teterboro airports"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Shuttle Service",
                    "description": "Professional business transportation with corporate accounts"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Executive Car Service",
                    "description": "First-class luxury transport in Mercedes S-Class and BMW 7 Series"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Transportation",
                    "description": "Complete wedding transport coordination for ceremony and reception"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hourly Chauffeur Service",
                    "description": "Flexible hourly service with dedicated chauffeur"
                  }
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}

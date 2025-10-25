import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            About Noble
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            New York City's trusted partner for luxury ground transportation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Noble Black Car Service was founded with a simple mission: to provide New York City with the most reliable, professional, and luxurious ground transportation experience possible. In a city that never sleeps, where time is money and first impressions matter, we recognized the need for a black car service that truly understands the demands of modern travelers and businesses.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            From our first airport transfer to becoming a trusted partner for Fortune 500 companies, celebrities, and discerning travelers, we've built our reputation one ride at a time. What started as a commitment to excellence has grown into a comprehensive luxury transportation company serving thousands of satisfied clients across the New York metropolitan area.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Today, Noble operates a premium fleet of late-model luxury vehicles, employs only the most professional chauffeurs, and provides 24/7 service throughout NYC and beyond. Whether it's a critical airport pickup for a C-suite executive, a wedding day that needs to be perfect, or a family vacation that should start stress-free, we bring the same dedication to every single ride.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Reliability</h3>
              <p className="text-gray-300">
                When you book with Noble, you can count on us to be there—on time, every time. We track flights, monitor traffic, and build buffer time into every pickup to ensure punctuality is never in question.
              </p>
            </div>
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professionalism</h3>
              <p className="text-gray-300">
                From our immaculately dressed chauffeurs to our pristine vehicles, professionalism is evident in every detail. We understand that we're often representing you or your company, and we take that responsibility seriously.
              </p>
            </div>
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
              <p className="text-gray-300">
                Good enough isn't in our vocabulary. We constantly raise the bar—upgrading our fleet, training our team, and refining our processes to deliver an experience that exceeds expectations.
              </p>
            </div>
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Luxury</h3>
              <p className="text-gray-300">
                True luxury isn't just about the vehicle—it's about the entire experience. From the moment you book to your safe arrival, every touchpoint reflects our commitment to premium service.
              </p>
            </div>
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Discretion</h3>
              <p className="text-gray-300">
                Privacy matters. Our chauffeurs are trained to be professionally discreet, maintaining confidentiality for all clients—especially important for executives, celebrities, and high-profile travelers.
              </p>
            </div>
            <div className="bg-black p-8 border border-gray-700">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Transparency</h3>
              <p className="text-gray-300">
                No hidden fees, no surge pricing, no surprises. We provide honest, upfront pricing because trust is the foundation of any great service relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">What Sets Us Apart</h2>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Chauffeurs</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We believe our chauffeurs are the heart of our service. That's why we're extremely selective in our hiring process and invest heavily in training. Every Noble chauffeur is:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>TLC licensed with a clean driving record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>Comprehensively background-checked for your safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>Trained in defensive driving and customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>Knowledgeable about NYC, airports, and surrounding areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>Professionally dressed in business attire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span>Fluent in English, many multilingual</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-white">The Noble Difference</h4>
              <p className="text-gray-300 mb-4">
                Unlike rideshare drivers who may be part-time or inexperienced, our chauffeurs are career professionals who take pride in their work. They're not just drivers—they're hospitality professionals who happen to specialize in ground transportation.
              </p>
              <p className="text-gray-300">
                Many of our chauffeurs have been with Noble for years, building relationships with regular clients who request them by name. This continuity creates a level of service that's simply impossible with gig-economy platforms.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gray-900 p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-white">Fleet Standards</h4>
              <p className="text-gray-300 mb-4">
                We maintain our fleet to the highest standards in the industry:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• No vehicle older than 3 years</li>
                <li>• Professional detailing before every service</li>
                <li>• Scheduled maintenance at certified dealerships</li>
                <li>• Daily safety inspections</li>
                <li>• Complete sanitization of all touch points</li>
                <li>• Fresh amenities stocked for each ride</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Premium Fleet</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Your vehicle matters. We exclusively operate late-model luxury vehicles from the world's premier automotive brands—Mercedes-Benz, BMW, Cadillac, and Lincoln. Each vehicle is selected for comfort, safety, and the impression it makes.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                From our Business Sedans perfect for everyday airport transfers to our First Class fleet featuring Mercedes S-Class and BMW 7 Series, we offer the right vehicle for every occasion. Our Mercedes Sprinter vans provide group travel without compromising on luxury.
              </p>
              <Link href="/fleet" className="text-white font-bold hover:underline">
                View Our Complete Fleet →
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Technology & Innovation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                While we value old-school professionalism, we embrace modern technology to enhance your experience:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Real-time flight tracking:</strong> Automatic adjustments for delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>GPS navigation:</strong> Optimal routing and traffic avoidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Digital dispatch:</strong> Efficient chauffeur coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Online booking:</strong> 24/7 reservation system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white font-bold mr-3">✓</span>
                  <span><strong>Corporate portals:</strong> Expense tracking and reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-white">Customer-Centric Approach</h4>
              <p className="text-gray-300 mb-4">
                Technology serves one purpose: making your experience seamless. Whether it's knowing your chauffeur adjusted for your delayed flight without you having to call, or viewing your entire trip history in our corporate portal, we use tech to solve real problems.
              </p>
              <p className="text-gray-300">
                But we never let technology replace the human touch. When you call our office, you speak with a real person who can help immediately—no phone trees, no voicemail, no frustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-white">Corporate Clients</h3>
              <p className="text-gray-300">
                Fortune 500 companies, law firms, financial institutions, and growing startups rely on Noble for executive transport and employee shuttles.
              </p>
            </div>
            <div className="bg-black p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Frequent Travelers</h3>
              <p className="text-gray-300">
                Business travelers who need reliable airport service that's there on time, every time, with no stress or surprises.
              </p>
            </div>
            <div className="bg-black p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">👰</div>
              <h3 className="text-xl font-bold mb-3 text-white">Special Events</h3>
              <p className="text-gray-300">
                Weddings, proms, anniversaries, and celebrations where transportation needs to be flawless and memorable.
              </p>
            </div>
            <div className="bg-black p-6 border border-gray-700 text-center">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3 text-white">Families</h3>
              <p className="text-gray-300">
                Parents who want safe, comfortable transportation for their families—from airport trips to city exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coverage */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">Where We Operate</h2>
        <p className="text-xl text-gray-300 mb-12">
          Based in New York City, we provide comprehensive coverage throughout the metropolitan area and beyond.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4 text-white">Primary Service Area</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• All five NYC boroughs</li>
              <li>• Westchester County</li>
              <li>• Long Island</li>
              <li>• Northern New Jersey</li>
              <li>• Fairfield County, CT</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4 text-white">Airports Served</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• JFK Airport</li>
              <li>• LaGuardia Airport</li>
              <li>• Newark Airport</li>
              <li>• Teterboro Airport</li>
              <li>• Westchester Airport</li>
              <li>• MacArthur Airport</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4 text-white">Long-Distance</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• The Hamptons</li>
              <li>• Boston</li>
              <li>• Philadelphia</li>
              <li>• Washington DC</li>
              <li>• Newport, RI</li>
              <li>• Custom destinations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every time you choose Noble, you're choosing a company that values your time, respects your needs, and takes pride in delivering exceptional service. We're not satisfied with being "good enough"—we're committed to being the best black car service in New York City.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether this is your first ride with us or your hundredth, you'll experience the same level of professionalism, reliability, and luxury that has made Noble the preferred choice for thousands of discerning clients.
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            We don't just provide rides. We deliver peace of mind.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Noble Difference</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of satisfied clients who trust Noble for their ground transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call
            </a>
            <Link
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Book Your First Ride
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
            "@type": "Organization",
            "name": "Noble Black Car Service",
            "url": "https://nobleblackcarservice.com",
            "logo": "https://nobleblackcarservice.com/logo.png",
            "description": "Premium black car service in New York City providing luxury ground transportation, airport transfers, corporate shuttles, and executive car service.",
            "telephone": "+1-404-513-8803",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
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
            "sameAs": []
          })
        }}
      />
    </main>
  )
}

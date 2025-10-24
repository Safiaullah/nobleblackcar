import React from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function TeterboroAirportPage() {
  const teterboroSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Teterboro Airport Car Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Noble Black Car Service",
      "image": "https://nobleblackcarservice.com/images/mercedes-s-class.png",
      "telephone": "+1-404-513-8803",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Teterboro"
    },
    "description": "Premium car service to Teterboro Airport (TEB). Private jet transfers with luxury vehicles, professional chauffeurs, and personalized service for corporate executives and VIP clients.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "120",
      "description": "Flat-rate pricing from Manhattan to Teterboro Airport"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does car service to Teterboro Airport cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer competitive flat-rate pricing from Manhattan to Teterboro Airport for all vehicle types. Pricing includes tolls, meet and greet, and 30 minutes complimentary wait time. Contact us for a personalized quote. We offer special rates for corporate accounts and frequent travelers."
        }
      },
      {
        "@type": "Question",
        "name": "How far is Teterboro Airport from Manhattan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teterboro Airport is approximately 12 miles from Midtown Manhattan, typically a 20-35 minute drive depending on traffic. It's the closest airport to Manhattan for private jet travelers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide service for private jet arrivals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in private jet transportation. Our chauffeurs track your flight in real-time and coordinate with FBO staff for seamless pickup. We provide meet and greet service at your aircraft or inside the FBO terminal."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles do you offer for Teterboro Airport transfers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Mercedes S-Class and BMW 7 Series sedans, Cadillac Escalade ESVs, and Mercedes Sprinter vans for larger groups. All vehicles are meticulously maintained, late-model luxury vehicles with professional chauffeurs."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book Teterboro Airport service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking at least 24-48 hours in advance for Teterboro Airport transfers. However, we also accommodate last-minute requests based on availability. For corporate accounts, we offer on-demand service with priority booking."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all FBOs at Teterboro Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide service to all Fixed Base Operators (FBOs) at Teterboro Airport including Signature Flight Support, Atlantic Aviation, Jet Aviation, and others. Our chauffeurs are familiar with all FBO locations and procedures."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-black border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-2xl font-bold text-white">Noble Black Car</a>
              <div className="flex items-center gap-6">
                <a href="tel:+14045138803" className="flex items-center gap-2 text-white hover:text-gray-300">
                  <span>📞 (404) 513-8803</span>
                </a>
                <a
                  href="https://book.mylimobiz.com/v4/nobleblackcar"
                  className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
              <p className="text-blue-300 text-sm font-semibold">TETERBORO AIRPORT (TEB)</p>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Teterboro Airport Car Service
              <br />
              <span className="text-gray-300">Premium Private Jet Transportation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Luxury car service to and from Teterboro Airport (TEB). Servicing all FBOs with professional chauffeurs, luxury vehicles, and personalized VIP service for private jet travelers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
              <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
                <div className="text-blue-400 text-3xl mb-3">
                  <MapPinIcon className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">~12 Miles</h3>
                <p className="text-gray-300 text-sm">from Midtown</p>
              </div>

              <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
                <div className="text-blue-400 text-3xl mb-3">
                  <ClockIcon className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">20-35 Min</h3>
                <p className="text-gray-300 text-sm">Average Drive Time</p>
              </div>

              <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
                <div className="text-blue-400 text-3xl mb-3">
                  <PhoneIcon className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">24/7 Service</h3>
                <p className="text-gray-300 text-sm">Always Available</p>
              </div>

              <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
                <div className="text-blue-400 text-3xl mb-3">
                  <CheckCircleIcon className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">All FBOs</h3>
                <p className="text-gray-300 text-sm">Complete Coverage</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+14045138803"
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                CALL NOW
              </a>
              <a
                href="https://book.mylimobiz.com/v4/nobleblackcar"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                RESERVE ONLINE
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-2 text-white">24/7 Availability</h3>
                <p className="text-gray-300">Round-the-clock service for all private jet schedules</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2 text-white">All FBOs Covered</h3>
                <p className="text-gray-300">Service to Signature, Atlantic, Jet Aviation & more</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2 text-white">VIP Service</h3>
                <p className="text-gray-300">Personalized meet & greet at aircraft or FBO</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2 text-white">Flight Tracking</h3>
                <p className="text-gray-300">Real-time coordination with your flight schedule</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">Premium Car Service to Teterboro Airport</h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Teterboro Airport (TEB) is the premier private aviation airport serving the New York metropolitan area. As the #1 choice for private jet travelers, business executives, and VIP clients, Teterboro demands a level of ground transportation that matches the sophistication of private aviation. Noble Black Car Service provides that elevated experience.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Located just 12 miles from Midtown Manhattan in Teterboro, New Jersey, TEB is the closest airport to Manhattan and handles more than 60,000 private jet operations annually. Whether you're arriving on a Gulfstream G650, departing on a Citation X, or coordinating transportation for your corporate flight department, our team understands the unique requirements of private aviation ground transportation.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Why Choose Noble Black Car for Teterboro Airport?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Experience with Private Aviation</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Unlike standard car services, we specialize in private jet transportation. Our chauffeurs are trained in FBO protocols, understand the nuances of private aviation scheduling, and coordinate directly with FBO staff to ensure seamless pickups and drop-offs. We track your tail number in real-time and adjust for any schedule changes.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Service to All Teterboro FBOs</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                We provide service to all Fixed Base Operators at Teterboro Airport:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
                <li><strong className="text-white">Signature Flight Support TEB</strong> - Full-service FBO with executive terminal</li>
                <li><strong className="text-white">Atlantic Aviation TEB</strong> - Premium amenities and services</li>
                <li><strong className="text-white">Jet Aviation TEB</strong> - Luxury FBO with conference facilities</li>
                <li><strong className="text-white">Meridian TEB</strong> - Modern facilities with VIP lounges</li>
                <li><strong className="text-white">Million Air TEB</strong> - Boutique FBO experience</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Our chauffeurs know each FBO's layout, procedures, and preferred pickup/drop-off locations, ensuring a smooth experience regardless of which terminal you're using.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Luxury Fleet for Discerning Travelers</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                When you fly private, your ground transportation should reflect the same level of excellence. Our fleet includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
                <li><strong className="text-white">Mercedes-Benz S-Class</strong> - The gold standard in luxury sedans with massage seats, premium sound system, and executive workspace</li>
                <li><strong className="text-white">BMW 7 Series</strong> - German engineering meets sophisticated comfort</li>
                <li><strong className="text-white">Cadillac Escalade ESV</strong> - Spacious luxury SUV perfect for families or groups</li>
                <li><strong className="text-white">Mercedes Sprinter Van</strong> - Executive shuttle for larger groups up to 14 passengers</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                All vehicles are late-model (typically less than 2 years old), meticulously maintained, and detailed before every trip. We provide bottled water, phone chargers, and Wi-Fi connectivity as standard amenities.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Teterboro Airport Service Details</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Seamless Arrival Experience</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                For arrivals at Teterboro Airport, our process is designed for maximum convenience:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-lg space-y-3 text-gray-300">
                <li><strong className="text-white">Flight Tracking</strong> - We monitor your tail number in real-time from departure through landing</li>
                <li><strong className="text-white">FBO Coordination</strong> - We communicate with your FBO to confirm your ETA and preferred pickup location</li>
                <li><strong className="text-white">Meet & Greet</strong> - Your chauffeur meets you at the aircraft steps or inside the FBO terminal</li>
                <li><strong className="text-white">Luggage Assistance</strong> - We handle all luggage loading while you relax</li>
                <li><strong className="text-white">Immediate Departure</strong> - No waiting - we depart as soon as you're ready</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Efficient Departure Process</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                For departures from Manhattan to Teterboro Airport:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-lg space-y-3 text-gray-300">
                <li><strong className="text-white">Advance Scheduling</strong> - We confirm your flight time and FBO 24 hours prior</li>
                <li><strong className="text-white">Traffic Analysis</strong> - We monitor real-time traffic and adjust pickup time accordingly</li>
                <li><strong className="text-white">Punctual Pickup</strong> - Your chauffeur arrives 5-10 minutes early</li>
                <li><strong className="text-white">Direct to FBO</strong> - We drive directly to your designated FBO</li>
                <li><strong className="text-white">Curbside Service</strong> - We drop you at the FBO entrance and handle luggage</li>
              </ol>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Pricing & Service Areas</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Transparent Flat-Rate Pricing</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                We offer flat-rate pricing for Teterboro Airport transfers. No surge pricing, no hidden fees, no surprises. Our rates include all tolls, gratuity optional.
              </p>

              <div className="bg-black p-6 rounded-lg mb-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-white">Sample Rates from Manhattan to Teterboro Airport:</h4>
                <ul className="space-y-2 text-lg">
                  <li className="flex justify-between"><span className="text-gray-300">Luxury Sedan (S-Class, 7 Series)</span> <span className="font-bold text-white">Contact for Quote</span></li>
                  <li className="flex justify-between"><span className="text-gray-300">Luxury SUV (Escalade ESV)</span> <span className="font-bold text-white">Contact for Quote</span></li>
                  <li className="flex justify-between"><span className="text-gray-300">Sprinter Van (up to 14 passengers)</span> <span className="font-bold text-white">Contact for Quote</span></li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">*Rates vary by pickup location. Contact us for exact quote.</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Service Areas</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                We provide Teterboro Airport car service from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
                <li>Manhattan (all neighborhoods)</li>
                <li>Brooklyn</li>
                <li>Queens</li>
                <li>Bronx</li>
                <li>Northern New Jersey</li>
                <li>Westchester County</li>
                <li>Long Island</li>
                <li>Connecticut (Fairfield County)</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Corporate & Frequent Traveler Programs</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Corporate Accounts</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                We work with corporate flight departments, executive travel managers, and businesses that require consistent, reliable transportation to Teterboro Airport. Our corporate program includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
                <li>Dedicated account manager</li>
                <li>Priority booking and 24/7 dispatch</li>
                <li>Monthly consolidated billing</li>
                <li>Volume discounts for frequent travelers</li>
                <li>Customized reporting for expense management</li>
                <li>Preferred chauffeur assignments</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Last-Minute & On-Demand Service</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Private aviation often requires flexibility. We maintain a fleet specifically for Teterboro Airport and can accommodate last-minute requests with as little as 2 hours notice (subject to availability). Our 24/7 dispatch team is always ready to coordinate your ground transportation.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">About Teterboro Airport</h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Teterboro Airport has served as the New York area's premier private aviation gateway since 1919. With its proximity to Manhattan (just 12 miles), world-class FBOs, and 24/7 operations, TEB handles more private jet traffic than any other airport in the United States.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                The airport features a 7,000-foot main runway capable of accommodating all business jets from light jets like the Citation CJ4 to heavy jets like the Gulfstream G650 and Boeing Business Jet. Multiple FBOs provide luxury amenities including conference rooms, executive lounges, catering services, and concierge assistance.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Teterboro's location in Bergen County, New Jersey, just across the George Washington Bridge from Manhattan, makes it the fastest and most convenient option for private jet travelers heading to or from New York City.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Book Your Teterboro Airport Transfer</h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Experience the difference of working with a car service that truly understands private aviation. Whether you're a frequent flyer, corporate travel manager, or occasional private jet traveler, Noble Black Car Service provides the reliability, professionalism, and luxury you expect.
              </p>

              <div className="bg-black text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-lg mb-6">Call us now or book online for your next Teterboro Airport transfer.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+14045138803"
                    className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors"
                  >
                    Call (404) 513-8803
                  </a>
                  <a
                    href="https://book.mylimobiz.com/v4/nobleblackcar"
                    className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors"
                  >
                    Book Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">How much does car service to Teterboro Airport cost?</h3>
                <p className="text-gray-300">We offer competitive flat-rate pricing from Manhattan to Teterboro Airport for all vehicle types. Pricing includes tolls, meet and greet, and 30 minutes complimentary wait time. Contact us for a personalized quote. We offer special rates for corporate accounts and frequent travelers.</p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">How far is Teterboro Airport from Manhattan?</h3>
                <p className="text-gray-300">Teterboro Airport is approximately 12 miles from Midtown Manhattan, typically a 20-35 minute drive depending on traffic. It's the closest airport to Manhattan for private jet travelers.</p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">Do you provide service for private jet arrivals?</h3>
                <p className="text-gray-300">Yes, we specialize in private jet transportation. Our chauffeurs track your flight in real-time and coordinate with FBO staff for seamless pickup. We provide meet and greet service at your aircraft or inside the FBO terminal.</p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">What types of vehicles do you offer for Teterboro Airport transfers?</h3>
                <p className="text-gray-300">We offer Mercedes S-Class and BMW 7 Series sedans, Cadillac Escalade ESVs, and Mercedes Sprinter vans for larger groups. All vehicles are meticulously maintained, late-model luxury vehicles with professional chauffeurs.</p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">How far in advance should I book Teterboro Airport service?</h3>
                <p className="text-gray-300">We recommend booking at least 24-48 hours in advance for Teterboro Airport transfers. However, we also accommodate last-minute requests based on availability. For corporate accounts, we offer on-demand service with priority booking.</p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">Do you serve all FBOs at Teterboro Airport?</h3>
                <p className="text-gray-300">Yes, we provide service to all Fixed Base Operators (FBOs) at Teterboro Airport including Signature Flight Support, Atlantic Aviation, Jet Aviation, and others. Our chauffeurs are familiar with all FBO locations and procedures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
                <p className="text-gray-400 text-sm">
                  Premium Teterboro airport car service.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/airports/jfk" className="hover:text-white transition-colors">JFK Airport</a></li>
                  <li><a href="/airports/laguardia" className="hover:text-white transition-colors">LaGuardia Airport</a></li>
                  <li><a href="/airports/newark" className="hover:text-white transition-colors">Newark Airport</a></li>
                  <li><a href="/services/corporate-shuttle" className="hover:text-white transition-colors">Corporate Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="tel:+14045138803" className="hover:text-white transition-colors">(404) 513-8803</a></li>
                  <li><a href="mailto:info@nobleblackcarservice.com" className="hover:text-white transition-colors">info@nobleblackcarservice.com</a></li>
                  <li className="text-gray-400">Available 24/7</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Service Areas</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Manhattan</li>
                  <li>Brooklyn & Queens</li>
                  <li>New Jersey</li>
                  <li>Westchester County</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Noble Black Car Service. All rights reserved.</p>
            </div>
          </div>
        </footer>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teterboroSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </main>
  );
}

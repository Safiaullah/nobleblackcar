import React from 'react'
import Link from 'next/link'

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Premium Fleet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort with our meticulously maintained fleet of premium vehicles
          </p>
          <a
            href="tel:+14045138803"
            className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call
          </a>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Choose Your Vehicle</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From business sedans to first-class SUVs, our fleet offers the perfect vehicle for every occasion
          </p>
        </div>

        {/* Business Sedan */}
        <div className="mb-20">
          <div className="border-l-4 border-black pl-6 mb-8">
            <h3 className="text-3xl font-bold mb-2 text-black">Business Sedan</h3>
            <p className="text-lg text-gray-700">Professional elegance for corporate travel</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Lincoln MKZ</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 3 passengers</p>
                  <p><strong>Luggage:</strong> 2-3 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Premium leather seating</li>
                    <li>Climate control</li>
                    <li>Complimentary Wi-Fi</li>
                    <li>Phone charging ports</li>
                    <li>Bottled water</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> Airport transfers, business meetings, point-to-point service</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Chrysler 300</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 3 passengers</p>
                  <p><strong>Luggage:</strong> 2-3 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Spacious cabin</li>
                    <li>Premium sound system</li>
                    <li>Tinted windows for privacy</li>
                    <li>USB charging ports</li>
                    <li>Complimentary refreshments</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> Executive transport, corporate events, city travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Class Sedan */}
        <div className="mb-20">
          <div className="border-l-4 border-black pl-6 mb-8">
            <Link href="/fleet/first-class-sedan" className="hover:opacity-80 transition-opacity">
              <h3 className="text-3xl font-bold mb-2 text-black">First Class Sedan</h3>
            </Link>
            <p className="text-lg text-gray-700">Ultimate luxury for discerning travelers</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Mercedes-Benz S-Class</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 3 passengers</p>
                  <p><strong>Luggage:</strong> 3 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Executive rear seating with massage function</li>
                    <li>Ambient lighting system</li>
                    <li>Premium Burmester sound system</li>
                    <li>Rear entertainment screens</li>
                    <li>Climate-controlled seats</li>
                    <li>Complimentary Wi-Fi and refreshments</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> VIP clients, C-suite executives, special occasions</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">BMW 7 Series</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 3 passengers</p>
                  <p><strong>Luggage:</strong> 3 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Executive lounge seating</li>
                    <li>Gesture control technology</li>
                    <li>Premium sound insulation</li>
                    <li>Individual climate zones</li>
                    <li>Wireless device charging</li>
                    <li>Complimentary premium beverages</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> High-profile clients, luxury airport service, corporate VIPs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business SUV */}
        <div className="mb-20">
          <div className="border-l-4 border-black pl-6 mb-8">
            <h3 className="text-3xl font-bold mb-2 text-black">Business SUV</h3>
            <p className="text-lg text-gray-700">Spacious comfort for families and groups</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Chevrolet Suburban</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 6 passengers</p>
                  <p><strong>Luggage:</strong> 5-6 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Three rows of seating</li>
                    <li>Ample cargo space</li>
                    <li>Premium sound system</li>
                    <li>Dual climate control</li>
                    <li>Multiple charging ports</li>
                    <li>Complimentary Wi-Fi</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> Family travel, group airport transfers, team transport</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 text-black">Lincoln Navigator</h4>
                <div className="space-y-3 text-gray-800">
                  <p><strong>Capacity:</strong> Up to 6 passengers</p>
                  <p><strong>Luggage:</strong> 4-5 large bags</p>
                  <p><strong>Features:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Luxury captain's chairs</li>
                    <li>Panoramic sunroof</li>
                    <li>Revel audio system</li>
                    <li>Power running boards</li>
                    <li>Premium leather interior</li>
                    <li>Complimentary refreshments</li>
                  </ul>
                  <p className="mt-4"><strong>Best For:</strong> Executive groups, corporate events, premium family service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Class SUV */}
        <div className="mb-20">
          <div className="border-l-4 border-black pl-6 mb-8">
            <Link href="/fleet/first-class-suv" className="hover:opacity-80 transition-opacity">
              <h3 className="text-3xl font-bold mb-2 text-black">First Class SUV</h3>
            </Link>
            <p className="text-lg text-gray-700">The pinnacle of luxury SUV travel</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-black">Cadillac Escalade ESV</h4>
            <div className="space-y-3 text-gray-800">
              <p><strong>Capacity:</strong> Up to 6 passengers</p>
              <p><strong>Luggage:</strong> 6-7 large bags</p>
              <p><strong>Features:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Executive rear seating with premium leather</li>
                <li>Extended wheelbase for maximum legroom</li>
                <li>38-speaker AKG Studio Reference audio system</li>
                <li>Rear seat entertainment system</li>
                <li>Quad-zone climate control</li>
                <li>Ambient lighting with 26 color options</li>
                <li>Wireless charging pads</li>
                <li>Power-folding third row</li>
                <li>Complimentary premium refreshments</li>
              </ul>
              <p className="mt-4"><strong>Best For:</strong> VIP groups, luxury family travel, special events, roadshows</p>
            </div>
          </div>
        </div>

        {/* Sprinter Van */}
        <div className="mb-20">
          <div className="border-l-4 border-black pl-6 mb-8">
            <h3 className="text-3xl font-bold mb-2 text-black">Sprinter Van</h3>
            <p className="text-lg text-gray-700">Maximum capacity with luxury amenities</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h4 className="text-2xl font-bold mb-4 text-black">Mercedes-Benz Sprinter</h4>
            <div className="space-y-3 text-gray-800">
              <p><strong>Capacity:</strong> Up to 14 passengers</p>
              <p><strong>Luggage:</strong> 10-12 large bags</p>
              <p><strong>Features:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Executive leather captain's chairs</li>
                <li>Conference-style seating available</li>
                <li>Premium sound and entertainment system</li>
                <li>Individual reading lights and air vents</li>
                <li>Tinted privacy windows</li>
                <li>Multiple USB and power outlets</li>
                <li>Complimentary Wi-Fi</li>
                <li>Luggage racks and storage compartments</li>
                <li>Climate control throughout</li>
              </ul>
              <p className="mt-4"><strong>Best For:</strong> Corporate shuttles, group airport transfers, weddings, events, team building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Fleet Standards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">Immaculate Maintenance</h3>
              <p className="text-gray-700">
                Every vehicle undergoes rigorous maintenance schedules and daily inspections. Our fleet is serviced exclusively by certified technicians using genuine manufacturer parts.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">Latest Models</h3>
              <p className="text-gray-700">
                We maintain a modern fleet with vehicles no older than 3 years. You'll always ride in the latest models featuring cutting-edge safety technology and luxury amenities.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-black">Premium Cleanliness</h3>
              <p className="text-gray-700">
                Professional detailing before every service. Interior and exterior deep cleaning, sanitization of all touch points, and fresh amenities guaranteed with every ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Guide */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">How to Choose Your Vehicle</h2>

        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-3 text-black">For Airport Transfers</h3>
            <p className="text-gray-700 mb-3">
              <strong>Solo travelers or couples:</strong> Business Sedan (Lincoln MKZ, Chrysler 300) provides ample comfort and luggage space for 1-2 passengers with 2-3 bags.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Families or groups of 3-4:</strong> Business SUV (Suburban, Navigator) offers spacious seating and generous luggage capacity for international trips.
            </p>
            <p className="text-gray-700">
              <strong>Large groups or teams:</strong> Mercedes Sprinter accommodates up to 14 passengers with room for everyone's luggage.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-3 text-black">For Corporate Travel</h3>
            <p className="text-gray-700 mb-3">
              <strong>Executive meetings:</strong> First Class Sedan (Mercedes S-Class, BMW 7 Series) makes the right impression with VIP clients and C-suite executives.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Team transport:</strong> Business SUV or Sprinter for moving groups between office locations, conferences, or client visits.
            </p>
            <p className="text-gray-700">
              <strong>Roadshows:</strong> First Class SUV (Escalade ESV) provides luxury and space for multi-city executive tours.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-3 text-black">For Special Events</h3>
            <p className="text-gray-700 mb-3">
              <strong>Weddings:</strong> First Class Sedan for bride and groom, First Class SUV for wedding party, Sprinter for guest shuttles.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Concerts and sporting events:</strong> Any vehicle works, but SUVs and Sprinters handle larger groups comfortably.
            </p>
            <p className="text-gray-700">
              <strong>Wine tours and day trips:</strong> SUVs and Sprinters offer comfort for all-day excursions with room for purchases and personal items.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="text-2xl font-bold mb-3 text-black">Premium Experience Upgrades</h3>
            <p className="text-gray-700 mb-3">
              Choose First Class options when you want:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Enhanced privacy and discretion</li>
              <li>Superior comfort for longer journeys</li>
              <li>Impression management with high-profile clients</li>
              <li>Advanced entertainment and connectivity features</li>
              <li>Maximum legroom and executive seating</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fleet Amenities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Standard Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Complimentary Wi-Fi</h3>
              <p className="text-gray-700">Stay connected throughout your journey</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Bottled Water</h3>
              <p className="text-gray-700">Fresh refreshments on every ride</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Phone Chargers</h3>
              <p className="text-gray-700">USB and wireless charging available</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Climate Control</h3>
              <p className="text-gray-700">Individual temperature preferences</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Premium Audio</h3>
              <p className="text-gray-700">Concert-quality sound systems</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Privacy Windows</h3>
              <p className="text-gray-700">Tinted glass for discretion</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Leather Seating</h3>
              <p className="text-gray-700">Premium materials throughout</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2 text-black">Luggage Assistance</h3>
              <p className="text-gray-700">Professional chauffeur service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chauffeur Standards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Professional Chauffeurs</h2>
        <p className="text-xl text-gray-700 mb-8">
          Our vehicles are only as good as the professionals behind the wheel. Every Noble chauffeur is:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Fully Licensed and Insured</strong> - TLC licensed with clean driving records</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Background Checked</strong> - Comprehensive screening for your safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Professionally Trained</strong> - Defensive driving and customer service certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Impeccably Dressed</strong> - Professional attire for every service</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Local Experts</strong> - Knowledge of NYC, airports, and surrounding areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Multilingual</strong> - Many speak multiple languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Discreet and Professional</strong> - Your privacy is paramount</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span><strong>Technology Equipped</strong> - Real-time flight tracking and GPS navigation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Fleet?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your ride today or speak with our team to find the perfect vehicle for your needs
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
            "@type": "ItemList",
            "name": "Noble Black Car Service Fleet",
            "description": "Luxury vehicle fleet for black car service in New York City including sedans, SUVs, and vans",
            "url": "https://nobleblackcarservice.com/fleet",
            "numberOfItems": 5,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "Business Sedan - Lincoln MKZ",
                  "description": "Professional business sedan for executive airport transfers and corporate transportation",
                  "brand": "Lincoln",
                  "category": "Business Sedan",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://nobleblackcarservice.com/fleet/business-sedan"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "First Class Sedan - Mercedes-Benz S-Class",
                  "description": "Ultimate luxury sedan for premium executive travel and special occasions",
                  "brand": {
                    "@type": "Brand",
                    "name": "Mercedes-Benz"
                  },
                  "category": "First Class Sedan",
                  "image": "https://nobleblackcarservice.com/images/mercedes-s-class.jpg",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://nobleblackcarservice.com/fleet/first-class-sedan",
                    "priceCurrency": "USD"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Business SUV - Chevrolet Suburban",
                  "description": "Spacious SUV for group airport transfers and corporate events",
                  "brand": "Chevrolet",
                  "category": "Business SUV",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://nobleblackcarservice.com/fleet/business-suv"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "First Class SUV - Cadillac Escalade ESV",
                  "description": "Premium extended SUV for luxury group transportation and VIP service",
                  "brand": {
                    "@type": "Brand",
                    "name": "Cadillac"
                  },
                  "category": "First Class SUV",
                  "image": "https://nobleblackcarservice.com/images/cadillac-escalade.jpg",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://nobleblackcarservice.com/fleet/first-class-suv",
                    "priceCurrency": "USD"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Product",
                  "name": "Sprinter Van - Mercedes-Benz",
                  "description": "14-passenger luxury van for large group events and airport transfers",
                  "brand": "Mercedes-Benz",
                  "category": "Sprinter Van",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://nobleblackcarservice.com/fleet/sprinter"
                  }
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}

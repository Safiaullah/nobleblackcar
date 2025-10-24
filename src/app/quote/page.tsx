'use client'

import Script from 'next/script'
import Link from 'next/link'

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Book Your Ride</h1>
          <p className="text-xl text-gray-200">Instant booking with guaranteed flat rates</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-black mb-2">Instant Booking</h3>
            <p className="text-gray-600">Book and confirm in seconds</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-black mb-2">Flat-Rate Pricing</h3>
            <p className="text-gray-600">No surge pricing, ever</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="font-bold text-black mb-2">Professional Service</h3>
            <p className="text-gray-600">Licensed & insured chauffeurs</p>
          </div>
        </div>

        {/* LimoAnywhere Booking Widget */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <div id="limo-anywhere-widget"></div>
        </div>

        <div className="mt-12 bg-black text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Booking?</h3>
          <p className="text-gray-300 mb-4">Call our reservations team 24/7 for immediate assistance</p>
          <a href="tel:+14045138803" className="text-3xl font-bold hover:underline">(404) 513-8803</a>
          <p className="text-gray-300 mt-4">
            Or visit our <Link href="/contact" className="text-blue-400 hover:underline">contact page</Link>
          </p>
        </div>

        {/* Popular Services Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/services/airport-transfer" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Airport Transfers</h3>
              <p className="text-gray-600 text-sm">Reliable service to all NYC airports</p>
            </Link>
            <Link href="/services/corporate-shuttle" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Corporate Shuttle</h3>
              <p className="text-gray-600 text-sm">Professional business transportation</p>
            </Link>
            <Link href="/services/executive-car-service" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Executive Car Service</h3>
              <p className="text-gray-600 text-sm">Premium executive travel</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-black text-center">NYC Airports We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/airports/jfk" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">JFK Airport</h3>
              <p className="text-gray-600 text-sm">Service to JFK International</p>
            </Link>
            <Link href="/airports/laguardia" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">LaGuardia Airport</h3>
              <p className="text-gray-600 text-sm">Service to LaGuardia</p>
            </Link>
            <Link href="/airports/newark" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Newark Airport</h3>
              <p className="text-gray-600 text-sm">Service to Newark Liberty</p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-black text-center">Our Fleet</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/fleet/business-sedan" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Business Sedan</h3>
              <p className="text-gray-600 text-sm">Executive sedans for 1-3 passengers</p>
            </Link>
            <Link href="/fleet/business-suv" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Business SUV</h3>
              <p className="text-gray-600 text-sm">Luxury SUVs for 1-5 passengers</p>
            </Link>
            <Link href="/fleet/sprinter" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">Sprinter Van</h3>
              <p className="text-gray-600 text-sm">Group transportation up to 14 passengers</p>
            </Link>
            <Link href="/fleet" className="bg-gray-50 p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 text-black">View All Vehicles</h3>
              <p className="text-gray-600 text-sm">See our complete fleet</p>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline text-lg">
              Return to Homepage
            </Link>
            {' | '}
            <Link href="/services" className="text-blue-600 hover:underline text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* LimoAnywhere Booking Widget Script */}
      <Script
        src="https://book.limoanywhere.com/v3.0/consumer/js/scripts.min.js?affiliateid=2236"
        strategy="lazyOnload"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Black Car Service Booking",
        "provider": {
          "@type": "Organization",
          "name": "Noble Black Car Service",
          "telephone": "+1-404-513-8803",
          "areaServed": {
            "@type": "City",
            "name": "New York"
          }
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      })}} />
    </main>
  )
}

import React from 'react'
import Link from 'next/link'

export default function WashingtonDCRoutePage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-black">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">NYC to Washington DC Car Service</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Professional luxury transportation to the nation&apos;s capital</p>
          <a href="tel:+14045138803" className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Book Now: (404) 513-8803</a>
        </div>
      </section>

      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl mb-2">⏱️</div><div className="text-3xl font-bold text-white mb-2">4-5 Hours</div><p className="text-gray-300">Drive time</p></div>
          <div><div className="text-4xl mb-2">📍</div><div className="text-3xl font-bold text-white mb-2">225 Miles</div><p className="text-gray-300">Via I-95</p></div>
          <div><div className="text-4xl mb-2">💰</div><div className="text-3xl font-bold text-white mb-2">Flat Rate</div><p className="text-gray-300">Contact for quote</p></div>
          <div><div className="text-4xl mb-2">🚗</div><div className="text-3xl font-bold text-white mb-2">24/7</div><p className="text-gray-300">Available</p></div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto bg-black">
        <h2 className="text-4xl font-bold mb-8 text-white">NYC to DC Luxury Car Service</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">Travel to Washington DC in complete comfort with Noble&apos;s premium car service. Perfect for government affairs, lobbying trips, business meetings, sightseeing, or visiting the Smithsonian museums. Our professional chauffeurs provide door-to-door service from anywhere in NYC to any DC destination.</p>

        <div className="bg-black p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our DC Service</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Work productively during the 4-5 hour journey with Wi-Fi and power</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">No dealing with Amtrak schedules or airport security</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Direct door-to-door service to Capitol Hill, K Street, or any DC address</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Flat-rate pricing including all tolls through NJ, Delaware, and Maryland</span></li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Vehicle Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Sedans</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Business Sedan (Lincoln MKZ, Chrysler 300)</li>
                <li>• First Class Sedan (Mercedes S-Class, BMW 7 Series)</li>
                <li>• Comfortable for up to 3 passengers</li>
              </ul>
            </div>
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">SUVs</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Business SUV (Suburban, Navigator)</li>
                <li>• First Class SUV (Cadillac Escalade ESV)</li>
                <li>• Spacious for up to 6 passengers</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-6">Contact us for flat-rate pricing on one-way or round-trip service</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto bg-black">
        <h2 className="text-4xl font-bold mb-12 text-white">Popular DC Destinations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Government & Business</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Capitol Hill and Congressional offices</li>
              <li>• K Street lobbying firms</li>
              <li>• White House area</li>
              <li>• Federal agencies and departments</li>
            </ul>
          </div>
          <div className="bg-black p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Museums & Monuments</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Smithsonian museums</li>
              <li>• Lincoln and Washington Monuments</li>
              <li>• National Mall</li>
              <li>• Arlington National Cemetery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your DC Trip</h2>
          <p className="text-xl mb-8 text-gray-300">Professional car service to Washington DC</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Book Online</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org","@type": "Service","serviceType": "NYC to Washington DC Car Service","provider": {"@type": "Organization","name": "Noble Black Car Service","telephone": "+1-404-513-8803"}})}} />
    </main>
  )
}

import React from 'react'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function IslipAirportPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">LONG ISLAND MACARTHUR AIRPORT (ISP)</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            MacArthur Airport Car Service
            <br />
            <span className="text-gray-300">Long Island ISP Airport Transportation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional car service to and from Long Island MacArthur Airport. Convenient alternative to JFK and LaGuardia for Suffolk County, Nassau County, and eastern Long Island travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">
                <MapPinIcon className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">~50 Miles</h3>
              <p className="text-gray-300 text-sm">from Manhattan</p>
            </div>

            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">
                <ClockIcon className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">60-90 Min</h3>
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
              <h3 className="text-xl font-bold text-white mb-1">Flight Tracking</h3>
              <p className="text-gray-300 text-sm">60 Min Wait Time</p>
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

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white">Long Island MacArthur Airport Service</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">Noble provides professional car service to and from Long Island MacArthur Airport (ISP) in Islip, NY. As Long Island&apos;s convenient alternative to JFK and LaGuardia, MacArthur Airport offers easier access for Suffolk County, Nassau County, and eastern Long Island travelers.</p>

        <div className="bg-black p-8 border-l-4 border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">ISP Airport Service Includes</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Flight tracking and 60 minutes complimentary wait time</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Meet and greet service inside terminal</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Professional chauffeurs familiar with MacArthur Airport</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Flat-rate pricing from all Long Island locations</span></li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">Pricing from Long Island</h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-700 bg-black">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-white font-bold">Route</th>
                <th className="px-6 py-4 text-left text-white font-bold">Business Sedan</th>
                <th className="px-6 py-4 text-left text-white font-bold">SUV</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Manhattan to ISP</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Queens to ISP</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Nassau County to ISP</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr><td className="px-6 py-4 text-gray-300">Suffolk County to ISP</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">Why Choose MacArthur Airport?</h3>
        <p className="text-gray-300 mb-4">Long Island MacArthur Airport offers several advantages for Long Island residents:</p>
        <ul className="space-y-2 text-gray-300 ml-4 mb-6">
          <li>• <strong className="text-white">Convenient location:</strong> Central Long Island accessibility</li>
          <li>• <strong className="text-white">Less crowded:</strong> Shorter security lines and easier navigation</li>
          <li>• <strong className="text-white">Free parking:</strong> Available for pickups and drop-offs</li>
          <li>• <strong className="text-white">Southwest Airlines hub:</strong> Popular destinations served</li>
        </ul>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book ISP Airport Service</h2>
          <p className="text-xl mb-8 text-gray-300">Professional car service to MacArthur Airport</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Book Online</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org","@type": "Service","serviceType": "MacArthur Airport Car Service","provider": {"@type": "Organization","name": "Noble Black Car Service","telephone": "+1-404-513-8803"},"description": "Car service to Long Island MacArthur Airport (ISP) from NYC and Long Island"})}} />
    </main>
  )
}

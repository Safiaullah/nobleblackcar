import React from 'react'
import Link from 'next/link'
import { MapPinIcon, ClockIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function StewartAirportPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">NEW YORK STEWART INTERNATIONAL AIRPORT (SWF)</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Stewart Airport Car Service
            <br />
            <span className="text-gray-300">Hudson Valley Airport Transportation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional car service to and from New York Stewart International Airport. Convenient alternative to NYC airports for Hudson Valley, Orange County, and Westchester travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">
                <MapPinIcon className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">~60 Miles</h3>
              <p className="text-gray-300 text-sm">from Manhattan</p>
            </div>

            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">
                <ClockIcon className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">75-90 Min</h3>
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
        <h2 className="text-4xl font-bold mb-8 text-white">New York Stewart International Airport Service</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">Noble provides professional car service to and from New York Stewart International Airport (SWF) in New Windsor, NY. Located in the Hudson Valley, Stewart Airport offers a convenient alternative to the crowded NYC airports for travelers in Orange County, Westchester County, and the Hudson Valley region.</p>

        <div className="bg-black p-8 border-l-4 border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">SWF Airport Service Includes</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Flight tracking and 60 minutes complimentary wait time</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Meet and greet service inside terminal</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Professional chauffeurs familiar with Stewart Airport</span></li>
            <li className="flex items-start"><span className="text-white font-bold mr-3">✓</span><span className="text-gray-300">Flat-rate pricing from NYC and Hudson Valley</span></li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">Pricing to Stewart Airport</h3>
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
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Manhattan to SWF</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Westchester to SWF</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr className="border-b border-gray-700"><td className="px-6 py-4 text-gray-300">Orange County to SWF</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
              <tr><td className="px-6 py-4 text-gray-300">Hudson Valley to SWF</td><td className="px-6 py-4 font-bold text-white" colSpan={2}>Contact for Quote</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Stewart Airport?</h3>
        <p className="text-gray-300 mb-4">New York Stewart International Airport offers several advantages for Hudson Valley and Westchester travelers:</p>
        <ul className="space-y-2 text-gray-300 ml-4 mb-6">
          <li>• <strong className="text-white">Less crowded:</strong> Avoid the chaos of JFK, LaGuardia, and Newark</li>
          <li>• <strong className="text-white">Shorter security lines:</strong> Faster check-in and boarding process</li>
          <li>• <strong className="text-white">Convenient location:</strong> Easier access for Hudson Valley residents</li>
          <li>• <strong className="text-white">Growing service:</strong> Multiple airlines and destinations</li>
        </ul>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Stewart Airport Service</h2>
          <p className="text-xl mb-8 text-gray-300">Professional car service to New York Stewart International Airport</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Book Online</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org","@type": "Service","serviceType": "Stewart Airport Car Service","provider": {"@type": "Organization","name": "Noble Black Car Service","telephone": "+1-404-513-8803"},"description": "Car service to New York Stewart International Airport (SWF) from NYC and Hudson Valley"})}} />
    </main>
  )
}

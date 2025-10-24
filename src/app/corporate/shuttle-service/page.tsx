import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Shuttle Service NYC | Employee Transportation | Noble',
  description: 'Corporate shuttle service for NYC businesses. Daily commuter shuttles, office-to-office routes, event shuttles. Flat-rate monthly contracts.',
  keywords: 'corporate shuttle service NYC, employee shuttle NYC, office shuttle service, commuter transportation',
}

export default function CorporateShuttlePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Corporate Shuttle Service</h1>
          <p className="text-xl md:text-2xl">Daily employee transportation solutions</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Shuttle Solutions</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Commuter Shuttles</h3>
            <p className="text-gray-700 mb-4">Train station to office, residential to office</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• AM/PM peak runs</li>
              <li>• Fixed routes and schedules</li>
              <li>• Sprinter vans (14 passengers)</li>
              <li>• Monthly flat-rate contracts</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Office-to-Office</h3>
            <p className="text-gray-700 mb-4">Multi-location campus transportation</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Manhattan to Brooklyn/Queens offices</li>
              <li>• Hourly loops or on-demand</li>
              <li>• SUVs or Sprinters</li>
              <li>• Real-time GPS tracking</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Event Shuttles</h3>
            <p className="text-gray-700 mb-4">Conference, gala, team building events</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Hotel to venue loops</li>
              <li>• Multiple vehicle coordination</li>
              <li>• Timed departures</li>
              <li>• Volume discounts for 3+ vehicles</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Airport Shuttles</h3>
            <p className="text-gray-700 mb-4">Group airport transfers</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Team travel coordination</li>
              <li>• JFK/LGA/Newark service</li>
              <li>• Flight tracking included</li>
              <li>• Luggage capacity vehicles</li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Request Shuttle Quote</h2>
          <p className="text-lg mb-6">Custom shuttle solutions for your business needs</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mercedes Sprinter Van - 14 Passenger Luxury Van NYC | Noble',
  description: 'Mercedes Sprinter van service NYC. Luxury 14-passenger van for group transportation, corporate shuttles, weddings, events. Executive seating and amenities.',
  keywords: 'Mercedes Sprinter NYC, 14 passenger van service, group transportation New York, corporate shuttle van',
}

export default function SprinterPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mercedes Sprinter</h1>
          <p className="text-xl">Executive van for up to 14 passengers</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Vehicle Details</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Vehicle:</strong> Mercedes-Benz Sprinter Van</li>
              <li><strong>Capacity:</strong> 14 passengers</li>
              <li><strong>Luggage:</strong> 10-12 bags (moderate size)</li>
              <li><strong>Configuration:</strong> Executive seating with tables</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Leather executive seating</li>
              <li>✓ Climate control throughout</li>
              <li>✓ WiFi and charging ports</li>
              <li>✓ Entertainment system</li>
              <li>✓ Tinted windows</li>
              <li>✓ Overhead storage</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-black">Perfect For</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✓ Corporate shuttle service</li>
            <li>✓ Wedding party transportation</li>
            <li>✓ Group airport transfers</li>
            <li>✓ Conference attendee shuttles</li>
            <li>✓ Team building events</li>
            <li>✓ Wine tours and sightseeing</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Sprinter Van Service</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

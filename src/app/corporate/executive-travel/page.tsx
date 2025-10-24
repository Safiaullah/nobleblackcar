import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Executive Travel Management NYC | C-Suite Transportation | Noble',
  description: 'Executive travel management and C-suite transportation in NYC. First-class vehicles, professional chauffeurs, multi-city coordination, VIP service.',
  keywords: 'executive travel NYC, C-suite transportation, VIP car service, executive chauffeur service',
}

export default function ExecutiveTravelPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Executive Travel Management</h1>
          <p className="text-xl md:text-2xl">First-class service for C-suite executives and VIPs</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">White-Glove Service</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✓ First-class vehicles (Mercedes S-Class, BMW 7 Series, Escalade ESV)</li>
              <li>✓ Top-tier professional chauffeurs with executive protocol training</li>
              <li>✓ 100% on-time guarantee or ride is free</li>
              <li>✓ Absolute discretion and confidentiality</li>
              <li>✓ Real-time itinerary coordination</li>
              <li>✓ Multi-stop management without additional fees</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Vehicle Options</h2>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <ul className="space-y-2 text-gray-700">
                <li>S-Class Sedan - <strong className="text-black">Premium executive sedan</strong></li>
                <li>BMW 7 Series - <strong className="text-black">First-class luxury sedan</strong></li>
                <li>Escalade ESV - <strong className="text-black">Spacious executive SUV</strong></li>
                <li>Hourly Service - <strong className="text-black">Flexible multi-stop itineraries</strong></li>
              </ul>
              <p className="text-gray-700 mt-4">Contact us for executive travel pricing</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Typical Executive Itineraries</h2>
        <div className="space-y-4 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black mb-2">Airport-Office-Hotel</h3>
            <p className="text-gray-700">JFK arrival → Manhattan office (board meeting) → Hotel check-in</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black mb-2">Multi-Meeting Day</h3>
            <p className="text-gray-700">Hotel → 3-4 Manhattan locations → Client dinner → Hotel return</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-black mb-2">VIP Client Hosting</h3>
            <p className="text-gray-700">Airport pickup → Hotel → Office tour → Lunch → Airport departure</p>
          </div>
        </div>

        <div className="bg-black text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Executive Travel Booking</h2>
          <p className="text-lg mb-6">First-class service for your C-suite and VIP guests</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <Link href="/services/executive-car-service" className="border-2 border-white px-6 py-3 font-semibold">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

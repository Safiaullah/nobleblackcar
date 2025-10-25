import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC Sightseeing Tours - Private Car Service | Noble',
  description: 'Private NYC sightseeing tours with professional chauffeur. Custom itineraries, luxury vehicles for Manhattan and Brooklyn tours.',
  keywords: 'NYC sightseeing tour car service, private New York tour, Manhattan tour limo, custom NYC tour',
}

export default function SightseeingToursPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">NYC Sightseeing Tours</h1>
          <p className="text-xl md:text-2xl">Private luxury tours of New York City</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-300 text-lg mb-12">Experience New York City from the comfort of a luxury vehicle with your own professional chauffeur-guide. Custom itineraries, flexible timing, and door-to-door service make Noble&apos;s sightseeing tours perfect for first-time visitors and locals alike.</p>

        <h2 className="text-3xl font-bold mb-6 text-white">Popular Tour Packages</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Manhattan Highlights (4 hours)</h3>
            <p className="text-gray-300 mb-4">Essential NYC landmarks and neighborhoods</p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Times Square & Broadway</li>
              <li>• Central Park drive-through</li>
              <li>• 5th Avenue shopping district</li>
              <li>• Empire State Building (exterior)</li>
              <li>• Greenwich Village & SoHo</li>
              <li>• Financial District & 9/11 Memorial</li>
            </ul>
            <p className="font-bold text-white">Contact for quote</p>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Brooklyn Tour (3 hours)</h3>
            <p className="text-gray-300 mb-4">Explore Brooklyn&apos;s diverse neighborhoods</p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Brooklyn Bridge crossing</li>
              <li>• DUMBO & Brooklyn Heights</li>
              <li>• Williamsburg waterfront</li>
              <li>• Prospect Park</li>
              <li>• Coney Island boardwalk</li>
              <li>• Park Slope brownstones</li>
            </ul>
            <p className="font-bold text-white">Contact for quote</p>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Complete NYC Tour (6 hours)</h3>
            <p className="text-gray-300 mb-4">Comprehensive city tour with multiple boroughs</p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• All Manhattan highlights</li>
              <li>• Brooklyn Bridge & DUMBO</li>
              <li>• Queens & Flushing Meadows</li>
              <li>• Bronx & Yankee Stadium</li>
              <li>• Lunch stop (your choice)</li>
              <li>• Photo opportunities throughout</li>
            </ul>
            <p className="font-bold text-white">Contact for quote</p>
          </div>

          <div className="bg-gray-900 p-6 border border-gray-700">
            <h3 className="font-bold text-xl mb-3 text-white">Custom Itinerary</h3>
            <p className="text-gray-300 mb-4">Design your own perfect NYC experience</p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Choose your own attractions</li>
              <li>• Flexible timing and pace</li>
              <li>• Special requests accommodated</li>
              <li>• Photography tours available</li>
              <li>• Food tours by neighborhood</li>
              <li>• Architecture & history focus</li>
            </ul>
            <p className="font-bold text-white">Contact for hourly rates</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">What&apos;s Included</h2>
        <div className="bg-gray-900 p-8 border border-gray-700 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-300">
              <li>✓ Professional chauffeur with NYC knowledge</li>
              <li>✓ Luxury sedan or SUV</li>
              <li>✓ Bottled water and refreshments</li>
              <li>✓ Phone chargers and WiFi</li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Photo stop assistance</li>
              <li>✓ Climate-controlled comfort</li>
              <li>✓ Flexible itinerary adjustments</li>
              <li>✓ Local recommendations</li>
            </ul>
          </div>
          <p className="text-sm text-gray-400 mt-4">Note: Entrance fees to attractions, meals, and parking are not included.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Perfect For</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="font-bold mb-2 text-white">Families</h3>
            <p className="text-gray-300 text-sm">Comfortable sightseeing without subway stress or tired children</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="font-bold mb-2 text-white">Tourists</h3>
            <p className="text-gray-300 text-sm">First-time visitors see more in less time with local insights</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2 text-white">Business Visitors</h3>
            <p className="text-gray-300 text-sm">Limited time? Maximize your NYC experience between meetings</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Group Tours Available</h3>
          <p className="text-gray-300 mb-4">Traveling with a larger group? Our Mercedes Sprinter van accommodates up to 14 passengers, perfect for corporate teams, family reunions, or friend groups.</p>
          <p className="text-gray-300">Sprinter vans available - contact for group tour pricing</p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Book Your NYC Tour</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white">Get Custom Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

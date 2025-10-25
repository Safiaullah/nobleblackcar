import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hamptons Transportation Guide | NYC to Hamptons Car Service | Noble',
  description: 'Complete guide to Hamptons transportation from NYC. Black car service to Southampton, East Hampton, Montauk. Flat-rate pricing, luxury vehicles.',
  keywords: 'Hamptons transportation, NYC to Hamptons car service, Southampton black car, East Hampton luxury transport',
}

export default function HamptonsTransportationPage() {
  return (
    <main className="min-h-screen bg-black">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">The Complete Hamptons Transportation Guide</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Black Car Service to the Hamptons</h2>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>✓ Avoid 3+ hour LIE traffic - relax in luxury</li>
            <li>✓ No parking hassles in Southampton/East Hampton</li>
            <li>✓ Arrive refreshed, not exhausted from driving</li>
            <li>✓ Flat-rate pricing (no surge, no tolls extra)</li>
            <li>✓ Professional chauffeur who knows shortcuts</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Routes & Pricing</h2>
          <div className="bg-gray-900 p-6 border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 text-white">Route</th>
                  <th className="text-center py-2 text-white">Distance</th>
                  <th className="text-right py-2 text-white">Sedan Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-2">Manhattan to Southampton</td>
                  <td className="text-center">95 miles</td>
                  <td className="text-right font-semibold">$375</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Manhattan to East Hampton</td>
                  <td className="text-center">105 miles</td>
                  <td className="text-right font-semibold">$425</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Manhattan to Montauk</td>
                  <td className="text-center">120 miles</td>
                  <td className="text-right font-semibold">$475</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">JFK to Southampton</td>
                  <td className="text-center">85 miles</td>
                  <td className="text-right font-semibold">$350</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-400 mt-4">Round-trip bookings save 5%</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Popular Hamptons Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-white mb-2">Weekend House Rentals</h3>
              <p className="text-gray-300">Friday evening pickup, Sunday return. Perfect for summer shares.</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-white mb-2">Wine Tours</h3>
              <p className="text-gray-300">North Fork winery tours with designated driver. 6-8 hour packages.</p>
              <Link href="/services/wine-tours" className="text-white underline text-sm">Details →</Link>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-white mb-2">Event Transportation</h3>
              <p className="text-gray-300">Weddings, charity galas, polo matches, beach parties.</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-white mb-2">Day Trips</h3>
              <p className="text-gray-300">Beach day with hourly service. Driver waits while you enjoy the shore.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Best Times to Travel</h2>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-white">Friday (Summer):</strong> Leave by 2pm to beat traffic, or after 8pm when LIE clears</p>
            <p><strong className="text-white">Sunday Return:</strong> Depart Hamptons before 2pm or after 7pm to avoid westbound backup</p>
            <p><strong className="text-white">Off-Season:</strong> September-May travel time is only 2 hours vs 3.5+ in summer</p>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Hamptons Transportation</h2>
          <p className="text-lg mb-6">Flat-rate pricing, luxury vehicles, professional drivers</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-black text-white px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/routes/long-island" className="text-white underline">Long Island Routes</Link>
            <Link href="/services/wine-tours" className="text-white underline">Wine Tours</Link>
            <Link href="/services/long-distance" className="text-white underline">Long-Distance Service</Link>
          </div>
        </section>
      </article>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/black-car-vs-uber-nyc" className="bg-black p-6 border border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-white">Black Car vs Uber in NYC</h3>
              <p className="text-gray-300">Compare luxury black car service to rideshare apps</p>
            </Link>
            <Link href="/blog/professional-chauffeur-service" className="bg-black p-6 border border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-white">Professional Chauffeur Service</h3>
              <p className="text-gray-300">What to expect from premium chauffeur service</p>
            </Link>
            <Link href="/blog/pre-book-jfk-transfer" className="bg-black p-6 border border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-white">Why Pre-Book Airport Transfers</h3>
              <p className="text-gray-300">Benefits of reserving your airport ride in advance</p>
            </Link>
            <Link href="/routes/hamptons" className="bg-black p-6 border border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-white">NYC to Hamptons Service</h3>
              <p className="text-gray-300">Luxury transportation from Manhattan to the Hamptons</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hamptons Transportation Guide | NYC to Hamptons Car Service | Noble',
  description: 'Complete guide to Hamptons transportation from NYC. Black car service to Southampton, East Hampton, Montauk. Flat-rate pricing, luxury vehicles.',
  keywords: 'Hamptons transportation, NYC to Hamptons car service, Southampton black car, East Hampton luxury transport',
}

export default function HamptonsTransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black mb-6">The Complete Hamptons Transportation Guide</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Why Black Car Service to the Hamptons</h2>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✓ Avoid 3+ hour LIE traffic - relax in luxury</li>
            <li>✓ No parking hassles in Southampton/East Hampton</li>
            <li>✓ Arrive refreshed, not exhausted from driving</li>
            <li>✓ Flat-rate pricing (no surge, no tolls extra)</li>
            <li>✓ Professional chauffeur who knows shortcuts</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Routes & Pricing</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 text-black">Route</th>
                  <th className="text-center py-2 text-black">Distance</th>
                  <th className="text-right py-2 text-black">Sedan Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-2">Manhattan to Southampton</td>
                  <td className="text-center">95 miles</td>
                  <td className="text-right font-semibold">$375</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Manhattan to East Hampton</td>
                  <td className="text-center">105 miles</td>
                  <td className="text-right font-semibold">$425</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Manhattan to Montauk</td>
                  <td className="text-center">120 miles</td>
                  <td className="text-right font-semibold">$475</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">JFK to Southampton</td>
                  <td className="text-center">85 miles</td>
                  <td className="text-right font-semibold">$350</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4">Round-trip bookings save 5%</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Popular Hamptons Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-black mb-2">Weekend House Rentals</h3>
              <p className="text-gray-700">Friday evening pickup, Sunday return. Perfect for summer shares.</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-black mb-2">Wine Tours</h3>
              <p className="text-gray-700">North Fork winery tours with designated driver. 6-8 hour packages.</p>
              <Link href="/services/wine-tours" className="text-black underline text-sm">Details →</Link>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-black mb-2">Event Transportation</h3>
              <p className="text-gray-700">Weddings, charity galas, polo matches, beach parties.</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-lg text-black mb-2">Day Trips</h3>
              <p className="text-gray-700">Beach day with hourly service. Driver waits while you enjoy the shore.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Best Times to Travel</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong className="text-black">Friday (Summer):</strong> Leave by 2pm to beat traffic, or after 8pm when LIE clears</p>
            <p><strong className="text-black">Sunday Return:</strong> Depart Hamptons before 2pm or after 7pm to avoid westbound backup</p>
            <p><strong className="text-black">Off-Season:</strong> September-May travel time is only 2 hours vs 3.5+ in summer</p>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Book Hamptons Transportation</h2>
          <p className="text-lg mb-6">Flat-rate pricing, luxury vehicles, professional drivers</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/routes/long-island" className="text-black underline">Long Island Routes</Link>
            <Link href="/services/wine-tours" className="text-black underline">Wine Tours</Link>
            <Link href="/services/long-distance" className="text-black underline">Long-Distance Service</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

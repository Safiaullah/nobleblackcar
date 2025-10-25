import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partner With Us | Affiliate Partnerships | Noble',
  description: 'Partner with Noble Black Car Service. Hotel concierge programs, corporate partnerships, affiliate opportunities. Competitive commissions.',
}

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl md:text-2xl">Grow your business with Noble Black Car Service</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Partnership Opportunities</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-2xl text-white mb-4">Hotel Concierge Program</h3>
            <p className="text-gray-300 mb-4">Provide your guests with premium black car service</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>✓ Dedicated concierge hotline</li>
              <li>✓ Priority dispatch for hotel guests</li>
              <li>✓ Competitive commission structure</li>
              <li>✓ Monthly billing and reporting</li>
              <li>✓ Customized rate sheets</li>
            </ul>
            <p className="text-sm text-gray-600">Perfect for: Luxury hotels, boutique properties, extended stay</p>
          </div>

          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-2xl text-white mb-4">Corporate Partnerships</h3>
            <p className="text-gray-300 mb-4">Offer transportation benefits to your employees or clients</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>✓ Custom corporate rates</li>
              <li>✓ Monthly consolidated billing</li>
              <li>✓ Detailed expense reporting</li>
              <li>✓ Account management support</li>
              <li>✓ Volume-based discounts</li>
            </ul>
            <p className="text-sm text-gray-600">Perfect for: Corporations, real estate agencies, event planners</p>
          </div>

          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-2xl text-white mb-4">Travel Agency Partnerships</h3>
            <p className="text-gray-300 mb-4">Add luxury ground transportation to your service offerings</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>✓ Preferred partner rates</li>
              <li>✓ Commission on all bookings</li>
              <li>✓ Easy booking portal access</li>
              <li>✓ Dedicated account support</li>
              <li>✓ Co-marketing opportunities</li>
            </ul>
            <p className="text-sm text-gray-600">Perfect for: Travel agencies, tour operators, DMCs</p>
          </div>

          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-2xl text-white mb-4">Venue Partnerships</h3>
            <p className="text-gray-300 mb-4">Offer recommended transportation to your event attendees</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>✓ Event-specific pricing</li>
              <li>✓ Multiple vehicle coordination</li>
              <li>✓ Dedicated event manager</li>
              <li>✓ Referral commissions</li>
              <li>✓ Marketing collateral provided</li>
            </ul>
            <p className="text-sm text-gray-600">Perfect for: Event venues, wedding venues, conference centers</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-white">Why Partner With Noble</h2>
        <div className="bg-black p-8 border border-gray-700 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Reliability</h3>
              <p className="text-gray-300">100% on-time record, professional chauffeurs, luxury fleet</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Competitive Commissions</h3>
              <p className="text-gray-300">Generous commission structure with monthly payouts</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">Account manager assigned to each partnership</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">How to Become a Partner</h2>
        <div className="bg-gray-900 p-8 border border-gray-700 mb-12">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="font-bold text-white mb-1">Contact Us</h3>
                <p className="text-gray-300">Reach out via phone or email to discuss partnership opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="font-bold text-white mb-1">Consultation</h3>
                <p className="text-gray-300">We'll assess your needs and propose a customized partnership structure</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="font-bold text-white mb-1">Agreement</h3>
                <p className="text-gray-300">Sign partnership agreement with agreed-upon terms and commission structure</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h3 className="font-bold text-white mb-1">Launch</h3>
                <p className="text-gray-300">Begin referring clients and earning commissions immediately</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start a Partnership Today</h2>
          <p className="text-lg mb-6">Contact us to discuss how we can work together</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-6 py-3 font-semibold">Call</a>
            <Link href="/contact" className="border-2 border-white px-6 py-3 font-semibold">Email Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

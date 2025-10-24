import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Accounts | Business Car Service NYC | Noble Black Car',
  description: 'Set up a corporate account with Noble Black Car Service. Monthly billing, volume discounts, dedicated account manager, expense reporting for NYC businesses.',
  keywords: 'corporate account car service NYC, business transportation account, monthly billing black car, corporate discounts',
}

export default function CorporateAccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Corporate Accounts</h1>
          <p className="text-xl md:text-2xl">Simplified billing, volume discounts, dedicated support</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Why 500+ Companies Choose Noble</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Volume Discounts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 5-10 rides/month: 5% off</li>
              <li>• 11-25 rides/month: 10% off</li>
              <li>• 26-50 rides/month: 15% off</li>
              <li>• 50+ rides/month: Custom rate</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Monthly Billing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Single monthly invoice</li>
              <li>✓ Net-30 payment terms</li>
              <li>✓ Detailed trip reports</li>
              <li>✓ Departmental breakdowns</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Dedicated Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Account manager assigned</li>
              <li>✓ 24/7 priority booking line</li>
              <li>✓ Real-time trip tracking</li>
              <li>✓ Quarterly business reviews</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Account Setup Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-bold text-black mb-2">Contact Us</h3>
            <p className="text-gray-700 text-sm">Call or submit corporate account form</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-bold text-black mb-2">Needs Assessment</h3>
            <p className="text-gray-700 text-sm">Discuss your company's transportation needs</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-bold text-black mb-2">Agreement</h3>
            <p className="text-gray-700 text-sm">Sign service agreement, set up billing</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
            <h3 className="font-bold text-black mb-2">Start Booking</h3>
            <p className="text-gray-700 text-sm">Immediate access with corporate discount</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Account Features</h2>
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✓ Online booking portal for authorized employees</li>
            <li>✓ Trip approval workflows (optional)</li>
            <li>✓ Cost center allocation</li>
            <li>✓ Expense report integration</li>
            <li>✓ Preferred vehicle assignment</li>
            <li>✓ VIP client transportation coordination</li>
            <li>✓ Event transportation planning</li>
            <li>✓ Executive travel management</li>
          </ul>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Set Up Your Corporate Account</h2>
          <p className="text-lg mb-6">Join 500+ NYC companies using Noble for business transportation</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Request Account Info</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

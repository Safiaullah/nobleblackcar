import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Team | Professional Chauffeurs & Staff | Noble Black Car Service',
  description: 'Meet the Noble Black Car Service team. Professional chauffeurs, dispatchers, and customer service staff dedicated to excellence in NYC transportation.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl">Professional chauffeurs and dedicated support staff</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">At Noble Black Car Service, our team is our greatest asset. Every chauffeur, dispatcher, and customer service representative is committed to providing exceptional service.</p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-white">Our Chauffeurs</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-xl mb-4 text-white">Professional Standards</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ TLC licensed and insured</li>
              <li>✓ FBI background checks</li>
              <li>✓ 40+ hours professional training</li>
              <li>✓ Defensive driving certification</li>
              <li>✓ Drug tested (pre-employment & random)</li>
              <li>✓ Clean DMV records (3+ years)</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 border border-gray-700">
            <h3 className="font-bold text-xl mb-4 text-white">Our Promise</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Professional business attire</li>
              <li>✓ Courteous and discreet</li>
              <li>✓ Expert NYC navigation</li>
              <li>✓ On-time every time</li>
              <li>✓ Customer service excellence</li>
              <li>✓ Continuous quality improvement</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Support Team</h2>
        <div className="bg-black p-8 border border-gray-700 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg text-white mb-2">Dispatch</h3>
              <p className="text-gray-300">24/7 coordination ensuring every ride runs smoothly</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-2">Customer Service</h3>
              <p className="text-gray-300">Always available to assist with bookings and inquiries</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-2">Corporate Accounts</h3>
              <p className="text-gray-300">Dedicated managers for business clients</p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Team's Excellence</h2>
          <p className="text-lg mb-6">Book your next ride with Noble Black Car Service</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-6 py-3 font-semibold">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

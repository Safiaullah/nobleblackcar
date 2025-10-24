import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referral Program | Earn $50 Credits | Noble Black Car Service',
  description: 'Refer friends to Noble Black Car Service and earn $50 credit per referral. Your friend saves $25 on first ride. Unlimited referrals accepted.',
}

export default function ReferralProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Referral Program</h1>
          <p className="text-xl md:text-2xl">Earn $50 for every friend you refer</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-black text-white p-12 mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">You Get $50. They Save $25.</h2>
          <p className="text-2xl mb-4">It's that simple.</p>
          <p className="text-lg">Refer unlimited friends and earn credits for every booking they make.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold text-lg text-black mb-2">Share</h3>
            <p className="text-gray-700">Tell your friends about Noble Black Car Service</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold text-lg text-black mb-2">They Book</h3>
            <p className="text-gray-700">Your friend gets $25 off their first ride when they mention your name</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold text-lg text-black mb-2">You Earn</h3>
            <p className="text-gray-700">You receive $50 credit toward your next ride</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Program Details</h2>
        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong className="text-black">Your benefit:</strong> $50 credit per successful referral (no limit)</li>
            <li>✓ <strong className="text-black">Friend's benefit:</strong> $25 off first ride (minimum $75 booking)</li>
            <li>✓ <strong className="text-black">Eligibility:</strong> Both parties must be new or existing Noble customers</li>
            <li>✓ <strong className="text-black">Credit validity:</strong> 12 months from date of issue</li>
            <li>✓ <strong className="text-black">How to redeem:</strong> Credits automatically applied to your next booking</li>
            <li>✓ <strong className="text-black">Unlimited referrals:</strong> Refer as many friends as you'd like</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Start Referring Today</h2>
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <p className="text-gray-700 mb-6">Simply have your friends mention your name when booking or use the contact information below to set up your referral account:</p>
          <div className="space-y-3 text-gray-700">
            <p>📞 <strong className="text-black">Call:</strong> <a href="tel:+14045138803" className="text-black underline">(404) 513-8803</a></p>
            <p>✉️ <strong className="text-black">Email:</strong> <a href="mailto:info@nobleblackcarservice.com" className="text-black underline">info@nobleblackcarservice.com</a></p>
          </div>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Referral Program?</h2>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <Link href="/contact" className="border-2 border-white px-6 py-3 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

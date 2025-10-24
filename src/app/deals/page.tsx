import React from 'react'
import Link from 'next/link'

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Special Offers & Deals</h1>
          <p className="text-xl text-gray-200">Premium service at exceptional value</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 border-4 border-yellow-500">
            <div className="bg-yellow-500 text-black px-4 py-2 inline-block font-bold mb-4">CORPORATE SPECIAL</div>
            <h2 className="text-3xl font-bold mb-4">Corporate Account Discount</h2>
            <p className="text-xl mb-6">Save up to 15% on all rides with monthly volume</p>
            <ul className="space-y-3 mb-6 text-gray-200">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>5-9 rides/month: <strong className="text-white">5% discount</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>10-19 rides/month: <strong className="text-white">10% discount</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>20+ rides/month: <strong className="text-white">15% discount</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>NET 30 payment terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Priority booking and dispatch</span>
              </li>
            </ul>
            <Link href="/corporate" className="bg-yellow-500 text-black px-6 py-3 inline-block font-bold hover:bg-yellow-400 transition-colors">
              Set Up Corporate Account
            </Link>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 border-2 border-gray-700">
            <div className="bg-white text-black px-4 py-2 inline-block font-bold mb-4">NEW CLIENT OFFER</div>
            <h2 className="text-3xl font-bold mb-4">First Ride Discount</h2>
            <p className="text-xl mb-6">10% off your first airport transfer</p>
            <ul className="space-y-3 mb-6 text-gray-200">
              <li className="flex items-start">
                <span className="text-white mr-2">✓</span>
                <span>Valid for JFK, LaGuardia, Newark, or Teterboro</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">✓</span>
                <span>Available for new clients only</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">✓</span>
                <span>Mention code: <strong className="text-white">NOBLE10</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">✓</span>
                <span>Cannot be combined with other offers</span>
              </li>
            </ul>
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 inline-block font-bold hover:bg-gray-100 transition-colors">
              Call to Book: (404) 513-8803
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-black">Round Trip Savings</h3>
            <p className="text-3xl font-bold text-black mb-3">5% OFF</p>
            <p className="text-gray-700 mb-4">Book your return trip when scheduling your outbound airport transfer and save 5% on the total cost.</p>
            <p className="text-sm text-gray-600">Valid on all airport routes. Must book both trips simultaneously.</p>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-black">Wedding Package</h3>
            <p className="text-3xl font-bold text-black mb-3">Custom Pricing</p>
            <p className="text-gray-700 mb-4">Special rates for wedding parties booking 3+ vehicles. Includes complimentary champagne service.</p>
            <p className="text-sm text-gray-600">Contact us for personalized quote based on your needs.</p>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-black">Referral Bonus</h3>
            <p className="text-3xl font-bold text-black mb-3">$50 Credit</p>
            <p className="text-gray-700 mb-4">Refer a corporate client and receive $50 credit toward your next ride. No limit on referrals!</p>
            <p className="text-sm text-gray-600">Corporate client must complete first ride. Credit issued within 7 days.</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Flat-Rate Pricing Guarantee</h2>
          <p className="text-xl text-gray-300 mb-6">While ride-share companies use surge pricing that can triple your costs, we maintain transparent flat-rate pricing 24/7 - even during peak hours, bad weather, and holidays.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">No Surge Pricing</div>
              <p className="text-gray-300">Same price during rush hour and holidays</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">No Hidden Fees</div>
              <p className="text-gray-300">Tolls and gratuity are the only extras</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Price Lock</div>
              <p className="text-gray-300">Your quote is guaranteed when you book</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Seasonal Promotions</h2>
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-black">Holiday Travel - November & December 2025</h3>
            <p className="text-lg text-gray-700 mb-4">Book your Thanksgiving or winter holiday airport transfers now and lock in current rates. Avoid last-minute availability issues and price increases.</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Guaranteed pickup during peak travel days</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No holiday surcharges when booking in advance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Free cancellation up to 24 hours before pickup</span>
              </li>
            </ul>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="bg-black text-white px-6 py-3 inline-block font-bold hover:bg-gray-800 transition-colors">
              Get Holiday Quote
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Frequent Traveler Benefits</h2>
          <p className="text-lg text-gray-700 mb-6">Join our loyalty program and earn benefits with every ride:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Tier 1: 5-9 Rides</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Priority dispatch during peak hours</li>
                <li>• Preferred driver assignment when available</li>
                <li>• Email receipts automatically sent</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h3 className="font-bold text-lg mb-3 text-black">Tier 2: 10+ Rides</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All Tier 1 benefits</li>
                <li>• 5% discount on future bookings</li>
                <li>• Dedicated customer service line</li>
                <li>• Complimentary upgrade when available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Save?</h2>
          <p className="text-xl text-gray-700 mb-8">Contact us to learn more about our current promotions and find the best deal for your transportation needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Terms & Conditions</h3>
          <div className="text-sm text-gray-300 space-y-2">
            <p>• All promotions subject to availability and cannot be combined unless otherwise stated</p>
            <p>• Corporate discounts apply to monthly billing cycles and require corporate account setup</p>
            <p>• New client offer valid for first ride only, one per customer</p>
            <p>• Promotional codes must be mentioned at time of booking</p>
            <p>• Noble Black Car Service reserves the right to modify or cancel promotions at any time</p>
            <p>• Standard cancellation policy applies to all promotional bookings</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SpecialAnnouncement",
        "name": "Noble Black Car Service Special Offers",
        "text": "Special offers and promotions for luxury black car service in NYC",
        "provider": {
          "@type": "Organization",
          "name": "Noble Black Car Service",
          "telephone": "+1-404-513-8803"
        }
      })}} />
    </main>
  )
}

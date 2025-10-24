import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gift Cards | Give the Gift of Luxury Transportation | Noble',
  description: 'Noble Black Car Service gift cards. Perfect for corporate gifts, holidays, special occasions. Custom amounts, never expire.',
}

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Gift Cards</h1>
          <p className="text-xl md:text-2xl">Give the gift of luxury transportation</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-black text-white p-12 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">The Perfect Gift for Any Occasion</h2>
          <p className="text-lg">Airport transfers, special events, or everyday luxury transportation</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Gift Card Options</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="font-bold text-2xl text-black mb-4">$100 Gift Card</h3>
            <p className="text-gray-700 mb-4">Perfect for a Manhattan to JFK airport transfer or point-to-point service</p>
            <p className="text-3xl font-bold text-black">$100</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="font-bold text-2xl text-black mb-4">$250 Gift Card</h3>
            <p className="text-gray-700 mb-4">Ideal for round-trip airport service or hourly chauffeur service</p>
            <p className="text-3xl font-bold text-black">$250</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="font-bold text-2xl text-black mb-4">$500 Gift Card</h3>
            <p className="text-gray-700 mb-4">Great for long-distance trips or multiple rides</p>
            <p className="text-3xl font-bold text-black">$500</p>
          </div>

          <div className="bg-black text-white p-8">
            <h3 className="font-bold text-2xl mb-4">Custom Amount</h3>
            <p className="mb-4">Choose any amount from $50 to $5,000</p>
            <p className="text-xl font-bold">Your Choice</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Popular Gift Card Uses</h2>
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>🎁 <strong className="text-black">Corporate gifts:</strong> Thank clients and reward employees</li>
            <li>🎁 <strong className="text-black">Holiday presents:</strong> Unique gift for hard-to-shop-for recipients</li>
            <li>🎁 <strong className="text-black">Wedding gifts:</strong> Honeymoon airport transfer or anniversary dinner transportation</li>
            <li>🎁 <strong className="text-black">Graduation:</strong> Luxury ride to celebrate achievements</li>
            <li>🎁 <strong className="text-black">Birthdays:</strong> Special night out with chauffeur service</li>
            <li>🎁 <strong className="text-black">Client appreciation:</strong> Professional way to say thank you</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Gift Card Details</h2>
        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong className="text-black">No expiration date:</strong> Gift cards never expire</li>
            <li>✓ <strong className="text-black">Flexible use:</strong> Apply to any Noble Black Car Service</li>
            <li>✓ <strong className="text-black">Transferable:</strong> Can be gifted to anyone</li>
            <li>✓ <strong className="text-black">Custom amounts:</strong> Choose exactly the amount you need</li>
            <li>✓ <strong className="text-black">Digital or physical:</strong> Email delivery or physical card mailed</li>
            <li>✓ <strong className="text-black">Bulk discounts:</strong> 10+ cards receive 5% discount</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">How to Purchase</h2>
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Step 1: Contact Us</h3>
              <p className="text-gray-700">Call or email to place your gift card order</p>
              <p className="text-gray-700">📞 <a href="tel:+14045138803" className="text-black underline">(404) 513-8803</a></p>
              <p className="text-gray-700">✉️ <a href="mailto:info@nobleblackcarservice.com" className="text-black underline">info@nobleblackcarservice.com</a></p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Step 2: Choose Amount & Delivery</h3>
              <p className="text-gray-700">Select your gift card amount and delivery method (email or physical card)</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Step 3: Payment</h3>
              <p className="text-gray-700">We'll process your payment and issue your gift card within 24 hours</p>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-lg text-black mb-2">Step 4: Gift & Enjoy</h3>
              <p className="text-gray-700">Recipient can use gift card for any Noble service by mentioning their code at booking</p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Purchase Gift Cards Today</h2>
          <p className="text-lg mb-6">Give the gift of luxury transportation</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="/contact" className="border-2 border-white px-6 py-3 font-semibold">Email Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

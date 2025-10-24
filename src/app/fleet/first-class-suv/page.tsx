import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'First Class SUV - Cadillac Escalade ESV NYC | Noble',
  description: 'Luxury first-class SUV service NYC. Cadillac Escalade ESV. Premium SUV for VIP groups, executives, special events. Seats 6 passengers in ultimate comfort.',
  keywords: 'Cadillac Escalade car service NYC, luxury SUV New York, first class SUV limo, VIP group transportation',
}

export default function FirstClassSUVPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">First Class SUV</h1>
          <p className="text-xl">Ultimate luxury SUV experience</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">The Escalade ESV</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Vehicle:</strong> Cadillac Escalade ESV</li>
              <li><strong>Capacity:</strong> 6 passengers in luxury seating</li>
              <li><strong>Luggage:</strong> 6+ large bags</li>
              <li><strong>Interior:</strong> Premium leather, captain's chairs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Premium Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Extended wheelbase for extra space</li>
              <li>✓ Captain's chairs (middle row)</li>
              <li>✓ Premium entertainment system</li>
              <li>✓ High-speed WiFi</li>
              <li>✓ Complimentary refreshments</li>
              <li>✓ Tinted privacy windows</li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">VIP Group Transportation</h3>
          <p className="text-gray-300 mb-4">The Escalade ESV is our flagship SUV, combining the space of a full-size vehicle with first-class amenities. Perfect for executive teams, VIP clients, weddings, and special events requiring both capacity and luxury.</p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book First Class SUV</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors">Get Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

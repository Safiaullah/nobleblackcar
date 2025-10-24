import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wine Tour Transportation NYC - Long Island, Hudson Valley | Noble',
  description: 'Luxury wine tour transportation from NYC. Long Island North Fork, Hudson Valley, Finger Lakes. Professional chauffeur, hourly service, group transportation.',
  keywords: 'wine tour transportation NYC, Long Island wine tours, Hudson Valley winery limo, North Fork car service',
}

export default function WineToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Wine Tour Transportation</h1>
          <p className="text-xl md:text-2xl">Explore New York wine country in luxury and safety</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg mb-12">Noble provides luxury wine tour transportation to New York&apos;s premier wine regions. Enjoy tastings without worrying about driving—our professional chauffeur ensures safe, comfortable travel throughout your wine country adventure.</p>

        <h2 className="text-3xl font-bold mb-6 text-black">Popular Wine Regions</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Long Island North Fork</h3>
            <p className="text-gray-700 mb-4">40+ wineries along scenic Route 25. Perfect day trip from NYC (90-minute drive).</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Distance from NYC: 90 miles</li>
              <li>• Typical tour: 6-8 hours</li>
              <li>• Contact for custom quote</li>
              <li>• Best for: 2-6 people</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Hudson Valley</h3>
            <p className="text-gray-700 mb-4">Beautiful countryside with over 50 wineries. Scenic 2-hour drive from Manhattan.</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Distance from NYC: 80-120 miles</li>
              <li>• Typical tour: 7-9 hours</li>
              <li>• Contact for custom quote</li>
              <li>• Best for: Full-day excursion</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Finger Lakes</h3>
            <p className="text-gray-700 mb-4">World-class Rieslings and stunning lake views. Weekend getaway destination.</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Distance from NYC: 250 miles</li>
              <li>• Best as: Multi-day trip</li>
              <li>• Pricing: Custom quote</li>
              <li>• Includes: Overnight accommodations</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Hamptons Wineries</h3>
            <p className="text-gray-700 mb-4">Combine beach getaway with wine tasting. Several boutique wineries.</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Distance from NYC: 100 miles</li>
              <li>• Typical tour: 8-10 hours</li>
              <li>• Contact for custom quote</li>
              <li>• Best for: Summer weekends</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">How Wine Tour Service Works</h2>
        <div className="space-y-4 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">1. Choose Your Region & Vehicle</h3>
            <p className="text-gray-700">Select your preferred wine region and vehicle (sedan for 2-3, SUV for 4-6, Sprinter for up to 14).</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">2. Plan Your Itinerary</h3>
            <p className="text-gray-700">Choose wineries you want to visit, or let us recommend based on your preferences. Typical tours visit 3-5 wineries.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">3. Book Hourly Service</h3>
            <p className="text-gray-700">Wine tours use our hourly service with flexible durations. Service includes drive time, waiting at each winery, and return to NYC. Contact us for pricing based on your specific itinerary.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">4. Enjoy Worry-Free Tasting</h3>
            <p className="text-gray-700">Your chauffeur waits at each location while you taste. No driving concerns, no rush. Complimentary water and snacks in vehicle.</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Perfect for Groups & Special Occasions</h3>
          <p className="text-gray-300 mb-4">Wine tours are ideal for birthdays, bachelorette parties, anniversaries, or corporate team building. Book the Sprinter van for groups up to 14 people.</p>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Complimentary champagne for special occasions</li>
            <li>✓ Cooler for purchased wines</li>
            <li>✓ Bluetooth music system</li>
            <li>✓ Flexible itinerary adjustments</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Sample Itinerary: North Fork Day Trip</h2>
        <div className="bg-gray-50 p-6 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li><strong>9:00 AM</strong> - Pickup from Manhattan</li>
            <li><strong>10:30 AM</strong> - Arrive North Fork, first winery</li>
            <li><strong>12:00 PM</strong> - Second winery</li>
            <li><strong>1:30 PM</strong> - Lunch break (many wineries have restaurants)</li>
            <li><strong>3:00 PM</strong> - Third winery</li>
            <li><strong>4:30 PM</strong> - Fourth winery (optional)</li>
            <li><strong>5:30 PM</strong> - Depart for NYC</li>
            <li><strong>7:00 PM</strong> - Return to Manhattan</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">Total: 10-hour tour - contact us for pricing based on vehicle type and group size</p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">Book Your Wine Tour</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white">Get Custom Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

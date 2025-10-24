import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safety Standards | Vehicle Safety & Driver Training | Noble Black Car',
  description: 'Noble Black Car Service safety standards. Rigorous driver background checks, defensive driving training, vehicle inspections, insurance coverage.',
}

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Safety First</h1>
          <p className="text-xl md:text-2xl">Your safety is our top priority</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Driver Safety Standards</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Background Screening</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ FBI-level criminal background check</li>
              <li>✓ DMV driving record review (3+ years)</li>
              <li>✓ Pre-employment drug testing</li>
              <li>✓ Random drug testing throughout employment</li>
              <li>✓ Employment history verification</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">Professional Training</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Defensive driving certification required</li>
              <li>✓ TLC (Taxi & Limousine Commission) licensing</li>
              <li>✓ 40+ hours professional chauffeur training</li>
              <li>✓ Annual safety re-certification</li>
              <li>✓ Customer service and protocol training</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-black">Vehicle Safety</h2>
        <div className="bg-white p-8 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong className="text-black">Daily pre-trip inspections:</strong> Brakes, tires, lights, fluids checked every day</li>
            <li>✓ <strong className="text-black">Regular maintenance:</strong> Every 3,000 miles or monthly, whichever comes first</li>
            <li>✓ <strong className="text-black">TLC vehicle inspections:</strong> Biannual inspections required by NYC</li>
            <li>✓ <strong className="text-black">Fleet age:</strong> All vehicles under 5 years old, retired at 100,000 miles</li>
            <li>✓ <strong className="text-black">GPS tracking:</strong> Real-time monitoring for safety and route optimization</li>
            <li>✓ <strong className="text-black">Emergency equipment:</strong> First aid kits, fire extinguishers in every vehicle</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-black">Insurance Coverage</h2>
        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <p className="text-gray-700 mb-4">Noble Black Car Service maintains comprehensive insurance coverage exceeding NYC requirements:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Commercial liability insurance: $2,000,000 per occurrence</li>
            <li>• Passenger liability coverage: Full protection for all passengers</li>
            <li>• Property damage coverage included</li>
            <li>• Workers' compensation for all employees</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">COVID-19 Safety Protocols</h2>
        <div className="bg-white p-6 border border-gray-200 mb-12">
          <ul className="space-y-2 text-gray-700">
            <li>✓ Vehicle sanitization between every ride</li>
            <li>✓ High-touch surfaces disinfected (door handles, seats, armrests)</li>
            <li>✓ Air filtration systems in all vehicles</li>
            <li>✓ Masks available upon request</li>
            <li>✓ Hand sanitizer provided in vehicles</li>
          </ul>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ride with Confidence</h2>
          <p className="text-lg mb-6">Experience safe, professional transportation with Noble</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Book Safely</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

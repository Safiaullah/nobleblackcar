import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Track Your Reservation | Noble Black Car Service',
  description: 'Track your Noble Black Car Service reservation. Real-time driver location, ETA updates, trip status.',
}

export default function ReservationTrackerPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Track Your Reservation</h1>
          <p className="text-xl md:text-2xl">Real-time updates on your ride</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gray-900 p-12 border border-gray-700 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">How to Track Your Ride</h2>
          <p className="text-xl text-gray-300 mb-8">For real-time tracking of your reservation, please contact our dispatch team:</p>

          <div className="space-y-4 mb-8">
            <div className="bg-black p-6 border border-gray-700">
              <h3 className="font-bold text-lg text-white mb-2">Call Dispatch</h3>
              <a href="tel:+14045138803" className="text-2xl text-white underline font-semibold">(404) 513-8803</a>
              <p className="text-gray-400 mt-2">Available 24/7</p>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="font-bold text-lg text-white mb-2">Text Updates</h3>
              <p className="text-gray-300">You'll receive SMS updates including:</p>
              <ul className="text-gray-400 mt-2 space-y-1">
                <li>• Reservation confirmation</li>
                <li>• 30-minute advance notice</li>
                <li>• Driver arrival notification</li>
                <li>• Driver name and vehicle details</li>
              </ul>
            </div>

            <div className="bg-black p-6 border border-gray-700">
              <h3 className="font-bold text-lg text-white mb-2">Email Confirmation</h3>
              <p className="text-gray-300">Check your email for reservation details and driver information</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">What You'll Receive</h2>
        <div className="bg-black p-8 border border-gray-700 mb-12">
          <ul className="space-y-3 text-gray-300">
            <li>✓ Confirmation email immediately after booking</li>
            <li>✓ SMS reminder 24 hours before pickup (for advance bookings)</li>
            <li>✓ Driver assignment notification 30 minutes before pickup</li>
            <li>✓ Driver name, photo, vehicle details, and license plate</li>
            <li>✓ Real-time ETA updates via SMS</li>
            <li>✓ Receipt and trip summary after completion</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Need to Modify Your Reservation?</h2>
        <div className="bg-gray-900 p-8 border border-gray-700 mb-12">
          <p className="text-gray-300 mb-4">Changes to your reservation can be made by contacting us:</p>
          <ul className="space-y-2 text-gray-300">
            <li>📞 <strong className="text-white">Phone:</strong> <a href="tel:+14045138803" className="text-white underline">(404) 513-8803</a> (24/7)</li>
            <li>✉️ <strong className="text-white">Email:</strong> <a href="mailto:info@nobleblackcarservice.com" className="text-white underline">info@nobleblackcarservice.com</a></li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">Cancellations made 24+ hours in advance receive full refund. See <Link href="/terms" className="text-white underline">terms</Link> for details.</p>
        </div>

        <div className="bg-black text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Your Reservation?</h2>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-black text-white px-6 py-3 font-semibold">Call</a>
            <Link href="/contact" className="border-2 border-white px-6 py-3 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

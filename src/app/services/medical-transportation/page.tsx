import React from 'react'
import Link from 'next/link'

export default function MedicalTransportationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Medical Transportation</h1>
          <p className="text-xl md:text-2xl text-gray-200">Compassionate, reliable transport for healthcare needs</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Noble provides non-emergency medical transportation for patients requiring reliable, comfortable transport to medical appointments, treatments, and hospital visits throughout NYC and surrounding areas. Our professional chauffeurs are trained to provide patient-focused service with dignity and respect.
        </p>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <p className="text-sm text-gray-600 italic">Note: We provide non-emergency medical transportation only. For emergency medical services, always call 911.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Services We Provide</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Medical Appointments</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Doctor and specialist visits</li>
              <li>• Physical therapy sessions</li>
              <li>• Diagnostic testing and imaging</li>
              <li>• Lab work and blood draws</li>
              <li>• Routine check-ups</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Treatment Transportation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Chemotherapy and radiation</li>
              <li>• Dialysis appointments</li>
              <li>• Outpatient procedures</li>
              <li>• Post-surgical follow-ups</li>
              <li>• Clinical trial participation</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Hospital Transfers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Discharge transportation home</li>
              <li>• Transport between facilities</li>
              <li>• Pre-admission transport</li>
              <li>• Visitor and family transport</li>
              <li>• Long-distance medical travel</li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Assisted Living & Senior Care</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Recurring appointment schedules</li>
              <li>• Facility to medical center transport</li>
              <li>• Companion escort available</li>
              <li>• Family visit coordination</li>
              <li>• Monthly service packages</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Why Choose Noble for Medical Transport?</h2>

        <div className="space-y-6 mb-12">
          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-black">Reliability You Can Trust</h3>
            <p className="text-gray-700">We understand missed appointments can delay treatment. Our chauffeurs arrive early and monitor traffic to ensure on-time arrival. We maintain a 99% on-time record for medical appointments.</p>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-black">Patient-Focused Service</h3>
            <p className="text-gray-700">Our chauffeurs provide door-through-door assistance, helping patients in and out of the vehicle, carrying belongings, and ensuring safe transfer. We allow extra time for patients with mobility challenges.</p>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-black">Comfort & Cleanliness</h3>
            <p className="text-gray-700">All vehicles are thoroughly sanitized between trips. Climate-controlled interiors, smooth suspension, and spacious seating ensure patient comfort. Complimentary water and tissues available.</p>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <h3 className="font-bold text-lg mb-3 text-black">Flexible Scheduling</h3>
            <p className="text-gray-700">Book one-time appointments or set up recurring weekly/monthly schedules. We accommodate last-minute changes and can wait during appointments for immediate return transport.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Accessibility Features</h2>

        <div className="bg-gray-50 p-8 border border-gray-200 mb-12">
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong>Wheelchair-accessible vehicles available</strong> (advance request required)</li>
            <li>✓ Assistance with walkers, canes, and mobility aids</li>
            <li>✓ Extra time provided for boarding and disembarking</li>
            <li>✓ Chauffeurs trained in patient assistance protocols</li>
            <li>✓ SUVs with lower step-in height for easier access</li>
            <li>✓ Companion or caregiver welcome to accompany patient at no extra charge</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Pricing</h2>

        <p className="text-gray-700 mb-6">Medical transportation is priced based on distance and service requirements. Contact us for a customized quote for your specific needs.</p>

        <div className="bg-white p-6 border border-gray-200 mb-12">
          <h3 className="font-bold text-lg mb-4 text-black">Service Types</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Manhattan hospital visits (within borough)</li>
            <li>• Outer borough to Manhattan hospitals</li>
            <li>• Round-trip with wait time</li>
            <li>• Recurring weekly appointments</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4"><strong>Call for exact quote based on your locations and needs.</strong> We offer discounted rates for regularly scheduled appointments.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">How to Book Medical Transportation</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-bold mb-2 text-black">Call Us</h3>
            <p className="text-gray-700">Speak with our medical transport specialist at (404) 513-8803</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-bold mb-2 text-black">Provide Details</h3>
            <p className="text-gray-700">Share pickup location, medical facility address, appointment time, and any special needs</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-bold mb-2 text-black">Confirm Booking</h3>
            <p className="text-gray-700">Receive confirmation with driver details sent 30 minutes before pickup</p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Recurring Appointment Packages</h3>
          <p className="text-gray-300 mb-6">For patients with ongoing treatment needs (chemotherapy, dialysis, physical therapy), we offer discounted package rates for weekly or monthly scheduled rides. Contact us to discuss your specific schedule and receive customized pricing.</p>
          <ul className="space-y-2 text-gray-300">
            <li>• Pre-scheduled rides with same driver when possible</li>
            <li>• Monthly invoicing for easy payment</li>
            <li>• Priority booking and dedicated support</li>
            <li>• Discounted package rates available</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Major Medical Centers We Serve</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-12 text-gray-700">
          <div>
            <h3 className="font-bold mb-2 text-black">Manhattan</h3>
            <ul className="space-y-1 text-sm">
              <li>• NYU Langone</li>
              <li>• Mount Sinai</li>
              <li>• Columbia Presbyterian</li>
              <li>• Memorial Sloan Kettering</li>
              <li>• Hospital for Special Surgery</li>
              <li>• Weill Cornell</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-black">Outer Boroughs</h3>
            <ul className="space-y-1 text-sm">
              <li>• Maimonides (Brooklyn)</li>
              <li>• Northwell Health locations</li>
              <li>• NYC Health + Hospitals</li>
              <li>• Long Island Jewish</li>
              <li>• Montefiore (Bronx)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-black">Regional</h3>
            <ul className="space-y-1 text-sm">
              <li>• Westchester Medical Center</li>
              <li>• White Plains Hospital</li>
              <li>• Hackensack Medical Center</li>
              <li>• Robert Wood Johnson (NJ)</li>
              <li>• Yale New Haven (CT)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Do you accept insurance or Medicare?</h3>
            <p className="text-gray-700">We do not directly bill insurance. However, we provide detailed receipts that may be submitted for reimbursement. Some patients have success submitting receipts to their insurance or using HSA/FSA cards. Please check with your insurance provider.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Can the driver wait during my appointment?</h3>
            <p className="text-gray-700">Yes. For appointments under 2 hours, book point-to-point round trip. For longer appointments or uncertain durations, book hourly service (3-hour minimum) which includes unlimited wait time.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Can a family member or caregiver ride along?</h3>
            <p className="text-gray-700">Absolutely. Companions are welcome at no additional charge in all our vehicles. Let us know when booking so we can ensure appropriate vehicle size.</p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">What if my appointment runs late?</h3>
            <p className="text-gray-700">If you booked hourly service, extended time is no problem. For point-to-point round trips, the driver will contact our dispatch if your appointment is running late. We&apos;ll accommodate delays when possible (wait time charged at $1/minute beyond 15-minute grace period).</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Medical Transportation</h2>
          <p className="text-xl mb-8 text-gray-300">Reliable, compassionate service for your healthcare needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Request Quote</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

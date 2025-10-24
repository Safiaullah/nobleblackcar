import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Chauffeur Service NYC | Trained Drivers | Noble Black Car',
  description: 'NYC professional chauffeur service with vetted, trained drivers. Background-checked, uniformed chauffeurs for executive, corporate, VIP transportation.',
  keywords: 'professional chauffeur service NYC, trained drivers NYC, executive chauffeur, VIP driver service, licensed chauffeurs',
}

export default function ProfessionalChauffeurServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">What Makes a Professional Chauffeur Service in NYC</h1>
          <p className="text-xl text-gray-600">The difference between a driver and a professional chauffeur—and why it matters for your business</p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Driver vs. Chauffeur: Understanding the Difference</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-4 text-black">Rideshare Driver</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Minimal background check</li>
                <li>• No professional training</li>
                <li>• Personal vehicle</li>
                <li>• Inconsistent service quality</li>
                <li>• No route planning expertise</li>
                <li>• Surge pricing</li>
              </ul>
            </div>

            <div className="bg-black text-white p-6">
              <h3 className="font-bold text-xl mb-4">Professional Chauffeur</h3>
              <ul className="space-y-2">
                <li>✓ FBI-level background check</li>
                <li>✓ 40+ hours professional training</li>
                <li>✓ Commercial luxury fleet</li>
                <li>✓ Guaranteed consistency</li>
                <li>✓ NYC traffic expertise</li>
                <li>✓ Flat-rate pricing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Our Chauffeur Standards</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl mb-3 text-black">1. Rigorous Background Screening</h3>
              <p className="text-gray-700 mb-3">Every Noble chauffeur undergoes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• TLC (Taxi & Limousine Commission) licensing</li>
                <li>• FBI background check</li>
                <li>• Drug testing (pre-employment and random)</li>
                <li>• DMV record review (no violations in 3+ years)</li>
                <li>• Employment history verification</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl mb-3 text-black">2. Professional Training Program</h3>
              <p className="text-gray-700 mb-3">40+ hour comprehensive training including:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Defensive driving certification</li>
                <li>• NYC geography and traffic patterns</li>
                <li>• Customer service excellence</li>
                <li>• Executive protocol and discretion</li>
                <li>• Vehicle maintenance and safety</li>
                <li>• Airport procedures (JFK, LGA, Newark)</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl mb-3 text-black">3. Appearance & Professionalism</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional business attire (suit and tie)</li>
                <li>• Grooming standards enforced</li>
                <li>• Name badges and identification</li>
                <li>• Mobile device etiquette training</li>
                <li>• No smoking policy</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="font-bold text-xl mb-3 text-black">4. Ongoing Quality Assurance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Client feedback review after every ride</li>
                <li>• GPS monitoring and route optimization</li>
                <li>• Annual re-certification required</li>
                <li>• Performance metrics tracking</li>
                <li>• Mystery shopper evaluations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">What to Expect from Your Noble Chauffeur</h2>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-xl mb-4 text-black">Before Your Trip</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Confirmation call or text 30 minutes before pickup</li>
              <li>✓ Pre-trip vehicle inspection completed</li>
              <li>✓ Route planned for optimal travel time</li>
              <li>✓ Traffic conditions monitored</li>
              <li>✓ For airport pickups: Flight tracking activated</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-xl mb-4 text-black">During Your Trip</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Professional greeting and door service</li>
              <li>✓ Assistance with luggage and belongings</li>
              <li>✓ Climate control set to your preference</li>
              <li>✓ Smooth, safe driving with defensive techniques</li>
              <li>✓ Respectful silence unless conversation initiated</li>
              <li>✓ Adjustments to route as needed for traffic</li>
              <li>✓ Bottled water and amenities available</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-4 text-black">After Your Trip</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Drop-off at exact location requested</li>
              <li>✓ Assistance with luggage and bags</li>
              <li>✓ Professional farewell</li>
              <li>✓ Immediate receipt emailed</li>
              <li>✓ Follow-up for recurring service needs</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Specialized Chauffeur Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Executive Transportation</h3>
              <p className="text-gray-700 mb-3">C-suite and VIP client service</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• First-class vehicles (S-Class, 7 Series)</li>
                <li>• Multi-stop itinerary management</li>
                <li>• Absolute discretion guaranteed</li>
                <li>• Wait time no additional charge</li>
              </ul>
              <Link href="/services/executive-car-service" className="text-black underline text-sm mt-3 inline-block">Learn more →</Link>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Airport Specialists</h3>
              <p className="text-gray-700 mb-3">JFK, LGA, Newark expertise</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Flight tracking and delay monitoring</li>
                <li>• Meet & greet at arrivals</li>
                <li>• Terminal navigation assistance</li>
                <li>• 60-minute complimentary wait time</li>
              </ul>
              <Link href="/services/airport-transfer" className="text-black underline text-sm mt-3 inline-block">Learn more →</Link>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Corporate Shuttle</h3>
              <p className="text-gray-700 mb-3">Regular routes and schedules</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Same driver for consistency</li>
                <li>• Familiarity with your preferences</li>
                <li>• Monthly billing and reporting</li>
                <li>• Volume discounts available</li>
              </ul>
              <Link href="/services/corporate-shuttle" className="text-black underline text-sm mt-3 inline-block">Learn more →</Link>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-black">Special Events</h3>
              <p className="text-gray-700 mb-3">Weddings, galas, concerts</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Timed arrival for photo opportunities</li>
                <li>• Red carpet service available</li>
                <li>• Late-night availability</li>
                <li>• Champagne service upon request</li>
              </ul>
              <Link href="/services/event-transportation" className="text-black underline text-sm mt-3 inline-block">Learn more →</Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Client Testimonials</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <p className="text-gray-700 italic mb-3">"The professionalism is immediately apparent. Our driver arrived in a pristine suit, knew the fastest route to JFK despite rush hour, and made our C-suite feel completely at ease."</p>
              <p className="font-semibold text-black">— Sarah M., Executive Assistant, Financial Services Firm</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <p className="text-gray-700 italic mb-3">"We've used Noble for 3 years for our corporate transportation. Same drivers, same impeccable service every time. They understand the definition of 'professional chauffeur.'"</p>
              <p className="font-semibold text-black">— David R., VP Operations, Tech Company</p>
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience Professional Chauffeur Service</h2>
          <p className="text-lg mb-6">Book your next ride with a trained, vetted, professional chauffeur</p>
          <div className="flex gap-4">
            <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 font-semibold">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white px-6 py-3 font-semibold">Request Quote</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/corporate-car-service-guide" className="text-black underline">Corporate Car Service Guide</Link>
            <Link href="/blog/business-travel-tips" className="text-black underline">Business Travel Tips</Link>
            <Link href="/services/executive-car-service" className="text-black underline">Executive Car Service</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

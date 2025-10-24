import React from 'react'
import Link from 'next/link'

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Corporate Car Service</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Trusted transportation solutions for NYC businesses</p>
          <a href="tel:+14045138803" className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call (404) 513-8803</a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Professional Business Transportation</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">Noble provides comprehensive corporate car service to Fortune 500 companies, law firms, financial institutions, and growing startups throughout New York City. Our corporate program delivers reliable, professional transportation with the financial controls, reporting, and service levels that businesses demand.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4 text-black">Executive Transport</h3>
            <p className="text-gray-700">C-suite and VIP client transportation in our First Class fleet. Professional, discreet service that reflects well on your company.</p>
          </div>
          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4 text-black">Employee Shuttles</h3>
            <p className="text-gray-700">Scheduled shuttle service between office locations, airports, and transit hubs. Consistent, reliable transportation for your team.</p>
          </div>
          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold mb-4 text-black">Airport Service</h3>
            <p className="text-gray-700">Flight-tracked airport transfers ensuring your executives never wait. Meet and greet service with professional signage.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 border-l-4 border-black">
          <h3 className="text-2xl font-bold mb-4 text-black">Corporate Account Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Monthly Invoicing:</strong> NET 30 payment terms with consolidated billing</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Dedicated Account Manager:</strong> Single point of contact for all your needs</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Volume Discounts:</strong> Savings based on monthly spend</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Priority Booking:</strong> Guaranteed vehicle availability</span></li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Online Portal:</strong> 24/7 booking and trip management</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Detailed Reporting:</strong> Expense tracking and analytics</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Multiple Billing Codes:</strong> Department or cost center allocation</span></li>
              <li className="flex items-start"><span className="text-black font-bold mr-3">✓</span><span className="text-gray-700"><strong>Custom Solutions:</strong> Tailored programs for your company</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Volume Discount Program</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-gray-200 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-black mb-3">Small Business</h3>
              <p className="text-gray-700 mb-3">Lower volume monthly accounts</p>
              <p className="text-sm text-gray-600">Discounted rates available</p>
            </div>
            <div className="bg-white p-8 border-2 border-gray-200 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-black mb-3">Enterprise</h3>
              <p className="text-gray-700 mb-3">High volume corporate accounts</p>
              <p className="text-sm text-gray-600">Preferred pricing tiers</p>
            </div>
            <div className="bg-white p-8 border-2 border-black text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-black mb-3">Custom Solutions</h3>
              <p className="text-gray-700 mb-3">Large enterprise accounts</p>
              <p className="text-sm text-gray-600">Tailored pricing & service</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">Contact us to discuss volume discount pricing based on your company's needs</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">Who We Serve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-black">Law Firms</h3>
            <p className="text-gray-700 mb-4">Timely transport for partners, associates, and clients to court, depositions, and client meetings.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Billable expense tracking</li>
              <li>• Client-specific billing codes</li>
              <li>• Professional discretion</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-black">Financial Services</h3>
            <p className="text-gray-700 mb-4">Executive transportation for investment banks, hedge funds, and asset managers.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Early morning/late night service</li>
              <li>• Multi-city roadshow support</li>
              <li>• Confidential client transport</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-black">Technology Companies</h3>
            <p className="text-gray-700 mb-4">Employee shuttles, client pickups, and event transportation for growing tech firms.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Office shuttle programs</li>
              <li>• Recruiting candidate transport</li>
              <li>• Tech event logistics</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-black">Getting Started</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-black">
              <div className="flex items-start">
                <div className="text-2xl font-bold text-black mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Contact Us</h3>
                  <p className="text-gray-700">Call (404) 513-8803 or email to discuss your company&apos;s transportation needs. We&apos;ll assess volume, typical routes, and special requirements.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-l-4 border-black">
              <div className="flex items-start">
                <div className="text-2xl font-bold text-black mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Account Setup</h3>
                  <p className="text-gray-700">We&apos;ll create your corporate account with billing details, authorized users, and any special instructions. Typically completed in 24-48 hours.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-l-4 border-black">
              <div className="flex items-start">
                <div className="text-2xl font-bold text-black mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Start Booking</h3>
                  <p className="text-gray-700">Use our online portal, call dispatch directly, or have your admin team book rides. Your dedicated account manager ensures everything runs smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Set Up Your Corporate Account?</h2>
          <p className="text-xl mb-8 text-gray-300">Join hundreds of NYC companies who trust Noble for their transportation needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call (404) 513-8803</a>
            <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Request Quote</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org","@type": "Service","serviceType": "Corporate Car Service","provider": {"@type": "Organization","name": "Noble Black Car Service","telephone": "+1-404-513-8803"},"description": "Corporate transportation solutions for NYC businesses with monthly billing and volume discounts"})}} />
    </main>
  )
}

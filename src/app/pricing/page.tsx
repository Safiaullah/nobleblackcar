import React from 'react'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Flat rates with no hidden fees, no surge pricing, ever
          </p>
          <a
            href="tel:+14045138803"
            className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call for Quote: (404) 513-8803
          </a>
        </div>
      </section>

      {/* Pricing Promise */}
      <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2 text-black">All-Inclusive Rates</h3>
              <p className="text-gray-700">Tolls, taxes, and fees included in every quote</p>
            </div>
            <div>
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2 text-black">No Surge Pricing</h3>
              <p className="text-gray-700">Same flat rate 24/7, rain or shine, busy or quiet</p>
            </div>
            <div>
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2 text-black">60-Minute Wait Time</h3>
              <p className="text-gray-700">Complimentary for airport pickups, no extra charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transfer Pricing */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Airport Transfer Rates</h2>
          <p className="text-xl text-gray-700 mb-12">
            Flat-rate pricing to and from all NYC airports. Price includes meet and greet, flight tracking, and 60 minutes wait time.
          </p>

          {/* JFK Airport */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2 text-black">
              <Link href="/airports/jfk" className="hover:underline">JFK Airport</Link>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Route</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business SUV</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class SUV</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Manhattan to/from JFK</td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                    <td className="px-6 py-4 font-bold text-black">$130</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                    <td className="px-6 py-4 font-bold text-black">$150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Brooklyn to/from JFK</td>
                    <td className="px-6 py-4 font-bold text-black">$75</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Queens to/from JFK</td>
                    <td className="px-6 py-4 font-bold text-black">$65</td>
                    <td className="px-6 py-4 font-bold text-black">$90</td>
                    <td className="px-6 py-4 font-bold text-black">$85</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800">Long Island to/from JFK</td>
                    <td className="px-6 py-4 font-bold text-black">$85</td>
                    <td className="px-6 py-4 font-bold text-black">$115</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                    <td className="px-6 py-4 font-bold text-black">$135</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* LaGuardia Airport */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2 text-black">
              <Link href="/airports/laguardia" className="hover:underline">LaGuardia Airport (LGA)</Link>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Route</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business SUV</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class SUV</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Manhattan to/from LGA</td>
                    <td className="px-6 py-4 font-bold text-black">$85</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                    <td className="px-6 py-4 font-bold text-black">$110</td>
                    <td className="px-6 py-4 font-bold text-black">$140</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Brooklyn to/from LGA</td>
                    <td className="px-6 py-4 font-bold text-black">$80</td>
                    <td className="px-6 py-4 font-bold text-black">$110</td>
                    <td className="px-6 py-4 font-bold text-black">$100</td>
                    <td className="px-6 py-4 font-bold text-black">$130</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Queens to/from LGA</td>
                    <td className="px-6 py-4 font-bold text-black">$55</td>
                    <td className="px-6 py-4 font-bold text-black">$80</td>
                    <td className="px-6 py-4 font-bold text-black">$75</td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800">Bronx to/from LGA</td>
                    <td className="px-6 py-4 font-bold text-black">$65</td>
                    <td className="px-6 py-4 font-bold text-black">$90</td>
                    <td className="px-6 py-4 font-bold text-black">$85</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Newark Airport */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2 text-black">
              <Link href="/airports/newark" className="hover:underline">Newark Airport (EWR)</Link>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Route</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business SUV</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class SUV</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Manhattan to/from EWR</td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                    <td className="px-6 py-4 font-bold text-black">$130</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                    <td className="px-6 py-4 font-bold text-black">$150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Brooklyn to/from EWR</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                    <td className="px-6 py-4 font-bold text-black">$140</td>
                    <td className="px-6 py-4 font-bold text-black">$130</td>
                    <td className="px-6 py-4 font-bold text-black">$160</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">Queens to/from EWR</td>
                    <td className="px-6 py-4 font-bold text-black">$100</td>
                    <td className="px-6 py-4 font-bold text-black">$135</td>
                    <td className="px-6 py-4 font-bold text-black">$125</td>
                    <td className="px-6 py-4 font-bold text-black">$155</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800">New Jersey to/from EWR</td>
                    <td className="px-6 py-4 font-bold text-black">$75</td>
                    <td className="px-6 py-4 font-bold text-black">$105</td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Private Aviation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2 text-black">Private Aviation</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Route</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class Sedan</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business SUV</th>
                    <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class SUV</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">
                      <Link href="/airports/teterboro" className="hover:underline">Manhattan to/from Teterboro (TEB)</Link>
                    </td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                    <td className="px-6 py-4 font-bold text-black">$160</td>
                    <td className="px-6 py-4 font-bold text-black">$150</td>
                    <td className="px-6 py-4 font-bold text-black">$220</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-800">
                      <Link href="/airports/westchester" className="hover:underline">Manhattan to/from Westchester (HPN)</Link>
                    </td>
                    <td className="px-6 py-4 font-bold text-black">$95</td>
                    <td className="px-6 py-4 font-bold text-black">$130</td>
                    <td className="px-6 py-4 font-bold text-black">$120</td>
                    <td className="px-6 py-4 font-bold text-black">$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-black">
            <p className="text-gray-700">
              <strong className="text-black">All airport rates include:</strong> Professional chauffeur, meet and greet service with name sign, flight tracking, 60 minutes complimentary wait time, all tolls and fees, bottled water, and Wi-Fi.
            </p>
          </div>
        </div>
      </section>

      {/* Hourly Service Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-black">Hourly / As-Directed Service</h2>
          <p className="text-xl text-gray-700 mb-12">
            Perfect for multi-stop trips, wine tours, city sightseeing, or when you need a dedicated chauffeur. 3-hour minimum.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Vehicle Type</th>
                  <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Hourly Rate</th>
                  <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">3-Hour Minimum</th>
                  <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Capacity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Business Sedan</td>
                  <td className="px-6 py-4 font-bold text-black">$75/hour</td>
                  <td className="px-6 py-4 text-gray-700">$225</td>
                  <td className="px-6 py-4 text-gray-700">Up to 3 passengers</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">First Class Sedan</td>
                  <td className="px-6 py-4 font-bold text-black">$95/hour</td>
                  <td className="px-6 py-4 text-gray-700">$285</td>
                  <td className="px-6 py-4 text-gray-700">Up to 3 passengers</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">Business SUV</td>
                  <td className="px-6 py-4 font-bold text-black">$85/hour</td>
                  <td className="px-6 py-4 text-gray-700">$255</td>
                  <td className="px-6 py-4 text-gray-700">Up to 6 passengers</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">First Class SUV</td>
                  <td className="px-6 py-4 font-bold text-black">$105/hour</td>
                  <td className="px-6 py-4 text-gray-700">$315</td>
                  <td className="px-6 py-4 text-gray-700">Up to 6 passengers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Mercedes Sprinter Van</td>
                  <td className="px-6 py-4 font-bold text-black">$125/hour</td>
                  <td className="px-6 py-4 text-gray-700">$375</td>
                  <td className="px-6 py-4 text-gray-700">Up to 14 passengers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white p-6 border-l-4 border-black">
            <p className="text-gray-700">
              <strong className="text-black">Hourly service includes:</strong> Professional chauffeur who stays with vehicle, unlimited stops, complimentary Wi-Fi and water, all tolls and parking fees within NYC metro area.
            </p>
          </div>
        </div>
      </section>

      {/* Long-Distance Routes */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-black">Long-Distance Routes</h2>
        <p className="text-xl text-gray-700 mb-12">
          Flat-rate pricing for popular long-distance destinations. Perfect for business trips and special occasions.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Destination</th>
                <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business Sedan</th>
                <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class Sedan</th>
                <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">Business SUV</th>
                <th className="px-6 py-4 text-left text-black font-bold border-b border-gray-200">First Class SUV</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-800">
                  <Link href="/routes/hamptons" className="hover:underline">Manhattan to The Hamptons</Link>
                </td>
                <td className="px-6 py-4 font-bold text-black">$450</td>
                <td className="px-6 py-4 font-bold text-black">$525</td>
                <td className="px-6 py-4 font-bold text-black">$500</td>
                <td className="px-6 py-4 font-bold text-black">$600</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-800">Manhattan to Boston</td>
                <td className="px-6 py-4 font-bold text-black">$650</td>
                <td className="px-6 py-4 font-bold text-black">$750</td>
                <td className="px-6 py-4 font-bold text-black">$725</td>
                <td className="px-6 py-4 font-bold text-black">$850</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-800">Manhattan to Philadelphia</td>
                <td className="px-6 py-4 font-bold text-black">$350</td>
                <td className="px-6 py-4 font-bold text-black">$425</td>
                <td className="px-6 py-4 font-bold text-black">$400</td>
                <td className="px-6 py-4 font-bold text-black">$500</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-800">Manhattan to Washington DC</td>
                <td className="px-6 py-4 font-bold text-black">$700</td>
                <td className="px-6 py-4 font-bold text-black">$825</td>
                <td className="px-6 py-4 font-bold text-black">$775</td>
                <td className="px-6 py-4 font-bold text-black">$950</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">Manhattan to Newport, RI</td>
                <td className="px-6 py-4 font-bold text-black">$550</td>
                <td className="px-6 py-4 font-bold text-black">$650</td>
                <td className="px-6 py-4 font-bold text-black">$625</td>
                <td className="px-6 py-4 font-bold text-black">$750</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gray-50 p-6 border-l-4 border-black">
          <p className="text-gray-700">
            <strong className="text-black">Long-distance rates include:</strong> All tolls, parking, and waiting time. Rates shown are one-way. Round-trip discounts available—call for details.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">What's Included in Every Rate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Professional Chauffeur</h3>
              <p className="text-gray-700">TLC licensed, background-checked, impeccably dressed professional driver</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">All Tolls & Taxes</h3>
              <p className="text-gray-700">Bridge, tunnel, and highway tolls plus all applicable taxes and fees</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Complimentary Amenities</h3>
              <p className="text-gray-700">Wi-Fi, bottled water, phone chargers, climate control</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Flight Tracking</h3>
              <p className="text-gray-700">Real-time monitoring for airport pickups with automatic adjustments</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Wait Time</h3>
              <p className="text-gray-700">60 minutes for airport pickups, 15 minutes for other services</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Luggage Assistance</h3>
              <p className="text-gray-700">Help with loading and unloading bags at every stop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Pricing */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-black">Corporate Account Pricing</h2>
        <p className="text-xl text-gray-700 mb-8">
          Volume discounts and NET 30 payment terms available for businesses. Contact us to set up a corporate account.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-black">Corporate Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>Volume discounts based on monthly usage</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>NET 30 payment terms with monthly invoicing</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>Online booking portal with cost tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>Detailed expense reports and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-3">✓</span>
                <span>Priority vehicle availability</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-black">Volume Discount Tiers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-800">$2,000 - $5,000/month</span>
                <span className="font-bold text-black">5% discount</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-800">$5,000 - $10,000/month</span>
                <span className="font-bold text-black">10% discount</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-800">$10,000 - $20,000/month</span>
                <span className="font-bold text-black">15% discount</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-800">$20,000+/month</span>
                <span className="font-bold text-black">Custom pricing</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Contact us to discuss enterprise-level pricing for large organizations.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services/corporate-shuttle"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Learn About Corporate Accounts
          </Link>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black">Pricing FAQs</h2>

          <div className="space-y-6 bg-white p-8 border border-gray-200">
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Is gratuity included?</h3>
              <p className="text-gray-700">
                Gratuity is not included in our quoted rates and is entirely at your discretion. If you're pleased with your service, 15-20% is customary and can be added to your card payment or given directly to your chauffeur.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and cash. Corporate clients can use our NET 30 invoicing system.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Do you have surge pricing?</h3>
              <p className="text-gray-700">
                Absolutely not. Our flat rates are the same 24/7, 365 days a year. No surge pricing during rush hour, bad weather, holidays, or high-demand times. The price you're quoted is the price you pay.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Are tolls really included?</h3>
              <p className="text-gray-700">
                Yes, all tolls are included in your quoted rate—no surprises. This includes bridges, tunnels, and highways for NYC metro area trips. For long-distance routes, all tolls en route are included.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">How do I get a custom quote?</h3>
              <p className="text-gray-700">
                Call <a href="tel:+14045138803" className="font-bold text-black hover:underline">(404) 513-8803</a> or <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="font-bold text-black hover:underline">book online</Link> with your trip details. Our team will provide an exact quote based on your pickup/drop-off locations, vehicle preference, and any special requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a custom quote or book your ride today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (404) 513-8803
            </a>
            <Link
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "name": "Noble Black Car Service Pricing",
            "description": "Flat-rate black car service pricing in NYC with no surge charges or hidden fees"
          })
        }}
      />
    </main>
  )
}

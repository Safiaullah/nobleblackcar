import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NYC Airport Transportation Guide: JFK, LaGuardia & Newark 2025',
  description: 'Complete guide to getting to/from NYC airports. Compare taxis, rideshare, black car service, trains, and shuttles for JFK, LGA, and EWR.',
  keywords: 'NYC airport transportation, JFK airport transport, LaGuardia airport options, Newark airport guide, best way to airports NYC',
}

export default function AirportTransportationGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-black hover:underline mb-4 inline-block">← Back to Blog</Link>

        <header className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Airport Travel • 12 min read • Updated January 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">NYC Airport Transportation Guide</h1>
          <p className="text-xl text-gray-700">Everything you need to know about getting to and from JFK, LaGuardia, and Newark airports</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            New York City has three major airports serving millions of travelers annually: JFK, LaGuardia, and Newark. Each offers multiple transportation options, but choosing the right one depends on your priorities—cost, time, comfort, and convenience. This comprehensive guide breaks down every option to help you make the best choice.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">JFK Airport Transportation</h2>

          <p className="text-gray-700 mb-6">
            John F. Kennedy International Airport, located in Queens about 16 miles from Midtown Manhattan, is NYC&apos;s busiest airport. Here are your transportation options:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">1. Black Car Service (Recommended)</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $95-130 flat rate from Manhattan</li>
            <li><strong>Time:</strong> 45-60 minutes depending on traffic</li>
            <li><strong>Pros:</strong> Door-to-door, professional driver, flight tracking, luggage assistance, predictable pricing</li>
            <li><strong>Cons:</strong> Higher cost than public transit</li>
            <li><strong>Best For:</strong> Business travelers, families with luggage, early morning/late night flights</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">2. Yellow Taxi</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $70 flat rate to Manhattan plus tolls and tip ($80-90 total)</li>
            <li><strong>Time:</strong> 45-70 minutes</li>
            <li><strong>Pros:</strong> Always available at taxi stands, fixed pricing to Manhattan</li>
            <li><strong>Cons:</strong> Vehicle quality varies, no advance booking, metered for other destinations</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">3. Uber/Lyft</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $50-120 depending on demand and time of day</li>
            <li><strong>Time:</strong> 45-60 minutes plus pickup wait</li>
            <li><strong>Pros:</strong> App-based convenience, multiple vehicle options</li>
            <li><strong>Cons:</strong> Surge pricing can be extreme, pickup location confusion at JFK, driver may cancel</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">4. AirTrain + Subway</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $11 ($8.25 AirTrain + $2.75 subway)</li>
            <li><strong>Time:</strong> 60-90 minutes total</li>
            <li><strong>Pros:</strong> Very inexpensive, no traffic concerns</li>
            <li><strong>Cons:</strong> Not practical with heavy luggage, multiple transfers, can be confusing for first-time visitors</li>
          </ul>

          <div className="bg-gray-50 p-6 border-l-4 border-black my-8">
            <h4 className="text-lg font-bold mb-3 text-black">JFK Recommendation</h4>
            <p className="text-gray-700">For most travelers, black car service or taxi provides the best balance of cost and convenience. Public transit works for budget-conscious solo travelers with minimal luggage.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">LaGuardia Airport Transportation</h2>

          <p className="text-gray-700 mb-6">
            LaGuardia Airport in Queens is closest to Manhattan (8 miles) but lacks direct rail access, making ground transportation your primary option.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">1. Black Car Service (Recommended)</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $85-120 flat rate from Manhattan</li>
            <li><strong>Time:</strong> 25-45 minutes depending on traffic</li>
            <li><strong>Pros:</strong> Fastest and most reliable option, professional service</li>
            <li><strong>Cons:</strong> Higher cost</li>
            <li><strong>Best For:</strong> Anyone prioritizing time and convenience</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">2. Yellow Taxi</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $30-45 metered plus tolls and tip</li>
            <li><strong>Time:</strong> 25-50 minutes</li>
            <li><strong>Pros:</strong> Readily available, metered pricing prevents gouging</li>
            <li><strong>Cons:</strong> Price varies with traffic, quality inconsistent</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">3. M60 Bus + Subway</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $2.75</li>
            <li><strong>Time:</strong> 60-90 minutes</li>
            <li><strong>Pros:</strong> Very cheap</li>
            <li><strong>Cons:</strong> Slow, crowded, difficult with luggage, requires subway transfer</li>
          </ul>

          <div className="bg-gray-50 p-6 border-l-4 border-black my-8">
            <h4 className="text-lg font-bold mb-3 text-black">LaGuardia Recommendation</h4>
            <p className="text-gray-700">Given the lack of rail access, car service (black car or taxi) is the practical choice for most travelers. The bus is only suitable for budget travelers with minimal luggage and extra time.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Newark Airport Transportation</h2>

          <p className="text-gray-700 mb-6">
            Newark Liberty International Airport in New Jersey is 16 miles from Manhattan. Despite being outside NYC, it offers good rail connections.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">1. Black Car Service (Recommended for Groups)</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $95-130 flat rate from Manhattan</li>
            <li><strong>Time:</strong> 40-60 minutes</li>
            <li><strong>Pros:</strong> Door-to-door convenience, cost-effective for 2+ people</li>
            <li><strong>Cons:</strong> Higher cost for solo travelers</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">2. NJ Transit Train (Best Budget Option)</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $15-20 ($7.75 AirTrain + $8-13 NJ Transit to Penn Station)</li>
            <li><strong>Time:</strong> 45-60 minutes</li>
            <li><strong>Pros:</strong> Reliable, affordable, direct to Penn Station</li>
            <li><strong>Cons:</strong> Requires AirTrain transfer, limited luggage space during peak hours</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">3. Taxi</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li><strong>Cost:</strong> $70-90 metered plus tolls ($15-20) and tip</li>
            <li><strong>Time:</strong> 40-70 minutes</li>
            <li><strong>Pros:</strong> Available at taxi stand</li>
            <li><strong>Cons:</strong> Can be expensive during heavy traffic</li>
          </ul>

          <div className="bg-gray-50 p-6 border-l-4 border-black my-8">
            <h4 className="text-lg font-bold mb-3 text-black">Newark Recommendation</h4>
            <p className="text-gray-700">NJ Transit train is excellent for solo travelers on a budget. For families or business travelers, black car service provides better value and convenience.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Decision Framework: Which Option to Choose?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Choose Black Car Service When:</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li>You&apos;re traveling for business and need reliability</li>
            <li>You have an early morning flight (before 6 AM) or late night arrival</li>
            <li>You&apos;re traveling with family or colleagues (2+ people makes it cost-effective)</li>
            <li>You have significant luggage</li>
            <li>You want guaranteed pickup and flight tracking</li>
            <li>Your company covers transportation (corporate account benefits)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Choose Taxi When:</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li>You need immediate transportation without advance booking</li>
            <li>You&apos;re at JFK and want flat-rate pricing to Manhattan</li>
            <li>You prefer the simplicity of standing in the taxi line</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Choose Public Transit When:</h3>
          <ul className="list-disc ml-8 mb-6 text-gray-700 space-y-2">
            <li>You&apos;re on a tight budget</li>
            <li>You&apos;re traveling alone with minimal luggage</li>
            <li>You have extra time and want to avoid traffic</li>
            <li>You&apos;re comfortable navigating NYC transit</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Pro Tips for NYC Airport Transportation</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h4 className="font-bold mb-2 text-black">1. Book in Advance for Peace of Mind</h4>
              <p className="text-gray-700">For arrivals, book your black car service when you buy your ticket. For departures, book 24-48 hours ahead to guarantee availability.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h4 className="font-bold mb-2 text-black">2. Account for Traffic</h4>
              <p className="text-gray-700">Rush hours (7-10 AM, 4-7 PM) can double travel time. For early morning flights, leave extra time. For afternoon departures, consider off-peak travel.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h4 className="font-bold mb-2 text-black">3. Know Your Terminal</h4>
              <p className="text-gray-700">JFK has 4 terminals, Newark has 3, LaGuardia has 3. Share your airline and terminal with your driver for smooth pickup.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h4 className="font-bold mb-2 text-black">4. Save Receipts for Business Travel</h4>
              <p className="text-gray-700">Black car services provide detailed receipts perfect for expense reports. Many offer corporate accounts with monthly billing.</p>
            </div>
          </div>

          <div className="bg-black text-white p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Noble Airport Service</h3>
            <p className="text-gray-300 mb-6">Professional airport transportation with flight tracking, 60-minute wait time, and flat-rate pricing. Serving JFK, LaGuardia, Newark, Teterboro, and Westchester airports 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+14045138803" className="bg-white text-black px-6 py-3 text-center font-semibold hover:bg-gray-100 transition-colors">Call (404) 513-8803</a>
              <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-black transition-colors">Book Airport Service</a>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">Cost Comparison Summary</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-black">Option</th>
                  <th className="px-4 py-3 text-left font-bold text-black">JFK to Manhattan</th>
                  <th className="px-4 py-3 text-left font-bold text-black">LGA to Manhattan</th>
                  <th className="px-4 py-3 text-left font-bold text-black">EWR to Manhattan</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b"><td className="px-4 py-3 font-bold">Black Car</td><td className="px-4 py-3 text-gray-700">$95-130</td><td className="px-4 py-3 text-gray-700">$85-120</td><td className="px-4 py-3 text-gray-700">$95-130</td></tr>
                <tr className="border-b"><td className="px-4 py-3 font-bold">Taxi</td><td className="px-4 py-3 text-gray-700">$70 flat</td><td className="px-4 py-3 text-gray-700">$35-50</td><td className="px-4 py-3 text-gray-700">$75-100</td></tr>
                <tr className="border-b"><td className="px-4 py-3 font-bold">Uber/Lyft</td><td className="px-4 py-3 text-gray-700">$50-120</td><td className="px-4 py-3 text-gray-700">$35-80</td><td className="px-4 py-3 text-gray-700">$50-110</td></tr>
                <tr><td className="px-4 py-3 font-bold">Public Transit</td><td className="px-4 py-3 text-gray-700">$11</td><td className="px-4 py-3 text-gray-700">$2.75</td><td className="px-4 py-3 text-gray-700">$15-20</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </main>
  )
}

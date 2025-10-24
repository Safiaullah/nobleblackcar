import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Holiday Airport Travel Tips NYC - Thanksgiving, Christmas | Noble',
  description: 'Navigate NYC holiday airport travel. Tips for Thanksgiving, Christmas, New Year. Avoid crowds, book early, arrive stress-free.',
  keywords: 'holiday airport travel NYC, Thanksgiving airport tips, Christmas travel NYC, holiday car service',
}

export default function HolidayTravelPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-black hover:underline mb-4 inline-block">← Back to Blog</Link>
        <header className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Holiday Travel • 6 min read</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Holiday Airport Travel Survival Guide for NYC</h1>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-lg">NYC airports during Thanksgiving, Christmas, and New Year are among the busiest in the world. Here's how to navigate holiday travel stress-free.</p>

          <h2 className="text-3xl font-bold text-black">Book Transportation NOW</h2>
          <p>This is the #1 mistake travelers make. Black car services book solid during peak travel days (the Wednesday before Thanksgiving can sell out 2-3 weeks in advance).</p>
          <div className="bg-red-50 p-6 border-l-4 border-red-500">
            <p className="font-bold text-black">Critical Booking Windows:</p>
            <ul className="mt-2 space-y-1">
              <li>• Thanksgiving week: Book 3-4 weeks ahead</li>
              <li>• Christmas week: Book 4-6 weeks ahead</li>
              <li>• New Year week: Book 2-3 weeks ahead</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-black">Expect DOUBLE Travel Times</h2>
          <p>Normal 45-minute JFK trip can easily become 90+ minutes during peak holiday periods. Add extra buffer:</p>
          <ul className="list-disc ml-6">
            <li>Domestic flights: Arrive 3 hours early (vs. normal 2)</li>
            <li>International flights: Arrive 3.5-4 hours early</li>
            <li>Account for TSA PreCheck lines being 30+ minutes vs. usual 5</li>
          </ul>

          <h2 className="text-3xl font-bold text-black">Worst Travel Days to Avoid</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <p className="font-bold mb-3">Thanksgiving 2025</p>
            <ul className="space-y-2">
              <li><strong>Wednesday, Nov 26:</strong> Absolute worst (fly Tuesday if possible)</li>
              <li><strong>Sunday, Nov 30:</strong> Brutal return day (consider Monday)</li>
            </ul>
            <p className="font-bold mt-4 mb-3">Christmas 2025</p>
            <ul className="space-y-2">
              <li><strong>Friday, Dec 19 - Sunday, Dec 21:</strong> Peak departure</li>
              <li><strong>Sunday, Dec 28 - Monday, Dec 29:</strong> Return chaos</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-black">Why Black Car vs Rideshare During Holidays</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>No Surge Pricing:</strong> Flat rates vs. potential 3-5x surge</li>
            <li><strong>Guaranteed Pickup:</strong> Pre-booked, no risk of driver cancellation</li>
            <li><strong>Timing Reliability:</strong> Professional drivers plan for holiday traffic</li>
            <li><strong>Luggage Capacity:</strong> SUVs for gifts + suitcases</li>
          </ul>

          <h2 className="text-3xl font-bold text-black">Pro Tips</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li><strong>Choose Off-Peak Flights:</strong> 6 AM or 9 PM flights are less crowded</li>
            <li><strong>Lock in Rates Early:</strong> Prices don't increase once booked</li>
            <li><strong>Use Airport Alerts:</strong> Sign up for flight delay notifications</li>
            <li><strong>Pack Light:</strong> Checked bag delays are worst during holidays</li>
            <li><strong>Have Backup Plans:</strong> Know alternate airports (consider Newark vs. JFK)</li>
          </ol>

          <div className="bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Book Holiday Transportation</h3>
            <p className="text-gray-300 mb-4">Lock in flat-rate holiday pricing today. No surge, no surprises. 24/7 service including Thanksgiving, Christmas, and New Year.</p>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="text-white underline">Get holiday quote →</a>
          </div>
        </div>
      </article>
    </main>
  )
}

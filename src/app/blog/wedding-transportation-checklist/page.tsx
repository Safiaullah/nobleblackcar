import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Transportation Checklist NYC - Planning Guide | Noble',
  description: 'Complete wedding transportation checklist for NYC weddings. Plan bridal party, guest shuttles, and luxury car service. Timeline, tips, and pricing guide.',
  keywords: 'wedding transportation checklist, NYC wedding car service, bridal party limo, wedding shuttle planning',
}

export default function WeddingChecklistPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-black hover:underline mb-4 inline-block">← Back to Blog</Link>
        <header className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Wedding Planning • 8 min read</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Wedding Transportation Checklist: NYC Planning Guide</h1>
          <p className="text-xl text-gray-700">Everything you need to know about coordinating transportation for your NYC wedding</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-lg">Transportation is one of the most overlooked aspects of wedding planning, yet it's crucial for keeping your day running smoothly. This comprehensive checklist ensures your bridal party and guests arrive on time and in style.</p>

          <h2 className="text-3xl font-bold text-black">6-12 Months Before Wedding</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <ul className="space-y-3">
              <li>✓ Determine total transportation needs (bridal party, family, guests)</li>
              <li>✓ Identify number of vehicles required</li>
              <li>✓ Research black car services and get quotes</li>
              <li>✓ Book premium vehicles early (Escalades, luxury sedans book quickly)</li>
              <li>✓ Consider guest hotel location vs. venue location</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-black">3-6 Months Before</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <ul className="space-y-3">
              <li>✓ Finalize vehicle count and types</li>
              <li>✓ Create detailed timeline for each vehicle</li>
              <li>✓ Book guest shuttle service if needed</li>
              <li>✓ Confirm service includes complimentary champagne</li>
              <li>✓ Review cancellation policies</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-black">Vehicle Recommendations by Need</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Bride & Groom</h3>
              <p className="mb-2">First Class Sedan (Mercedes S-Class) or First Class SUV (Escalade ESV)</p>
              <p className="text-sm text-gray-600">$300-400 for full day coverage</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Bridal Party (6-8 people)</h3>
              <p className="mb-2">Sprinter Van or 2 SUVs</p>
              <p className="text-sm text-gray-600">$500-700 for ceremony to reception</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Parents & VIP Family</h3>
              <p className="mb-2">Luxury SUV or Sedan</p>
              <p className="text-sm text-gray-600">$250-350 per vehicle</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Guest Shuttles</h3>
              <p className="mb-2">Multiple Sprinter vans based on guest count</p>
              <p className="text-sm text-gray-600">$150-200 per shuttle run</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black">Sample Timeline</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <p className="font-bold mb-4">For 4 PM Ceremony, 7 PM Reception</p>
            <ul className="space-y-2">
              <li><strong>1:00 PM</strong> - Bride's car picks up from hotel for photos</li>
              <li><strong>2:30 PM</strong> - Bridal party van departs hotel for venue</li>
              <li><strong>3:15 PM</strong> - Groom's car arrives at venue</li>
              <li><strong>3:45 PM</strong> - Parents' cars arrive</li>
              <li><strong>6:00 PM</strong> - Guest shuttle runs (hotel to reception)</li>
              <li><strong>11:00 PM</strong> - Bride/groom depart in getaway car</li>
              <li><strong>11:30 PM</strong> - Guest return shuttles begin</li>
            </ul>
          </div>

          <div className="bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Noble Wedding Package</h3>
            <p className="text-gray-300 mb-4">We specialize in NYC wedding transportation with custom packages for any size wedding. Book 3+ vehicles and save 10%.</p>
            <Link href="/services/wedding" className="text-white underline">View wedding services →</Link>
          </div>
        </div>
      </article>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Car Service Guide NYC - Executive Transportation | Noble',
  description: 'Complete guide to corporate car service in NYC. How to choose providers, set up accounts, manage employees, and reduce transportation costs.',
  keywords: 'corporate car service NYC, executive transportation guide, business car service, corporate account setup',
}

export default function CorporateGuide() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-black hover:underline mb-4 inline-block">← Back to Blog</Link>
        <header className="mb-12">
          <div className="text-sm text-gray-600 mb-4">Corporate Guide • 10 min read</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Corporate Car Service Guide: Everything You Need to Know</h1>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-lg">For companies sending employees to NYC regularly or entertaining clients, a corporate car service account can save time, money, and administrative headaches. This guide covers everything from selection to implementation.</p>

          <h2 className="text-3xl font-bold text-black">Why Corporate Car Service?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Cost Control:</strong> Flat rates prevent surprise expenses from surge pricing</li>
            <li><strong>Simplified Billing:</strong> One monthly invoice vs. dozens of expense reports</li>
            <li><strong>Professional Image:</strong> Luxury vehicles impress clients and partners</li>
            <li><strong>Employee Satisfaction:</strong> Reliable, comfortable transportation</li>
            <li><strong>Volume Discounts:</strong> Save 5-15% based on monthly usage</li>
          </ul>

          <h2 className="text-3xl font-bold text-black">Selecting a Provider</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold mb-3">Key Criteria</h3>
            <ul className="space-y-2">
              <li>✓ Fleet quality and variety (sedans, SUVs, vans)</li>
              <li>✓ 24/7 availability and customer service</li>
              <li>✓ Technology (online booking, trip tracking)</li>
              <li>✓ Billing flexibility (NET 30, monthly consolidation)</li>
              <li>✓ Driver training and background checks</li>
              <li>✓ Insurance coverage (minimum $1M liability)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-black">Setting Up Your Account</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li><strong>Initial Consultation:</strong> Discuss volume, needs, and pricing</li>
            <li><strong>Submit Company Information:</strong> W-9, credit references</li>
            <li><strong>Assign Account Manager:</strong> Single point of contact</li>
            <li><strong>Set Up Booking Methods:</strong> Phone, email, online portal</li>
            <li><strong>Employee Authorization:</strong> Who can book, approval workflows</li>
            <li><strong>Billing Setup:</strong> Monthly invoicing, NET 30 terms</li>
          </ol>

          <h2 className="text-3xl font-bold text-black">Managing Corporate Usage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold mb-3 text-black">Usage Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>• Define approved use cases</li>
                <li>• Set vehicle class by role</li>
                <li>• Establish booking procedures</li>
                <li>• Create approval thresholds</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold mb-3 text-black">Cost Control</h3>
              <ul className="space-y-2 text-sm">
                <li>• Monthly usage reports</li>
                <li>• Department cost allocation</li>
                <li>• Budget vs. actual tracking</li>
                <li>• Optimization recommendations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black">Typical Pricing Structure</h2>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Monthly Volume</th>
                  <th className="text-left py-2">Discount</th>
                  <th className="text-left py-2">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="py-2">5-9 rides</td><td>5%</td><td>Priority dispatch</td></tr>
                <tr className="border-b"><td className="py-2">10-19 rides</td><td>10%</td><td>+ Dedicated manager</td></tr>
                <tr className="border-b"><td className="py-2">20+ rides</td><td>15%</td><td>+ Custom reporting</td></tr>
                <tr><td className="py-2">50+ rides</td><td>Custom</td><td>+ Volume guarantees</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Start Your Corporate Account</h3>
            <p className="text-gray-300 mb-4">Noble serves 500+ corporations in NYC. Setup takes 24 hours. Call or visit our corporate page.</p>
            <Link href="/corporate" className="text-white underline">Set up corporate account →</Link>
          </div>
        </div>
      </article>
    </main>
  )
}

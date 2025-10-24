import React from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      title: "Black Car vs Uber in NYC: Which is Better?",
      slug: "black-car-vs-uber-nyc",
      excerpt: "Compare black car service and Uber for NYC transportation. Cost, reliability, professionalism, and when each option makes sense.",
      category: "Guides",
      readTime: "8 min read"
    },
    {
      title: "NYC Airport Transportation Guide",
      slug: "nyc-airport-transportation-guide",
      excerpt: "Complete guide to getting to and from JFK, LaGuardia, and Newark airports. Compare all your options and make the best choice.",
      category: "Airport Travel",
      readTime: "12 min read"
    },
    {
      title: "Business Travel Tips NYC",
      slug: "business-travel-tips",
      excerpt: "Essential tips for executive travelers in NYC. Maximize productivity and comfort during your business trips.",
      category: "Business",
      readTime: "7 min read"
    },
    {
      title: "Corporate Car Service Guide",
      slug: "corporate-car-service-guide",
      excerpt: "Everything you need to know about corporate car services in NYC. Benefits, features, and how to choose the right provider.",
      category: "Business",
      readTime: "10 min read"
    },
    {
      title: "Corporate Event Transportation",
      slug: "corporate-event-transportation",
      excerpt: "Professional transportation solutions for corporate events, conferences, and business gatherings in NYC.",
      category: "Events",
      readTime: "8 min read"
    },
    {
      title: "FIFA World Cup 2026 Transportation",
      slug: "fifa-2026-nyc-transportation",
      excerpt: "Plan your transportation for FIFA World Cup 2026 matches at MetLife Stadium. Beat the crowds with professional car service.",
      category: "Events",
      readTime: "9 min read"
    },
    {
      title: "Hamptons Transportation Guide",
      slug: "hamptons-transportation-guide",
      excerpt: "Your complete guide to getting from NYC to the Hamptons. Service options, pricing, and travel tips.",
      category: "Guides",
      readTime: "10 min read"
    },
    {
      title: "Holiday Airport Travel Tips",
      slug: "holiday-airport-travel",
      excerpt: "Navigate Thanksgiving and Christmas airport travel with ease. Tips for stress-free holiday transportation.",
      category: "Airport Travel",
      readTime: "7 min read"
    },
    {
      title: "Manhattan to JFK Routes",
      slug: "manhattan-to-jfk-routes",
      excerpt: "Discover the best routes from Manhattan to JFK Airport. Traffic patterns, timing, and route optimization.",
      category: "Airport Travel",
      readTime: "8 min read"
    },
    {
      title: "Why Pre-Book JFK Transfer",
      slug: "pre-book-jfk-transfer",
      excerpt: "Learn why pre-booking your JFK airport transfer guarantees better pricing, pickup, and peace of mind.",
      category: "Airport Travel",
      readTime: "6 min read"
    },
    {
      title: "Professional Chauffeur Service NYC",
      slug: "professional-chauffeur-service",
      excerpt: "What makes a professional chauffeur service? Training, standards, and the Noble difference.",
      category: "Guides",
      readTime: "9 min read"
    },
    {
      title: "Wedding Transportation Checklist",
      slug: "wedding-transportation-checklist",
      excerpt: "Complete checklist for planning wedding transportation in NYC. Timeline, vehicles, and coordination tips.",
      category: "Events",
      readTime: "11 min read"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Noble Blog</h1>
          <p className="text-xl md:text-2xl text-gray-200">Expert advice on NYC transportation, travel tips, and industry insights</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-gray-50 border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-600 mb-2">{post.category} • {post.readTime}</div>
              <h2 className="text-2xl font-bold mb-4 text-black">
                <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
              </h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-black font-bold hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Need Transportation Advice?</h2>
          <p className="text-xl text-gray-700 mb-8">Our team is here to help with your NYC travel questions</p>
          <a href="tel:+14045138803" className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors">Call (404) 513-8803</a>
        </div>
      </section>
    </main>
  )
}

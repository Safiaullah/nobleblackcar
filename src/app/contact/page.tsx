'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import * as gtag from '@/lib/gtag'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Track successful form submission
        gtag.trackFormSubmission('Contact Form')
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('There was an error submitting your message. Please call us at (404) 513-8803.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-4xl font-bold mb-4 text-black">Message Sent Successfully</h1>
          <p className="text-xl text-gray-700 mb-8">Thank you for contacting Noble Black Car Service. We will respond to your inquiry within 2 hours during business hours.</p>
          <p className="text-lg text-gray-600 mb-8">For immediate assistance, call us at <a href="tel:+14045138803" className="text-black font-bold hover:underline">(404) 513-8803</a></p>
          <Link href="/" className="bg-black text-white px-8 py-4 inline-block hover:bg-gray-800 transition-colors">Return Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-gray-200">Available 24/7 for Reservations and Inquiries</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-black">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Phone - 24/7 Reservations</h3>
                  <a href="tel:+14045138803" className="text-2xl font-bold text-black hover:underline">(404) 513-8803</a>
                  <p className="text-gray-600 mt-1">Fastest way to book or get immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">✉️</div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Email</h3>
                  <a href="mailto:info@nobleblackcarservice.com" className="text-lg text-black hover:underline">info@nobleblackcarservice.com</a>
                  <p className="text-gray-600 mt-1">For general inquiries and quote requests</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">💼</div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Corporate Accounts</h3>
                  <a href="mailto:corporate@nobleblackcarservice.com" className="text-lg text-black hover:underline">corporate@nobleblackcarservice.com</a>
                  <p className="text-gray-600 mt-1">Set up your business account with NET 30 terms</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Service Area</h3>
                  <p className="text-gray-700">New York City Metro Area</p>
                  <p className="text-gray-600">Manhattan, Brooklyn, Queens, Bronx, Staten Island</p>
                  <p className="text-gray-600">Long Island, Westchester, New Jersey, Connecticut</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">🕐</div>
                <div>
                  <h3 className="font-bold text-lg text-black mb-2">Hours</h3>
                  <p className="text-gray-700 font-bold">24 hours a day, 7 days a week</p>
                  <p className="text-gray-600">Including holidays</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-black">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="text-black hover:underline">Get a Free Quote</Link></li>
                <li><Link href="/corporate" className="text-black hover:underline">Corporate Account Setup</Link></li>
                <li><Link href="/services/airport-transfer" className="text-black hover:underline">Airport Transfers</Link></li>
                <li><Link href="/fleet" className="text-black hover:underline">View Our Fleet</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-bold text-black mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
                  >
                    <option value="">Select a subject...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Reservation Request">Reservation Request</option>
                    <option value="Corporate Account">Corporate Account</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-black mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">How far in advance should I book?</h3>
              <p className="text-gray-700">We recommend booking 24-48 hours in advance for guaranteed availability. However, we often accommodate same-day requests. Call (404) 513-8803 for immediate booking.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">Do you offer 24/7 service?</h3>
              <p className="text-gray-700">Yes! We provide transportation service 24 hours a day, 7 days a week, including all holidays. Our reservations team is also available 24/7.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">What payment methods do you accept?</h3>
              <p className="text-gray-700">We accept all major credit cards (Visa, Mastercard, Amex, Discover), cash, and corporate accounts with NET 30 terms. Payment is due at the end of service unless you have a corporate account.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">What is your cancellation policy?</h3>
              <p className="text-gray-700">Cancellations made 24+ hours before pickup: full refund. Cancellations made 12-24 hours before: 50% charge. Cancellations made less than 12 hours before or no-shows: full charge.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-black">How do I set up a corporate account?</h3>
              <p className="text-gray-700">Email corporate@nobleblackcarservice.com or call (404) 513-8803. We will set up your account with NET 30 payment terms, monthly invoicing, and a dedicated account manager within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Noble Black Car Service",
        "description": "Premium black car service in New York City offering airport transfers, corporate transportation, and executive car service 24/7",
        "url": "https://nobleblackcarservice.com",
        "telephone": "+14045138803",
        "email": "info@nobleblackcarservice.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "New York"
          },
          {
            "@type": "State",
            "name": "New York"
          },
          {
            "@type": "State",
            "name": "New Jersey"
          },
          {
            "@type": "State",
            "name": "Connecticut"
          }
        ],
        "openingHours": "Mo-Su 00:00-24:00",
        "priceRange": "$$$$",
        "image": "https://nobleblackcarservice.com/images/noble-black-car-service-logo.png",
        "sameAs": [
          "https://www.facebook.com/nobleblackcarservice",
          "https://www.instagram.com/nobleblackcarservice"
        ]
      })}} />
    </main>
  )
}

import React from 'react'
import Link from 'next/link'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Michael Chen",
      title: "Managing Partner, Law Firm",
      text: "We've used Noble for our firm's transportation needs for over two years. The reliability and professionalism are unmatched. Our clients are always impressed, and we never worry about late arrivals for court or client meetings.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      title: "Executive, Financial Services",
      text: "As someone who travels weekly from Manhattan to JFK, I've tried every service. Noble is the only one I trust completely. Flight tracking actually works, drivers are always professional, and the flat-rate pricing saves my company money compared to surge-pricing alternatives.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      title: "Event Coordinator",
      text: "Planned a wedding with Noble handling all transportation—bridal party, family, and guest shuttles. Flawless execution. Every vehicle arrived on time, drivers were courteous, and the couple was thrilled. Highly recommend for special events.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      title: "Marketing Director",
      text: "Corporate account setup was seamless. Monthly invoicing saves our admin team hours, and the dedicated account manager is incredibly responsive. The online portal makes booking easy for our entire team.",
      rating: 5
    },
    {
      name: "Robert Taylor",
      title: "Frequent Traveler",
      text: "I've been using Noble for Boston trips quarterly for three years. Same professional service every time. They know my preferences, the vehicles are immaculate, and I can work productively during the drive. Worth every penny.",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      title: "Small Business Owner",
      text: "Needed last-minute airport service for an important client visit. Noble accommodated us within hours, sent a Mercedes S-Class, and made an excellent impression. Our client specifically mentioned the quality of the service. Now I use them exclusively.",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Client Testimonials</h1>
          <p className="text-xl md:text-2xl text-gray-200">Trusted by professionals and businesses across New York City</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-2xl font-bold text-black mb-2">Consistently 5-Star Service</p>
          <p className="text-lg text-gray-700">Hundreds of satisfied clients trust Noble for their transportation needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 border border-gray-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-lg text-gray-700">On-Time Arrival Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <p className="text-lg text-gray-700">Corporate Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9/5</div>
              <p className="text-lg text-gray-700">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Noble Service Yourself</h2>
          <p className="text-xl mb-8 text-gray-300">Join hundreds of satisfied clients who trust Noble</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors">Call</a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors">Book Online</a>
          </div>
        </div>
      </section>
    </main>
  )
}

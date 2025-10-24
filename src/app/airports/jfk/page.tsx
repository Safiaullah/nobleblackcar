'use client';

import React, { useState } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BellAlertIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function JFKAirportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const terminals = [
    { number: "Terminal 1", airlines: "Air France, Japan Airlines, Korean Air, Lufthansa" },
    { number: "Terminal 2", airlines: "Delta Air Lines (domestic arrivals)" },
    { number: "Terminal 4", airlines: "Delta, Emirates, Etihad, KLM, Virgin Atlantic" },
    { number: "Terminal 5", airlines: "JetBlue Airways" },
    { number: "Terminal 7", airlines: "British Airways, United Airlines" },
    { number: "Terminal 8", airlines: "American Airlines, Qatar Airways" },
    { number: "Terminal 9", airlines: "Temporarily closed for renovation" },
  ];

  const neighborhoods = [
    { name: "Midtown Manhattan", time: "45-60 min", distance: "17 miles" },
    { name: "Lower Manhattan / Financial District", time: "50-70 min", distance: "19 miles" },
    { name: "Upper East Side", time: "45-65 min", distance: "18 miles" },
    { name: "Upper West Side", time: "50-70 min", distance: "19 miles" },
    { name: "Brooklyn (Williamsburg)", time: "40-60 min", distance: "15 miles" },
    { name: "Brooklyn (DUMBO)", time: "45-65 min", distance: "17 miles" },
    { name: "Long Island City", time: "25-40 min", distance: "10 miles" },
    { name: "Astoria", time: "30-45 min", distance: "12 miles" },
  ];

  const fleet = [
    {
      name: "Business Sedan",
      vehicles: "Mercedes E-Class, Cadillac CT6",
      passengers: "1-3 passengers",
      luggage: "3 large bags",
      bestFor: "Solo travelers, couples"
    },
    {
      name: "First Class Sedan",
      vehicles: "Mercedes S-Class, BMW 7 Series",
      passengers: "1-3 passengers",
      luggage: "3 large bags",
      bestFor: "VIP service, executives"
    },
    {
      name: "Business SUV",
      vehicles: "Suburban, Yukon, Navigator",
      passengers: "4-6 passengers",
      luggage: "6-8 large bags",
      bestFor: "Families, groups"
    },
    {
      name: "First Class SUV",
      vehicles: "Cadillac Escalade ESV",
      passengers: "4-6 passengers",
      luggage: "8+ large bags",
      bestFor: "Luxury group travel"
    }
  ];

  const faqs = [
    {
      question: "How early should I arrive at JFK Airport?",
      answer: "We recommend arriving 3 hours before international flights and 2 hours before domestic flights. JFK can be busy, especially at peak times. Our chauffeurs factor in traffic and TSA wait times to ensure you arrive with plenty of time. We'll pick you up based on your flight time and current traffic conditions."
    },
    {
      question: "Which JFK terminal will my chauffeur meet me at?",
      answer: "Your chauffeur will meet you at the specific terminal where your flight arrives. We monitor your flight in real-time and know exactly which terminal to go to. For pickups, your driver will be at baggage claim holding a sign with your name. Just provide your flight number when booking."
    },
    {
      question: "What if my JFK flight is delayed?",
      answer: "Don't worry! We automatically track all flights in real-time. If your flight is delayed, we adjust the pickup time accordingly - no need to call us. Your chauffeur will be there when you land, regardless of delays. This service is included at no extra charge."
    },
    {
      question: "How long is the drive from JFK to Manhattan?",
      answer: "The drive typically takes 45-75 minutes depending on your Manhattan destination and traffic conditions. Midtown Manhattan averages 50-60 minutes, while Lower Manhattan can take 60-70 minutes. We monitor traffic in real-time and take the fastest route available."
    },
    {
      question: "What's the best way to get from JFK to Manhattan?",
      answer: "A private black car service offers the most comfortable, convenient, and reliable option. Unlike taxis or rideshares, you get: flat-rate pricing (no meters or surge), professional meet & greet, flight tracking, luxury vehicles, and guaranteed service. No waiting in taxi lines or dealing with luggage on public transit."
    },
    {
      question: "How much does a car service from JFK to Manhattan cost?",
      answer: "We offer competitive flat-rate pricing for all JFK transfers. Prices vary by vehicle type and destination. Unlike taxis with meters or rideshares with surge pricing, you know your exact price upfront when you book. All tolls and fees are included - no hidden charges. Contact us or book online for a quote."
    },
    {
      question: "Do you provide JFK airport service 24/7?",
      answer: "Yes! We provide car service to and from JFK Airport 24 hours a day, 7 days a week, including holidays. Whether you have a 6 AM departure or a midnight arrival, we're available. Simply book online or call us anytime at (404) 513-8803."
    },
    {
      question: "What is included in your JFK car service?",
      answer: "Your flat rate includes: professional chauffeur, luxury vehicle, meet & greet at baggage claim, flight tracking, 60 minutes complimentary wait time, all tolls and fees, bottled water, and assistance with luggage. No hidden charges - the price you see is what you pay."
    },
    {
      question: "Can I book a JFK car service for multiple passengers?",
      answer: "Absolutely! Our SUVs accommodate up to 6 passengers comfortably with plenty of luggage space. Perfect for families, groups, or business colleagues traveling together. Our Sprinter vans can handle even larger groups up to 14 passengers."
    },
    {
      question: "How do I find my chauffeur at JFK?",
      answer: "For arrivals, your chauffeur will be waiting at your terminal's baggage claim area holding a sign with your name clearly displayed. You'll receive their contact information before your flight. For departures, they'll meet you at your specified pickup location at the scheduled time."
    },
    {
      question: "What if I have an early morning JFK flight?",
      answer: "Early morning pickups are our specialty! We ensure your chauffeur arrives on time, even for 5 AM or 6 AM flights. We factor in early morning traffic patterns (which are typically lighter) to get you to JFK with time to spare. Book with confidence for any departure time."
    },
    {
      question: "Are there any additional fees or tolls for JFK service?",
      answer: "No hidden fees! Our flat rate includes all tolls, airport fees, and gratuity (if booked online). The price quoted is your final price. Unlike taxis that add tolls, surcharges, and expect tips on top, our all-inclusive pricing means no surprises."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "JFK Airport Car Service",
    "provider": {
      "@type": "LimousineService",
      "name": "Noble Black Car Service",
      "telephone": "+1-404-513-8803",
      "url": "https://nobleblackcarservice.com/airports/jfk"
    },
    "areaServed": [
      {
        "@type": "Airport",
        "name": "John F. Kennedy International Airport",
        "iataCode": "JFK"
      },
      {
        "@type": "City",
        "name": "New York City"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation */}
      <nav className="bg-black border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">Noble Black Car</span>
                <span className="ml-3 text-xs text-gray-400">EST. 2015</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:+14045138803"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all group"
              >
                <PhoneIcon className="h-5 w-5 text-white group-hover:text-black" />
              </a>
              <a
                href="#booking"
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-base"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">JOHN F. KENNEDY INTERNATIONAL AIRPORT (JFK)</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            JFK Airport Car Service
            <br />
            <span className="text-gray-300">Professional Black Car Service to All 8 Terminals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium car service to and from JFK Airport. Serving all 8 terminals with professional chauffeurs, flight tracking, and guaranteed on-time service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <a href="#booking" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              RESERVE ONLINE
            </a>
          </div>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3"><MapPinIcon className="h-10 w-10 mx-auto" /></div>
              <h3 className="text-xl font-bold text-white mb-1">~17 Miles</h3>
              <p className="text-gray-300 text-sm">from Midtown</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3"><ClockIcon className="h-10 w-10 mx-auto" /></div>
              <h3 className="text-xl font-bold text-white mb-1">45-75 Min</h3>
              <p className="text-gray-300 text-sm">Travel Time</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3"><PhoneIcon className="h-10 w-10 mx-auto" /></div>
              <h3 className="text-xl font-bold text-white mb-1">24/7 Service</h3>
              <p className="text-gray-300 text-sm">Available Anytime</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3"><BuildingOffice2Icon className="h-10 w-10 mx-auto" /></div>
              <h3 className="text-xl font-bold text-white mb-1">All 8 Terminals</h3>
              <p className="text-gray-300 text-sm">Full Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Noble Black Car for JFK Airport?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BuildingOffice2Icon className="h-8 w-8" />,
                title: "All 8 JFK Terminals Covered",
                description: "We serve every terminal at JFK Airport. Your chauffeur knows exactly where to meet you based on your airline and arrival gate."
              },
              {
                icon: <BellAlertIcon className="h-8 w-8" />,
                title: "Real-Time JFK Flight Tracking",
                description: "We monitor your JFK flight status automatically. Delayed? Early? We adjust pickup time so your driver is there when you land."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Meet & Greet at Baggage Claim",
                description: "Your chauffeur meets you inside the JFK terminal at baggage claim with a name sign. No searching in crowds or confusion."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "60 Minutes Free Wait Time",
                description: "Complimentary wait time for JFK arrivals gives you buffer for customs, luggage, and bathroom breaks. No rush, no extra charges."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Flat Rate Pricing",
                description: "Know your exact price before you book. No meters, no surge pricing, no surprises. All tolls and fees included."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Licensed JFK Airport Drivers",
                description: "All chauffeurs are TLC licensed for JFK service, commercially insured, and know the fastest routes from every terminal."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-black border border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JFK Terminals */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            JFK Airport Terminals We Serve
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            John F. Kennedy International Airport has 8 terminals. We provide service to all of them with professional meet & greet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terminals.map((terminal, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{terminal.number}</h3>
                <p className="text-sm text-gray-300">{terminal.airlines}</p>
              </div>
            ))}
            <div className="bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Not Sure Which Terminal?</h3>
              <p className="text-sm text-gray-300">Just provide your flight number when booking. We&apos;ll track your flight and meet you at the correct terminal automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Times by Neighborhood */}
      <section className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            JFK to Manhattan: Distance & Travel Times
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Approximate travel times from JFK Airport to popular NYC neighborhoods
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-5 hover:border-gray-500 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-3">{neighborhood.name}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-gray-500">Distance:</span> {neighborhood.distance}
                  </p>
                  <p className="text-gray-400">
                    <span className="text-gray-500">Time:</span> {neighborhood.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            <a href="#booking" className="text-white font-semibold hover:underline">Contact us for pricing</a> or book online for an instant quote
          </p>
        </div>
      </section>

      {/* Fleet Options */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Choose Your JFK Transfer Vehicle
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Select the perfect vehicle for your JFK airport transfer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{vehicle.vehicles}</p>
                <div className="space-y-2 text-sm text-gray-300 mb-6">
                  <p><UserGroupIcon className="h-4 w-4 inline mr-2 text-gray-500" />{vehicle.passengers}</p>
                  <p><MapPinIcon className="h-4 w-4 inline mr-2 text-gray-500" />{vehicle.luggage}</p>
                  <p className="text-xs text-gray-500 mt-2">Best for: {vehicle.bestFor}</p>
                </div>
                <a
                  href="#booking"
                  className="inline-block w-full text-center bg-white text-black px-4 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            JFK Airport Car Service FAQs
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Common questions about our JFK airport transfer service
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Book Your JFK Airport Transfer
          </h2>
          <p className="text-center text-gray-400 mb-8 text-lg">
            Reserve your JFK car service now - instant confirmation
          </p>
          <div className="bg-white border border-gray-700 rounded-lg p-4 shadow-sm min-h-[600px]">
            <a
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              data-ores-widget="website"
              data-ores-alias="nobleblackcar"
              className="text-black"
            >
              Online Reservations
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Need to book by phone?</p>
            <a
              href="tel:+14045138803"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              <PhoneIcon className="h-6 w-6" />
              Call (404) 513-8803
            </a>
            <p className="text-gray-500 mt-4 text-sm">24/7 JFK airport service available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 border-y border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your JFK Transfer?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Professional, reliable, and luxurious car service to JFK Airport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              BOOK NOW
            </a>
            <Link
              href="/services/airport-transfer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              VIEW ALL AIRPORTS
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-gray-400 text-sm">
                Premium JFK airport car service since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services/airport-transfer" className="hover:text-white transition-colors">Airport Transfers</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Corporate Service</Link></li>
                <li><Link href="/#fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">NYC Airports</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/airports/jfk" className="hover:text-white transition-colors font-semibold">JFK Airport</Link></li>
                <li><Link href="/airports/laguardia" className="hover:text-white transition-colors">LaGuardia Airport</Link></li>
                <li><Link href="/airports/newark" className="hover:text-white transition-colors">Newark Airport</Link></li>
                <li><span className="text-gray-500">Teterboro Airport</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="tel:+14045138803" className="hover:text-white transition-colors">(404) 513-8803</a></li>
                <li>info@nobleblackcar.com</li>
                <li>Serving JFK 24/7</li>
                <li className="text-green-400 font-semibold">Open 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Noble Black Car Service. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Script
        src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

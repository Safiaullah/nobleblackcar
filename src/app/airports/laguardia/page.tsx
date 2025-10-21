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

export default function LaGuardiaAirportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const terminals = [
    {
      number: "Terminal A",
      airlines: "Spirit Airlines (renovated 2022)",
      note: "Newest terminal with modern amenities"
    },
    {
      number: "Terminal B",
      airlines: "Air Canada, American Airlines, Southwest, United",
      note: "Main domestic terminal"
    },
    {
      number: "Terminal C",
      airlines: "Delta Air Lines",
      note: "Delta's dedicated terminal"
    },
    {
      number: "Terminal D",
      airlines: "Delta Air Lines (international)",
      note: "International arrivals and departures"
    },
  ];

  const neighborhoods = [
    { name: "Midtown Manhattan", time: "25-40 min", distance: "9 miles", price: "$70" },
    { name: "Lower Manhattan", time: "30-50 min", distance: "11 miles", price: "$75" },
    { name: "Upper East Side", time: "20-35 min", distance: "8 miles", price: "$65" },
    { name: "Upper West Side", time: "25-40 min", distance: "9 miles", price: "$70" },
    { name: "Brooklyn (Williamsburg)", time: "30-45 min", distance: "12 miles", price: "$75" },
    { name: "Long Island City", time: "15-25 min", distance: "5 miles", price: "$60" },
    { name: "Astoria", time: "10-20 min", distance: "3 miles", price: "$55" },
    { name: "Flushing", time: "15-25 min", distance: "6 miles", price: "$60" },
  ];

  const fleet = [
    {
      name: "Business Sedan",
      vehicles: "Mercedes E-Class, Cadillac CT6",
      passengers: "1-3 passengers",
      luggage: "3 large bags",
      price: "$70",
      bestFor: "Business travelers, quick trips"
    },
    {
      name: "First Class Sedan",
      vehicles: "Mercedes S-Class, BMW 7 Series",
      passengers: "1-3 passengers",
      luggage: "3 large bags",
      price: "$105",
      bestFor: "Executive service, comfort"
    },
    {
      name: "Business SUV",
      vehicles: "Suburban, Yukon, Navigator",
      passengers: "4-6 passengers",
      luggage: "6-8 large bags",
      price: "$120",
      bestFor: "Families, group travel"
    },
    {
      name: "First Class SUV",
      vehicles: "Cadillac Escalade ESV",
      passengers: "4-6 passengers",
      luggage: "8+ large bags",
      price: "$175",
      bestFor: "Premium group service"
    }
  ];

  const faqs = [
    {
      question: "How far is LaGuardia Airport from Manhattan?",
      answer: "LaGuardia Airport (LGA) is the closest NYC airport to Manhattan at approximately 9 miles. Drive time is typically 25-40 minutes to Midtown Manhattan, making it the fastest airport option for most Manhattan destinations. During off-peak hours, you can reach Midtown in as little as 20 minutes."
    },
    {
      question: "Which LaGuardia terminal will my driver meet me at?",
      answer: "LaGuardia has 4 terminals (A, B, C, D). Your chauffeur will track your flight and meet you at the specific terminal where you arrive. We'll know your terminal based on your flight number and airline. Your driver will be waiting at baggage claim with a name sign."
    },
    {
      question: "Is LaGuardia Airport easier than JFK or Newark?",
      answer: "Yes! LaGuardia is generally easier and faster for Manhattan travelers. It's the closest airport to Manhattan (9 miles vs. 16-17 miles), has less traffic congestion than JFK, and pickup/dropoff is more streamlined. Perfect for domestic business travel and quick trips."
    },
    {
      question: "What if my LaGuardia flight is delayed?",
      answer: "We track all LaGuardia flights in real-time. If your flight is delayed, we automatically adjust your pickup time - no need to call us. Your chauffeur will be there when you land, whether you're early, on-time, or delayed. This is included at no extra charge."
    },
    {
      question: "How much does car service from LaGuardia to Manhattan cost?",
      answer: "Our flat rates start at $70 for a business sedan to Midtown Manhattan. Unlike taxis with unpredictable meters or rideshares with surge pricing, you know your exact price upfront. All tolls and fees included - no surprises or hidden charges."
    },
    {
      question: "Do you serve all LaGuardia terminals?",
      answer: "Absolutely! We provide service to all 4 LaGuardia terminals - Terminal A (Spirit), Terminal B (American, Southwest, United), Terminal C (Delta domestic), and Terminal D (Delta international). Our drivers know every terminal and the best pickup/dropoff spots."
    },
    {
      question: "How early should I arrive at LaGuardia?",
      answer: "We recommend 2 hours for domestic flights and 3 hours for international flights from LaGuardia. LGA is smaller than JFK, so security lines move faster, but it's still wise to allow buffer time. We'll pick you up based on your flight time with traffic factored in."
    },
    {
      question: "What's included in your LaGuardia car service price?",
      answer: "Everything! Your flat rate includes: professional chauffeur, luxury vehicle, meet & greet at baggage claim, flight tracking, 60 minutes complimentary wait time, all tolls (including Triborough/RFK Bridge), fees, bottled water, and luggage assistance. The price you see is what you pay."
    },
    {
      question: "Is LaGuardia car service available 24/7?",
      answer: "Yes! We provide car service to and from LaGuardia Airport 24 hours a day, 7 days a week, including all holidays. Early morning flight? Red-eye arrival? We're available whenever you need us. Book online anytime or call (404) 513-8803."
    },
    {
      question: "Can I book a round trip to LaGuardia?",
      answer: "Absolutely! We offer discounted rates for round-trip LaGuardia transfers. Book your departure and return together when making your reservation. This guarantees your return pickup and often saves you money compared to booking separately."
    },
    {
      question: "What is the best time to leave for LaGuardia from Manhattan?",
      answer: "For domestic flights, leave 2.5 hours before departure; for international, 3.5 hours before. Rush hour (7-9 AM and 4-7 PM) adds 15-20 minutes. Our chauffeurs monitor real-time traffic and recommend pickup times to ensure you arrive on schedule with time to spare."
    },
    {
      question: "Do you provide car seats for children on LaGuardia transfers?",
      answer: "Yes! We provide complimentary child safety seats and booster seats upon request. Please specify your child's age and weight when booking so we can provide the appropriate seat. All seats meet New York State requirements for child passenger safety."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "LaGuardia Airport Car Service",
    "provider": {
      "@type": "LimousineService",
      "name": "Noble Black Car Service",
      "telephone": "+1-404-513-8803",
      "url": "https://nobleblackcarservice.com/airports/laguardia"
    },
    "areaServed": [
      {
        "@type": "Airport",
        "name": "LaGuardia Airport",
        "iataCode": "LGA"
      },
      {
        "@type": "City",
        "name": "New York City"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "70.00",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": true
      }
    }
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
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              LAGUARDIA AIRPORT (IATA: LGA)
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              LaGuardia Airport Car Service
              <br />
              <span className="text-gray-300">Closest NYC Airport to Manhattan</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium car service to and from LaGuardia Airport. Serving all 4 terminals with professional chauffeurs and guaranteed on-time service. Only 9 miles from Manhattan. Starting at $70.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#booking"
                className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                BOOK LGA TRANSFER
              </a>
              <a
                href="tel:+14045138803"
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                (404) 513-8803
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400">Distance</p>
                <p className="text-white font-bold text-lg">~9 miles</p>
                <p className="text-green-400 text-xs mt-1">Closest to Manhattan!</p>
              </div>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400">Travel Time</p>
                <p className="text-white font-bold text-lg">25-40 min</p>
                <p className="text-green-400 text-xs mt-1">Fastest option</p>
              </div>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400">Starting Price</p>
                <p className="text-white font-bold text-lg">$70</p>
                <p className="text-gray-500 text-xs mt-1">All tolls included</p>
              </div>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <p className="text-gray-400">Terminals</p>
                <p className="text-white font-bold text-lg">All 4</p>
                <p className="text-gray-500 text-xs mt-1">A, B, C, D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Noble for LaGuardia Airport Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPinIcon className="h-8 w-8" />,
                title: "Closest Airport to Manhattan",
                description: "LGA is only 9 miles from Midtown - the shortest distance of any NYC airport. Fastest travel times mean more time for you, less time in traffic."
              },
              {
                icon: <BuildingOffice2Icon className="h-8 w-8" />,
                title: "All 4 LGA Terminals Covered",
                description: "We serve every LaGuardia terminal - A, B, C, and D. Your chauffeur knows the layout and best pickup locations at each terminal."
              },
              {
                icon: <BellAlertIcon className="h-8 w-8" />,
                title: "Real-Time Flight Tracking",
                description: "We monitor your LGA flight automatically. Delayed or early? We adjust pickup time so your driver is always there when you land."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Terminal Meet & Greet",
                description: "Your chauffeur meets you at LaGuardia baggage claim with a name sign. No confusion, no searching - we make it easy."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Lowest Manhattan Rates",
                description: "Starting at just $70 to Midtown. Flat rate pricing means no meter surprises. All tolls and fees included in your quote."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Quick 25-Minute Transfers",
                description: "From LaGuardia to Midtown Manhattan in as little as 25 minutes during off-peak. The fastest airport connection in NYC."
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

      {/* LGA Terminals */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            LaGuardia Airport Terminals
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            LaGuardia Airport has 4 terminals after its recent $8 billion modernization. We serve all terminals with professional pickup service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {terminals.map((terminal, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{terminal.number}</h3>
                <p className="text-sm text-gray-300 mb-2">{terminal.airlines}</p>
                <p className="text-xs text-gray-500 italic">{terminal.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Don&apos;t Know Your Terminal?</h3>
            <p className="text-sm text-gray-300">No problem! Just provide your flight number when booking. We&apos;ll track your flight and meet you at the correct LaGuardia terminal automatically.</p>
          </div>
        </div>
      </section>

      {/* Pricing by Neighborhood */}
      <section className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            LaGuardia to Manhattan: Rates & Times
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Transparent flat-rate pricing from LaGuardia to NYC neighborhoods
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
                  <p className="text-2xl font-bold text-white mt-3">{neighborhood.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            *Prices shown for Business Sedan. All tolls and fees included. SUVs available from $120.
          </p>
        </div>
      </section>

      {/* Fleet Options */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            LaGuardia Airport Transfer Vehicles
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Choose your vehicle for LaGuardia airport service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{vehicle.vehicles}</p>
                <div className="space-y-2 text-sm text-gray-300 mb-4 pb-4 border-b border-gray-700">
                  <p><UserGroupIcon className="h-4 w-4 inline mr-2 text-gray-500" />{vehicle.passengers}</p>
                  <p><MapPinIcon className="h-4 w-4 inline mr-2 text-gray-500" />{vehicle.luggage}</p>
                  <p className="text-xs text-gray-500 mt-2">Perfect for: {vehicle.bestFor}</p>
                </div>
                <p className="text-3xl font-bold text-white mb-4">{vehicle.price}</p>
                <a
                  href="#booking"
                  className="inline-block w-full text-center bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book This Vehicle
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
            LaGuardia Airport Service FAQs
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Your questions about LaGuardia car service answered
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
            Book Your LaGuardia Airport Transfer
          </h2>
          <p className="text-center text-gray-400 mb-8 text-lg">
            Reserve your LGA car service now - instant confirmation guaranteed
          </p>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-sm min-h-[600px]">
            <a
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              data-ores-widget="website"
              data-ores-alias="nobleblackcar"
              className="text-white"
            >
              Online Reservations
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Prefer to speak with us?</p>
            <a
              href="tel:+14045138803"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              <PhoneIcon className="h-6 w-6" />
              Call (404) 513-8803
            </a>
            <p className="text-gray-500 mt-4 text-sm">24/7 LaGuardia airport service - always available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 border-y border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Fastest Way Between LGA and Manhattan
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Professional car service to LaGuardia Airport - closer, faster, better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              BOOK LAGUARDIA TRANSFER
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
                Premium LaGuardia airport service since 2015.
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
                <li><Link href="/airports/laguardia" className="hover:text-white transition-colors font-semibold">LaGuardia Airport</Link></li>
                <li><Link href="/airports/jfk" className="hover:text-white transition-colors">JFK Airport</Link></li>
                <li><Link href="/airports/newark" className="hover:text-white transition-colors">Newark Airport</Link></li>
                <li><span className="text-gray-500">Teterboro Airport</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="tel:+14045138803" className="hover:text-white transition-colors">(404) 513-8803</a></li>
                <li>info@nobleblackcar.com</li>
                <li>Serving LGA 24/7</li>
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

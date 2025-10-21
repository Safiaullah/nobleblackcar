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

export default function NewarkAirportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const terminals = [
    {
      number: "Terminal A",
      airlines: "Air Canada, American Airlines, JetBlue, Delta (select flights)",
      note: "Renovated 2022 - newest terminal"
    },
    {
      number: "Terminal B",
      airlines: "Air India, Alaska Airlines, British Airways, El Al, Southwest, Spirit",
      note: "Primary international & domestic hub"
    },
    {
      number: "Terminal C",
      airlines: "United Airlines (exclusive terminal)",
      note: "United hub - largest terminal"
    }
  ];

  const pricing = [
    { neighborhood: "Midtown Manhattan", price: "$90-$95", distance: "16 miles", time: "35-50 min" },
    { neighborhood: "Lower Manhattan", price: "$95-$100", distance: "18 miles", time: "40-55 min" },
    { neighborhood: "Upper East Side", price: "$90-$95", distance: "17 miles", time: "35-50 min" },
    { neighborhood: "Upper West Side", price: "$90-$95", distance: "18 miles", time: "40-55 min" },
    { neighborhood: "Hudson Yards", price: "$85-$90", distance: "14 miles", time: "30-45 min" },
    { neighborhood: "Chelsea", price: "$90-$95", distance: "16 miles", time: "35-50 min" },
    { neighborhood: "Brooklyn", price: "$100-$120", distance: "20-25 miles", time: "45-70 min" },
    { neighborhood: "Queens", price: "$80-$100", distance: "12-20 miles", time: "30-50 min" }
  ];

  const faqs = [
    {
      question: "How far is Newark Airport from Manhattan?",
      answer: "Newark Liberty International Airport (EWR) is approximately 16 miles from Midtown Manhattan. While it's in New Jersey, it's often closer in travel time than JFK during rush hour. Drive time ranges from 30-60 minutes depending on traffic, time of day, and your specific Manhattan destination."
    },
    {
      question: "What are the flat rates from Newark Airport to Manhattan?",
      answer: "Our flat rates from Newark to Manhattan start at $85 for Hudson Yards and range from $90-$100 for most Manhattan neighborhoods. Prices include all tolls (Lincoln Tunnel, Holland Tunnel, or GWB), taxes, and gratuity. No hidden fees or surge pricing - you know your exact cost upfront."
    },
    {
      question: "Which Newark terminal will my flight arrive at?",
      answer: "Newark has 3 terminals: Terminal A (Air Canada, American, JetBlue, Delta select), Terminal B (Air India, Alaska, British Airways, Southwest, Spirit, international), and Terminal C (United Airlines exclusive). United flights use Terminal C, most others use A or B. Check your airline or provide your flight number when booking - we'll track it automatically."
    },
    {
      question: "Is Newark Airport easier to get to than JFK or LaGuardia?",
      answer: "For western Manhattan (Hudson Yards, Midtown West, Chelsea, Hell's Kitchen), Newark is often the fastest option despite being in New Jersey. For eastern Manhattan and most of Queens/Brooklyn, LaGuardia or JFK may be more convenient. Newark is ideal if you're near Penn Station, Port Authority, or the West Side."
    },
    {
      question: "Do you include tolls in your Newark Airport rates?",
      answer: "Yes! All Newark airport transfers include tolls in our flat rate pricing. This covers the Lincoln Tunnel ($17), Holland Tunnel ($17), or George Washington Bridge ($17) - whichever route is fastest for your destination. No surprise charges at the end of your trip."
    },
    {
      question: "How early should I leave Manhattan to catch my Newark flight?",
      answer: "We recommend 2.5-3 hours before domestic flights and 3-4 hours before international flights from Newark. This accounts for 30-60 minutes travel time, 30 minutes check-in/security, plus a safety buffer for traffic. For early morning flights (before 7 AM), you can reduce buffer time as traffic is lighter."
    },
    {
      question: "Do you provide meet and greet service at Newark Airport?",
      answer: "Absolutely! For all Newark arrivals, your chauffeur will monitor your flight in real-time, meet you in the baggage claim area with a name sign, assist with luggage, and escort you to your vehicle. No waiting in taxi lines or searching for your ride. Complimentary meet & greet included with every booking."
    },
    {
      question: "What vehicles are available for Newark Airport transfers?",
      answer: "We offer Business Sedans (Mercedes E-Class, Cadillac CT6) for 1-3 passengers, First Class Sedans (Mercedes S-Class, BMW 7-Series) for luxury, Business SUVs (Suburban, Yukon, Navigator) for 4-6 passengers with luggage, First Class SUVs (Escalade ESV) for premium group travel, and Sprinters for 7-14 passengers or large groups."
    },
    {
      question: "Can I book a Newark Airport car service for same-day travel?",
      answer: "Yes! We accept same-day bookings for Newark Airport with as little as 2 hours notice, subject to availability. For guaranteed service during peak times (weekday mornings 6-9 AM, evenings 4-7 PM), we recommend booking 24 hours in advance. Call us at 404-513-8803 for immediate assistance with urgent bookings."
    },
    {
      question: "Is Newark Airport service available 24/7?",
      answer: "Yes, Noble Black Car Service operates 24 hours a day, 7 days a week for Newark Airport transfers. Whether you have a red-eye arrival at 2 AM or an early morning 6 AM departure, we'll be there. Our chauffeurs are familiar with all overnight and early morning routes to minimize travel time."
    },
    {
      question: "What happens if my Newark flight is delayed?",
      answer: "We provide complimentary flight tracking for all Newark Airport pickups. If your flight is delayed, we automatically adjust your pickup time - no need to call us. Your chauffeur will be there when you land, whether it's 30 minutes early or 2 hours late. No waiting fees for flight delays when you book airport pickup service."
    },
    {
      question: "Do you provide car service from Newark to other NYC airports?",
      answer: "Yes, we offer inter-airport transfers between Newark (EWR), JFK, LaGuardia (LGA), and Teterboro (TEB). This is common for connecting flights on different airlines or private aviation transfers. Rates vary by route: EWR to JFK ($120-140), EWR to LGA ($100-120), EWR to TEB ($80-100). All vehicles are sanitized between transfers."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <Script id="newark-airport-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Newark Airport Car Service",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Noble Black Car Service",
            "telephone": "+1-404-513-8803",
            "url": "https://nobleblackcarservice.com"
          },
          "areaServed": [
            {
              "@type": "Airport",
              "name": "Newark Liberty International Airport",
              "iataCode": "EWR"
            },
            {
              "@type": "City",
              "name": "New York",
              "containsPlace": ["Manhattan", "Brooklyn", "Queens", "Bronx"]
            }
          ],
          "offers": {
            "@type": "Offer",
            "priceRange": "$85-$120",
            "priceCurrency": "USD"
          }
        })}
      </Script>

      <Script id="newark-faq-schema" type="application/ld+json">
        {JSON.stringify({
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
        })}
      </Script>

      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">NOBLE</span>
              <span className="text-2xl font-light text-gray-400 ml-2">Black Car Service</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="tel:+14045138803"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all group"
              >
                <PhoneIcon className="h-5 w-5 text-white group-hover:text-black" />
              </a>
              <Link
                href="/#contact"
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-base"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">NEWARK LIBERTY INTERNATIONAL AIRPORT (EWR)</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Newark Airport Car Service
            <br />
            <span className="text-gray-300">Premium Transportation to All 3 Terminals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional black car service from Newark Airport to Manhattan, Brooklyn, Queens & beyond. Flat rates from $85 with all tolls included. United Airlines hub with dedicated Terminal C service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              RESERVE ONLINE
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <ClockIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">30-60 Min</p>
              <p className="text-gray-400 text-sm">to Manhattan</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <MapPinIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">16 Miles</p>
              <p className="text-gray-400 text-sm">from Midtown</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">From $85</p>
              <p className="text-gray-400 text-sm">Flat Rate + Tolls</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <BuildingOffice2Icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">3 Terminals</p>
              <p className="text-gray-400 text-sm">A, B, C Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Newark */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Why Choose Noble for Newark Airport Service?
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Newark may be in New Jersey, but we make the cross-state transfer seamless with flat rates that include all NJ/NY tolls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <BellAlertIcon className="h-8 w-8" />,
                title: "Real-Time Flight Tracking",
                description: "We monitor all Newark arrivals and departures. Flight delayed 2 hours? We adjust automatically - no need to call."
              },
              {
                icon: <MapPinIcon className="h-8 w-8" />,
                title: "All Terminals Covered",
                description: "Terminal A renovations, Terminal B international gates, Terminal C United hub - we know every pickup point and fastest route."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Tolls Included in Flat Rate",
                description: "Lincoln Tunnel, Holland Tunnel, or GWB tolls ($17) included in your quoted price. No surprises, no meter running."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Professional EWR Chauffeurs",
                description: "TLC-licensed drivers familiar with Newark AirTrain, all terminals, and optimal routes to avoid NJ Turnpike traffic."
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

      {/* Newark Terminals */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Newark Airport Terminals We Serve
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Newark Liberty International Airport has 3 terminals connected by AirTrain. We provide service to all terminals with meet & greet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {terminals.map((terminal, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">{terminal.number}</h3>
                <p className="text-sm text-gray-300 mb-3">{terminal.airlines}</p>
                <p className="text-xs text-gray-500 italic">{terminal.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Flying United? You&apos;re in Terminal C</h3>
            <p className="text-sm text-gray-300">United Airlines exclusively uses Terminal C at Newark. All other major carriers use Terminals A or B. Provide your flight number when booking for automatic terminal tracking.</p>
          </div>
        </div>
      </section>

      {/* Pricing by Neighborhood */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Newark Airport to NYC - Flat Rate Pricing
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Transparent flat rates from Newark to all NYC neighborhoods. All tolls included - no hidden fees.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Destination</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Distance</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Travel Time</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Flat Rate</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{row.neighborhood}</td>
                    <td className="px-6 py-4 text-gray-300">{row.distance}</td>
                    <td className="px-6 py-4 text-gray-300">{row.time}</td>
                    <td className="px-6 py-4 text-blue-400 font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm max-w-2xl mx-auto">
            * All prices include tolls (Lincoln/Holland Tunnel or GWB), taxes, and standard gratuity. Prices vary by vehicle type. Times are estimates and may vary based on traffic conditions.
          </p>
        </div>
      </section>

      {/* Fleet Options */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Newark Airport Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Business Sedan",
                vehicles: "Mercedes E-Class, Cadillac CT6",
                capacity: "Up to 3 passengers",
                luggage: "3 large bags",
                rate: "From $85"
              },
              {
                name: "First Class Sedan",
                vehicles: "Mercedes S-Class, BMW 7-Series",
                capacity: "Up to 3 passengers",
                luggage: "3 large bags",
                rate: "From $110"
              },
              {
                name: "Business SUV",
                vehicles: "Suburban, Yukon, Navigator",
                capacity: "Up to 6 passengers",
                luggage: "6 large bags",
                rate: "From $120"
              },
              {
                name: "Sprinter Van",
                vehicles: "Mercedes Sprinter",
                capacity: "Up to 14 passengers",
                luggage: "12+ bags",
                rate: "From $180"
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{vehicle.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{vehicle.vehicles}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{vehicle.luggage}</span>
                  </div>
                </div>
                <p className="text-blue-400 font-bold text-lg">{vehicle.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Newark Airport Car Service FAQ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Common questions about our Newark Airport transportation service
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-left font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Book Your Newark Airport Transfer Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Professional car service from Newark to Manhattan and all NYC boroughs. Flat rates, flight tracking, and 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              CALL 404-513-8803
            </a>
            <Link
              href="/"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Noble Black Car Service. Premium Newark Airport Transportation.
            </p>
            <div className="flex gap-6">
              <Link href="/airports/jfk" className="text-gray-400 hover:text-white text-sm transition-colors">
                JFK Airport
              </Link>
              <Link href="/airports/laguardia" className="text-gray-400 hover:text-white text-sm transition-colors">
                LaGuardia Airport
              </Link>
              <Link href="/services/airport-transfer" className="text-gray-400 hover:text-white text-sm transition-colors">
                All Airport Services
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* LimoAnywhere Booking Widget */}
      <Script
        src="https://book.limoanywhere.com/v3.0/consumer/js/scripts.min.js?affiliateid=2236"
        strategy="lazyOnload"
      />
    </div>
  );
}

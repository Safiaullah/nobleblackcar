'use client';

import React, { useState } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BellAlertIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function AirportTransferPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const airports = [
    {
      code: "JFK",
      name: "John F. Kennedy International Airport",
      location: "Queens, NY",
      terminals: "8 Terminals",
      distance: "~17 miles from Manhattan",
      time: "45-75 minutes",
      price: "Starting at $85",
      link: "/airports/jfk"
    },
    {
      code: "LGA",
      name: "LaGuardia Airport",
      location: "Queens, NY",
      terminals: "4 Terminals",
      distance: "~9 miles from Manhattan",
      time: "25-45 minutes",
      price: "Starting at $70",
      link: "/airports/laguardia"
    },
    {
      code: "EWR",
      name: "Newark Liberty International Airport",
      location: "Newark, NJ",
      terminals: "3 Terminals",
      distance: "~16 miles from Manhattan",
      time: "40-70 minutes",
      price: "Starting at $90",
      link: "/airports/newark"
    },
    {
      code: "TEB",
      name: "Teterboro Airport",
      location: "Teterboro, NJ",
      terminals: "Private/Charter",
      distance: "~12 miles from Manhattan",
      time: "25-40 minutes",
      price: "Starting at $95"
    },
    {
      code: "HPN",
      name: "Westchester County Airport",
      location: "White Plains, NY",
      terminals: "1 Terminal",
      distance: "~30 miles from Manhattan",
      time: "50-80 minutes",
      price: "Starting at $120"
    }
  ];

  const fleet = [
    {
      name: "Business Sedan",
      vehicles: "Mercedes E-Class, Cadillac CT6",
      passengers: "Up to 3 passengers",
      luggage: "3 large suitcases",
      price: "$70-95",
      features: ["Professional chauffeur", "Complimentary WiFi", "Phone chargers", "Bottled water"]
    },
    {
      name: "First Class Sedan",
      vehicles: "Mercedes S-Class, BMW 7 Series",
      passengers: "Up to 3 passengers",
      luggage: "3 large suitcases",
      price: "$110-140",
      features: ["Premium chauffeur", "Luxury amenities", "Privacy partition", "Premium sound system"]
    },
    {
      name: "Business SUV",
      vehicles: "Suburban, Yukon, Navigator",
      passengers: "Up to 6 passengers",
      luggage: "6-8 large suitcases",
      price: "$120-160",
      features: ["Spacious interior", "Group travel", "Extra luggage space", "Professional service"]
    },
    {
      name: "First Class SUV",
      vehicles: "Cadillac Escalade ESV",
      passengers: "Up to 6 passengers",
      luggage: "8+ large suitcases",
      price: "$180-220",
      features: ["Ultimate luxury", "Maximum space", "Premium amenities", "VIP experience"]
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my airport transfer?",
      answer: "We recommend booking at least 24 hours in advance for guaranteed availability, especially during peak travel times. However, we accept last-minute bookings based on availability - call us at (404) 513-8803 for urgent requests."
    },
    {
      question: "What if my flight is delayed or arrives early?",
      answer: "We monitor all flights in real-time using advanced flight tracking technology. Your chauffeur will automatically adjust pickup time based on your actual arrival. There's no need to call us - we're already tracking your flight and will be there when you land."
    },
    {
      question: "Is there a meet and greet service?",
      answer: "Yes! For airport pickups, your chauffeur will meet you inside the terminal at baggage claim holding a sign with your name. They'll assist with your luggage and guide you to your vehicle. This service is included in all our airport transfers at no extra charge."
    },
    {
      question: "What's included in the price?",
      answer: "Our flat-rate pricing includes: professional chauffeur, meet & greet service, flight tracking, all tolls and fees, complimentary WiFi, bottled water, and 60 minutes of complimentary wait time for airport pickups. No hidden charges - the price you see is the price you pay."
    },
    {
      question: "How much wait time do I get?",
      answer: "We provide 60 minutes of complimentary wait time for airport pickups and 15 minutes for other locations. This gives you plenty of time to collect luggage, clear customs (for international flights), and meet your chauffeur without any rush or extra charges."
    },
    {
      question: "Can I make stops along the way?",
      answer: "Yes, you can request stops when booking. Brief stops (under 15 minutes) may be accommodated at no extra charge. Longer stops or multiple stops may incur additional fees. Please discuss your needs when making your reservation."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 24 hours before your scheduled pickup time. Cancellations within 24 hours may be subject to a cancellation fee. We understand plans change, so we're flexible - contact us if you need to modify your reservation."
    },
    {
      question: "Do you provide car seats for children?",
      answer: "Yes, we provide complimentary child safety seats and booster seats upon request. Please specify the age and weight of your child when booking so we can provide the appropriate seat. New York State law requires proper child restraints."
    },
    {
      question: "How do I pay for my airport transfer?",
      answer: "We accept all major credit cards (Visa, MasterCard, Amex), debit cards, cash, and corporate accounts. Payment can be made at the time of booking online or directly to your chauffeur. Corporate clients can set up monthly billing."
    },
    {
      question: "Are your drivers licensed and insured?",
      answer: "Absolutely. All our chauffeurs are fully licensed by the NYC TLC (Taxi & Limousine Commission), commercially insured, and undergo rigorous background checks. They're professional, experienced, and committed to providing excellent service."
    },
    {
      question: "What if I have a lot of luggage?",
      answer: "Please let us know your luggage requirements when booking, and we'll ensure you have the right vehicle. Our SUVs can accommodate 6-8 large suitcases, plus carry-ons. If you're traveling with golf clubs, skis, or oversized items, mention this during booking."
    },
    {
      question: "Do you serve all NYC airports?",
      answer: "Yes! We provide service to all major NYC area airports: JFK, LaGuardia (LGA), Newark (EWR), Teterboro (TEB), Westchester (HPN), and other regional airports. We're available 24/7, every day of the year."
    }
  ];

  // Schema.org structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "provider": {
      "@type": "LimousineService",
      "name": "Noble Black Car Service",
      "telephone": "+1-404-513-8803",
      "url": "https://nobleblackcarservice.com/services/airport-transfer"
    },
    "areaServed": {
      "@type": "City",
      "name": "New York City"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$70-$220"
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
      {/* Schema.org Structured Data */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
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
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              NYC Airport Car Service
              <br />
              <span className="text-gray-300">Professional Airport Transfers to All NYC Airports</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Reliable, on-time luxury transportation to JFK, LaGuardia, Newark, and all NYC area airports. Flight tracking, meet & greet, and professional chauffeurs since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#booking"
                className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                BOOK AIRPORT TRANSFER
              </a>
              <a
                href="tel:+14045138803"
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                (404) 513-8803
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>Flight Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>Meet & Greet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>Flat Rate Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Noble Black Car for Airport Transfers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BellAlertIcon className="h-8 w-8" />,
                title: "Real-Time Flight Tracking",
                description: "We monitor your flight status automatically and adjust pickup time for delays or early arrivals - no need to call us."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Professional Meet & Greet",
                description: "Your chauffeur meets you at baggage claim with a name sign, assists with luggage, and guides you to your vehicle."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "60 Minutes Free Wait Time",
                description: "Complimentary wait time gives you plenty of buffer for luggage collection, customs, and relaxed departure."
              },
              {
                icon: <CurrencyDollarIcon className="h-8 w-8" />,
                title: "Transparent Flat Rates",
                description: "Know your price upfront - no meters, no surge pricing, no hidden fees. All tolls and fees included."
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Licensed & Insured",
                description: "All chauffeurs are TLC licensed, commercially insured, and background checked for your safety and peace of mind."
              },
              {
                icon: <MapPinIcon className="h-8 w-8" />,
                title: "All NYC Airports Covered",
                description: "Service to JFK, LaGuardia, Newark, Teterboro, Westchester, and all regional airports - 24/7, every day."
              },
              {
                icon: <CheckCircleIcon className="h-8 w-8" />,
                title: "On-Time Guarantee",
                description: "We plan for traffic and ensure timely pickups and arrivals. Your flight schedule is our priority."
              },
              {
                icon: <PhoneIcon className="h-8 w-8" />,
                title: "24/7 Customer Support",
                description: "Speak to a real person anytime - before, during, or after your trip. We're here when you need us."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-black border border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports We Serve */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            NYC Airports We Serve
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Professional car service to all major New York City area airports with guaranteed on-time service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{airport.code}</h3>
                    <p className="text-sm text-gray-400">{airport.location}</p>
                  </div>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {airport.terminals}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">{airport.name}</h4>
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <p><span className="text-gray-500">Distance:</span> {airport.distance}</p>
                  <p><span className="text-gray-500">Travel Time:</span> {airport.time}</p>
                  <p className="text-lg font-bold text-white">{airport.price}</p>
                </div>
                {airport.link && (
                  <Link
                    href={airport.link}
                    className="inline-block w-full text-center bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
                  >
                    View Details →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Options */}
      <section className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Choose Your Airport Transfer Vehicle
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Select from our premium fleet based on your group size, luggage, and comfort preferences
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
                  <p className="flex items-center gap-2">
                    <UserGroupIcon className="h-4 w-4 text-gray-500" />
                    {vehicle.passengers}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    {vehicle.luggage}
                  </p>
                </div>
                <ul className="space-y-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-white mb-4">{vehicle.price}</p>
                <a
                  href="#booking"
                  className="inline-block w-full text-center bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
                >
                  Select Vehicle
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            How Airport Transfer Service Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Online or Call",
                description: "Reserve your airport transfer online 24/7 or call us. Provide flight details, pickup location, and passenger count."
              },
              {
                step: "2",
                title: "We Track Your Flight",
                description: "Our system automatically monitors your flight status. If delayed or early, we adjust pickup time - no action needed from you."
              },
              {
                step: "3",
                title: "Meet Your Chauffeur",
                description: "For airport pickups, your driver meets you at baggage claim with a name sign. For departures, pickup at your location."
              },
              {
                step: "4",
                title: "Relax & Enjoy",
                description: "Sit back in comfort as your professional chauffeur handles traffic, navigation, and gets you to your destination safely."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Everything you need to know about our airport transfer service
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
            Book Your Airport Transfer Now
          </h2>
          <p className="text-center text-gray-400 mb-8 text-lg">
            Quick and easy online reservation - confirmed instantly
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
            <p className="text-gray-400 mb-4">Prefer to book by phone?</p>
            <a
              href="tel:+14045138803"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              <PhoneIcon className="h-6 w-6" />
              Call
            </a>
            <p className="text-gray-500 mt-4 text-sm">Available 24/7 for reservations and support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 border-y border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Stress-Free Airport Transportation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust Noble Black Car for their airport transfers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              BOOK NOW
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
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-gray-400 text-sm">
                Premium airport transportation services since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">All Services</Link></li>
                <li><Link href="/#fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Airports</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/airports/jfk" className="hover:text-white transition-colors">JFK Airport</Link></li>
                <li><Link href="/airports/laguardia" className="hover:text-white transition-colors">LaGuardia Airport</Link></li>
                <li><Link href="/airports/newark" className="hover:text-white transition-colors">Newark Airport</Link></li>
                <li><span className="text-gray-500">Teterboro Airport</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:+14045138803" className="hover:text-white transition-colors">
                    (404) 513-8803
                  </a>
                </li>
                <li>info@nobleblackcar.com</li>
                <li>New York, NY</li>
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

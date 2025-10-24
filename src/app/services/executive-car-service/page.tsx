'use client';

import React, { useState } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MapPinIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function ExecutiveCarServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const useCases = [
    {
      title: "C-Suite Transportation",
      description: "Discreet, professional transportation for CEOs, CFOs, board members, and senior executives. Experienced chauffeurs understand corporate protocol and maintain strict confidentiality.",
      icon: <BriefcaseIcon className="h-8 w-8" />
    },
    {
      title: "Client Entertainment",
      description: "Impress clients and partners with first-class transportation to dinners, events, golf outings, or entertainment venues. Create memorable experiences that strengthen business relationships.",
      icon: <StarIcon className="h-8 w-8" />
    },
    {
      title: "Business Roadshows",
      description: "Multi-city investor roadshows, sales presentations, or partnership meetings. Coordinate complex itineraries with multiple stops and tight schedules across NYC and beyond.",
      icon: <MapPinIcon className="h-8 w-8" />
    },
    {
      title: "Board Meetings",
      description: "Transport board members and shareholders to quarterly meetings, annual events, or special sessions. Handle logistics for multiple executives arriving from different locations.",
      icon: <BuildingOffice2Icon className="h-8 w-8" />
    },
    {
      title: "International VIP Guests",
      description: "White-glove service for international executives visiting your NYC office. Airport pickup with meet & greet, city tours, multi-day availability, and multilingual chauffeur options.",
      icon: <GlobeAltIcon className="h-8 w-8" />
    },
    {
      title: "Hourly Charter Service",
      description: "Book executive vehicles by the hour for full-day meetings, multiple appointments, or as-needed availability. Chauffeur stays with you, ready for next destination.",
      icon: <ClockIcon className="h-8 w-8" />
    }
  ];

  const features = [
    "Mercedes S-Class & BMW 7-Series fleet",
    "TLC-licensed professional chauffeurs",
    "Discretion & confidentiality guaranteed",
    "Real-time flight tracking",
    "Complimentary WiFi & charging",
    "Bottled water & premium amenities",
    "Corporate billing & invoicing",
    "24/7 concierge support",
    "Last-minute availability",
    "Multi-city coordination",
    "Dedicated account manager",
    "SLA performance guarantees"
  ];

  const vehicles = [
    {
      name: "Mercedes-Benz S-Class",
      description: "The pinnacle of luxury sedans with massage seats, executive rear seating, and whisper-quiet cabin.",
      capacity: "Up to 3 passengers",
      features: "Executive rear seats, ambient lighting, premium sound system",
      rate: "From $110/hour or $150 flat rate"
    },
    {
      name: "BMW 7 Series",
      description: "German engineering excellence with advanced technology and supreme comfort for discerning executives.",
      capacity: "Up to 3 passengers",
      features: "Executive lounge seating, gesture control, executive displays",
      rate: "From $110/hour or $150 flat rate"
    },
    {
      name: "Cadillac Escalade ESV",
      description: "Extended luxury SUV perfect for executive teams or clients requiring additional space and presence.",
      capacity: "Up to 6 passengers",
      features: "Captain's chairs, premium leather, advanced safety systems",
      rate: "From $140/hour or $180 flat rate"
    }
  ];

  const faqs = [
    {
      question: "What is executive car service?",
      answer: "Executive car service provides premium, professional transportation for C-suite executives, VIP clients, and high-level business professionals. Unlike standard car services, executive service features only top-tier vehicles (Mercedes S-Class, BMW 7-Series, Escalade ESV), highly experienced chauffeurs trained in corporate protocol and discretion, and concierge-level support. It's designed for business leaders who require reliability, privacy, and a professional image."
    },
    {
      question: "What vehicles are included in executive car service?",
      answer: "Our executive fleet includes Mercedes-Benz S-Class sedans with executive rear seating and massage functions, BMW 7 Series with gesture control and executive displays, and Cadillac Escalade ESV extended SUVs for executive teams. All vehicles feature WiFi, premium leather, ambient lighting, privacy glass, and are maintained to showroom standards. We do not use economy sedans or standard vehicles for executive service."
    },
    {
      question: "How much does executive car service cost in NYC?",
      answer: "Executive car service rates start at $110/hour for Mercedes S-Class or BMW 7-Series sedans, with a typical 3-hour minimum for hourly charters. Flat rate airport transfers start at $150 to/from Manhattan. Point-to-point business meeting transfers range from $90-150 depending on distance. Multi-day executive packages and corporate accounts receive volume discounts. All pricing includes chauffeur gratuity, tolls, and taxes."
    },
    {
      question: "Can I book an executive car for multiple days?",
      answer: "Yes! We offer multi-day executive car packages for visiting executives, investor roadshows, or extended business trips. Book a dedicated vehicle and chauffeur for 2-7 days with flexible daily rates. The vehicle and chauffeur remain at your disposal throughout the booking period. Popular for international VIPs visiting NYC who need reliable transportation for their entire stay. Contact us for multi-day package pricing."
    },
    {
      question: "Do your chauffeurs understand corporate protocol?",
      answer: "Absolutely. All executive chauffeurs receive corporate protocol training including proper greeting etiquette, discretion and confidentiality, professional attire standards, minimal conversation unless engaged, timely door service, and business-appropriate behavior. Many have 10+ years experience serving Fortune 500 executives. They understand the importance of privacy, punctuality, and professionalism when transporting C-suite executives and VIP clients."
    },
    {
      question: "Can you coordinate transportation for multiple executives?",
      answer: "Yes, we regularly coordinate multi-vehicle logistics for board meetings, conferences, and corporate events involving multiple executives. Your dedicated account manager handles all scheduling, tracks arrival times, coordinates pickups from different locations, and ensures all executives arrive together when required. We can manage transportation for 2-50+ executives simultaneously with real-time updates."
    },
    {
      question: "Is executive car service available for airport transfers?",
      answer: "Yes! Executive airport service is one of our most popular offerings. We provide Mercedes S-Class or BMW 7-Series pickups at JFK, LaGuardia, Newark, and Teterboro with complimentary meet & greet in baggage claim, flight tracking, and priority luggage assistance. Perfect for executives who want to step off the plane and directly into a premium vehicle without waiting. Flat rates from $150 including all tolls."
    },
    {
      question: "Do you offer hourly executive car service?",
      answer: "Yes, hourly charter is ideal for executives with multiple meetings across the city or unpredictable schedules. Book by the hour (3-hour minimum) and your chauffeur stays with you, ready for the next destination. Rates start at $110/hour for S-Class or 7-Series. Popular for business roadshows, investor meetings, client entertainment, or days when you need on-demand availability without booking individual trips."
    },
    {
      question: "Can I get same-day executive car service?",
      answer: "Yes, subject to availability. We maintain a reserve fleet for last-minute executive requests. Call us at 404-513-8803 for same-day bookings - we can often accommodate requests with 2-4 hours notice. For guaranteed availability during peak times (weekday mornings and evenings), we recommend booking 24 hours in advance. Corporate account holders with volume commitments receive priority same-day service."
    },
    {
      question: "Do you provide executive car service outside of Manhattan?",
      answer: "Yes, we serve all NYC boroughs plus Westchester, Long Island, New Jersey, and Connecticut. Common executive routes include Manhattan to Greenwich CT offices, NYC to Hamptons for weekend retreats, Manhattan to Westchester corporate campuses, and NYC to Philadelphia for regional meetings. We coordinate long-distance executive travel and can arrange vehicles in other cities through our partner network."
    },
    {
      question: "How do you ensure privacy and confidentiality?",
      answer: "Discretion is paramount for executive service. Our chauffeurs sign confidentiality agreements, are trained not to discuss or disclose passenger information, conversations, or destinations. Vehicles have privacy glass and partitions available upon request. We do not share ride details with third parties. For high-profile executives, we offer unmarked vehicles and enhanced security protocols. Your privacy is our priority."
    },
    {
      question: "What happens if my meeting runs late or schedule changes?",
      answer: "For hourly bookings, simply notify your chauffeur and we extend your service (billed in 30-minute increments). For point-to-point trips, we offer grace periods for meeting overruns. Your account manager can modify scheduled pickups with minimal notice. We understand executive schedules are fluid - our service adapts to your needs, not the other way around. Real-time communication keeps everything flexible."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <Script id="executive-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Executive Car Service",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Noble Black Car Service",
            "telephone": "+1-404-513-8803",
            "url": "https://nobleblackcarservice.com"
          },
          "areaServed": {
            "@type": "City",
            "name": "New York"
          },
          "offers": {
            "@type": "Offer",
            "priceRange": "$110-$180",
            "priceCurrency": "USD"
          },
          "description": "Premium executive car service for C-suite executives and VIP clients in NYC. Mercedes S-Class, BMW 7-Series fleet with professional chauffeurs."
        })}
      </Script>

      <Script id="executive-faq-schema" type="application/ld+json">
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
      <section className="relative bg-gradient-to-br from-amber-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-900 bg-opacity-30 border border-amber-700 rounded-full px-6 py-2 mb-6">
            <p className="text-amber-300 text-sm font-semibold">PREMIUM EXECUTIVE TRANSPORTATION</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Executive Car Service NYC
            <br />
            <span className="text-gray-300">C-Suite & VIP Transportation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium executive car service for business leaders in New York City. Mercedes S-Class and BMW 7-Series fleet with professional chauffeurs trained in corporate protocol. Discretion, reliability, and white-glove service for C-suite executives and VIP clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              RESERVE EXECUTIVE CAR
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-50 border border-amber-800 rounded-lg p-4">
              <StarIcon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Premium Fleet</p>
              <p className="text-gray-400 text-sm">S-Class & 7-Series</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-amber-800 rounded-lg p-4">
              <ShieldCheckIcon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Discretion</p>
              <p className="text-gray-400 text-sm">Confidential service</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-amber-800 rounded-lg p-4">
              <UserGroupIcon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Expert Chauffeurs</p>
              <p className="text-gray-400 text-sm">Corporate protocol</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-amber-800 rounded-lg p-4">
              <ClockIcon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-semibold">24/7 Service</p>
              <p className="text-gray-400 text-sm">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Executive Car Service Solutions
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Tailored transportation for every executive need - from C-suite daily commutes to international VIP hosting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all">
                <div className="bg-black border border-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-amber-400">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            What Sets Our Executive Service Apart
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Every detail designed for the discerning executive who demands excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded-lg p-4">
                <CheckCircleIcon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Fleet */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Executive Fleet
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Only the finest vehicles for our executive clients. No exceptions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all">
                <h3 className="text-2xl font-bold text-white mb-3">{vehicle.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{vehicle.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <UserGroupIcon className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-semibold">{vehicle.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <StarIcon className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 text-sm">{vehicle.features}</p>
                    </div>
                  </div>
                </div>
                <p className="text-amber-400 font-bold text-lg">{vehicle.rate}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
            All vehicles feature WiFi, premium leather, ambient lighting, privacy glass, and are detailed to showroom standards before every executive booking.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
              &quot;Noble Black Car has been our go-to for executive transportation for 3 years. Their chauffeurs are professional, discreet, and always on time. When we have board members or VIP clients visiting our Manhattan office, we trust Noble to make the right first impression. The S-Class fleet is impeccable.&quot;
            </p>
            <p className="text-white font-semibold">Sarah Chen</p>
            <p className="text-gray-400 text-sm">Chief Operating Officer, FinTech Company</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Executive Car Service FAQ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Common questions about our premium executive transportation
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
                    <ChevronUpIcon className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-amber-400 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-amber-900 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Executive Transportation Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Mercedes S-Class and BMW 7-Series fleet. Professional chauffeurs. White-glove service. Available 24/7 for NYC&apos;s business leaders.
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
              © 2025 Noble Black Car Service. Premium Executive Transportation NYC.
            </p>
            <div className="flex gap-6">
              <Link href="/services/corporate-shuttle" className="text-gray-400 hover:text-white text-sm transition-colors">
                Corporate Shuttle
              </Link>
              <Link href="/services/airport-transfer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Airport Transfer
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <Script
        id="executive-car-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Executive Car Service",
            "provider": {
              "@type": "LimousineService",
              "name": "Noble Black Car Service",
              "image": "https://nobleblackcarservice.com/images/mercedes-s-class.png",
              "telephone": "+1-404-513-8803",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "New York City"
              },
              {
                "@type": "City",
                "name": "Manhattan"
              }
            ],
            "description": "Premium executive car service for business leaders in NYC. Mercedes S-Class and BMW 7-Series fleet with professional chauffeurs trained in corporate protocol. Discretion, reliability, and white-glove service for C-suite executives and VIP clients.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Executive Transportation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "C-Suite Transportation",
                    "description": "Discreet, professional transportation for CEOs, CFOs, board members, and senior executives"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Client Entertainment",
                    "description": "Impress clients and partners with first-class transportation to dinners, events, and entertainment venues"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Roadshows",
                    "description": "Multi-city investor roadshows, sales presentations, or partnership meetings"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* LimoAnywhere Booking Widget */}
      <Script
        src="https://book.limoanywhere.com/v3.0/consumer/js/scripts.min.js?affiliateid=2236"
        strategy="lazyOnload"
      />
    </div>
  );
}

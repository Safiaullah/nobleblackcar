'use client';

import React, { useState } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  TruckIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function CorporateShuttlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Airport Shuttle Service",
      description: "Scheduled employee transportation to/from JFK, LGA, EWR for business travel. Track flights, coordinate pickups, monthly billing.",
      icon: <TruckIcon className="h-8 w-8" />
    },
    {
      title: "Office-to-Office Transfers",
      description: "Daily shuttles between office locations, co-working spaces, or client sites. Regular routes with flexible scheduling.",
      icon: <BuildingOffice2Icon className="h-8 w-8" />
    },
    {
      title: "Corporate Event Transportation",
      description: "Conference shuttles, team outings, company parties, trade shows. Coordinate multiple vehicles for large groups.",
      icon: <UserGroupIcon className="h-8 w-8" />
    },
    {
      title: "Executive Team Transport",
      description: "C-suite and VIP client transportation with premium vehicles. Discreet, professional chauffeurs with corporate protocol training.",
      icon: <ShieldCheckIcon className="h-8 w-8" />
    },
    {
      title: "Hotel-to-Office Shuttles",
      description: "Transport visiting employees, consultants, or clients from hotels to your office. Coordinate with HR/travel departments.",
      icon: <MapPinIcon className="h-8 w-8" />
    },
    {
      title: "Recurring Billing Programs",
      description: "Monthly invoicing, detailed trip reports, cost center allocation. Dedicated account manager for your company.",
      icon: <DocumentTextIcon className="h-8 w-8" />
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      trips: "10 trips/month",
      discount: "5% discount",
      features: ["Dedicated account manager", "Monthly invoicing", "Basic trip reporting", "Priority booking"],
      price: "Custom pricing"
    },
    {
      name: "Business Package",
      trips: "25 trips/month",
      discount: "10% discount",
      features: ["Dedicated account manager", "Monthly invoicing", "Detailed analytics", "Priority booking", "24/7 support"],
      price: "Custom pricing",
      popular: true
    },
    {
      name: "Enterprise Package",
      trips: "50+ trips/month",
      discount: "15% discount",
      features: ["Senior account manager", "Custom billing options", "Real-time tracking", "Reserved vehicles", "White-glove service", "SLA guarantees"],
      price: "Custom pricing"
    }
  ];

  const benefits = [
    {
      title: "Improve Employee Experience",
      description: "Make business travel seamless with reliable, comfortable transportation. Employees arrive refreshed and on time."
    },
    {
      title: "Reduce Transportation Costs",
      description: "Volume discounts, predictable pricing, and reduced taxi/Uber reimbursements lower total transportation spend."
    },
    {
      title: "Enhance Professional Image",
      description: "Premium vehicles and professional chauffeurs impress clients and partners. First impressions matter."
    },
    {
      title: "Simplify Expense Management",
      description: "One monthly invoice with detailed trip data. No more processing dozens of employee reimbursements."
    },
    {
      title: "Increase Productivity",
      description: "WiFi-enabled vehicles let employees work during transit. Turn travel time into productive time."
    },
    {
      title: "Ensure Safety & Reliability",
      description: "TLC-licensed, background-checked chauffeurs. Commercial insurance. GPS tracking for security."
    }
  ];

  const faqs = [
    {
      question: "What is corporate shuttle service?",
      answer: "Corporate shuttle service provides scheduled, recurring transportation for employees, executives, and clients. This includes airport transfers for business travelers, office-to-office shuttles, corporate event transportation, and client/VIP transport. Unlike on-demand ride services, we offer dedicated account management, monthly billing, volume discounts, and guaranteed availability for your company's transportation needs."
    },
    {
      question: "How does corporate shuttle pricing work?",
      answer: "We offer volume-based pricing with monthly packages. The more trips your company books per month, the greater the discount (5-15% off standard rates). Pricing depends on routes, vehicle types, frequency, and service level. We provide a dedicated quote based on your specific needs. All pricing is transparent with monthly invoicing - no surprise charges or per-employee reimbursements to process."
    },
    {
      question: "What types of vehicles are available for corporate shuttles?",
      answer: "We offer Business Sedans (Mercedes E-Class, Cadillac CT6) for 1-3 executives, First Class Sedans (Mercedes S-Class, BMW 7-Series) for C-suite/VIP transport, Business SUVs (Suburban, Yukon, Navigator) for 4-6 passengers, First Class SUVs (Escalade ESV) for premium group transport, and Sprinter Vans for 7-14 passengers for team outings or conference shuttles. All vehicles feature WiFi, charging ports, and professional chauffeurs."
    },
    {
      question: "Can we set up recurring shuttle schedules?",
      answer: "Yes! Many clients use us for daily or weekly recurring routes - such as office-to-airport shuttles every Monday morning, or office-to-office transport between locations. We assign dedicated vehicles and chauffeurs to your route for consistency. Your account manager coordinates all scheduling, and you can modify schedules with 24-48 hours notice. Perfect for predictable transportation needs."
    },
    {
      question: "How does billing work for corporate accounts?",
      answer: "Corporate accounts receive monthly invoicing with detailed trip reports including dates, times, routes, passengers, and costs. We can allocate charges to different cost centers or departments if needed. Invoices are sent via email with 30-day payment terms (Net 30). We also provide quarterly analytics showing total trips, spend, and utilization to help optimize your transportation program."
    },
    {
      question: "Do you provide transportation for corporate events?",
      answer: "Absolutely! We specialize in corporate event shuttles including conferences, trade shows, company parties, team outings, and client entertainment. We can coordinate multiple vehicles for large groups, create custom pickup schedules, and provide on-site coordinators for complex events. Whether it's transporting 10 executives to a golf outing or shuttling 100 employees to an annual party, we handle the logistics."
    },
    {
      question: "What is included in your corporate shuttle service?",
      answer: "All corporate shuttle service includes: professional TLC-licensed chauffeurs, commercial insurance coverage, real-time GPS tracking, flight monitoring for airport trips, complimentary WiFi, device charging, bottled water, dedicated account manager, 24/7 dispatch support, monthly detailed reporting, and flexible billing options. Premium packages also include reserved vehicles and SLA guarantees."
    },
    {
      question: "How do employees book corporate shuttle rides?",
      answer: "We offer multiple booking options: employees can call/text our dispatch directly, book through our online portal, or your admin/travel coordinator can book on behalf of employees. For recurring routes, no booking needed - vehicles arrive on schedule. Your account manager sets up the system that works best for your company workflow and travel policy."
    },
    {
      question: "What is your cancellation policy for corporate shuttles?",
      answer: "For scheduled/recurring trips, we ask for 24 hours notice for cancellations to avoid charges. For last-minute business changes, we offer flexibility within reason - your account manager works with you. For large events, cancellation terms are outlined in the event agreement. We understand business priorities shift, and we work with long-term partners to accommodate reasonable changes."
    },
    {
      question: "Do you serve companies outside of Manhattan?",
      answer: "Yes! We provide corporate shuttle service throughout NYC (Manhattan, Brooklyn, Queens, Bronx, Staten Island), Westchester, Long Island, New Jersey, and Connecticut. Many clients have offices in multiple locations - we coordinate transportation across all your sites. Common routes include NYC to Stamford CT offices, Manhattan to JFK for business travel, and New Jersey to Manhattan for client meetings."
    },
    {
      question: "How do you ensure driver professionalism for corporate clients?",
      answer: "All chauffeurs undergo rigorous screening including TLC licensing, commercial driving background checks, vehicle safety training, and corporate protocol education. For corporate accounts, we assign experienced drivers familiar with business etiquette - professional attire, discretion, punctuality, and client service. Drivers know to minimize conversation unless engaged, maintain confidentiality, and prioritize on-time arrival."
    },
    {
      question: "Can we get a dedicated account manager?",
      answer: "Yes! All corporate accounts with 10+ trips per month receive a dedicated account manager who learns your company's transportation needs, preferences, and VIP passengers. Your account manager handles all scheduling, coordinates special requests, provides monthly reporting, and serves as your single point of contact. For enterprise accounts (50+ trips/month), you receive a senior account manager with direct phone access."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <Script id="corporate-shuttle-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Corporate Shuttle Service",
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
          "description": "Professional corporate shuttle service for employee transportation, airport transfers, and executive transport in NYC."
        })}
      </Script>

      <Script id="corporate-faq-schema" type="application/ld+json">
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
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">ENTERPRISE TRANSPORTATION SOLUTIONS</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Corporate Shuttle Service NYC
            <br />
            <span className="text-gray-300">Employee & Executive Transportation Programs</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional corporate shuttle service for businesses in New York City. Employee airport shuttles, office-to-office transport, executive car service, and corporate event transportation with volume discounts and dedicated account management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              CALL FOR QUOTE
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              REQUEST PROPOSAL
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <CurrencyDollarIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Volume Discounts</p>
              <p className="text-gray-400 text-sm">5-15% off</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <DocumentTextIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Monthly Billing</p>
              <p className="text-gray-400 text-sm">Consolidated invoicing</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <UserGroupIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Account Manager</p>
              <p className="text-gray-400 text-sm">Dedicated support</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-blue-800 rounded-lg p-4">
              <ClockIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">24/7 Service</p>
              <p className="text-gray-400 text-sm">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Corporate Transportation Services
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Comprehensive shuttle and transportation solutions tailored for businesses of all sizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="bg-black border border-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Why Companies Choose Noble for Corporate Shuttles
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Transform your corporate transportation program with professional service and measurable ROI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Corporate Shuttle Packages
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Volume-based programs designed to reduce costs while improving service quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? 'bg-blue-900 border-2 border-blue-500 transform scale-105'
                    : 'bg-gray-900 border border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-1">{pkg.trips}</p>
                <p className="text-blue-400 font-bold text-lg mb-6">{pkg.discount}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white font-bold text-xl mb-4">{pkg.price}</p>
                <a
                  href="tel:+14045138803"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-white text-blue-900 hover:bg-gray-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
            Custom enterprise packages available for companies with 100+ trips/month. Contact us for dedicated fleet solutions and white-label service options.
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Corporate Fleet Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Business Sedan",
                vehicles: "Mercedes E-Class, Cadillac CT6",
                capacity: "1-3 passengers",
                use: "Executive airport runs"
              },
              {
                name: "First Class Sedan",
                vehicles: "Mercedes S-Class, BMW 7-Series",
                capacity: "1-3 passengers",
                use: "C-suite & VIP transport"
              },
              {
                name: "Business SUV",
                vehicles: "Suburban, Yukon, Navigator",
                capacity: "4-6 passengers",
                use: "Team meetings & clients"
              },
              {
                name: "Sprinter Van",
                vehicles: "Mercedes Sprinter",
                capacity: "7-14 passengers",
                use: "Conference shuttles"
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{vehicle.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{vehicle.vehicles}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BuildingOffice2Icon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{vehicle.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Corporate Shuttle Service FAQ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Common questions about our business transportation programs
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
            Ready to Optimize Your Corporate Transportation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote for your company&apos;s shuttle service needs. Volume discounts available for 10+ trips per month.
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
              © 2025 Noble Black Car Service. Professional Corporate Transportation NYC.
            </p>
            <div className="flex gap-6">
              <Link href="/services/executive-car-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Executive Car Service
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

      {/* LimoAnywhere Booking Widget */}
      <Script
        src="https://book.limoanywhere.com/v3.0/consumer/js/scripts.min.js?affiliateid=2236"
        strategy="lazyOnload"
      />
    </div>
  );
}

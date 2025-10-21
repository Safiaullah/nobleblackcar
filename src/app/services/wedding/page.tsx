'use client';

import React, { useState } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  HeartIcon,
  UserGroupIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon,
  CameraIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";

export default function WeddingTransportationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Bride & Groom Getaway Car",
      description: "Elegant departure from your reception in a Mercedes S-Class or Escalade ESV. Red carpet service, champagne, and just-married decorations included.",
      icon: <HeartIcon className="h-8 w-8" />
    },
    {
      title: "Bridal Party Transportation",
      description: "Transport bridesmaids and groomsmen from hotel to ceremony in luxury SUVs or Sprinter vans. Keep the party together and on schedule.",
      icon: <UserGroupIcon className="h-8 w-8" />
    },
    {
      title: "Guest Shuttle Service",
      description: "Coordinate hotel-to-venue and venue-to-reception shuttles for 20-200+ guests. Multiple vehicles, professional timing, seamless logistics.",
      icon: <MapPinIcon className="h-8 w-8" />
    },
    {
      title: "Bride Arrival Service",
      description: "Arrive at your ceremony in style. S-Class or luxury SUV with professional chauffeur, red carpet, and photo-ready presentation.",
      icon: <SparklesIcon className="h-8 w-8" />
    },
    {
      title: "Multi-Venue Coordination",
      description: "Ceremony at one location, photos at another, reception elsewhere? We coordinate complex itineraries with precision timing.",
      icon: <ClockIcon className="h-8 w-8" />
    },
    {
      title: "VIP Family Transportation",
      description: "Premium service for parents, grandparents, and VIP guests. Dedicated vehicles with professional chauffeurs ensure their comfort.",
      icon: <StarIcon className="h-8 w-8" />
    }
  ];

  const packages = [
    {
      name: "Getaway Package",
      description: "Perfect for bride & groom departure",
      hours: "3 hours",
      includes: [
        "Mercedes S-Class or BMW 7-Series",
        "Professional chauffeur",
        "Red carpet service",
        "Champagne & glasses",
        "Just-married decorations",
        "Unlimited stops within 3 hours"
      ],
      starting: "From $450"
    },
    {
      name: "Full Wedding Package",
      description: "Complete coverage for your wedding day",
      hours: "8 hours",
      includes: [
        "2 luxury vehicles (your choice)",
        "Bride arrival & couple departure",
        "Bridal party transport",
        "Photo location stops",
        "Red carpet & champagne",
        "Decorations & signage",
        "Dedicated coordinator"
      ],
      starting: "From $1,200",
      popular: true
    },
    {
      name: "Guest Shuttle Package",
      description: "Transport your guests seamlessly",
      hours: "Custom schedule",
      includes: [
        "Mercedes Sprinter Van(s)",
        "Hotel to ceremony shuttle",
        "Ceremony to reception shuttle",
        "End-of-night hotel returns",
        "Professional signage",
        "Multiple pickup locations",
        "Coordinator for timing"
      ],
      starting: "From $800"
    }
  ];

  const features = [
    "Mercedes S-Class & Escalade ESV fleet",
    "Professional chauffeurs in formal attire",
    "Red carpet service for grand entrance",
    "Complimentary champagne & glasses",
    "Just-married decorations available",
    "Ribbons & bows on request",
    "Photo-ready vehicle presentation",
    "Flexible timing for photo stops",
    "Multi-vehicle coordination",
    "Wedding planner collaboration",
    "Backup vehicle on standby",
    "White-glove service guarantee"
  ];

  const faqs = [
    {
      question: "How much does wedding transportation cost in NYC?",
      answer: "Wedding transportation packages start at $450 for a 3-hour getaway car (Mercedes S-Class or BMW 7-Series for bride & groom). Full wedding day packages with 2 vehicles for 8 hours start at $1,200. Guest shuttle service with Sprinter vans starts at $800 for hotel-venue-reception loops. Final pricing depends on vehicle types, number of hours, number of vehicles, and specific route requirements. All packages include professional chauffeur, red carpet service, and champagne."
    },
    {
      question: "What vehicles are available for wedding transportation?",
      answer: "Our wedding fleet includes Mercedes-Benz S-Class sedans (classic elegance for bride & groom), BMW 7 Series (modern luxury), Cadillac Escalade ESV (spacious for wedding dress), and Mercedes Sprinter Vans (8-14 passengers for bridal parties or guests). All vehicles are maintained in pristine condition, detailed before every wedding, and presented with red carpet service. We can provide multiple vehicles for larger wedding parties."
    },
    {
      question: "How far in advance should I book wedding transportation?",
      answer: "We recommend booking 6-12 months in advance for peak wedding season (May-October) and 3-6 months for off-season weddings. Popular Saturday dates in summer book quickly. Early booking guarantees your preferred vehicles and allows time to coordinate details with your wedding planner. We accept bookings up to 18 months in advance. Last-minute bookings (within 30 days) are subject to availability but we'll do our best to accommodate."
    },
    {
      question: "Do you provide transportation for the bridal party?",
      answer: "Yes! Bridal party transportation is one of our most popular services. We offer luxury SUVs (Suburban, Yukon, Navigator) for smaller groups of 4-6 bridesmaids/groomsmen, or Mercedes Sprinter Vans for larger parties of 8-14 people. Perfect for transporting everyone from the hotel to the ceremony together, keeping the group on schedule and creating fun pre-ceremony moments. We coordinate timing with your wedding schedule."
    },
    {
      question: "Can you shuttle our wedding guests from hotels to the venue?",
      answer: "Absolutely! Guest shuttle service is essential for NYC weddings where parking is limited. We coordinate hotel-to-ceremony, ceremony-to-reception, and end-of-night return shuttles. For weddings with 50-200 guests, we typically use 2-4 Sprinter vans running continuous loops on a schedule. We work with your wedding coordinator to establish pickup times and locations. Guests love not worrying about parking, directions, or drinking and driving."
    },
    {
      question: "What is included in wedding transportation packages?",
      answer: "All wedding packages include: professional chauffeur in formal attire, red carpet service for photo-worthy arrivals, complimentary champagne and glasses for toasts, vehicle detailing to showroom standards, just-married decorations (upon request), ribbons and bows, flexible timing for photo location stops, coordination with your wedding planner or coordinator, and backup vehicle on standby. Premium packages also include multiple vehicles and dedicated wedding transportation coordinator."
    },
    {
      question: "Do you offer red carpet service for wedding arrivals?",
      answer: "Yes! Red carpet service is included with all wedding packages at no extra charge. Your chauffeur will roll out a plush red carpet for your arrival at the ceremony, photo locations, and reception. This creates stunning photo opportunities and a grand entrance for the bride, groom, and wedding party. The red carpet is especially popular for church steps, venue entrances, and reception hall arrivals. Your photographer will love the elegant shots."
    },
    {
      question: "Can you coordinate with our wedding planner?",
      answer: "Absolutely! We work closely with wedding planners and coordinators to ensure seamless transportation logistics. We'll participate in planning calls, receive your detailed timeline, coordinate arrival times with ceremony and photo schedules, and provide real-time updates on the wedding day. Our drivers communicate with your planner via text/call to confirm each pickup and arrival. Many NYC wedding planners recommend us to their clients specifically for our coordination capabilities."
    },
    {
      question: "What happens if the ceremony runs late or timeline changes?",
      answer: "Wedding timelines rarely go exactly as planned - we understand! Our packages include flexibility for reasonable timeline adjustments. If the ceremony runs 30-45 minutes late, we adapt without additional charges. For significant delays (over 1 hour), we extend service in 30-minute increments at a prorated rate. Your chauffeur stays in contact with your coordinator and adjusts the schedule in real-time. We never rush you - your special day takes the time it needs."
    },
    {
      question: "Do you provide service for rehearsal dinners or pre-wedding events?",
      answer: "Yes! Many couples book us for multiple wedding weekend events including welcome parties, rehearsal dinners, morning-after brunches, and bachelor/bachelorette parties. We offer multi-day wedding weekend packages with discounted rates. This ensures consistent, reliable service throughout your celebration and one less detail to coordinate with multiple vendors. Your account manager handles all bookings for the entire wedding weekend."
    },
    {
      question: "Can we make stops for photos at specific NYC locations?",
      answer: "Absolutely! Photo location stops are included in our wedding packages. Popular NYC photo stops include Central Park, Brooklyn Bridge, DUMBO waterfront, Grand Central Terminal, Times Square, and The High Line. Your chauffeur coordinates with your photographer and follows your shot list. We recommend building 60-90 minutes into your timeline for 2-3 photo locations. The luxury vehicle also serves as a beautiful prop in your wedding photos."
    },
    {
      question: "What is your cancellation policy for wedding transportation?",
      answer: "We require a 50% deposit to secure your wedding date. Deposits are fully refundable up to 90 days before the wedding. For cancellations 30-89 days before the wedding, 50% of the deposit is refundable. Cancellations within 30 days forfeit the deposit. We understand wedding plans change - if you need to adjust your package (different vehicles, timing changes), we accommodate modifications up to 14 days before the event at no charge. Rescheduling to a new date transfers your deposit."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Schema Markup */}
      <Script id="wedding-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Wedding Transportation Service",
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
            "priceRange": "$450-$1,200+",
            "priceCurrency": "USD"
          },
          "description": "Luxury wedding transportation in NYC. Bride & groom getaway cars, bridal party shuttles, guest transportation. Mercedes S-Class and Sprinter fleet."
        })}
      </Script>

      <Script id="wedding-faq-schema" type="application/ld+json">
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
      <section className="relative bg-gradient-to-br from-rose-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-rose-900 bg-opacity-30 border border-rose-700 rounded-full px-6 py-2 mb-6">
            <p className="text-rose-300 text-sm font-semibold">LUXURY WEDDING TRANSPORTATION</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Wedding Transportation NYC
            <br />
            <span className="text-gray-300">Make Your Grand Entrance Unforgettable</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Elegant wedding transportation for your special day in New York City. Mercedes S-Class getaway cars, bridal party shuttles, guest transportation. Red carpet service, champagne, and photo-ready vehicles. From intimate ceremonies to grand celebrations, we make your wedding transportation seamless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <a href="#packages" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              VIEW PACKAGES
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-50 border border-rose-800 rounded-lg p-4">
              <HeartIcon className="h-8 w-8 text-rose-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Luxury Fleet</p>
              <p className="text-gray-400 text-sm">S-Class & Escalade</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-rose-800 rounded-lg p-4">
              <SparklesIcon className="h-8 w-8 text-rose-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Red Carpet</p>
              <p className="text-gray-400 text-sm">Grand entrances</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-rose-800 rounded-lg p-4">
              <CameraIcon className="h-8 w-8 text-rose-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Photo Ready</p>
              <p className="text-gray-400 text-sm">Pristine vehicles</p>
            </div>
            <div className="bg-black bg-opacity-50 border border-rose-800 rounded-lg p-4">
              <UserGroupIcon className="h-8 w-8 text-rose-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Guest Shuttles</p>
              <p className="text-gray-400 text-sm">Complete logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Wedding Transportation Services
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Complete transportation solutions for every aspect of your wedding day and weekend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-rose-500 transition-all">
                <div className="bg-black border border-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-rose-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Wedding Transportation Packages
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Tailored packages for every wedding size and budget. All include red carpet service and champagne.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? 'bg-rose-900 border-2 border-rose-500 transform scale-105'
                    : 'bg-gray-900 border border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-1 text-sm">{pkg.description}</p>
                <p className="text-rose-400 font-semibold text-sm mb-6">{pkg.hours}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white font-bold text-xl mb-4">{pkg.starting}</p>
                <a
                  href="tel:+14045138803"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-white text-rose-900 hover:bg-gray-200'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
            Custom packages available for multi-day wedding weekends, destination weddings, and large guest counts (200+). Contact us for personalized pricing.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            What Makes Our Wedding Service Special
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Every detail designed to make your wedding transportation flawless and memorable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded-lg p-4">
                <CheckCircleIcon className="h-6 w-6 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Real Wedding Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-rose-400 fill-rose-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                &quot;Noble made our wedding day transportation absolutely perfect! The S-Class was stunning for our getaway, and the red carpet service at our reception entrance was amazing for photos. Our chauffeur was professional, on-time, and even helped coordinate with our photographer. Highly recommend!&quot;
              </p>
              <p className="text-white font-semibold">Jessica & Michael</p>
              <p className="text-gray-400 text-sm">The Plaza Hotel Wedding, October 2024</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-rose-400 fill-rose-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                &quot;We booked Noble for our entire wedding weekend - rehearsal dinner, wedding day, and farewell brunch. The Sprinter van was perfect for our bridal party, and guest shuttle service was a lifesaver. Our coordinator worked seamlessly with our wedding planner. Worth every penny!&quot;
              </p>
              <p className="text-white font-semibold">Amanda & David</p>
              <p className="text-gray-400 text-sm">Brooklyn Winery Wedding, June 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Wedding Transportation FAQ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Common questions about our wedding transportation service
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
                    <ChevronUpIcon className="h-5 w-5 text-rose-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-rose-400 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-rose-900 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Book Your Wedding Transportation Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Luxury vehicles, red carpet service, and flawless coordination. Let us handle the transportation so you can focus on your celebration.
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
              © 2025 Noble Black Car Service. Luxury Wedding Transportation NYC.
            </p>
            <div className="flex gap-6">
              <Link href="/services/corporate-shuttle" className="text-gray-400 hover:text-white text-sm transition-colors">
                Corporate Shuttle
              </Link>
              <Link href="/services/executive-car-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Executive Car Service
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

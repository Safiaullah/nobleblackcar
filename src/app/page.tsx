'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import * as gtag from '@/lib/gtag';

interface VehicleData {
  name: string;
  description: string;
  image: string;
  rotated: boolean;
  scale?: number;
}

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/hero-video.mp4', '/videos/hero-video-3.mp4', '/videos/hero-video-2.mp4'];
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Ensure next video is ready to play
  useEffect(() => {
    const currentVideoElement = videoRefs.current[currentVideo];
    if (currentVideoElement) {
      currentVideoElement.play().catch(() => {
        // Auto-play might be blocked, but user interaction will trigger it
      });
    }
  }, [currentVideo]);

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'airport'
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        // Reset form
        setContactForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [activeCategory, setActiveCategory] = useState('Business Sedan');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const categories = ["Business Sedan", "First Class Sedan", "Business SUV", "First Class SUV", "Sprinter"];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -344,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 344,
        behavior: 'smooth'
      });
    }
  };

  const fleetData: Record<string, VehicleData[]> = {
    "Business Sedan": [
      {
        name: "Mercedes-Benz E-Class",
        description: "Premium business sedan",
        image: "/images/Mercedes benz E class.png",
        rotated: true,
        scale: 1.15
      },
      {
        name: "Cadillac CT6",
        description: "Luxury executive sedan",
        image: "/images/CT6.jpg",
        rotated: true,
        scale: 1.0
      },
      {
        name: "Cadillac XT6",
        description: "Luxury crossover SUV",
        image: "/images/XT6.avif",
        rotated: true
      },
      {
        name: "Cadillac Lyriq",
        description: "Premium electric luxury SUV",
        image: "/images/Lyriq.avif",
        rotated: true
      }
    ],
    "First Class Sedan": [
      {
        name: "Mercedes-Benz S-Class",
        description: "Ultimate luxury sedan",
        image: "/images/mercedes-s-class.png",
        rotated: true
      },
      {
        name: "BMW 7 Series",
        description: "Premium executive experience",
        image: "/images/bmw-7-series.webp",
        rotated: true
      }
    ],
    "Business SUV": [
      {
        name: "Chevrolet Suburban",
        description: "Spacious SUV for group travel",
        image: "/images/Suburban.jpeg",
        rotated: true,
        scale: 1.0
      },
      {
        name: "GMC Yukon",
        description: "Premium full-size SUV",
        image: "/images/yukon xl.jpg",
        rotated: true,
        scale: 1.15
      },
      {
        name: "Lincoln Navigator",
        description: "Luxury full-size SUV with refined comfort",
        image: "/images/Navigator.avif",
        rotated: false,
        scale: 1.0
      }
    ],
    "First Class SUV": [
      {
        name: "Cadillac Escalade ESV",
        description: "Extended luxury SUV with premium features",
        image: "/images/Escalade.webp",
        rotated: true,
        scale: 1.4
      }
    ],
    Luxe: [
      {
        name: "Mercedes-Benz S-Class",
        description: "Ultimate luxury sedan",
        image: "/images/2025-Mercedes-Benz-S-Class-MaybachS680.webp",
        rotated: false
      },
      {
        name: "BMW 7 Series",
        description: "Premium executive experience",
        image: "/images/25-escalade-1sg-gba-l-v3.avif",
        rotated: false
      }
    ],
    Sprinter: [
      {
        name: "Jet Sprinter",
        description: "Ultra-luxury with entertainment",
        image: "/images/jet-sprinter.png",
        rotated: true
      },
      {
        name: "Executive Sprinter",
        description: "Corporate group travel",
        image: "/images/executive-sprinter.png",
        rotated: true
      },
      {
        name: "Limo Sprinter",
        description: "Celebrations & parties",
        image: "/images/limo-sprinter.png",
        rotated: true
      },
      {
        name: "WAV - ADA Sprinter",
        description: "Wheelchair accessible",
        image: "/images/ada-sprinter.png",
        rotated: true
      }
    ]
  };

  const currentVehicles = fleetData[activeCategory as keyof typeof fleetData] || fleetData["Business Sedan"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO: Schema.org Structured Data */}
      <StructuredData />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px black inset !important;
          -webkit-text-fill-color: white !important;
          background-color: black !important;
          color: white !important;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-black border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Company Name & Menu Items */}
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">Noble Black Car Service</span>
                <span className="ml-3 text-xs text-gray-400">EST. 2015</span>
              </div>

              {/* Menu Items (Desktop Only) */}
              <div className="hidden lg:flex items-center gap-6">
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-2"
                    onMouseEnter={() => setOpenDropdown('services-main')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    Our Services
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                  {openDropdown === 'services-main' && (
                    <div
                      className="absolute top-full left-0 mt-0 w-64 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setOpenDropdown('services-main')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a href="/services" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors font-semibold">All Services</a>
                      <div className="border-t border-gray-700 my-2"></div>
                      <a href="/services/airport-transfer" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Airport Transfer Service</a>
                      <a href="/services/corporate-shuttle" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Shuttle Service</a>
                      <a href="/services/executive-car-service" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Executive Car Service</a>
                      <a href="/services/wedding" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Wedding Transportation</a>
                      <a href="/services/point-to-point" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Point-to-Point Service</a>
                      <a href="/services/hourly" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Hourly Service</a>
                      <a href="/services/long-distance" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Long Distance</a>
                      <a href="/services/sightseeing-tours" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Sightseeing Tours</a>
                      <a href="/services/wine-tours" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Wine Tours</a>
                      <a href="/services/cruise-terminal" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Cruise Terminal</a>
                      <a href="/services/medical-transportation" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Medical Transportation</a>
                      <div className="border-t border-gray-700 my-2"></div>
                      <div className="px-4 py-1 text-xs text-gray-500 font-semibold">AIRPORTS</div>
                      <a href="/airports/jfk" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">JFK Airport</a>
                      <a href="/airports/laguardia" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">LaGuardia Airport</a>
                      <a href="/airports/newark" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Newark Airport</a>
                      <a href="/airports/islip" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Islip Airport</a>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-2"
                    onMouseEnter={() => setOpenDropdown('business-main')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    Business
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                  {openDropdown === 'business-main' && (
                    <div
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setOpenDropdown('business-main')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a href="/services/corporate-shuttle" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Shuttle Service</a>
                      <a href="/services/executive-car-service" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Executive Car Service</a>
                      <a href="/services/airport-transfer" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Business Airport Transfer</a>
                      <a href="/corporate/accounts" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Accounts</a>
                      <a href="/corporate/executive-travel" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Executive Travel</a>
                      <a href="/corporate/shuttle-service" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Shuttle Service</a>
                      <a href="/events/corporate" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Events</a>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-2"
                    onMouseEnter={() => setOpenDropdown('events-main')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    Events
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                  {openDropdown === 'events-main' && (
                    <div
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setOpenDropdown('events-main')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a href="/services/wedding" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Wedding Transportation</a>
                      <a href="/services/sporting-events" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Sporting Events</a>
                      <a href="/events/concerts" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Concert Transportation</a>
                      <a href="/events/sporting" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Sporting Events Transport</a>
                      <a href="/services/event-transportation" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Event Transportation</a>
                      <a href="/events/fifa-2026" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">FIFA 2026</a>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-2"
                    onMouseEnter={() => setOpenDropdown('fleet-main')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    Our Fleet
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                  {openDropdown === 'fleet-main' && (
                    <div
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setOpenDropdown('fleet-main')}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a href="/fleet" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">All Vehicles</a>
                      <div className="border-t border-gray-700 my-2"></div>
                      <a href="/fleet/business-sedan" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Business Sedan</a>
                      <a href="/fleet/first-class-sedan" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">First Class Sedan</a>
                      <a href="/fleet/business-suv" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Business SUV</a>
                      <a href="/fleet/first-class-suv" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">First Class SUV</a>
                      <a href="/fleet/sprinter" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Sprinter Van</a>
                    </div>
                  )}
                </div>

                <a href="/blog" className="text-white hover:text-gray-300 transition-colors py-2">
                  Blog
                </a>
              </div>
            </div>

            {/* Right Side - Navigation Elements */}
            <div className="flex items-center gap-2">
              {/* Phone Icon Button */}
              <a
                href="tel:+14045138803"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all group"
              >
                <PhoneIcon className="h-5 w-5 text-white group-hover:text-black" />
              </a>

              {/* Book Now Button */}
              <a
                href="https://book.mylimobiz.com/v4/nobleblackcar"
                onClick={() => gtag.trackBookingClick('Navigation Bar')}
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors text-base"
              >
                Book Now
              </a>

              {/* Hamburger Menu - Mobile Only */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col gap-1 w-10 h-10 items-center justify-center hover:bg-gray-900 rounded-lg transition-colors"
              >
                <span className={`w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 bg-black border-t border-gray-700`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              >
                Services
              </a>
              <a
                href="#fleet"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              >
                Fleet
              </a>
              <a
                href="#routes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              >
                Routes
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-screen h-[100vh] overflow-hidden bg-black" aria-label="Brooklyn Bridge NYC background video">
        {/* Video Background - Render all videos and show current one */}
        {videos.map((video, index) => (
          <video
            key={video}
            ref={(el) => { videoRefs.current[index] = el; }}
            autoPlay={index === currentVideo}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-label="NYC skyline with Brooklyn Bridge - Noble Black Car Service coverage area"
            onEnded={() => {
              if (index === currentVideo) {
                setCurrentVideo((prev) => (prev + 1) % videos.length);
              }
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-20"></div>

        {/* Hero Content Overlay */}
        <div className="relative h-full flex items-center justify-center pb-32 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium NYC Black Car Service
              <br />
              <span className="text-4xl lg:text-6xl text-gray-100">Luxury Airport Transportation</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-white mb-12 max-w-4xl mx-auto italic font-light drop-shadow-lg">
              It&apos;s Not Just The Ride, It&apos;s The Experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://book.mylimobiz.com/v4/nobleblackcar"
                onClick={() => gtag.trackBookingClick('Hero Section')}
                className="bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl min-w-[200px]"
              >
                RESERVE NOW
              </a>
              <a
                href="tel:+14045138803"
                onClick={() => gtag.trackPhoneClick('Hero Section')}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-2xl min-w-[200px]"
              >
                <PhoneIcon className="h-6 w-6" />
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reservation Form */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-6 text-white">Reserve Your Noble Ride Now</h3>
          <div className="bg-black rounded-lg p-4 min-h-[600px]">
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" data-ores-widget="website" data-ores-alias="nobleblackcar" className="text-white">Online Reservations</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Private Airport Car Service",
                description: "Reliable and comfortable airport transfers to and from all major NYC airports with flight tracking.",
                link: "/services/airport-transfer"
              },
              {
                title: "NYC Corporate Shuttle Service",
                description: "Professional transportation for business executives, meetings, and corporate events.",
                link: "/corporate/shuttle-service"
              },
              {
                title: "NYC Executive Car Service",
                description: "Luxury vehicles and experienced drivers for executive transportation needs.",
                link: "/corporate/executive-travel"
              },
              {
                title: "NYC Private Sightseeing Tours",
                description: "Explore NYC's famous sights and landmarks in your own comfortable private space.",
                link: "/services/sightseeing-tours"
              },
              {
                title: "Corporate Events Transportation",
                description: "Professional group transportation for corporate functions, conferences, and business gatherings.",
                link: "/events/corporate"
              },
              {
                title: "Cruise Terminal Car Service",
                description: "Seamless transfers to and from cruise terminals for stress-free travel.",
                link: "/services/cruise-terminal"
              },
              {
                title: "Sporting Event Transportation",
                description: "Arrive in style for any game at Yankee Stadium, Madison Square Garden, or MetLife Stadium.",
                link: "/events/sporting"
              },
              {
                title: "Concert Transportation",
                description: "Premium car service to concerts and shows at MSG, Barclays Center, and more.",
                link: "/events/concerts"
              },
              {
                title: "FIFA World Cup 2026 Transportation",
                description: "Book now for exclusive transportation to FIFA World Cup 2026 matches in NYC.",
                link: "/events/fifa-2026"
              }
            ].map((service, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex gap-4">
                  <Link
                    href={service.link}
                    onClick={() => {
                      gtag.trackServiceView(service.title);
                    }}
                    className="text-white font-semibold hover:text-gray-200 transition-colors"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="https://book.mylimobiz.com/v4/nobleblackcar"
                    onClick={() => {
                      gtag.trackBookingClick(`Service - ${service.title}`);
                    }}
                    className="text-gray-400 font-semibold hover:text-gray-200 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
            </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Our Fleet</h2>

          {/* Vehicle Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-gray-700 hover:border-white hover:bg-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Vehicle Cards Grid */}
          <div className="relative px-12">
            {/* Navigation Arrows */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-10 bg-gray-900 border border-gray-700 rounded-full p-2 hover:bg-gray-800 transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-10 bg-gray-900 border border-gray-700 rounded-full p-2 hover:bg-gray-800 transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </button>

            {/* Cards Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {currentVehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-black rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl hover:border-gray-500 transition-all duration-300 flex-shrink-0 w-[320px]"
                >
                  <div className="bg-white p-6 flex items-center justify-center h-[220px] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} - ${vehicle.description} - ${activeCategory} - Noble Black Car Service NYC`}
                      title={`${vehicle.name} luxury black car service in NYC`}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                      style={{
                        objectFit: 'contain',
                        transform: `scaleX(${vehicle.rotated ? -1 : 1}) ${vehicle.scale ? `scale(${vehicle.scale})` : 'scale(1)'}`
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 h-12 flex items-center justify-center leading-tight">{vehicle.name}</h3>
                    <p className="text-sm text-gray-400 mb-3 h-10 flex items-center justify-center leading-relaxed">{vehicle.description}</p>
                    <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {activeCategory}
                    </span>
                    <div className="flex gap-2 justify-center">
                      <Link
                        href={`/fleet/${activeCategory.toLowerCase().replace(/ /g, '-')}`}
                        onClick={() => gtag.trackFleetView(vehicle.name)}
                        className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
                      >
                        View Details →
                      </Link>
                      <a
                        href="https://book.mylimobiz.com/v4/nobleblackcar"
                        onClick={() => gtag.trackBookingClick(`Fleet - ${vehicle.name}`)}
                        className="text-gray-400 text-sm font-semibold hover:text-gray-300 transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Routes */}
      <section id="routes" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Service Routes</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Offering reliable, on-time transportation across all service routes
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Major Airports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                <Link
                  href="/airports/jfk"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/twa-exterior-sunset.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from JFK Airport</span>
                </Link>
                <Link
                  href="/airports/laguardia"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/LGA-4.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from LaGuardia (LGA)</span>
                </Link>
                <Link
                  href="/airports/newark"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/newark-liberty-international-airport-ewr-in-newark-nj-v0-whkd3fn1u7na1.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Newark (EWR)</span>
                </Link>
                <Link
                  href="/airports/teterboro"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/headerimage_retail_5119f1277b.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Teterboro (TEB)</span>
                </Link>
                <Link
                  href="/airports/westchester"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/74469048007-ts-071924-airport-04.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Westchester (HPN)</span>
                </Link>
                <Link
                  href="/routes/philadelphia"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/28148aea-d477-46ac-955c-3b2340d69041.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Philadelphia (PHL)</span>
                </Link>
                <Link
                  href="/airports/islip"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/macarthur-airport-judy-walker.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Islip (ISP)</span>
                </Link>
                <Link
                  href="/airports/stewart"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/New-York-Stewart-International-Airport-SWF-Stewart-Airport-Express-700x400.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Stewart (SWF)</span>
                </Link>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white text-center">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Link
                  href="/routes/hamptons"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/where-are-the-hamptons-montauk-lighthouse-2b0469.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Hamptons</span>
                </Link>
                <Link
                  href="/routes/new-jersey"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/NJHeader2-1568x790.jpg.webp)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from New Jersey</span>
                </Link>
                <Link
                  href="/routes/philadelphia"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/philadelphia-1140x684.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Philadelphia</span>
                </Link>
                <Link
                  href="/routes/long-island"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/181107112022-long-island-city-restricted.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Long Island</span>
                </Link>
                <Link
                  href="/routes/boston"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Boston</span>
                </Link>
                <Link
                  href="/routes/washington-dc"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/Washington-DC-Banner-1-1.png)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Washington DC</span>
                </Link>
                <Link
                  href="/routes/connecticut"
                  className="block relative bg-black border border-gray-700 rounded px-8 py-12 text-white hover:border-gray-500 hover:shadow-sm transition-all overflow-hidden bg-cover bg-center text-2xl font-bold min-h-[200px] flex items-center justify-center"
                  style={{backgroundImage: 'url(/images/hartford-connecticut-at-night.jpg)'}}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <span className="relative z-10">NYC to & from Connecticut</span>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Thousands of NYC Travelers</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>
            <p className="text-xl text-gray-300">Based on 500+ verified rides</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400">Rides Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">On-Time Arrivals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Available Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-20 pb-10 bg-black relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/why-choose-us-bg.jpg)'}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why Noble Black Car is the Best Choice for Your Transfer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckBadgeIcon className="h-8 w-8" />,
                title: "Flat Rate Pricing",
                description: "Guaranteed flat rate before booking. No hidden charges, no meters ticking."
              },
              {
                icon: <ShieldCheckIcon className="h-8 w-8" />,
                title: "Clean Safe Ride",
                description: "Sanitized and clean interior. Your safety and comfort are our top priorities."
              },
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "On-Time Airport Transfers",
                description: "Courtesy wait time and live flight tracking. Never miss a flight."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Professional Drivers",
                description: "FHV licensed, insured and regulated drivers with excellent customer service."
              },
              {
                icon: <StarIcon className="h-8 w-8" />,
                title: "Corporate Transfers",
                description: "Professional transportation for business executives and corporate clients."
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Group Transfers",
                description: "Comfort and convenience for your group travel, any size."
              },
              {
                icon: <CalendarIcon className="h-8 w-8" />,
                title: "Reservation Flexibility",
                description: "Free rescheduling and cancellations. Plans change, we understand."
              },
              {
                icon: <MapPinIcon className="h-8 w-8" />,
                title: "Reservation Reminders",
                description: "Reservation detail updates via SMS & email for peace of mind."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-black border border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="pt-10 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">What Our Customers Say</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Real reviews from verified customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Executive",
                image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=ffffff&color=000000&size=100",
                rating: 5,
                review: "Exceptional service! My driver was punctual, professional, and the car was immaculate. I use Noble for all my JFK trips now.",
                date: "2 weeks ago"
              },
              {
                name: "Michael Chen",
                role: "Corporate Client",
                image: "https://ui-avatars.com/api/?name=Michael+Chen&background=ffffff&color=000000&size=100",
                rating: 5,
                review: "We've been using Noble for our corporate events for over a year. Reliable, professional, and always on time. Highly recommend!",
                date: "1 month ago"
              },
              {
                name: "Emily Rodriguez",
                role: "Wedding Client",
                image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=ffffff&color=000000&size=100",
                rating: 5,
                review: "Noble made our wedding day perfect! Beautiful vehicles, courteous drivers, and everything ran smoothly. Thank you!",
                date: "3 weeks ago"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-3">&quot;{testimonial.review}&quot;</p>
                <p className="text-gray-500 text-sm">{testimonial.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=noble+black+car+service+nyc+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Latest Travel Insights</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Expert tips and guides for your NYC transportation needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Black Car vs Uber in NYC: Which is Better?",
                excerpt: "Compare the pros and cons of black car services versus rideshare apps for your NYC transportation.",
                link: "/blog/black-car-vs-uber-nyc",
                image: "/images/mercedes-s-class.png"
              },
              {
                title: "Why You Should Pre-Book Your JFK Transfer",
                excerpt: "Discover the benefits of booking your airport transfer in advance and avoid last-minute stress.",
                link: "/blog/pre-book-jfk-transfer",
                image: "/images/twa-exterior-sunset.jpg"
              },
              {
                title: "Hamptons Transportation Guide",
                excerpt: "Everything you need to know about luxury transportation to the Hamptons from NYC.",
                link: "/blog/hamptons-transportation-guide",
                image: "/images/where-are-the-hamptons-montauk-lighthouse-2b0469.webp"
              },
              {
                title: "Professional Chauffeur Service: What to Expect",
                excerpt: "Learn what sets professional chauffeur service apart from standard transportation options.",
                link: "/blog/professional-chauffeur-service",
                image: "/images/headerimage_retail_5119f1277b.webp"
              },
              {
                title: "Wedding Transportation Checklist",
                excerpt: "Essential planning tips for coordinating wedding day transportation for you and your guests.",
                link: "/blog/wedding-transportation-checklist",
                image: "/images/NJHeader2-1568x790.jpg.webp"
              },
              {
                title: "Holiday Airport Travel Tips",
                excerpt: "Navigate busy holiday airport travel with these expert tips for stress-free transportation.",
                link: "/blog/holiday-airport-travel",
                image: "/images/LGA-4.jpg"
              }
            ].map((post, index) => (
              <Link
                key={index}
                href={post.link}
                className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all group"
              >
                <div className="h-48 overflow-hidden bg-gray-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-white font-semibold hover:text-gray-300 transition-colors">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
          <form onSubmit={handleContactSubmit} className="bg-black border border-gray-700 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={contactForm.phone}
                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                className="bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-gray-500"
              />
              <select
                value={contactForm.service}
                onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                className="bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white"
              >
                <option value="">Select a Service</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Corporate Service">Corporate Service</option>
                <option value="Hourly Service">Hourly Service</option>
                <option value="Event Transportation">Event Transportation</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className="w-full mt-6 bg-black border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-gray-500"
            />
            {submitMessage && (
              <div className={`mt-4 p-4 rounded ${submitMessage.includes('successfully') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                {submitMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-white text-black px-6 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
          <div className="text-center mt-8">
            <a href="tel:+14045138803" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <p className="text-gray-400 mt-4">Available 24/7 for your convenience</p>
          </div>
        </div>
      </section>


      {/* Trust Badges */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Licensed, Insured & Certified</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black border border-gray-600 rounded-lg p-6 h-32 flex items-center justify-center mb-3">
                <ShieldCheckIcon className="h-16 w-16 text-white" />
              </div>
              <p className="text-gray-300 font-semibold">Fully Insured</p>
            </div>
            <div className="text-center">
              <div className="bg-black border border-gray-600 rounded-lg p-6 h-32 flex items-center justify-center mb-3">
                <CheckBadgeIcon className="h-16 w-16 text-white" />
              </div>
              <p className="text-gray-300 font-semibold">TLC Licensed</p>
            </div>
            <div className="text-center">
              <div className="bg-black border border-gray-600 rounded-lg p-6 h-32 flex items-center justify-center mb-3">
                <ClockIcon className="h-16 w-16 text-white" />
              </div>
              <p className="text-gray-300 font-semibold">24/7 Available</p>
            </div>
            <div className="text-center">
              <div className="bg-black border border-gray-600 rounded-lg p-6 h-32 flex items-center justify-center mb-3">
                <StarIcon className="h-16 w-16 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-300 font-semibold">5-Star Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car Service</h3>
              <p className="text-gray-400 text-sm mb-4">
                Providing premium 1st class transportation services.
              </p>

              {/* Location Map */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2 text-white">Location</h4>
                <div className="bg-black border border-gray-700 rounded-lg overflow-hidden h-[180px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174486949193!2d-73.98419892346609!3d40.75368313490784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb4c4c3%3A0x77733f95a0fe54a7!2s442%205th%20Ave%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1729721241000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Noble Black Car Service Location"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services/airport-transfer" className="hover:text-white transition-colors">Airport Transfers</a></li>
                <li><a href="/services/corporate-shuttle" className="hover:text-white transition-colors">Corporate Service</a></li>
                <li><a href="/services/sightseeing-tours" className="hover:text-white transition-colors">Sightseeing Tours</a></li>
                <li><a href="/services/event-transportation" className="hover:text-white transition-colors">Event Transportation</a></li>
                <li><a href="/services/medical-transportation" className="hover:text-white transition-colors">Medical Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/about/team" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="/about/safety" className="hover:text-white transition-colors">Safety Standards</a></li>
                <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/coverage-area" className="hover:text-white transition-colors">Coverage Area</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/deals" className="hover:text-white transition-colors">Deals & Offers</a></li>
                <li><a href="/referral-program" className="hover:text-white transition-colors">Referral Program</a></li>
                <li><a href="/reservation-tracker" className="hover:text-white transition-colors">Track Reservation</a></li>
                <li><a href="/gift-cards" className="hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="/partner-with-us" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="/locations/manhattan" className="hover:text-white transition-colors">Manhattan Service</a></li>
                <li><a href="/locations/brooklyn" className="hover:text-white transition-colors">Brooklyn Service</a></li>
                <li><a href="/locations/queens" className="hover:text-white transition-colors">Queens Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Noble Black Car. All rights reserved.</p>
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

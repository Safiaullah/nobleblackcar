'use client';

import React, { useState } from 'react';
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

interface VehicleData {
  name: string;
  description: string;
  image: string;
  rotated: boolean;
  scale?: number;
}

export default function Home() {
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
                <span className="text-2xl font-bold text-white">Noble Black Car</span>
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
                      <a href="/services/airport-transfer" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Airport Transfer Service</a>
                      <a href="/services/corporate-shuttle" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Shuttle Service</a>
                      <a href="/services/executive-car-service" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Executive Car Service</a>
                      <a href="/services/wedding" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Wedding Transportation</a>
                      <div className="border-t border-gray-700 my-2"></div>
                      <div className="px-4 py-1 text-xs text-gray-500 font-semibold">AIRPORTS</div>
                      <a href="/airports/jfk" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">JFK Airport</a>
                      <a href="/airports/laguardia" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">LaGuardia Airport</a>
                      <a href="/airports/newark" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Newark Airport</a>
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
                      <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Corporate Events</a>
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
                      <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Sporting Event Transportation</a>
                      <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Wine Tour Transportation</a>
                      <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-900 transition-colors">Special Events</a>
                    </div>
                  )}
                </div>

                <a href="#fleet" className="text-white hover:text-gray-300 transition-colors py-2">
                  Our Fleet
                </a>

                <a href="#fifa" className="text-white hover:text-gray-300 transition-colors py-2">
                  FIFA WC 2026
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
                href="#contact"
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
      <section className="relative w-full h-[600px] overflow-hidden bg-black" aria-label="Brooklyn Bridge NYC background video">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="NYC skyline with Brooklyn Bridge - Noble Black Car Service coverage area"
        >
          <source src="/videos/brooklyn bridge.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Hero Content Overlay */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Premium NYC Black Car Service
              <br />
              <span className="text-4xl lg:text-6xl text-gray-100">Luxury Airport Transportation</span>
              <br />
              <span className="text-4xl lg:text-6xl text-gray-100">Since 2015</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-white mb-10 max-w-4xl mx-auto italic font-light drop-shadow-lg">
              It&apos;s Not Just The Ride, It&apos;s The Experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl min-w-[200px]"
              >
                RESERVE NOW
              </a>
              <a
                href="tel:+14045138803"
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
      <section className="py-4 bg-black border-y border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-center mb-2 text-white">Reserve Your Noble Ride Now</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-2 shadow-sm min-h-[600px]">
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" data-ores-widget="website" data-ores-alias="nobleblackcar" className="text-white">Online Reservations</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services */}
      <section id="services" className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Private Airport Car Service",
                description: "Reliable and comfortable airport transfers to and from all major NYC airports with flight tracking."
              },
              {
                title: "NYC Corporate Shuttle Service",
                description: "Professional transportation for business executives, meetings, and corporate events."
              },
              {
                title: "NYC Executive Car Service",
                description: "Luxury vehicles and experienced drivers for executive transportation needs."
              },
              {
                title: "NYC Private Sightseeing Tours",
                description: "Explore NYC's famous sights and landmarks in your own comfortable private space."
              },
              {
                title: "Point-to-Point Transportation",
                description: "Direct, efficient transportation from any location to your destination."
              },
              {
                title: "Cruise Terminal Car Service",
                description: "Seamless transfers to and from cruise terminals for stress-free travel."
              },
              {
                title: "Sporting Event Transportation",
                description: "Arrive in style for any game at Yankee Stadium, Madison Square Garden, or MetLife Stadium."
              },
              {
                title: "Wedding Transportation",
                description: "Make your special day memorable with luxurious, stress-free transportation."
              },
              {
                title: "Wine Tour Transportation",
                description: "Enjoy wine country tours with professional chauffeur service."
              }
            ].map((service, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a href="#contact" className="text-white font-semibold hover:text-gray-200 transition-colors">
                  Learn More →
                </a>
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
                  className="bg-black rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl hover:border-gray-500 transition-all duration-300 cursor-pointer flex-shrink-0 w-[320px]"
                  onClick={() => window.location.href = '#contact'}
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
                    <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {activeCategory}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Routes */}
      <section id="routes" className="py-20 bg-black border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Service Routes</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Offering reliable, on-time transportation across all service routes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Major Airports</h3>
              <div className="space-y-3">
                {[
                  "NYC to & from JFK Airport",
                  "NYC to & from LaGuardia (LGA)",
                  "NYC to & from Newark (EWR)",
                  "NYC to & from Teterboro (TEB)",
                  "NYC to & from Westchester (HPN)",
                  "NYC to & from Philadelphia (PHL)",
                  "NYC to & from Islip (ISP)",
                  "NYC to & from Stewart (SWF)"
                ].map((route, index) => (
                  <div key={index} className="bg-black border border-gray-700 rounded px-4 py-3 text-white hover:border-gray-500 hover:shadow-sm transition-all">
                    {route}
          </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Popular Routes</h3>
              <div className="space-y-3">
                {[
                  "NYC to & from Hamptons",
                  "NYC to & from New Jersey",
                  "NYC to & from Philadelphia",
                  "NYC to & from Long Island",
                  "NYC to & from Boston",
                  "NYC to & from Washington DC",
                  "NYC to & from Connecticut",
                  "NYC to & from Maryland"
                ].map((route, index) => (
                  <div key={index} className="bg-black border border-gray-700 rounded px-4 py-3 text-white hover:border-gray-500 hover:shadow-sm transition-all">
                    {route}
              </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">What Our Customers Say</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Customer testimonials from Google
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black border-y border-gray-700">
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

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-gray-400 text-sm">
                Providing premium 1st class transportation services since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Airport Transfers</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Corporate Service</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Sightseeing Tours</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Event Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">NYC Airports</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>JFK Airport</li>
                <li>LaGuardia Airport</li>
                <li>Newark Airport</li>
                <li>Teterboro Airport</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:+14045138803" className="hover:text-white transition-colors">
                    Call Us
                  </a>
                </li>
                <li>Email: info@nobleblackcar.com</li>
                <li>New York, NY</li>
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

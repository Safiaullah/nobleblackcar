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
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'airport'
  });

  const [activeCategory, setActiveCategory] = useState('Business Sedan');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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

  const fleetData = {
    "Business Sedan": [
      {
        name: "Mercedes-Benz E-Class",
        description: "Premium business sedan",
        image: "/images/Mercedes benz E class.png",
        rotated: true
      },
      {
        name: "Cadillac CT6",
        description: "Luxury executive sedan",
        image: "/images/CT6.jpg",
        rotated: true
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
    SUV: [
      {
        name: "Cadillac Escalade",
        description: "Luxury SUV with premium amenities",
        image: "/images/Escalade.webp",
        rotated: true,
        scale: 1.4
      },
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
    <div className="min-h-screen bg-white text-black">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Company Name */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">Noble Black Car</h1>
              <span className="ml-3 text-xs text-gray-600">EST. 2015</span>
            </div>

            {/* Right Side - Navigation Elements */}
            <div className="flex items-center gap-2">
              {/* Phone Icon Button */}
              <a
                href="tel:+14045138803"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all group"
              >
                <PhoneIcon className="h-5 w-5 text-black group-hover:text-white" />
              </a>

              {/* Book Now Button */}
              <a
                href="#contact"
                className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors text-base"
              >
                Book Now
              </a>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col gap-1 w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className={`w-5 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 bg-white border-t border-gray-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              >
                Services
              </a>
              <a
                href="#fleet"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              >
                Fleet
              </a>
              <a
                href="#routes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              >
                Routes
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-black mb-6">
              Providing Premium
              <br />
              <span className="text-gray-700">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              It's Not Just The Ride, It's The Experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="bg-black text-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-800 transition-colors">
                RESERVE NOW
              </a>
              <a href="tel:+14045138803" className="flex items-center gap-2 bg-white border-2 border-black text-black px-8 py-4 rounded font-bold text-lg hover:bg-black hover:text-white transition-colors">
                <PhoneIcon className="h-6 w-6" />
                CALL NOW
              </a>
            </div>
                </div>
              </div>
      </section>

      {/* Quick Reservation Form */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-black">Reserve Your Noble Ride Now</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Pickup Location"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
              />
              <input
                type="text"
                placeholder="Drop-off Location"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
                value={formData.dropoffLocation}
                onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
              />
              <input
                type="date"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
              <input
                type="time"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
              <select
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black"
                value={formData.passengers}
                onChange={(e) => setFormData({...formData, passengers: e.target.value})}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4-6 Passengers</option>
                <option value="7">7+ Passengers</option>
              </select>
              <button className="bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
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
                <div className="bg-gray-100 border border-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-black">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Premium Services</h2>
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
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-black font-semibold hover:text-gray-700 transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
            </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">Our Fleet</h2>

          {/* Vehicle Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Business Sedan", "First Class Sedan", "SUV", "Sprinter"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-transparent text-black border border-gray-300 hover:border-black hover:bg-gray-100"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-10 bg-gray-100 border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-10 bg-gray-100 border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5 text-black" />
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
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer flex-shrink-0 w-[320px]"
                  onClick={() => window.location.href = '#contact'}
                >
                  <div className="bg-white p-6 flex items-center justify-center h-[220px] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                      style={{
                        objectFit: 'contain',
                        transform: `scaleX(${vehicle.rotated ? -1 : 1}) ${vehicle.scale ? `scale(${vehicle.scale})` : 'scale(1)'}`
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-black mb-2 h-12 flex items-center justify-center leading-tight">{vehicle.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 h-10 flex items-center justify-center leading-relaxed">{vehicle.description}</p>
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium">
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
      <section id="routes" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">Service Routes</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Offering reliable, on-time transportation across all service routes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Major Airports</h3>
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
                  <div key={index} className="bg-white border border-gray-200 rounded px-4 py-3 text-black hover:border-gray-300 hover:shadow-sm transition-all">
                    {route}
          </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Popular Routes</h3>
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
                  <div key={index} className="bg-white border border-gray-200 rounded px-4 py-3 text-black hover:border-gray-300 hover:shadow-sm transition-all">
                    {route}
              </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Customer testimonials from Google & TripAdvisor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-black fill-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent service! Professional drivers, clean vehicles, and always on time.
                  Highly recommend Noble Black Car for all your transportation needs in NYC."
                </p>
                <p className="text-black font-semibold">- Satisfied Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact Us</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
              />
              <select className="bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black">
                <option value="">Select a Service</option>
                <option value="airport">Airport Transfer</option>
                <option value="corporate">Corporate Service</option>
                <option value="hourly">Hourly Service</option>
                <option value="event">Event Transportation</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mt-6 bg-white border border-gray-300 text-black px-4 py-3 rounded focus:outline-none focus:border-black placeholder-gray-400"
            />
            <button className="w-full mt-6 bg-black text-white px-6 py-4 rounded font-bold text-lg hover:bg-gray-800 transition-colors">
              SEND MESSAGE
            </button>
          </div>
          <div className="text-center mt-8">
            <a href="tel:+14045138803" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-800 transition-colors">
              <PhoneIcon className="h-6 w-6" />
              CALL NOW
            </a>
            <p className="text-gray-600 mt-4">Available 24/7 for your convenience</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Noble Black Car</h3>
              <p className="text-gray-600 text-sm">
                Providing premium 1st class transportation services since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">Services</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#services" className="hover:text-black transition-colors">Airport Transfers</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">Corporate Service</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">Sightseeing Tours</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">Event Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">NYC Airports</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>JFK Airport</li>
                <li>LaGuardia Airport</li>
                <li>Newark Airport</li>
                <li>Teterboro Airport</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-black">Contact</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="tel:+14045138803" className="hover:text-black transition-colors">
                    Call Us
                  </a>
                </li>
                <li>Email: info@nobleblackcar.com</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Noble Black Car. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

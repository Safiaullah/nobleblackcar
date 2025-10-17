'use client';

import { useState } from 'react';
import { 
  PhoneIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CheckBadgeIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white">Noble Black Car</h1>
              <span className="ml-4 text-sm text-white/60">EST. 2015</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              <a href="#fleet" className="text-white/80 hover:text-white transition-colors">Fleet</a>
              <a href="#routes" className="text-white/80 hover:text-white transition-colors">Routes</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-white/90 transition-colors">
                Reserve Now
              </a>
              </div>
            <div className="lg:hidden">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Providing Premium
              <br />
              <span className="text-white/80">1st Class Transportation Services</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              It's Not Just The Ride, It's The Experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-white/90 transition-colors">
                RESERVE NOW
              </a>
              <a href="tel:+14045138803" className="flex items-center gap-2 text-white text-xl font-semibold hover:text-white/80 transition-colors">
                <PhoneIcon className="h-6 w-6" />
                +1 (404) 513-8803
              </a>
            </div>
                </div>
              </div>
      </section>

      {/* Quick Reservation Form */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Reserve Your Noble Ride Now</h3>
          <div className="bg-black border border-white/20 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Pickup Location"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
              />
              <input
                type="text"
                placeholder="Drop-off Location"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
                value={formData.dropoffLocation}
                onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
              />
              <input
                type="date"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
              <input
                type="time"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
              <select
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white"
                value={formData.passengers}
                onChange={(e) => setFormData({...formData, passengers: e.target.value})}
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4-6 Passengers</option>
                <option value="7">7+ Passengers</option>
              </select>
              <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-white/90 transition-colors">
                GET QUOTE
              </button>
            </div>
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
                <div className="bg-white/10 border border-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white/5 border-y border-white/10">
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
              <div key={index} className="bg-black border border-white/20 rounded-lg p-6 hover:border-white/40 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <a href="#contact" className="text-white font-semibold hover:text-white/80 transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
            </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Fleet solutions that actually scale</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Whether one vehicle or a hundred, our operations, reporting, and staffing adapt to fit your growth — no surprises.
            </p>
          </div>

          {/* Vehicle Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { name: "Business", active: true },
              { name: "First", active: false },
              { name: "SUV", active: false },
              { name: "Luxe", active: false },
              { name: "Sprinter", active: false },
              { name: "Mini Coach", active: false },
              { name: "Coach", active: false },
              { name: "Armored", active: false }
            ].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  category.active
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Business Category - Main Fleet */}
          <div className="space-y-16">
            {/* Mercedes-Benz S Class Section */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6 text-white">Mercedes-Benz S Class</h3>
                  <p className="text-lg text-white/70 mb-8">
                    The pinnacle of luxury sedans, offering unmatched comfort and sophistication for discerning clients.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Passengers</p>
                      <p className="text-2xl font-bold text-white">3</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Luggage</p>
                      <p className="text-2xl font-bold text-white">3 bags</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm text-white/60 mb-2">Features</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• Complimentary water and Wi-Fi</li>
                      <li>• Premium leather seating</li>
                      <li>• Climate control</li>
                      <li>• Professional chauffeur</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl font-bold text-white">Starting at $125</p>
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl h-96 flex items-center justify-center">
                  <img 
                    src="/images/2025-Mercedes-Benz-S-Class-MaybachS680.webp" 
                    alt="Mercedes-Benz S Class"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Cadillac Escalade Section */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-xl h-96 flex items-center justify-center">
                    <img 
                      src="/images/25-escalade-1sg-gba-l-v3.avif" 
                      alt="Cadillac Escalade"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-4xl font-bold mb-6 text-white">Cadillac Escalade</h3>
                  <p className="text-lg text-white/70 mb-8">
                    Spacious luxury SUV perfect for groups, featuring premium amenities and exceptional comfort.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Passengers</p>
                      <p className="text-2xl font-bold text-white">6</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Luggage</p>
                      <p className="text-2xl font-bold text-white">6 bags</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm text-white/60 mb-2">Features</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• Complimentary water and Wi-Fi</li>
                      <li>• Spacious interior</li>
                      <li>• Entertainment system</li>
                      <li>• Professional chauffeur</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl font-bold text-white">Starting at $145</p>
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chevrolet Suburban Section */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6 text-white">Chevrolet Suburban</h3>
                  <p className="text-lg text-white/70 mb-8">
                    Reliable and spacious SUV ideal for family trips and group transportation with premium comfort.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Passengers</p>
                      <p className="text-2xl font-bold text-white">6</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Luggage</p>
                      <p className="text-2xl font-bold text-white">6 bags</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm text-white/60 mb-2">Features</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• Complimentary water and Wi-Fi</li>
                      <li>• Generous cargo space</li>
                      <li>• Comfortable seating</li>
                      <li>• Professional chauffeur</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl font-bold text-white">Starting at $95</p>
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl h-96 flex items-center justify-center">
                  <img 
                    src="/images/025-suburban-ck10906-1lt-gba-trimselector.avif" 
                    alt="Chevrolet Suburban"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Sprinter Vans Section */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-xl h-96 flex items-center justify-center">
                    <span className="text-8xl">🚐</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-4xl font-bold mb-6 text-white">Sprinter Vans</h3>
                  <p className="text-lg text-white/70 mb-8">
                    Executive transport solution for larger groups, featuring premium amenities and spacious comfort.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Passengers</p>
                      <p className="text-2xl font-bold text-white">14</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Luggage</p>
                      <p className="text-2xl font-bold text-white">10 bags</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm text-white/60 mb-2">Features</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• Complimentary water and Wi-Fi</li>
                      <li>• Spacious interior</li>
                      <li>• Entertainment system</li>
                      <li>• Professional chauffeur</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl font-bold text-white">Starting at $250</p>
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Routes */}
      <section id="routes" className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Service Routes</h2>
          <p className="text-center text-white/70 mb-16 text-lg">
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
                  <div key={index} className="bg-black border border-white/20 rounded px-4 py-3 text-white hover:border-white/40 transition-all">
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
                  <div key={index} className="bg-black border border-white/20 rounded px-4 py-3 text-white hover:border-white/40 transition-all">
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
          <p className="text-center text-white/70 mb-16 text-lg">
            Customer testimonials from Google & TripAdvisor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-white fill-white" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">
                  "Excellent service! Professional drivers, clean vehicles, and always on time. 
                  Highly recommend Noble Black Car for all your transportation needs in NYC."
                </p>
                <p className="text-white font-semibold">- Satisfied Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
          <div className="bg-black border border-white/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
              />
              <select className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white">
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
              className="w-full mt-6 bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-white placeholder-white/50"
            />
            <button className="w-full mt-6 bg-white text-black px-6 py-4 rounded font-bold text-lg hover:bg-white/90 transition-colors">
              SEND MESSAGE
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-white mb-2">
              <a href="tel:+14045138803" className="hover:text-white/80 transition-colors">
                +1 (404) 513-8803
              </a>
            </p>
            <p className="text-white/70">Available 24/7 for your convenience</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-white/70 text-sm">
                Providing premium 1st class transportation services since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Airport Transfers</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Corporate Service</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Sightseeing Tours</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Event Transportation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">NYC Airports</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>JFK Airport</li>
                <li>LaGuardia Airport</li>
                <li>Newark Airport</li>
                <li>Teterboro Airport</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Phone: (404) 513-8803</li>
                <li>Email: info@nobleblackcar.com</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>Copyright © 2025 Noble Black Car. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

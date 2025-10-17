import Image from "next/image";
import { ArrowRightIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Noble Black</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
                <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Luxury Transportation
                <span className="block text-yellow-400">in Manhattan</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience premium black car service with professional chauffeurs,
                luxury vehicles, and impeccable service for business and leisure travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center">
                  Book Your Ride
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <p className="text-lg">Luxury Vehicle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From airport transfers to corporate events, we provide comprehensive luxury transportation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <MapPinIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Airport Transfers</h3>
              <p className="text-gray-600 mb-6">
                Reliable and comfortable airport transfers to and from all major NYC airports with flight tracking.
              </p>
              <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-500 flex items-center">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <ClockIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourly Service</h3>
              <p className="text-gray-600 mb-6">
                Perfect for business meetings, events, or city tours with professional chauffeur service.
              </p>
              <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-500 flex items-center">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6">
                Executive transportation for corporate events, meetings, and special occasions.
              </p>
              <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-500 flex items-center">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Noble Black?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional service with attention to every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Fleet</h3>
              <p className="text-gray-300">Luxury vehicles maintained to the highest standards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Chauffeurs</h3>
              <p className="text-gray-300">Experienced, licensed, and impeccably dressed drivers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Punctual Service</h3>
              <p className="text-gray-300">Always on time with real-time tracking and updates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock customer service and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl text-black mb-8">
            Book your ride today and discover why we're Manhattan's premier black car service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
              Book Now
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Noble Black</h3>
              <p className="text-gray-400">
                Manhattan's premier luxury transportation service, delivering excellence in every ride.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Airport Transfers</a></li>
                <li><a href="#" className="hover:text-white">Hourly Service</a></li>
                <li><a href="#" className="hover:text-white">Corporate Events</a></li>
                <li><a href="#" className="hover:text-white">Wedding Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Fleet</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@nobleblackcarservice.com</li>
                <li>Manhattan, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Noble Black. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

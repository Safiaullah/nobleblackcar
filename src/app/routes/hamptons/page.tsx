import React from 'react';

export default function HamptonsRoutePage() {
  return (
    <main className="min-h-screen bg-black">
      <nav className="bg-black border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-2xl font-bold text-white">Noble Black Car</a>
            <div className="flex items-center gap-6">
              <a href="tel:+14045138803" className="flex items-center gap-2 text-white hover:text-gray-300">
                <span>📞 (404) 513-8803</span>
              </a>
              <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 via-black to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            NYC to Hamptons Car Service
            <br />
            <span className="text-4xl lg:text-5xl text-gray-300">Luxury Transportation to the Hamptons</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium car service from Manhattan to Southampton, East Hampton, Montauk, and all Hamptons destinations. Professional chauffeurs, luxury vehicles, flat-rate pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-200 transition-colors">
              Book Hamptons Trip
            </a>
            <a href="tel:+14045138803" className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-colors">
              Call
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2 text-white">2.5 Hour Trip</h3>
              <p className="text-gray-300">Direct route from Manhattan</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-white">All Destinations</h3>
              <p className="text-gray-300">Southampton to Montauk</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-white">Luxury Fleet</h3>
              <p className="text-gray-300">S-Class & Escalade ESV</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-white">Flat Rates</h3>
              <p className="text-gray-300">Contact for quote</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-white">Premium Car Service to the Hamptons</h2>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Experience the ultimate in luxury ground transportation from New York City to the Hamptons. Noble Black Car Service provides premium car service to all Hamptons destinations including Southampton, East Hampton, Bridgehampton, Sag Harbor, Amagansett, Wainscott, Water Mill, and Montauk. Whether you're heading out for a summer weekend, attending a special event, or enjoying a wine tasting tour, arrive in style and comfort.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Why Choose Noble for Hamptons Transportation?</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Luxury Fleet for Long-Distance Travel</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Our Hamptons car service features premium vehicles designed for comfort on the 2-2.5 hour journey:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
              <li><strong className="text-white">Mercedes-Benz S-Class:</strong> Ultimate luxury sedan with massage seats, premium sound system, and executive workspace</li>
              <li><strong className="text-white">Cadillac Escalade ESV:</strong> Spacious luxury SUV perfect for families or groups with extra luggage</li>
              <li><strong className="text-white">Mercedes Sprinter Van:</strong> For larger groups (up to 14 passengers) with luggage</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Hamptons Destinations We Serve</h3>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
              <li><strong className="text-white">Southampton:</strong> Village center, Cooper's Beach, luxury estates</li>
              <li><strong className="text-white">East Hampton:</strong> Main Beach, village shops, estate areas</li>
              <li><strong className="text-white">Bridgehampton:</strong> Wine country, farms, events</li>
              <li><strong className="text-white">Sag Harbor:</strong> Historic waterfront village</li>
              <li><strong className="text-white">Amagansett:</strong> Beaches and residential areas</li>
              <li><strong className="text-white">Montauk:</strong> East end beaches, fishing, resorts</li>
              <li><strong className="text-white">Wainscott:</strong> Quiet residential enclave</li>
              <li><strong className="text-white">Water Mill:</strong> Luxury homes and estates</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Transparent Flat-Rate Pricing</h3>
            <div className="bg-black p-6 rounded-lg mb-6 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-white">Hamptons Destinations:</h4>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>• Southampton - Village center, Cooper's Beach, luxury estates</li>
                <li>• East Hampton - Main Beach, village shops, estate areas</li>
                <li>• Montauk - East end beaches, fishing, resorts</li>
                <li>• Bridgehampton - Wine country, farms, events</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">Contact us for flat-rate pricing to your Hamptons destination. One-way and round-trip options available.</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Perfect for Every Occasion</h3>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
              <li><strong className="text-white">Weekend Getaways:</strong> Friday afternoon departures, Sunday evening returns</li>
              <li><strong className="text-white">Wine Tours:</strong> Visit Wölffer Estate, Channing Daughters, and other Long Island wineries</li>
              <li><strong className="text-white">Special Events:</strong> Weddings, charity galas, polo matches, art exhibitions</li>
              <li><strong className="text-white">Beach Days:</strong> Drop-off and pickup service for beach days</li>
              <li><strong className="text-white">House Parties:</strong> Transportation for guests to your Hamptons estate</li>
              <li><strong className="text-white">Corporate Retreats:</strong> Executive transportation for business events</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The Route & Experience</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              The journey from Manhattan to the Hamptons takes approximately 2 to 2.5 hours via the Long Island Expressway (I-495) and Sunrise Highway or Montauk Highway. Our professional chauffeurs are experienced with Hamptons routes and traffic patterns, choosing the most efficient path based on real-time conditions.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Relax in climate-controlled comfort with complimentary Wi-Fi, bottled water, and phone chargers. Work productively, catch up on entertainment, or simply enjoy the scenic drive through Long Island's east end. Your chauffeur handles navigation, traffic, and all driving concerns while you prepare to enjoy your Hamptons experience.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Booking & Service Details</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Advance Reservations Recommended</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Especially during peak summer season (Memorial Day through Labor Day) and major event weekends, we recommend booking your Hamptons car service at least 2-3 days in advance. Last-minute requests are accommodated when possible.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Flexible Scheduling</h3>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
              <li>Early morning departures to beat traffic</li>
              <li>Friday afternoon service (peak demand - book early!)</li>
              <li>Sunday evening returns to NYC</li>
              <li>Mid-week service for extended stays</li>
              <li>Round-trip packages available</li>
            </ul>

            <div className="bg-black text-white p-8 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Book Your Hamptons Trip?</h3>
              <p className="text-lg mb-6">Reserve your luxury transportation to the Hamptons today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+14045138803" className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
                  Call
                </a>
                <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors">
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-gray-400 text-sm">Premium NYC to Hamptons car service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Popular Routes</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/routes/boston" className="hover:text-white transition-colors">NYC to Boston</a></li>
                <li><a href="/routes/washington-dc" className="hover:text-white transition-colors">NYC to DC</a></li>
                <li><a href="/routes/philadelphia" className="hover:text-white transition-colors">NYC to Philadelphia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="tel:+14045138803" className="hover:text-white transition-colors">(404) 513-8803</a></li>
                <li>Available 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Hamptons Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Southampton</li>
                <li>East Hampton</li>
                <li>Montauk</li>
                <li>Bridgehampton</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Noble Black Car Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

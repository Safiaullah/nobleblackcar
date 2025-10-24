import React from 'react';

export default function WestchesterAirportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-900 bg-opacity-30 border border-blue-700 rounded-full px-6 py-2 mb-6">
            <p className="text-blue-300 text-sm font-semibold">WESTCHESTER COUNTY AIRPORT (HPN)</p>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Westchester Airport Car Service
            <br />
            <span className="text-gray-300">HPN White Plains Transportation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium car service to Westchester County Airport (HPN). Serving White Plains, Rye, Greenwich, and Westchester County with luxury vehicles and professional chauffeurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+14045138803" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <span>📞</span>
              CALL NOW
            </a>
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
              RESERVE ONLINE
            </a>
          </div>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">⏰</div>
              <h3 className="text-xl font-bold text-white mb-1">35 Min from NYC</h3>
              <p className="text-gray-300 text-sm">Convenient location</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">📍</div>
              <h3 className="text-xl font-bold text-white mb-1">Local Service</h3>
              <p className="text-gray-300 text-sm">White Plains, Rye, Greenwich</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">⭐</div>
              <h3 className="text-xl font-bold text-white mb-1">Flat Rates</h3>
              <p className="text-gray-300 text-sm">Competitive pricing</p>
            </div>
            <div className="bg-black bg-opacity-30 border border-blue-800 rounded-lg p-6 text-center">
              <div className="text-blue-400 text-3xl mb-3">📞</div>
              <h3 className="text-xl font-bold text-white mb-1">24/7 Available</h3>
              <p className="text-gray-300 text-sm">All flights covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-white">Westchester County Airport Car Service</h2>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Westchester County Airport (HPN) in White Plains, NY serves as a convenient alternative to the major NYC airports for travelers in Westchester County, Fairfield County CT, and northern regions. Located just 35 minutes from Midtown Manhattan and easily accessible from White Plains, Rye, Scarsdale, Greenwich, and surrounding communities, HPN offers a stress-free travel experience with shorter lines and easier navigation.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Noble Black Car Service provides premium transportation to and from Westchester Airport, serving both business and leisure travelers with luxury sedans, SUVs, and professional chauffeurs. Whether you're a White Plains executive, Greenwich resident, or Manhattan traveler using HPN's convenient location, we deliver reliable, comfortable airport transportation 24/7.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Why Choose Noble for HPN Airport Service?</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Local Westchester Knowledge</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Our chauffeurs are intimately familiar with Westchester County roads, traffic patterns, and the best routes to HPN from all major communities including White Plains, Harrison, Rye, Scarsdale, New Rochelle, Yonkers, and Connecticut towns like Greenwich, Stamford, and Darien. We monitor real-time traffic to ensure on-time arrivals.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Flat-Rate Pricing</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Transparent pricing with no surprises:
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Contact us for a personalized quote based on your pickup location. All quotes include taxes and tolls - no hidden fees.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Flight Tracking & Meet Service</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              We track all HPN flights in real-time. For arrivals, your chauffeur monitors your flight status and adjusts pickup time for delays. We provide curbside pickup at baggage claim with assistance for your luggage. For departures, we ensure you arrive with plenty of time before your flight.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Service Areas</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              We provide Westchester Airport car service throughout the region:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-300">
              <li><strong>Westchester County:</strong> White Plains, Rye, Scarsdale, Harrison, New Rochelle, Yonkers, Mount Kisco, Armonk, Chappaqua</li>
              <li><strong>Connecticut:</strong> Greenwich, Stamford, Darien, New Canaan, Norwalk</li>
              <li><strong>NYC:</strong> Manhattan, Bronx, and all five boroughs</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">About Westchester County Airport</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Westchester County Airport is a public airport located in Harrison, NY, just minutes from White Plains. The airport is served by major carriers including American Airlines, Delta, JetBlue, and United, offering nonstop flights to over 30 destinations. HPN's compact size means shorter security lines, easier parking, and a more relaxed travel experience compared to JFK, LaGuardia, or Newark.
            </p>

            <div className="bg-black text-white p-8 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Book Your HPN Transfer</h3>
              <p className="text-lg mb-6">Available 24/7 for all Westchester Airport flights</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+14045138803" className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
                  (404) 513-8803
                </a>
                <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors">
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Noble Black Car</h3>
              <p className="text-gray-400 text-sm">Premium Westchester Airport car service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Airports</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/airports/jfk" className="hover:text-white transition-colors">JFK Airport</a></li>
                <li><a href="/airports/laguardia" className="hover:text-white transition-colors">LaGuardia</a></li>
                <li><a href="/airports/newark" className="hover:text-white transition-colors">Newark</a></li>
                <li><a href="/airports/teterboro" className="hover:text-white transition-colors">Teterboro</a></li>
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
              <h4 className="text-lg font-semibold mb-4 text-white">Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>White Plains</li>
                <li>Greenwich CT</li>
                <li>Westchester County</li>
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

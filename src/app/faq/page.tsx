import React from 'react'
import Link from 'next/link'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Everything you need to know about Noble Black Car Service
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            Can't find your answer? Call us at{' '}
            <a href="tel:+14045138803" className="font-bold text-black hover:underline">
              (404) 513-8803
            </a>
            {' '}or{' '}
            <a href="https://book.mylimobiz.com/v4/nobleblackcar" className="font-bold text-black hover:underline">
              book online
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 max-w-4xl mx-auto">

        {/* Booking & Reservations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Booking & Reservations</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">How do I book a ride?</h3>
              <p className="text-gray-700 mb-3">
                You can book a ride three ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li><strong>Online:</strong> Visit our website and use the booking form on the homepage</li>
                <li><strong>Phone:</strong> Call to speak with our dispatch team</li>
                <li><strong>Email:</strong> Send your trip details to info@nobleblackcarservice.com</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We recommend booking at least 24 hours in advance for guaranteed availability, though we often accommodate same-day requests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">How far in advance should I book?</h3>
              <p className="text-gray-700">
                For best availability, we recommend booking 24-48 hours in advance. For airport transfers, corporate events, weddings, or specific vehicle requests (like our Mercedes S-Class or Sprinter van), booking 2-3 days ahead ensures your preferred vehicle is reserved. However, we accept last-minute bookings based on availability and often can accommodate same-day requests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can I book a round trip?</h3>
              <p className="text-gray-700">
                Yes! Round trip bookings are common and often more economical. When booking, simply provide both pickup and return times. For airport pickups, we'll track your return flight to adjust for any delays. Round trips are particularly popular for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2">
                <li>Airport transfers (drop-off and pickup)</li>
                <li>Business meetings</li>
                <li>Medical appointments</li>
                <li>Day trips to the Hamptons, Boston, or Philadelphia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you offer hourly/as-directed service?</h3>
              <p className="text-gray-700">
                Absolutely. Our hourly service is perfect for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Multi-stop business meetings</li>
                <li>City tours and sightseeing</li>
                <li>Shopping trips</li>
                <li>Wedding transportation</li>
                <li>Prom and special events</li>
              </ul>
              <p className="text-gray-700">
                Hourly service has a 3-hour minimum and includes a professional chauffeur who stays with the vehicle for your entire reservation. Rates vary by vehicle type—call (404) 513-8803 for hourly pricing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What information do you need when I book?</h3>
              <p className="text-gray-700 mb-2">
                To ensure a smooth experience, please provide:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Pickup date, time, and location</li>
                <li>Drop-off location(s)</li>
                <li>Number of passengers</li>
                <li>Amount of luggage</li>
                <li>Preferred vehicle type</li>
                <li>Contact phone number and email</li>
                <li>For airport pickups: airline, flight number, and arrival time</li>
                <li>For corporate bookings: passenger name and any special instructions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing & Payment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Pricing & Payment</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">How much does service cost?</h3>
              <p className="text-gray-700 mb-3">
                Our pricing is based on distance, vehicle type, and service time. We offer flat-rate pricing for common routes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-3">
                <li><strong>Manhattan to JFK:</strong> $95-$130 depending on vehicle</li>
                <li><strong>Manhattan to LaGuardia:</strong> $85-$120</li>
                <li><strong>Manhattan to Newark:</strong> $95-$130</li>
                <li><strong>Manhattan to Teterboro:</strong> $120-$220</li>
                <li><strong>Manhattan to the Hamptons:</strong> $450-$525</li>
              </ul>
              <p className="text-gray-700">
                Visit our <Link href="/pricing" className="font-bold text-black hover:underline">pricing page</Link> for complete rates or call for a custom quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and cash. For corporate clients, we offer invoicing with NET 30 terms after account approval. Payment can be processed:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2">
                <li>At time of booking (prepay online or by phone)</li>
                <li>With the chauffeur after service (card or cash)</li>
                <li>Via monthly invoice (corporate accounts only)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Are there any hidden fees?</h3>
              <p className="text-gray-700">
                No. Our quotes are all-inclusive with no hidden charges. The price you're quoted includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Professional chauffeur service</li>
                <li>All tolls, taxes, and fees</li>
                <li>Complimentary Wi-Fi and water</li>
                <li>60 minutes of complimentary wait time for airport pickups</li>
                <li>15 minutes for all other pickups</li>
              </ul>
              <p className="text-gray-700">
                Gratuity is not included and is at your discretion (15-20% is customary for excellent service). Additional charges may apply for excessive wait time beyond complimentary periods or for route changes after booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you offer corporate accounts?</h3>
              <p className="text-gray-700">
                Yes! Our corporate program offers:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Monthly invoicing with NET 30 payment terms</li>
                <li>Dedicated account manager</li>
                <li>Volume discounts for frequent users</li>
                <li>Online booking portal with trip history</li>
                <li>Priority vehicle availability</li>
                <li>Detailed expense reporting</li>
                <li>Multiple billing profiles for different departments</li>
              </ul>
              <p className="text-gray-700">
                Contact us at (404) 513-8803 or visit our <Link href="/services/corporate-shuttle" className="font-bold text-black hover:underline">corporate services page</Link> to set up an account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Is gratuity included?</h3>
              <p className="text-gray-700">
                Gratuity is not included in our quoted rates and is entirely at your discretion. If you're pleased with your service, 15-20% is customary. You can add gratuity when paying by card or give cash directly to your chauffeur. For corporate accounts, gratuity can be included in the invoice if requested.
              </p>
            </div>
          </div>
        </div>

        {/* Airport Service */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Airport Service</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you track flights for airport pickups?</h3>
              <p className="text-gray-700">
                Yes! We monitor all flights in real-time using advanced flight tracking technology. If your flight is delayed or arrives early, your chauffeur's pickup time automatically adjusts—no need to call us. This ensures your driver is there when you land, not when you were scheduled to land. Just provide your flight number when booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">How much wait time is included?</h3>
              <p className="text-gray-700 mb-3">
                <strong>Airport pickups:</strong> 60 minutes of complimentary wait time from the moment your flight lands. This gives you time to deplane, collect luggage, clear customs (for international arrivals), and reach the pickup area without any rush or extra charges.
              </p>
              <p className="text-gray-700">
                <strong>All other pickups:</strong> 15 minutes of complimentary wait time from scheduled pickup time.
              </p>
              <p className="text-gray-700 mt-3">
                If you need additional wait time, standard hourly rates apply after the complimentary period.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Where will my driver meet me at the airport?</h3>
              <p className="text-gray-700 mb-3">
                <strong>Domestic arrivals:</strong> Your chauffeur will be in the baggage claim area holding a sign with your name. We'll send you their contact information and photo before your arrival.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>International arrivals:</strong> Your chauffeur meets you just outside customs in the arrivals hall with a name sign.
              </p>
              <p className="text-gray-700">
                <strong>Private aviation (Teterboro, Westchester):</strong> Your chauffeur coordinates with the FBO and meets you planeside or at the FBO entrance as preferred.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Which airports do you serve?</h3>
              <p className="text-gray-700 mb-2">
                We serve all New York area airports:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li><Link href="/airports/jfk" className="font-bold text-black hover:underline">JFK Airport (John F. Kennedy International)</Link></li>
                <li><Link href="/airports/laguardia" className="font-bold text-black hover:underline">LaGuardia Airport (LGA)</Link></li>
                <li><Link href="/airports/newark" className="font-bold text-black hover:underline">Newark Airport (EWR)</Link></li>
                <li><Link href="/airports/teterboro" className="font-bold text-black hover:underline">Teterboro Airport (TEB)</Link> - Private aviation</li>
                <li><Link href="/airports/westchester" className="font-bold text-black hover:underline">Westchester County Airport (HPN)</Link></li>
                <li>Long Island MacArthur Airport (ISP)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can you handle large groups for airport transfers?</h3>
              <p className="text-gray-700">
                Absolutely. Our Mercedes Sprinter van accommodates up to 14 passengers with 10-12 large bags—perfect for corporate teams, wedding parties, or group travel. For larger groups, we can coordinate multiple vehicles that arrive together. All group bookings include luggage assistance and the same premium service as our sedan offerings.
              </p>
            </div>
          </div>
        </div>

        {/* Vehicles & Fleet */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Vehicles & Fleet</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What types of vehicles do you have?</h3>
              <p className="text-gray-700 mb-3">
                Our fleet includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-3">
                <li><strong>Business Sedan:</strong> Lincoln MKZ, Chrysler 300 (up to 3 passengers)</li>
                <li><strong>First Class Sedan:</strong> Mercedes-Benz S-Class, BMW 7 Series (up to 3 passengers)</li>
                <li><strong>Business SUV:</strong> Chevrolet Suburban, Lincoln Navigator (up to 6 passengers)</li>
                <li><strong>First Class SUV:</strong> Cadillac Escalade ESV (up to 6 passengers)</li>
                <li><strong>Sprinter Van:</strong> Mercedes-Benz Sprinter (up to 14 passengers)</li>
              </ul>
              <p className="text-gray-700">
                Visit our <Link href="/fleet" className="font-bold text-black hover:underline">fleet page</Link> for detailed specifications and photos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">How do I choose the right vehicle?</h3>
              <p className="text-gray-700 mb-3">
                Consider your needs:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li><strong>1-3 passengers with 2-3 bags:</strong> Business Sedan is perfect</li>
                <li><strong>VIP service or executive travel:</strong> First Class Sedan (S-Class, 7 Series)</li>
                <li><strong>Families or groups of 4-6:</strong> Business or First Class SUV</li>
                <li><strong>Large groups up to 14:</strong> Mercedes Sprinter</li>
                <li><strong>Luxury impression:</strong> First Class options (S-Class, Escalade ESV)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Not sure? Call and we'll recommend the best vehicle for your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Are your vehicles clean and well-maintained?</h3>
              <p className="text-gray-700">
                Absolutely. Every vehicle is professionally detailed before each service and undergoes rigorous maintenance schedules. Our fleet consists of late-model vehicles (no older than 3 years) serviced by certified technicians. We sanitize all touch points, vacuum and clean interiors, and ensure fresh amenities (water, mints) are stocked for every ride.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What amenities are included in vehicles?</h3>
              <p className="text-gray-700 mb-2">
                All vehicles include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Complimentary Wi-Fi</li>
                <li>Bottled water</li>
                <li>Phone chargers (USB and wireless)</li>
                <li>Climate control</li>
                <li>Premium leather seating</li>
                <li>Tinted privacy windows</li>
                <li>Premium audio systems</li>
              </ul>
              <p className="text-gray-700 mt-3">
                First Class vehicles add features like massage seats, rear entertainment screens, and enhanced sound systems.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellations & Changes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Cancellations & Changes</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What is your cancellation policy?</h3>
              <p className="text-gray-700">
                <strong>Point-to-point and airport transfers:</strong> Cancel up to 2 hours before scheduled pickup for a full refund. Cancellations within 2 hours are subject to a 50% cancellation fee.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Hourly/as-directed service:</strong> Cancel up to 24 hours before scheduled pickup for a full refund. Cancellations within 24 hours are subject to a 50% fee.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>No-shows:</strong> Full charge applies if you're not at the pickup location and don't answer your phone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can I modify my reservation?</h3>
              <p className="text-gray-700">
                Yes, you can modify your reservation at no charge up to 2 hours before scheduled pickup. Changes include pickup/drop-off locations, time adjustments, vehicle upgrades, or passenger count. Call or email info@nobleblackcarservice.com with your reservation number and requested changes. Last-minute changes (within 2 hours) are accommodated based on availability and may incur additional fees.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What if my flight is delayed or cancelled?</h3>
              <p className="text-gray-700">
                <strong>Flight delays:</strong> No problem! We track your flight automatically. Your chauffeur adjusts pickup time based on actual landing time—no action needed from you.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Flight cancellations:</strong> If your flight is cancelled, contact us as soon as possible. We'll reschedule your pickup to your new flight at no charge or provide a full refund if you no longer need service.
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Service Details</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What areas do you service?</h3>
              <p className="text-gray-700 mb-3">
                We provide service throughout the New York metropolitan area and beyond:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-3">
                <li>All five boroughs of New York City</li>
                <li>Westchester County</li>
                <li>Long Island</li>
                <li>New Jersey</li>
                <li>Connecticut (Fairfield and New Haven counties)</li>
              </ul>
              <p className="text-gray-700">
                We also provide long-distance service to Boston, Philadelphia, Washington DC, and the Hamptons. Contact us for availability to other destinations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Are your chauffeurs licensed and insured?</h3>
              <p className="text-gray-700">
                Yes. All chauffeurs are TLC (Taxi and Limousine Commission) licensed, commercially insured, and background-checked. They undergo defensive driving training, customer service certification, and must maintain clean driving records. Our chauffeurs are professionals who know the area, dress in business attire, and provide courteous, discreet service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can I request a specific chauffeur?</h3>
              <p className="text-gray-700">
                Absolutely. If you've had a great experience with one of our chauffeurs, you can request them for future bookings. While we can't always guarantee availability, we'll do our best to accommodate your request. Many of our corporate and regular clients develop preferred relationships with specific chauffeurs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you provide car seats for children?</h3>
              <p className="text-gray-700">
                Yes, we provide complimentary car seats and boosters upon request. When booking, please specify the age and weight of children who need seats so we can provide the appropriate type (infant seat, convertible seat, or booster). New York law requires children under 8 to be in appropriate car seats, and we ensure full compliance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Is smoking allowed in vehicles?</h3>
              <p className="text-gray-700">
                No, all our vehicles are smoke-free environments to ensure comfort for all passengers and maintain the pristine condition of our fleet. This includes traditional cigarettes, cigars, and electronic cigarettes/vaping devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can I make stops along the way?</h3>
              <p className="text-gray-700">
                Yes! For point-to-point service, brief stops (5-10 minutes) can often be accommodated at no additional charge—just let us know when booking. For multiple stops or longer wait times, we recommend booking hourly/as-directed service which gives you flexibility for as many stops as you need during your reserved time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">What happens if there's traffic or road closures?</h3>
              <p className="text-gray-700">
                Our experienced chauffeurs monitor traffic conditions in real-time and use GPS navigation to find the fastest routes. We build buffer time into airport pickups and recommend booking with extra time for important events. If unexpected delays occur, your chauffeur will communicate with you and adjust the route. For flat-rate services, the quoted price remains the same regardless of traffic—no surge pricing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you offer meet and greet service?</h3>
              <p className="text-gray-700">
                Yes, meet and greet is standard for all airport pickups at no extra charge. Your chauffeur will be inside the terminal (baggage claim for domestic, arrivals hall for international) holding a sign with your name. We'll send you their contact information and photo before your arrival so you know exactly who to look for.
              </p>
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-black text-black">Special Services</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you provide wedding transportation?</h3>
              <p className="text-gray-700">
                Yes! Wedding transportation is one of our specialties. We provide:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Bride and groom transport in First Class sedans or SUVs</li>
                <li>Wedding party shuttles in Sprinter vans</li>
                <li>Guest transportation between venues</li>
                <li>Red carpet service upon request</li>
                <li>Decorated vehicles (Just Married signs, ribbons)</li>
                <li>Champagne service (where legally permitted)</li>
              </ul>
              <p className="text-gray-700">
                Visit our <Link href="/services/wedding" className="font-bold text-black hover:underline">wedding services page</Link> or call for custom wedding packages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Can you handle corporate events and roadshows?</h3>
              <p className="text-gray-700">
                Absolutely. We regularly support corporate events, conferences, and multi-city roadshows. Our corporate services include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Executive transport for C-suite and VIP clients</li>
                <li>Multi-vehicle coordination for large groups</li>
                <li>Airport meet and greet with name signs</li>
                <li>Dedicated account manager for your event</li>
                <li>Real-time vehicle tracking and updates</li>
                <li>Detailed billing and expense reporting</li>
              </ul>
              <p className="text-gray-700">
                Contact us at (404) 513-8803 to discuss your event needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-black">Do you provide wine tours or day trips?</h3>
              <p className="text-gray-700">
                Yes! Hourly/as-directed service is perfect for wine tours, sightseeing, and day trips. Popular destinations include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mt-2 mb-2">
                <li>Long Island Wine Country (North Fork vineyards)</li>
                <li>Hudson Valley wineries and attractions</li>
                <li>The Hamptons</li>
                <li>Newport, Rhode Island</li>
                <li>Upstate New York destinations</li>
              </ul>
              <p className="text-gray-700">
                Your chauffeur stays with the vehicle all day, acting as your designated driver so you can enjoy your experience worry-free. 6-hour minimum for most day trips.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Our team is here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14045138803"
              className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call
            </a>
            <a
              href="https://book.mylimobiz.com/v4/nobleblackcar"
              className="border-2 border-black text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Book a Ride
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I book a ride with Noble Black Car Service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book online at nobleblackcarservice.com, call (404) 513-8803, or email info@nobleblackcarservice.com. We recommend booking 24 hours in advance for guaranteed availability."
                }
              },
              {
                "@type": "Question",
                "name": "Do you track flights for airport pickups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we monitor all flights in real-time. If your flight is delayed or arrives early, your chauffeur's pickup time automatically adjusts."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Noble Black Car Service cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flat-rate pricing for common routes. Manhattan to JFK is $95-$130, to LaGuardia $85-$120, to Newark $95-$130 depending on vehicle type. All rates include tolls, taxes, and fees."
                }
              },
              {
                "@type": "Question",
                "name": "What is your cancellation policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cancel up to 2 hours before pickup for point-to-point service or 24 hours for hourly service to receive a full refund. Shorter notice may incur a 50% cancellation fee."
                }
              },
              {
                "@type": "Question",
                "name": "What types of vehicles do you have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our fleet includes Business Sedans (Lincoln MKZ, Chrysler 300), First Class Sedans (Mercedes S-Class, BMW 7 Series), Business and First Class SUVs (Suburban, Navigator, Escalade ESV), and Mercedes Sprinter vans for up to 14 passengers."
                }
              },
              {
                "@type": "Question",
                "name": "Which airports do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all New York area airports: JFK, LaGuardia, Newark, Teterboro, Westchester County Airport, and Long Island MacArthur Airport."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer corporate accounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer corporate accounts with monthly invoicing, NET 30 terms, dedicated account managers, volume discounts, and detailed expense reporting."
                }
              },
              {
                "@type": "Question",
                "name": "Are your chauffeurs licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all chauffeurs are TLC licensed, commercially insured, background-checked, and trained in defensive driving and customer service."
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}

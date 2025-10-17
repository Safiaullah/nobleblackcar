"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const libraries: ("places" | "geometry")[] = ["places", "geometry"];

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '1rem'
};

const center = {
  lat: 40.7580,
  lng: -73.9855 // Times Square, Manhattan
};

interface VehicleType {
  id: string;
  name: string;
  baseRate: number;
  perMile: number;
  capacity: number;
  description: string;
}

const vehicleTypes: VehicleType[] = [
  {
    id: 'sedan',
    name: 'Luxury Sedan',
    baseRate: 75,
    perMile: 3.50,
    capacity: 3,
    description: 'Mercedes S-Class or similar'
  },
  {
    id: 'suv',
    name: 'Luxury SUV',
    baseRate: 95,
    perMile: 4.50,
    capacity: 6,
    description: 'Cadillac Escalade or similar'
  },
  {
    id: 'sprinter',
    name: 'Sprinter Van',
    baseRate: 125,
    perMile: 5.50,
    capacity: 12,
    description: 'Mercedes Sprinter'
  },
];

export default function BookingForm() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType>(vehicleTypes[0]);
  const [specialRequests, setSpecialRequests] = useState('');

  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<number>(0);
  const [duration, setDuration] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [showQuote, setShowQuote] = useState(false);

  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onPickupLoad = (autocomplete: google.maps.places.Autocomplete) => {
    pickupAutocompleteRef.current = autocomplete;
  };

  const onDestinationLoad = (autocomplete: google.maps.places.Autocomplete) => {
    destinationAutocompleteRef.current = autocomplete;
  };

  const onPickupPlaceChanged = () => {
    if (pickupAutocompleteRef.current) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setPickup(place.formatted_address);
      }
    }
  };

  const onDestinationPlaceChanged = () => {
    if (destinationAutocompleteRef.current) {
      const place = destinationAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setDestination(place.formatted_address);
      }
    }
  };

  const calculateRoute = async () => {
    if (!pickup || !destination) {
      alert('Please enter both pickup and destination addresses');
      return;
    }

    const directionsService = new google.maps.DirectionsService();

    try {
      const results = await directionsService.route({
        origin: pickup,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      setDirections(results);

      if (results.routes[0]?.legs[0]) {
        const leg = results.routes[0].legs[0];
        const distanceInMiles = (leg.distance?.value || 0) * 0.000621371; // Convert meters to miles
        setDistance(distanceInMiles);
        setDuration(leg.duration?.text || '');

        // Calculate price
        const calculatedPrice = vehicleType.baseRate + (distanceInMiles * vehicleType.perMile);
        setPrice(Math.round(calculatedPrice));
        setShowQuote(true);
      }
    } catch (error) {
      console.error('Error calculating route:', error);
      alert('Could not calculate route. Please check your addresses.');
    }
  };

  // Recalculate price when vehicle type changes
  useEffect(() => {
    if (distance > 0) {
      const calculatedPrice = vehicleType.baseRate + (distance * vehicleType.perMile);
      setPrice(Math.round(calculatedPrice));
    }
  }, [vehicleType, distance]);

  const handleGetQuote = () => {
    calculateRoute();
  };

  const handleBookNow = () => {
    if (!date || !time) {
      alert('Please select date and time for your ride');
      return;
    }

    // Here you would typically send the booking to your backend
    alert(`Booking confirmed!\n\nPickup: ${pickup}\nDestination: ${destination}\nDate: ${date}\nTime: ${time}\nVehicle: ${vehicleType.name}\nPassengers: ${passengers}\nEstimated Price: $${price}\n\nThank you for choosing Noble Black Car Service!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Book Your Luxury Ride</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
              libraries={libraries}
            >
              <Autocomplete
                onLoad={onPickupLoad}
                onPlaceChanged={onPickupPlaceChanged}
                options={{
                  componentRestrictions: { country: 'us' },
                  types: ['address']
                }}
              >
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
                />
              </Autocomplete>
            </LoadScript>
            <p className="mt-1 text-xs text-gray-500">
              Try: &quot;Times Square&quot;, &quot;Central Park&quot;, &quot;JFK Airport&quot;, &quot;Brooklyn Bridge&quot;
            </p>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
              libraries={libraries}
            >
              <Autocomplete
                onLoad={onDestinationLoad}
                onPlaceChanged={onDestinationPlaceChanged}
                options={{
                  componentRestrictions: { country: 'us' },
                  types: ['address']
                }}
              >
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
                />
              </Autocomplete>
            </LoadScript>
            <p className="mt-1 text-xs text-gray-500">
              Try: &quot;Times Square&quot;, &quot;Central Park&quot;, &quot;JFK Airport&quot;, &quot;Brooklyn Bridge&quot;
            </p>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Type
            </label>
            <select
              value={vehicleType.id}
              onChange={(e) => {
                const selected = vehicleTypes.find(v => v.id === e.target.value);
                if (selected) setVehicleType(selected);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
            >
              {vehicleTypes.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.name} - Up to {vehicle.capacity} passengers ({vehicle.description})
                </option>
              ))}
            </select>
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Passengers
            </label>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(Math.max(1, Math.min(vehicleType.capacity, parseInt(e.target.value) || 1)))}
              min="1"
              max={vehicleType.capacity}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-500">
              Maximum {vehicleType.capacity} passengers for {vehicleType.name}
            </p>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Child seat, extra luggage space, etc."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900"
            />
          </div>

          {/* Get Quote Button */}
          <button
            onClick={handleGetQuote}
            className="w-full bg-yellow-400 text-black px-6 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Quote
          </button>

          {/* Quote Display */}
          {showQuote && (
            <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Your Quote</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Distance:</span>
                  <span className="font-semibold">{distance.toFixed(1)} miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Time:</span>
                  <span className="font-semibold">{duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle:</span>
                  <span className="font-semibold">{vehicleType.name}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Estimated Price:</span>
                    <span className="font-bold text-yellow-600">${price}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Now
              </button>
              <p className="text-xs text-gray-500 text-center">
                Final price may vary based on actual route and traffic conditions
              </p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Interactive Map</h3>
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
              libraries={libraries}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
                onLoad={onMapLoad}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: true,
                }}
              >
                {directions && (
                  <DirectionsRenderer
                    directions={directions}
                    options={{
                      polylineOptions: {
                        strokeColor: '#EAB308',
                        strokeWeight: 5,
                      },
                    }}
                  />
                )}
              </GoogleMap>
            </LoadScript>
            <p className="mt-3 text-xs text-gray-500">
              {directions
                ? 'Route preview shown above'
                : 'Enter pickup and destination, then click "Get Quote" to see the route'}
            </p>
          </div>

          {/* Vehicle Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Selected Vehicle</h3>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">{vehicleType.name}</div>
              <div className="text-sm text-gray-600">{vehicleType.description}</div>
              <div className="flex items-center gap-4 text-sm text-gray-700 mt-3">
                <div>
                  <span className="font-semibold">Capacity:</span> {vehicleType.capacity} passengers
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Base rate: ${vehicleType.baseRate} + ${vehicleType.perMile}/mile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

# Noble Black | Luxury Transportation

A modern, elegant website for Noble Black luxury transportation services in Manhattan, NY. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional black and white theme
- **Google Maps Integration**: Real-time distance calculation and pricing
- **Responsive Layout**: Optimized for all devices
- **Booking System**: Easy-to-use booking form with location autocomplete
- **Dynamic Pricing**: Automatic fare calculation based on distance and time

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Google Maps JavaScript API
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ 
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd noble-black-car-service
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
   - Distance Matrix API
4. Create credentials (API Key)
5. Configure restrictions:
   - Application restrictions: HTTP referrers
   - Add your domain (e.g., `localhost:3000/*`)
   - API restrictions: Enable the required APIs

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── BookingForm.tsx     # Main booking form
│   ├── LocationInput.tsx   # Google Places autocomplete
│   ├── DistanceCalculator.tsx # Distance and pricing
│   └── SharedMap.tsx       # Interactive map display
└── types/
    └── index.ts            # TypeScript definitions
```

## Features

### Booking System
- **Location Autocomplete**: Google Places integration for easy address selection
- **Distance Calculation**: Real-time distance and duration calculation
- **Dynamic Pricing**: Automatic fare calculation based on:
  - Base fare: $15
  - Per mile: $3.50
  - Per minute: $0.50

### Design
- **Monochrome Theme**: Professional black and white design
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Noble Black transportation services.

## Support

For support or questions, please contact the development team.
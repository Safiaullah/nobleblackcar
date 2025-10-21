import Script from 'next/script';

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "name": "Noble Black Car Service",
    "image": "https://nobleblackcarservice.com/images/mercedes-s-class.png",
    "@id": "https://nobleblackcarservice.com",
    "url": "https://nobleblackcarservice.com",
    "telephone": "+1-404-513-8803",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manhattan",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7580,
      "longitude": -73.9855
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/nobleblackcar",
      "https://www.instagram.com/nobleblackcar"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "New York City"
      },
      {
        "@type": "City",
        "name": "Manhattan"
      },
      {
        "@type": "City",
        "name": "Brooklyn"
      },
      {
        "@type": "City",
        "name": "Queens"
      },
      {
        "@type": "City",
        "name": "Bronx"
      },
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "State",
        "name": "Connecticut"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Car Service",
            "description": "Professional airport transfers to JFK, LaGuardia, Newark and all NYC airports"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Shuttle Service",
            "description": "Professional transportation for business executives and corporate events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Car Service",
            "description": "Luxury vehicles and experienced drivers for executive transportation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Transportation",
            "description": "Luxurious transportation for weddings and special occasions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card, Corporate Account",
    "currenciesAccepted": "USD",
    "foundingDate": "2015",
    "slogan": "It's Not Just The Ride, It's The Experience!"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Noble Black Car Service",
    "url": "https://nobleblackcarservice.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nobleblackcarservice.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Noble Black Car Service",
    "alternateName": "Noble Black Car",
    "url": "https://nobleblackcarservice.com",
    "logo": "https://nobleblackcarservice.com/images/mercedes-s-class.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-404-513-8803",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["en"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nobleblackcarservice.com"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
}

// Google Analytics tracking functions
export const GA_TRACKING_ID = 'G-7TVTDLV2FF'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Conversion Events
export const trackBookingClick = (source: string) => {
  window.gtag('event', 'booking_initiated', {
    event_category: 'Conversion',
    event_label: source,
    value: 1,
  })
}

export const trackPhoneClick = (source: string) => {
  window.gtag('event', 'phone_call_initiated', {
    event_category: 'Conversion',
    event_label: source,
    value: 1,
  })
}

export const trackFormSubmission = (formName: string) => {
  window.gtag('event', 'form_submission', {
    event_category: 'Lead Generation',
    event_label: formName,
    value: 1,
  })
}

// Button Click Events
export const trackButtonClick = (buttonName: string, location: string) => {
  window.gtag('event', 'button_click', {
    event_category: 'Engagement',
    event_label: `${buttonName} - ${location}`,
  })
}

export const trackServiceView = (serviceName: string) => {
  window.gtag('event', 'service_view', {
    event_category: 'Engagement',
    event_label: serviceName,
  })
}

export const trackFleetView = (vehicleType: string) => {
  window.gtag('event', 'fleet_view', {
    event_category: 'Engagement',
    event_label: vehicleType,
  })
}

// Navigation Events
export const trackNavigation = (destination: string) => {
  window.gtag('event', 'navigation', {
    event_category: 'Navigation',
    event_label: destination,
  })
}

// External Link Tracking
export const trackExternalLink = (url: string, linkName: string) => {
  window.gtag('event', 'external_link_click', {
    event_category: 'Outbound',
    event_label: linkName,
    value: url,
  })
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

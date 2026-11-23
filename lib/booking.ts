// Booking link for the free 15-minute intro call.
//
// >>> SET THIS: paste the public link of the Google Calendar appointment
// >>> schedule (it looks like https://calendar.app.google/...). Until it is
// >>> set, the booking button and hero link are hidden on the live site, and
// >>> `next dev` shows them with a "link not set" marker so the layout can be checked.
export const BOOKING_URL = ""

export const BOOKING_LABEL = "Book a 15-min intro"

export const hasBookingUrl = BOOKING_URL.startsWith("https://")

// Show the booking UI when the link is set, or in development for layout checks.
export const showBooking = hasBookingUrl || process.env.NODE_ENV === "development"

// Placeholder target in development; never shipped, because showBooking is false in production without a link.
export const bookingHref = hasBookingUrl ? BOOKING_URL : "#booking-link-not-set"

import { siteDetails } from '../data/site';

export const reservationEmailHref =
  'mailto:info@shtepiaime.eu?subject=Reservation%20Inquiry%20-%20Shtëpia%20Ime&body=Hello,%0A%0AI%20would%20like%20to%20make%20a%20reservation.%0A%0ACheck-in%20Date:%0ACheck-out%20Date:%0ANumber%20of%20Guests:%0ARoom%20Preference:%0A%0AThank%20you!';

const whatsappBookingBaseUrl = 'https://wa.me/355695602419';

export function buildRoomEmailHref(roomTitle) {
  const subject = encodeURIComponent(`Booking Request - ${roomTitle}`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to book ${roomTitle}.\n\nCheck-in Date:\nCheck-out Date:\nNumber of Guests:\n\nThank you!`
  );

  return `mailto:${siteDetails.email}?subject=${subject}&body=${body}`;
}

export function buildRoomWhatsAppHref(roomTitle) {
  const text = encodeURIComponent(`Hello! I would like to book ${roomTitle} at Shtëpia Ime.`);

  return `${whatsappBookingBaseUrl}?text=${text}`;
}

export const reservationWhatsAppHref =
  'https://wa.me/355695602419?text=Hello!%20I%20would%20like%20to%20make%20a%20reservation.';

export function buildContactFormHref({
  name,
  email,
  phone,
  room,
  checkin,
  checkout,
  message,
}) {
  const body = encodeURIComponent(
    `Hello,\n\nI would like to make a reservation.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSelect Room: ${room}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nMessage: ${message}\n\nThank you!`
  );

  return `mailto:${siteDetails.email}?subject=Reservation%20Inquiry%20-%20Shtëpia%20Ime&body=${body}`;
}

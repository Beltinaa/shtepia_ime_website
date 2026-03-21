export const siteDetails = {
  name: 'Shtëpia Ime',
  address: 'Baba Alushi Street, Sedie District, 500 m from center, 6400 Përmet, Albania',
  phone: '+355 69 560 2419',
  email: 'info@shtepiaime.eu',
  whatsapp: '+355 69 560 2419',
  instagramUrl: 'https://www.instagram.com/_shtepia_ime/',
  mapEmbedUrl:
    'https://www.google.com/maps?q=40.230007351870405,20.355729893897628&z=15&output=embed',
};

export const reservationEmailHref =
  'mailto:info@shtepiaime.eu?subject=Reservation%20Inquiry%20-%20Shtëpia%20Ime&body=Hello,%0A%0AI%20would%20like%20to%20make%20a%20reservation.%0A%0ACheck-in%20Date:%0ACheck-out%20Date:%0ANumber%20of%20Guests:%0ARoom%20Preference:%0A%0AThank%20you!';

const whatsappBaseUrl = 'https://wa.me/355695602419';

export function buildRoomEmailHref(roomTitle) {
  const subject = encodeURIComponent(`Booking Request - ${roomTitle}`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to book the ${roomTitle}.\n\nThank you!`
  );

  return `mailto:${siteDetails.email}?subject=${subject}&body=${body}`;
}

export function buildRoomWhatsAppHref(roomTitle) {
  const text = encodeURIComponent(`Hello! I would like to book the ${roomTitle}`);

  return `${whatsappBaseUrl}?text=${text}`;
}

export function buildContactFormHref({ name, email, checkIn, checkOut, message }) {
  const body = encodeURIComponent(
    `Hello,\n\nI would like to make a reservation.\n\nName: ${name}\nEmail: ${email}\nCheck-in Date: ${checkIn}\nCheck-out Date: ${checkOut}\nMessage: ${message}\n\nThank you!`
  );

  return `mailto:${siteDetails.email}?subject=Reservation%20Inquiry%20-%20Shtëpia%20Ime&body=${body}`;
}

export const siteMedia = {
  logo: {
    src: '/image/logo.webp',
    alt: 'Shtëpia Ime Logo',
  },
  hero: {
    src: '/images/experiences/langarica-canyon.webp',
    alt: 'Langarica Canyon and the Ottoman bridge near Përmet',
  },
  aboutPreview: {
    src: '/images/property/garden-lounge.webp',
    alt: 'Garden lounge area at Shtëpia Ime beneath the pergola',
  },
  aboutHero: {
    src: '/images/property/guesthouse-night.webp',
    alt: 'Shtëpia Ime pergola and courtyard seating at night',
  },
  aboutStory: {
    src: '/images/rooms/room-rustic-door.webp',
    alt: 'Guest room at Shtëpia Ime with timber beams and balcony doors',
  },
};

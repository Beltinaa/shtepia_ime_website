import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteDetails, siteMedia } from '../../data/site';
import { reservationEmailHref } from '../../lib/bookingLinks';
import Container from '../ui/Container';

function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img src={siteMedia.logo.src} alt={siteMedia.logo.alt} className="h-10 w-auto" />
              <p className="font-display text-3xl">Shtëpia Ime</p>
            </div>
            <p className="mt-5 text-white/74">
              Located in a serene and beautiful area of the city, our guest house offers comfort
              and relaxation for anyone looking to explore the &apos;City of Flowers&apos; and its
              breathtaking natural landscapes.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Contact</p>
            <div className="mt-5 space-y-4 text-white/78">
              <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0 text-secondary" />
                <span>{siteDetails.address}</span>
              </p>
              <div className="flex items-center gap-2">
                <Phone size={18} className="shrink-0 text-secondary" />
                <a href={`tel:${siteDetails.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {siteDetails.phone}
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Mail size={18} className="shrink-0 text-secondary" />
                <a href={`mailto:${siteDetails.email}`} className="hover:text-white">
                  {siteDetails.email}
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/355695602419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle size={18} className="shrink-0 text-secondary" />
                  {siteDetails.whatsapp}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-white/78">
              <Link to="/rooms" className="hover:text-white">
                Rooms
              </Link>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link to="/explore-permet" className="hover:text-white">
                Explore Përmet
              </Link>
              <a href={reservationEmailHref} className="hover:text-white">
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
          <p>© 2026 Shtëpia Ime.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

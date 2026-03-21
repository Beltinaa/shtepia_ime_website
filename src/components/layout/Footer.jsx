import { Link } from 'react-router-dom';
import { siteDetails } from '../../data/site';
import Container from '../ui/Container';

function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <p className="font-display text-3xl">Shtëpia Ime</p>
            <p className="mt-5 text-white/74">
              A quietly refined guesthouse in Përmet, shaped by mountain air, local hospitality,
              and experiences that keep you close to the landscape.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Visit</p>
            <ul className="mt-5 space-y-3 text-white/78">
              <li>{siteDetails.addressLine1}</li>
              <li>{siteDetails.addressLine2}</li>
              <li>{siteDetails.phone}</li>
              <li>{siteDetails.email}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-white/78">
              <Link to="/rooms" className="hover:text-white">
                Rooms
              </Link>
              <Link to="/experiences" className="hover:text-white">
                Experiences
              </Link>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
              <a
                href={siteDetails.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
          <p>© 2026 Shtëpia Ime. Boutique stays and local adventures in Përmet.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { reservationEmailHref } from '../../lib/bookingLinks';
import Container from '../ui/Container';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Explore Përmet', to: '/explore-permet' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !hasScrolled && !menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const shellClasses = isTransparent
    ? 'border-transparent bg-transparent text-white'
    : 'border-primary/10 bg-white/95 text-foreground shadow-sm backdrop-blur';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClasses}`}>
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/image/logo.webp" alt="Shtëpia Ime Logo" className="h-10 w-auto" />
          <span className="font-display text-xl font-semibold">Shtëpia Ime</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 after:ease-out ${
                  isTransparent
                    ? 'text-white/85 hover:text-white after:bg-white'
                    : 'text-foreground/75 hover:text-primary after:bg-primary'
                } ${isActive ? (isTransparent ? 'text-white after:w-full' : 'text-primary after:w-full') : 'after:w-0 hover:after:w-full'}`.trim()
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={reservationEmailHref}
            className="btn-lift rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex rounded-full border p-3 transition duration-300 lg:hidden ${
            isTransparent ? 'border-white/30 text-white' : 'border-primary/15 text-primary'
          }`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <div
        className={`lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 top-20 bg-foreground/30 transition duration-300`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`panel-card fixed right-4 top-24 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[30px] bg-white p-6 transition duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 ${
                  isActive ? 'bg-muted text-primary' : 'text-foreground/70 hover:bg-muted'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={reservationEmailHref}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

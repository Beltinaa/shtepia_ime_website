import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { reservationEmailHref } from '../../lib/bookingLinks';
import { siteMedia } from '../../data/site';
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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const shellClasses = isTransparent
    ? 'border-transparent bg-transparent text-white'
    : 'border-primary/10 bg-white/95 text-foreground shadow-sm backdrop-blur';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClasses}`}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={siteMedia.logo.src} alt={siteMedia.logo.alt} className="h-9 w-auto sm:h-10" />
          <span className="truncate font-display text-lg font-semibold sm:text-xl">
            Shtëpia Ime
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
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
            className="btn-primary btn-lift inline-flex items-center justify-center px-5 py-3 text-sm"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex min-h-[3rem] min-w-[3rem] items-center justify-center rounded-xl border p-3 transition duration-300 lg:hidden ${
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
        className={`card-surface fixed inset-x-4 top-[5.5rem] z-50 max-h-[calc(100vh-6.5rem)] overflow-y-auto p-4 shadow-xl transition duration-300 sm:top-24 sm:p-6 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 ${
                  isActive ? 'bg-muted text-primary' : 'text-foreground/70 hover:bg-muted'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={reservationEmailHref}
            className="btn-primary mt-4 inline-flex w-full items-center justify-center text-sm"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

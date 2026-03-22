import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { reservationEmailHref, reservationWhatsAppHref } from '../../lib/bookingLinks';
import { fadeInUp } from '../../hooks/useScrollAnimation';
import Container from '../ui/Container';

function CTABanner() {
  return (
    <motion.section
      className="pb-24 lg:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <Container>
        <div className="rounded-[36px] bg-secondary px-6 py-12 text-foreground sm:px-10 lg:px-16 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Plan Your Escape
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Unparalleled Amenities
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground/74">Book your reservation</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={reservationEmailHref} size="lg">
                Book Now
              </Button>
              <a
                href={reservationWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex items-center justify-center rounded-md bg-green-600 px-8 py-4 text-base font-semibold tracking-[0.08em] text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-700"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default CTABanner;

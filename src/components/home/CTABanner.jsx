import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { reservationEmailHref, reservationWhatsAppHref } from '../../lib/bookingLinks';
import { fadeInUp } from '../../lib/animations';
import Container from '../ui/Container';

function CTABanner() {
  return (
    <motion.section
      className="pb-20 sm:pb-24 lg:pb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <Container>
        <div className="rounded-[1.75rem] bg-secondary px-5 py-10 text-foreground shadow-lg sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Plan Your Escape
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Unparalleled Amenities
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Book your reservation
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button as="a" href={reservationEmailHref} size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
              <a
                href={reservationWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-base font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-green-700 sm:w-auto sm:px-8 sm:py-4"
              >
                Book by Whatsapp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default CTABanner;

import { motion } from 'framer-motion';
import { siteMedia } from '../../data/site';
import Button from '../ui/Button';
import Container from '../ui/Container';

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 text-white sm:items-center">
      <img
        src={siteMedia.hero.src}
        alt={siteMedia.hero.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/45" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl lg:text-[5.5rem]">
            Experience Comfort &amp; Authenticity in the Heart of Përmet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Welcome to Shtëpia Ime, nestled in the heart of Përmet—a peaceful destination where
            hospitality and nature blend in perfect harmony.
          </p>
          <div className="mt-10">
            <Button as="link" to="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

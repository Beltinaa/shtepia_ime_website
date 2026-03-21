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
      <div className="absolute inset-0 bg-foreground/60" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl rounded-[32px] bg-foreground/22 p-6 text-shadow-soft backdrop-blur-[3px] sm:p-8 lg:p-10"
        >
          <span className="inline-flex rounded-full border border-white/30 bg-white/14 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/95 backdrop-blur">
            Guesthouse in Përmet
          </span>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl lg:text-[5.5rem]">
            Experience Comfort &amp; Authenticity in Përmet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/92 sm:text-xl">
            A peaceful retreat surrounded by nature, crafted for guests who want quiet mornings,
            thoughtful rooms, and memorable days on the river, in the mountains, and at Benja.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button as="link" to="/contact" size="lg">
              Book Your Stay
            </Button>
            <Button as="link" to="/experiences" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Explore Experiences
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

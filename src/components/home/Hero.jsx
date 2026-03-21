import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 text-white sm:items-center">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
        alt="Mountain landscape surrounding Përmet, Albania"
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
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white/85 backdrop-blur">
            Boutique Guesthouse in Përmet
          </span>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl lg:text-[5.5rem]">
            Experience Comfort &amp; Authenticity in Përmet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
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

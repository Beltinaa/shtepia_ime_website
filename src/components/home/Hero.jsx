import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteMedia } from '../../data/site';
import Button from '../ui/Button';
import Container from '../ui/Container';

function Hero() {
  const [isMobileVideo, setIsMobileVideo] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(max-width: 767px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = (event) => {
      setIsMobileVideo(event.matches);
    };

    setIsMobileVideo(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const heroVideoSrc = isMobileVideo ? siteMedia.hero.mobileVideoSrc : siteMedia.hero.desktopVideoSrc;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 text-white sm:items-center">
      <div className="hero-background-layer" aria-hidden="true">
        <img
          src={siteMedia.hero.posterSrc}
          alt=""
          className="hero-background-media"
        />
        <video
          key={heroVideoSrc}
          className="hero-background-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteMedia.hero.posterSrc}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
      </div>
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

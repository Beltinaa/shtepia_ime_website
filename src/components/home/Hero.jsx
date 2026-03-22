import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteMedia } from '../../data/site';
import Button from '../ui/Button';
import Container from '../ui/Container';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;
const LOOP_FADE_BUFFER_SECONDS = 0.6;

function getDeviceType(width) {
  if (width < MOBILE_BREAKPOINT) {
    return 'mobile';
  }

  if (width < TABLET_BREAKPOINT) {
    return 'tablet';
  }

  return 'desktop';
}

function Hero() {
  const videoRef = useRef(null);
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window === 'undefined') {
      return 'desktop';
    }

    return getDeviceType(window.innerWidth);
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [saveDataMode, setSaveDataMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (event) => {
      setShouldReduceMotion(event.matches);
    };

    setDeviceType(getDeviceType(window.innerWidth));
    setShouldReduceMotion(motionQuery.matches);
    handleResize();
    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) {
      return;
    }

    const connection = navigator.connection;
    const updateConnectionState = () => {
      setSaveDataMode(
        Boolean(connection.saveData)
          || connection.effectiveType === '2g'
          || connection.effectiveType === 'slow-2g',
      );
    };

    updateConnectionState();
    connection.addEventListener?.('change', updateConnectionState);

    return () => {
      connection.removeEventListener?.('change', updateConnectionState);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    setIsFading(false);
  }, [deviceType]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldReduceMotion || saveDataMode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          return;
        }

        video.pause();
      },
      { threshold: 0.2 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [deviceType, saveDataMode, shouldReduceMotion]);

  const activeSource = siteMedia.hero.sources[deviceType] ?? siteMedia.hero.sources.desktop;
  const showVideo = !shouldReduceMotion && !saveDataMode;

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || isFading || !video.duration) {
      return;
    }

    if (video.duration - video.currentTime <= LOOP_FADE_BUFFER_SECONDS) {
      setIsFading(true);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    video.play().catch(() => {});

    window.setTimeout(() => {
      setIsFading(false);
    }, 180);
  };

  const scrollToContent = () => {
    document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 text-white sm:items-center">
      <div className="hero-background-layer" aria-hidden="true">
        <img
          src={activeSource.poster}
          alt=""
          className={`hero-background-media transition-opacity duration-700 ${
            isLoaded && showVideo ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {showVideo ? (
          <video
            key={activeSource.mp4}
            ref={videoRef}
            className={`hero-background-media hero-video transition-opacity duration-500 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
            autoPlay
            muted
            playsInline
            loop={false}
            preload={deviceType === 'desktop' ? 'auto' : 'metadata'}
            poster={activeSource.poster}
            onLoadedData={handleLoadedData}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          >
            <source src={activeSource.webm} type="video/webm" />
            <source src={activeSource.mp4} type="video/mp4" />
          </video>
        ) : null}
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

      <motion.button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
        aria-label="Scroll to content"
      >
        <motion.span
          className="inline-flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-10 w-10" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {showVideo && !isLoaded ? (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-primary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />
              <span className="text-sm text-white/70">Loading experience...</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Hero;

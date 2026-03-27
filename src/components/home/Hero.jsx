import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteMedia } from '../../data/site';
import { reservationEmailHref } from '../../lib/bookingLinks';
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
    <section className="relative min-h-screen overflow-hidden text-white">
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
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/35 to-foreground/65" />
      <div className="absolute inset-0 bg-foreground/10" />

      <Container className="relative z-10 flex min-h-screen items-center justify-center pb-24 pt-32 sm:py-32">
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-display leading-[0.98] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="hero-text-shadow block text-3xl font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Experience
            </span>
            <span className="hero-title-green mt-2 block text-4xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
              Comfort &amp; Authenticity
            </span>
            <span className="hero-text-shadow mt-5 block text-xl font-light tracking-[0.06em] text-white/92 sm:text-3xl md:text-4xl">
              in the Heart of Përmet
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/95 sm:mt-8 sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="hero-text-shadow inline-block rounded-2xl border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-md sm:px-5">
              Where Albanian hospitality meets the tranquility of nature
            </span>
          </motion.p>

          <motion.div
            className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Button as="a" href={reservationEmailHref} size="lg" className="w-full sm:w-auto">
              Book Your Stay
            </Button>
            <a
              href="/rooms"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/35 bg-white/12 px-6 py-3.5 text-sm font-semibold leading-snug text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Rooms
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white sm:bottom-8"
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
          <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10" />
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

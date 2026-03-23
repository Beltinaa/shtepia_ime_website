const premiumEase = [0.25, 0.46, 0.45, 0.94];

export const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: premiumEase },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: premiumEase },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: premiumEase },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  dramaticReveal: {
    hidden: { opacity: 0, y: 80, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.9, ease: premiumEase },
    },
  },
};

export const hoverEffects = {
  lift: {
    y: -8,
    boxShadow: '0 20px 40px rgba(17, 24, 39, 0.12)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  scale: {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  glow: {
    boxShadow: '0 0 30px rgba(45, 74, 62, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const fadeInUp = animations.fadeUp;
export const fadeInLeft = animations.slideLeft;
export const fadeInRight = animations.slideRight;
export const scaleIn = animations.scaleIn;
export const staggerContainer = animations.stagger;

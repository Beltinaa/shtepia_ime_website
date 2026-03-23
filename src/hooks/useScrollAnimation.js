import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from '../lib/animations';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: threshold });

  return { ref, isInView };
};

export { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer };

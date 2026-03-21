import { motion } from 'framer-motion';
import AboutPreview from '../components/home/AboutPreview';
import Amenities from '../components/home/Amenities';
import CTABanner from '../components/home/CTABanner';
import Experiences from '../components/home/Experiences';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Hero from '../components/home/Hero';
import SpecialOffer from '../components/home/SpecialOffer';
import Testimonials from '../components/home/Testimonials';

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Hero />
      <AboutPreview />
      <Amenities />
      <Experiences />
      <FeaturedRooms />
      <SpecialOffer />
      <Testimonials />
      <CTABanner />
    </motion.main>
  );
}

export default Home;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageLibrary } from '../../data/site';
import { fadeInLeft, fadeInRight } from '../../hooks/useScrollAnimation';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function AboutPreview() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <SectionHeading title="make your stay truly exceptional" />
            <p className="mt-6 text-lg leading-8 text-foreground/74">
              Shtëpia Ime – a charming and cozy guest house in the heart of Përmet, where the
              warmth of Albanian hospitality meets the tranquility of nature. Our name, meaning
              &apos;My Home&apos;, reflects our dedication to creating a welcoming and comfortable
              atmosphere for every guest who walks through our doors. Whether you are visiting
              Përmet for its breathtaking landscapes, rich cultural heritage, or simply seeking a
              peaceful retreat, we are here to make your stay memorable.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
            >
              About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="panel-card overflow-hidden"
          >
            <img
              src={imageLibrary.garden}
              alt="Garden lounge area at Shtëpia Ime beneath the pergola"
              className="h-full min-h-[420px] w-full object-cover transition duration-300 ease-out hover:scale-105"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;

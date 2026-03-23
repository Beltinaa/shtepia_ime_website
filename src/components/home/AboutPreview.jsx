import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageLibrary } from '../../data/site';
import { fadeInLeft, fadeInRight } from '../../lib/animations';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function AboutPreview() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <SectionHeading title="make your stay truly exceptional" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Shtëpia Ime – a charming and cozy guest house in the heart of Përmet, where the
              warmth of Albanian hospitality meets the tranquility of nature. Our name, meaning
              &apos;My Home&apos;, reflects our dedication to creating a welcoming and comfortable
              atmosphere for every guest who walks through our doors. Whether you are visiting
              Përmet for its breathtaking landscapes, rich cultural heritage, or simply seeking a
              peaceful retreat, we are here to make your stay memorable.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:gap-3"
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
            className="overflow-hidden rounded-2xl shadow-lg lg:max-w-[35rem] lg:justify-self-end"
          >
            <img
              src={imageLibrary.balcony}
              alt="Balcony view at Shtëpia Ime"
              className="aspect-[4/3] w-full object-cover transition duration-300 ease-out hover:scale-105 lg:aspect-[4/4.4]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;

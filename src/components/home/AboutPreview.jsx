import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteDetails, siteMedia } from '../../data/site';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function AboutPreview() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Shtëpia Ime"
              description={`Located in a serene and beautiful area of the city, our guest house offers comfort and relaxation for anyone looking to explore the 'City of Flowers' and its breathtaking natural landscapes.`}
            />
            <p className="mt-6 text-lg leading-8 text-foreground/74">
              Shtëpia Ime – a charming and cozy guest house in the heart of Përmet, where the
              warmth of Albanian hospitality meets the tranquility of nature. Our name, meaning
              'My Home', reflects our dedication to creating a welcoming and comfortable atmosphere
              for every guest who walks through our doors. Whether you are visiting Përmet for its
              breathtaking landscapes, rich cultural heritage, or simply seeking a peaceful
              retreat, we are here to make your stay memorable.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
            >
              About Us <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="panel-card overflow-hidden"
          >
            <img
              src={siteMedia.aboutPreview.src}
              alt={siteMedia.aboutPreview.alt}
              className="h-full min-h-[420px] w-full object-cover transition duration-300 ease-out hover:scale-105"
            />
            <div className="grid gap-4 border-t border-primary/10 bg-white p-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-lg leading-8 text-foreground/74">{siteDetails.address}</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              >
                About Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;

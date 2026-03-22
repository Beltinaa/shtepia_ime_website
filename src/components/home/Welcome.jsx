import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteMedia } from '../../data/site';
import { fadeInLeft, fadeInRight } from '../../hooks/useScrollAnimation';
import Container from '../ui/Container';

function Welcome() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="overflow-hidden rounded-[28px]"
          >
            <img
              src={siteMedia.welcome.src}
              alt={siteMedia.welcome.alt}
              className="aspect-[4/3] w-full object-cover transition duration-300 ease-out hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
          >
            <p className="eyebrow">Welcome</p>
            <p className="max-w-2xl text-xl leading-9 text-foreground/78">
              Located in a serene and beautiful area of the city, our guest house offers comfort
              and relaxation for anyone looking to explore the &apos;City of Flowers&apos; and its
              breathtaking natural landscapes.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;

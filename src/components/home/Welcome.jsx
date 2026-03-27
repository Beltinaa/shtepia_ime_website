import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteMedia } from '../../data/site';
import { fadeInLeft, fadeInRight } from '../../lib/animations';
import Container from '../ui/Container';

function Welcome() {
  return (
    <section id="welcome" className="section-shell bg-background">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="overflow-hidden rounded-2xl shadow-lg"
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
            <h2 className="section-title mt-5 max-w-2xl">
              A peaceful guesthouse rooted in warmth and place
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Located in a serene and beautiful area of the city, our guest house offers comfort
              and relaxation for anyone looking to explore the &apos;City of Flowers&apos; and its
              breathtaking natural landscapes.
            </p>
            <Link
              to="/about"
              className="btn-primary mt-8 inline-flex w-full items-center justify-center sm:w-auto"
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

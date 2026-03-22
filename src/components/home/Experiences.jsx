import { motion } from 'framer-motion';
import { experiences } from '../../data/experiences';
import { reservationEmailHref } from '../../lib/bookingLinks';
import { fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import ExperienceCard from '../experiences/ExperienceCard';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function Experiences() {
  return (
    <motion.section
      className="section-shell bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Explore & Experience"
            description="Përmet is a paradise for nature lovers and adventure seekers. During your stay, immerse yourself in exciting outdoor activities and discover the beauty of this unspoiled region:"
          />
        </div>

        <motion.div variants={staggerContainer} className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <motion.div key={experience.id} variants={fadeInUp}>
              <ExperienceCard experience={experience} compact />
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          variants={fadeInUp}
          href={reservationEmailHref}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Book Your Adventure Today!
        </motion.a>
      </Container>
    </motion.section>
  );
}

export default Experiences;

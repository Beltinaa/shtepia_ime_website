import { motion } from 'framer-motion';
import ExperienceCard from '../components/experiences/ExperienceCard';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences } from '../data/experiences';

function Experiences() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-28"
    >
      <section className="section-shell bg-background">
        <Container>
          <SectionHeading title="Explore Përmet" />
          <div className="mt-16 space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default Experiences;

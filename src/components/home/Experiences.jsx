import { experiences } from '../../data/experiences';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ExperienceCard from '../experiences/ExperienceCard';

function Experiences() {
  return (
    <section className="section-shell bg-muted">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Signature Days"
            title="Outdoor experiences that feel local, not packaged."
            description="Stay close to the wild character of Përmet with a curated mix of rafting, hiking, and thermal bathing led by trusted local partners."
          />
          <Button as="link" to="/experiences" variant="secondary">
            View All Experiences
          </Button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experiences;

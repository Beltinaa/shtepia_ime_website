import { experiences } from '../../data/experiences';
import { reservationEmailHref } from '../../lib/bookingLinks';
import ExperienceCard from '../experiences/ExperienceCard';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function Experiences() {
  return (
    <section className="section-shell bg-muted">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Explore & Experience"
            description="Përmet is a paradise for nature lovers and adventure seekers. During your stay, immerse yourself in exciting outdoor activities and discover the beauty of this unspoiled region:"
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} compact />
          ))}
        </div>

        <a
          href={reservationEmailHref}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Book Your Adventure Today!
        </a>
      </Container>
    </section>
  );
}

export default Experiences;

import { motion } from 'framer-motion';
import AttractionCard from '../components/explore/AttractionCard';
import CulinarySection from '../components/explore/CulinarySection';
import ExperienceCard from '../components/experiences/ExperienceCard';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences } from '../data/experiences';
import { attractions, topAttractions } from '../data/attractions';

function ExplorPermet() {
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
          <SectionHeading
            title="Explore Përmet"
            description="At Shtëpia Ime, we invite you to embark on a journey to one of Albania's most breathtaking and authentic destinations—Përmet. Known as the 'City of Roses,' Përmet is a land of natural wonders, rich history, and warm hospitality. Whether you seek adventure, relaxation, or cultural immersion, Përmet offers an unforgettable experience."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-muted">
        <Container>
          <SectionHeading title="Top Attractions in Përmet" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {topAttractions.map((attraction) => (
              <article key={attraction} className="panel-card p-5 text-sm font-semibold text-foreground/78">
                {attraction}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <SectionHeading title="Explore Përmet – The Hidden Gem of Albania" />
          <p className="section-copy mt-6 whitespace-pre-line">
            Përmet is a haven of untouched nature and cultural heritage, offering a perfect blend
            of outdoor activities, historical landmarks, and local traditions. Nestled along the
            banks of the Vjosa River, one of Europe&apos;s last wild rivers, the town is surrounded
            by towering mountains, lush valleys, and healing thermal waters.

            {'\n\n'}
            Whether you&apos;re drawn to adventure sports, ancient churches, unique gastronomy, or
            simply the peaceful charm of a traditional Albanian town, Përmet has something special
            for every traveler.
          </p>
          <div className="mt-16 space-y-6">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </Container>
      </section>

      <CulinarySection />
    </motion.main>
  );
}

export default ExplorPermet;

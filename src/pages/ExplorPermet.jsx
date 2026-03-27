import { motion } from 'framer-motion';
import AttractionCard from '../components/explore/AttractionCard';
import CulinarySection from '../components/explore/CulinarySection';
import ExperienceCard from '../components/experiences/ExperienceCard';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { experiences } from '../data/experiences';
import { attractions, topAttractions } from '../data/attractions';
import { imageLibrary } from '../data/site';

function ExplorPermet() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <motion.section
        className="section-shell bg-background pt-28 sm:pt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <Container>
          <SectionHeading
            title="Explore Përmet"
            description="At Shtëpia Ime, we invite you to embark on a journey to one of Albania's most breathtaking and authentic destinations—Përmet. Known as the 'City of Roses,' Përmet is a land of natural wonders, rich history, and warm hospitality. Whether you seek adventure, relaxation, or cultural immersion, Përmet offers an unforgettable experience."
          />

          <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3">
            {experiences.map((experience) => (
              <motion.div key={experience.id} variants={fadeInUp}>
                <ExperienceCard experience={experience} compact />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.section>

      <motion.section
        className="relative overflow-hidden py-16 text-white sm:py-20 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <img
          src={imageLibrary.topAttractionsBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,196,176,0.15),transparent_28%)]" />

        <Container className="relative z-10">
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-secondary">Discover</p>
            <h2 className="section-title text-white">Top Attractions in Përmet</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              Explore the breathtaking natural wonders and historical treasures of this hidden gem
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
          >
            {topAttractions.map((attraction) => (
              <motion.article
                key={attraction}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="rounded-2xl border border-white/12 bg-white/8 p-5 text-sm font-semibold text-white/88 shadow-md backdrop-blur-sm"
              >
                {attraction}
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </motion.section>

      <motion.section
        className="section-shell bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <Container>
          <SectionHeading title="Explore Përmet – The Hidden Gem of Albania" />
          <motion.p variants={fadeInUp} className="section-copy mt-6 whitespace-pre-line">
            Përmet is a haven of untouched nature and cultural heritage, offering a perfect blend
            of outdoor activities, historical landmarks, and local traditions. Nestled along the
            banks of the Vjosa River, one of Europe&apos;s last wild rivers, the town is surrounded
            by towering mountains, lush valleys, and healing thermal waters.

            {'\n\n'}
            Whether you&apos;re drawn to adventure sports, ancient churches, unique gastronomy, or
            simply the peaceful charm of a traditional Albanian town, Përmet has something special
            for every traveler.
          </motion.p>

          <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
            {attractions.map((attraction, index) => (
              <AttractionCard key={attraction.id} attraction={attraction} index={index} />
            ))}
          </div>
        </Container>
      </motion.section>

      <CulinarySection />
    </motion.main>
  );
}

export default ExplorPermet;

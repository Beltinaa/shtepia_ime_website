import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { reservationEmailHref, siteMedia } from '../data/site';

const amenities = [
  {
    title: 'Cozy Guesthouse',
    description:
      'Enjoy a warm and inviting stay with comfortable amenities and stunning mountain views.',
  },
  {
    title: 'Full Amenities',
    description:
      'Enjoy air-conditioned rooms, a minibar, a private bathroom, and thoughtful amenities for a relaxing stay.',
  },
  {
    title: 'Morning Indulgence',
    description:
      'Wake up to a delightful buffet breakfast and complimentary coffee to start your day right.',
  },
  {
    title: 'Outdoor Spaces',
    description:
      'Spend your days relaxing in the garden, making use of barbecue facilities, or admiring the stunning views.',
  },
];

function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-20"
    >
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32 text-white">
        <img
          src={siteMedia.aboutHero.src}
          alt={siteMedia.aboutHero.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl leading-tight sm:text-6xl">About Us</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Located in a serene and beautiful area of the city, our guest house offers comfort
              and relaxation for anyone looking to explore the 'City of Flowers' and its
              breathtaking natural landscapes.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src={siteMedia.aboutStory.src}
                alt={siteMedia.aboutStory.alt}
                className="h-full min-h-[520px] w-full object-cover"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="About Us"
                title="Shtëpia Ime"
                description="Shtëpia Ime – a charming and cozy guest house in the heart of Përmet, where the warmth of Albanian hospitality meets the tranquility of nature. Our name, meaning 'My Home', reflects our dedication to creating a welcoming and comfortable atmosphere for every guest who walks through our doors. Whether you are visiting Përmet for its breathtaking landscapes, rich cultural heritage, or simply seeking a peaceful retreat, we are here to make your stay memorable."
              />
              <Button as="a" href={reservationEmailHref} className="mt-8">
                Book Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-muted">
        <Container>
          <SectionHeading title="Amenities" />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map(({ title, description }) => (
              <article key={title} className="panel-card p-6">
                <p className="font-display text-2xl text-primary">{title}</p>
                <p className="mt-3 text-foreground/74">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default About;

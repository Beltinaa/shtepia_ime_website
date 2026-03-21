import { motion } from 'framer-motion';
import { HeartHandshake, Leaf, MapPinned } from 'lucide-react';
import { siteDetails, siteMedia } from '../data/site';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

const values = [
  {
    icon: HeartHandshake,
    title: 'Warm Hospitality',
    description:
      'Service stays personal, direct, and genuinely local rather than over-scripted.',
  },
  {
    icon: Leaf,
    title: 'Grounded Design',
    description:
      'Natural textures, restrained materials, and quiet rooms create a slower atmosphere.',
  },
  {
    icon: MapPinned,
    title: 'Meaningful Access',
    description:
      'Guests get reliable guidance to the best river, mountain, and thermal experiences nearby.',
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              About Shtëpia Ime
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              A guesthouse built to reflect the calm and character of Përmet.
            </h1>
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
                eyebrow="Our Story"
                title="Designed as a retreat, run with the intimacy of a home."
                description="Shtëpia Ime began with a simple idea: create a stay in Përmet that feels warm, local, and carefully finished without losing the ease of a small guesthouse. The result is a handful of rooms, close attention to detail, and a style of hosting that helps guests connect with the valley rather than rush through it."
              />
              <p className="mt-8 text-lg leading-8 text-foreground/74">
                We welcome couples, small families, and curious travelers looking for a more
                thoughtful base between the river, the mountains, and the thermal baths.
              </p>
              <a
                href={siteDetails.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-4 rounded-[22px] border border-primary/10 bg-muted px-5 py-4"
              >
                <img
                  src={siteMedia.instagramProfile.src}
                  alt={siteMedia.instagramProfile.alt}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    On Instagram
                  </p>
                  <p className="mt-1 font-display text-2xl text-foreground">
                    {siteDetails.instagramHandle}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-muted">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="Three principles behind the experience."
            description="Every design choice, hosting detail, and recommendation follows the same core priorities."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="panel-card p-8">
                <Icon size={28} className="text-primary" />
                <h2 className="mt-6 font-display text-3xl">{title}</h2>
                <p className="mt-4 text-lg leading-8 text-foreground/72">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default About;

import { motion } from 'framer-motion';
import { imageLibrary, siteMedia } from '../data/site';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../lib/animations';

const ratings = {
  staff: 9.4,
  facilities: 9.1,
  cleanliness: 9.4,
  comfort: 9.4,
  valueForMoney: 9.5,
  location: 9.4,
};

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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/48 via-foreground/34 to-foreground/62" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl leading-tight sm:text-6xl">About Us</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Join us at GuestHouse &apos;Shtëpia ime&apos; for a stay filled with warmth, comfort,
              and unforgettable moments in the heart of Përmet. Whether you&apos;re here to explore
              nature, relax in a peaceful setting, or experience local hospitality, we&apos;re
              dedicated to making your visit truly special.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={siteMedia.aboutStory.src}
                alt={siteMedia.aboutStory.alt}
                className="h-full min-h-[520px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
            >
              <SectionHeading
                eyebrow="Welcome to Shtëpia Ime"
                title="Welcome to Shtëpia Ime"
                description="We are a charming and cozy guest house in the heart of Përmet, where the warmth of Albanian hospitality meets the tranquility of nature. Our name, meaning 'My Home', reflects our dedication to creating a welcoming and comfortable atmosphere for every guest who walks through our doors. Whether you are visiting Përmet for its breathtaking landscapes, rich cultural heritage, or simply seeking a peaceful retreat, we are here to make your stay memorable."
              />
              <Button as="link" to="/rooms" className="mt-8">
                Our Rooms
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <motion.section
        className="section-shell bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <Container>
          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.staff}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Staff</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.facilities}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Facilities
              </p>
            </motion.article>
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.cleanliness}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Cleanliness
              </p>
            </motion.article>
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.comfort}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Comfort
              </p>
            </motion.article>
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.valueForMoney}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Value for Money
              </p>
            </motion.article>
            <motion.article variants={fadeInUp} className="panel-card p-6 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Rating
              </p>
              <p className="font-display text-4xl text-primary">{ratings.location}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Location
              </p>
            </motion.article>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-10 text-center text-lg text-muted-foreground">
            We pride ourselves on delivering unparalleled service to our guests.
          </motion.p>
        </Container>
      </motion.section>

      <section className="section-shell bg-background">
        <Container className="space-y-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"
          >
            <motion.div variants={fadeInLeft}>
              <img
                src={imageLibrary.roomSunlit}
                alt="Comfortable room at Shtëpia Ime"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                A Home Away from Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                At Shtëpia Ime, we believe that every guest deserves a place where they can feel at
                ease, relax, and fully enjoy their journey. Our guest house is designed with a
                homely and inviting ambiance, offering the perfect balance between traditional charm
                and modern comfort. Each of our six well-appointed rooms is furnished with care,
                ensuring a cozy and restful environment for solo travelers, couples, families, and
                groups alike.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                An Oasis of Tranquility
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Surrounded by lush greenery, Shtëpia Ime features a spacious courtyard where guests
                can unwind, read a book, or simply enjoy the fresh air under the shade of trees.
                One of the highlights of our outdoor space is our seasonal fruit garden, where
                guests can taste fresh, hand-picked fruits straight from the trees—an authentic and
                refreshing experience that connects you with the region&apos;s rich agricultural
                traditions.
              </p>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <img
                src={imageLibrary.garden}
                alt="Courtyard and fruit garden atmosphere"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"
          >
            <motion.div variants={fadeInLeft}>
              <img
                src={imageLibrary.roomDoor}
                alt="Guest room designed for a memorable stay"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Authentic Hospitality
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                What truly sets us apart is our commitment to hospitality. We take pride in
                offering personalized service, ensuring that each guest feels valued and cared for
                throughout their stay. Whether it&apos;s providing local recommendations, arranging
                activities, or simply sharing stories over a cup of coffee, we go the extra mile to
                create a warm and memorable experience.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="section-shell bg-muted">
        <Container>
          <SectionHeading
            title="Explore Përmet"
            description="At Shtëpia Ime, we invite you to embrace the beauty of Përmet while enjoying the comfort of a home away from home. Whether you're here for a weekend escape, a cultural journey, or an outdoor adventure, our doors are always open to welcome you."
          />
          <Button as="link" to="/explore-permet" className="mt-10">
            Explore Përmet
          </Button>
        </Container>
      </section>
    </motion.main>
  );
}

export default About;

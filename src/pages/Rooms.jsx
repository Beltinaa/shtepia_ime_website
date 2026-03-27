import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import RoomCard from '../components/rooms/RoomCard';
import { rooms } from '../data/rooms';
import { imageLibrary } from '../data/site';
import { fadeInUp } from '../lib/animations';

function Rooms() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-12 pt-28 text-white sm:min-h-[70vh] sm:pb-16 sm:pt-32">
        <img
          src={imageLibrary.roomWide}
          alt="Wide guest room interior at Shtëpia Ime"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/58 via-foreground/40 to-foreground/72" />
        <Container className="relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Our Rooms
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
              Our guest house consists of six comfortable rooms, carefully furnished to create a
              warm and homely atmosphere. Our accommodations are perfect for solo travelers,
              families, or groups of friends seeking a special place to stay.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <SectionHeading
            title="Our Rooms"
            description="At GuestHouse 'Shtëpia ime,' we offer cozy and thoughtfully designed rooms that provide the perfect blend of comfort and tranquility. Each room is equipped with modern amenities, including air conditioning, a minibar, a kettle, and a private bathroom with a walk-in shower and complimentary toiletries. Selected rooms also feature a fully equipped kitchen for added convenience. Wake up to breathtaking views of the mountains and garden, and enjoy a peaceful retreat in the heart of Përmet. Whether you're traveling solo, as a couple, or with family, our warm and inviting accommodations ensure a restful and memorable stay."
          />
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default Rooms;

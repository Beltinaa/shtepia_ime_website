import { motion } from 'framer-motion';
import { rooms } from '../../data/rooms';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import RoomCard from '../rooms/RoomCard';

function FeaturedRooms() {
  return (
    <motion.section
      className="section-shell bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title="Our Rooms" />
          <motion.div variants={fadeInUp}>
            <Button as="link" to="/rooms" variant="secondary" className="w-full sm:w-auto">
              View All →
            </Button>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
          {rooms.slice(0, 2).map((room) => (
            <motion.div key={room.id} variants={fadeInUp} className="min-w-0">
              <RoomCard room={room} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default FeaturedRooms;

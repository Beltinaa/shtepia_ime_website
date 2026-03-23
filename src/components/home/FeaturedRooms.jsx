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
            <Button as="link" to="/rooms" variant="secondary">
              View All →
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="-mx-4 mt-16 flex snap-x gap-6 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:px-0"
        >
          {rooms.slice(0, 2).map((room) => (
            <motion.div key={room.id} variants={fadeInUp} className="snap-start md:min-w-0">
              <RoomCard room={room} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default FeaturedRooms;

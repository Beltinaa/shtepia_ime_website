import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import RoomCard from '../components/rooms/RoomCard';
import { rooms } from '../data/rooms';

function Rooms() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-28"
    >
      <section className="section-shell bg-muted">
        <Container>
          <SectionHeading title="Rooms" />
        </Container>
      </section>

      <section className="section-shell bg-background">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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

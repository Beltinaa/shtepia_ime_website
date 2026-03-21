import { rooms } from '../../data/rooms';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import RoomCard from '../rooms/RoomCard';

function FeaturedRooms() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Stay"
            title="Rooms designed for rest, texture, and mountain light."
            description="Each room pairs natural materials, calm color, and practical comfort so the stay feels quietly elevated from arrival to checkout."
          />
          <Button as="link" to="/rooms" variant="secondary">
            See All Rooms
          </Button>
        </div>

        <div className="-mx-4 mt-16 flex snap-x gap-6 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.id} className="snap-start md:min-w-0">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedRooms;

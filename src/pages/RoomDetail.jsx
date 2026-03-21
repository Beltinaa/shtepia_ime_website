import { motion } from 'framer-motion';
import {
  Bath,
  CarFront,
  Coffee,
  Monitor,
  Snowflake,
  Tv,
  Users,
  Wifi,
  Wind,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import RoomGallery from '../components/rooms/RoomGallery';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { rooms } from '../data/rooms';

const amenityMap = {
  wifi: { label: 'High-speed Wi-Fi', icon: Wifi },
  ac: { label: 'Air conditioning', icon: Snowflake },
  balcony: { label: 'Private balcony', icon: Wind },
  minibar: { label: 'Minibar', icon: Coffee },
  tv: { label: 'Smart TV', icon: Tv },
  breakfast: { label: 'Breakfast included', icon: Coffee },
  parking: { label: 'Private parking', icon: CarFront },
  bath: { label: 'Private bath', icon: Bath },
};

function RoomDetail() {
  const { slug } = useParams();
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return (
      <main className="pt-32">
        <Container className="py-24">
          <h1 className="font-display text-4xl">Room not found</h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/72">
            The room you requested is unavailable. Please return to the full collection.
          </p>
          <Button as="link" to="/rooms" className="mt-8">
            View All Rooms
          </Button>
        </Container>
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-background pb-24 pt-28 lg:pb-32"
    >
      <Container>
        <div className="mb-10">
          <Link to="/rooms" className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Back to rooms
          </Link>
          <h1 className="mt-4 font-display text-5xl leading-tight text-foreground sm:text-6xl">
            {room.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/74">{room.description}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <RoomGallery images={room.images} title={room.title} />
          </div>

          <aside className="panel-card rounded-[32px] p-8 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              From €{room.price} per night
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Users size={16} className="text-primary" />
                Up to {room.guests} guests
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                <Monitor size={16} className="text-primary" />
                {room.size} m²
              </span>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-3xl">Amenities</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {room.amenities.map((amenity) => {
                  const item = amenityMap[amenity];
                  if (!item) {
                    return null;
                  }

                  const Icon = item.icon;

                  return (
                    <div
                      key={amenity}
                      className="rounded-2xl border border-primary/10 bg-muted/70 p-4 text-sm text-foreground/76"
                    >
                      <Icon size={18} className="mb-3 text-primary" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 space-y-4 text-foreground/74">
              <p>
                Guests booking this room often pair their stay with a rafting trip or a sunrise
                visit to Benja. We can help coordinate timing, transfers, and local recommendations.
              </p>
            </div>

            <Button as="link" to="/contact" size="lg" className="mt-10 hidden w-full lg:inline-flex">
              Book Now
            </Button>
          </aside>
        </div>
      </Container>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/95 p-4 backdrop-blur lg:hidden">
        <Container className="px-0">
          <Button as="link" to="/contact" size="lg" className="w-full">
            Book Now
          </Button>
        </Container>
      </div>
    </motion.main>
  );
}

export default RoomDetail;

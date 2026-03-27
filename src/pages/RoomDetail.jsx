import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bath,
  Bed,
  Mail,
  Maximize2,
  MessageCircle,
  Refrigerator,
  ShowerHead,
  Snowflake,
  Trees,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import { rooms } from '../data/rooms';
import { buildRoomEmailHref, buildRoomWhatsAppHref } from '../lib/bookingLinks';
import { fadeInLeft, fadeInRight } from '../lib/animations';

const amenityMap = {
  fireplace: { label: 'Fireplace', icon: Trees },
  kitchen: { label: 'Kitchen', icon: UtensilsCrossed },
  stovetop: { label: 'Stovetop', icon: UtensilsCrossed },
  refrigerator: { label: 'Refrigerator', icon: Refrigerator },
  kitchenware: { label: 'Kitchenware', icon: UtensilsCrossed },
  'tea-coffee-maker': { label: 'Tea and coffee maker', icon: Bath },
  barbecue: { label: 'Barbecue', icon: Trees },
  ac: { label: 'Air conditioning', icon: Snowflake },
  'washing-machine': { label: 'Washing machine', icon: Bath },
  terrace: { label: 'Terrace', icon: Trees },
  'garden-views': { label: 'Garden views', icon: Trees },
  minibar: { label: 'Minibar', icon: Refrigerator },
  bathroom: { label: 'Private bathroom', icon: Bath },
  'walk-in-shower': { label: 'Walk-in shower', icon: ShowerHead },
};

function RoomDetail() {
  const { slug } = useParams();
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return (
      <main className="min-h-screen bg-background pt-28">
        <Container className="py-20 lg:py-32">
          <h1 className="font-display text-4xl text-foreground">Room not found</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            The room you requested is unavailable. Please return to the full collection.
          </p>
          <Link to="/rooms" className="btn-primary mt-8">
            View All Rooms
          </Link>
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
      className="min-h-screen bg-background pb-24 pt-24 sm:pt-28 lg:pb-32"
    >
      <Container>
        <div className="mb-8 sm:mb-10">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rooms
          </Link>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={room.image ?? room.images?.[0]}
              alt={room.title}
              className="h-64 w-full object-cover sm:h-[26rem] md:h-[34rem]"
            />
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
            <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              {room.title}
            </h1>

            <div className="mb-8 mt-6 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                <Users className="h-5 w-5 text-primary" />
                {room.guests} Guests
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                <Maximize2 className="h-5 w-5 text-primary" />
                {room.size} m²
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                <Bed className="h-5 w-5 text-primary" />
                {room.beds}
              </div>
            </div>

            <p className="mb-8 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {room.description}
            </p>

            <div className="mb-10">
              <h2 className="font-body text-lg font-semibold text-foreground">Amenities</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {room.amenities.map((amenity) => {
                  const item = amenityMap[amenity];

                  if (!item) {
                    return null;
                  }

                  const Icon = item.icon;

                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 text-sm text-muted-foreground sm:text-base"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="capitalize">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={buildRoomEmailHref(room.title)}
                className="flex min-h-[3.25rem] w-full flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-light"
              >
                <Mail className="h-5 w-5" />
                Book via Email
              </a>
              <a
                href={buildRoomWhatsAppHref(room.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[3.25rem] w-full flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
}

export default RoomDetail;

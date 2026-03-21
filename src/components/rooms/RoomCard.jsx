import { motion } from 'framer-motion';
import { Ruler, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="panel-card group min-w-[18rem] overflow-hidden transition duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.title}
          className="aspect-[4/3] w-full object-cover transition duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-foreground">{room.title}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-accent">
              From €{room.price} per night
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-foreground/65">
          <span className="inline-flex items-center gap-2">
            <Users size={16} className="text-primary" />
            {room.guests} guests
          </span>
          <span className="inline-flex items-center gap-2">
            <Ruler size={16} className="text-primary" />
            {room.size} m²
          </span>
        </div>
        <p className="mt-6 text-foreground/74">{room.description}</p>
        <Link
          to={`/rooms/${room.slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:underline"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}

export default RoomCard;

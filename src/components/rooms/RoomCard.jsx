import { motion } from 'framer-motion';
import { Bed, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, hoverEffects } from '../../lib/animations';

function RoomCard({ room }) {
  const roomImage = room.images?.[0] ?? room.image;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      whileHover={hoverEffects.lift}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md transition-all duration-300"
    >
      <Link
        to={`/rooms/${room.slug}`}
        aria-label={`View details for ${room.title}`}
        className="relative block h-64 overflow-hidden"
      >
        <img
          src={roomImage}
          alt={room.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
          {room.size} m²
        </div>
      </Link>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 min-h-[3.5rem] font-display text-2xl leading-tight text-foreground">
          {room.title}
        </h3>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Users size={16} className="text-primary" />
            {room.guests} guests
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bed size={16} className="text-primary" />
            {room.beds}
          </span>
        </div>

        <p className="mb-6 text-sm leading-7 text-muted-foreground">{room.description}</p>

        <Link
          to={`/rooms/${room.slug}`}
          className="mt-auto inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-3 hover:text-primary-light"
        >
          View Details
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export default RoomCard;

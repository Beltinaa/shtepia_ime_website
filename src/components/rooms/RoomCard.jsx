import { motion } from 'framer-motion';
import { BedDouble, Ruler, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildRoomEmailHref, buildRoomWhatsAppHref } from '../../data/site';

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
        <h3 className="font-display text-xl text-foreground">{room.title}</h3>
        <div className="mt-6 flex items-center gap-4 text-sm text-foreground/65">
          <span className="inline-flex items-center gap-2">
            <BedDouble size={16} className="text-primary" />
            {room.beds}
          </span>
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
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={buildRoomEmailHref(room.title)}
            className="rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-primary/90"
          >
            Book via Email
          </a>
          <a
            href={buildRoomWhatsAppHref(room.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-green-700"
          >
            Book via WhatsApp
          </a>
        </div>
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

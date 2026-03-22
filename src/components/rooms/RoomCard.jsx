import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, Maximize, MessageCircle, Users } from 'lucide-react';
import { buildRoomEmailHref, buildRoomWhatsAppHref } from '../../lib/bookingLinks';
import { fadeInUp } from '../../hooks/useScrollAnimation';

function RoomCard({ room }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const roomImage = room.images?.[0] ?? room.image;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(26,26,26,0.12)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={roomImage}
          alt={room.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
          {room.size} m²
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <div className="min-h-[10.5rem]">
          <h3 className="mb-2 min-h-[3.5rem] font-display text-xl font-semibold text-foreground">
            {room.title}
          </h3>

          <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-foreground/65">
            <span className="inline-flex items-center gap-1">
              <Users size={16} className="text-primary" />
              {room.guests} guests
            </span>
            <span className="inline-flex items-center gap-1">
              <Maximize size={16} className="text-primary" />
              {room.beds}
            </span>
          </div>

          <p className="line-clamp-2 text-sm text-foreground/74">{room.description}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="mb-4 mt-2 flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>View Details</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-primary/10 pb-4 pt-4">
                <p className="mb-4 text-sm text-foreground/74">{room.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-md bg-muted px-2 py-1 text-xs capitalize text-foreground/74"
                    >
                      {amenity.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-auto flex gap-3 border-t border-primary/10 pt-4">
          <a
            href={buildRoomEmailHref(room.title)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-primary/90"
          >
            <Mail size={16} />
            Book via Email
          </a>
          <a
            href={buildRoomWhatsAppHref(room.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-green-700"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default RoomCard;

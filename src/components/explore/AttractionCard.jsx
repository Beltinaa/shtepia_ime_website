import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../../hooks/useScrollAnimation';

function AttractionCard({ attraction, index }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={isReversed ? fadeInRight : fadeInLeft}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className={isReversed ? 'lg:order-2' : ''}>
        <motion.div
          whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img
            src={attraction.image}
            alt={attraction.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <span className="mb-2 block font-medium text-primary">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
          {attraction.title}
        </h3>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-foreground/74">
          {attraction.description}
        </p>
      </div>
    </motion.article>
  );
}

export default AttractionCard;

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, hoverEffects } from '../../lib/animations';

function AttractionCard({ attraction, index }) {
  const isReversed = index % 2 === 1;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={isReversed ? fadeInRight : fadeInLeft}
        className={isReversed ? 'lg:order-2' : ''}
      >
        <motion.div
          whileHover={hoverEffects.lift}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={attraction.image}
            alt={attraction.title}
            className="h-[22rem] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-[26rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/8 to-transparent" />
          <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-md">
            <span className="font-display text-2xl font-semibold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={isReversed ? fadeInLeft : fadeInRight}
        className={isReversed ? 'lg:order-1' : ''}
      >
        <div className="w-20 border-t border-secondary/80" />
        <h3 className="mt-6 font-display text-3xl leading-tight text-foreground md:text-4xl">
          {attraction.title}
        </h3>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
          {attraction.description}
        </p>
      </motion.div>
    </div>
  );
}

export default AttractionCard;

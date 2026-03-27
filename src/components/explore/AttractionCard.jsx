import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, hoverEffects } from '../../lib/animations';

function AttractionCard({ attraction, index }) {
  const isReversed = index % 2 === 1;

  return (
    <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={isReversed ? fadeInRight : fadeInLeft}
        className={isReversed ? 'min-w-0 lg:order-2' : 'min-w-0'}
      >
        <motion.div
          whileHover={hoverEffects.lift}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={attraction.image}
            alt={attraction.title}
            className="h-72 w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-80 lg:h-[26rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/8 to-transparent" />
          <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md sm:left-6 sm:top-6 sm:h-14 sm:w-14">
            <span className="font-display text-xl font-semibold sm:text-2xl">
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
        className={isReversed ? 'min-w-0 lg:order-1' : 'min-w-0'}
      >
        <div className="w-16 border-t border-secondary/80 sm:w-20" />
        <h3 className="mt-6 font-display text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl">
          {attraction.title}
        </h3>
        <p className="mt-5 whitespace-pre-line text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
          {attraction.description}
        </p>
      </motion.div>
    </div>
  );
}

export default AttractionCard;

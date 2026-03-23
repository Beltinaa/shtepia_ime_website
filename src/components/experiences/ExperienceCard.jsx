import { motion } from 'framer-motion';
import { fadeInUp, hoverEffects } from '../../lib/animations';

function ExperienceCard({ experience, compact = false }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      whileHover={hoverEffects.scale}
      className={`group relative overflow-hidden rounded-2xl shadow-lg ${
        compact ? 'min-h-[18rem] sm:min-h-[20rem]' : 'min-h-[22rem] sm:min-h-[25rem]'
      }`}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/42 to-black/18" />
      <div className="absolute inset-0 bg-primary/18 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
        <h3
          className={`hero-text-shadow ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-display font-semibold leading-tight`}
        >
          {experience.title}
        </h3>
        <p className="hero-text-shadow mt-3 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          {experience.description}
        </p>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;

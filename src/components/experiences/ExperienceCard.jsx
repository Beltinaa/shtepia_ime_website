import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ExperienceCard({ experience, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-[28px] ${
        compact ? 'min-h-[18rem] sm:min-h-[20rem]' : 'min-h-[22rem] sm:min-h-[26rem]'
      }`}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-foreground/45" />

      <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
        <h3 className={`${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-display leading-tight`}>
          {experience.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          {experience.description}
        </p>
        <div className="mt-6">
          <Link
            to="/explore-permet"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;

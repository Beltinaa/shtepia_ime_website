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
      className={`group relative overflow-hidden rounded-[28px] ${compact ? 'min-h-[25rem]' : 'min-h-[34rem]'}`}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-foreground/58" />

      <div className="relative flex h-full flex-col justify-end p-8 text-white sm:p-10">
        <div className="rounded-[24px] bg-foreground/22 p-6 text-shadow-soft backdrop-blur-[3px] sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
            {experience.duration}
          </p>
          <h3 className={`${compact ? 'text-3xl' : 'text-4xl'} mt-4 font-display leading-tight`}>
            {experience.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/92">{experience.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm uppercase tracking-[0.18em] text-white/78">{experience.season}</span>
            <Link
              to={`/contact?experience=${experience.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;

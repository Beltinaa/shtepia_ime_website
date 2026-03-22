import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  light = false,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const eyebrowClasses = light ? 'text-secondary' : 'text-accent';
  const titleClasses = light ? 'text-white' : 'text-foreground';
  const copyClasses = light ? 'text-white/74' : 'text-foreground/78';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={className}
    >
      {eyebrow ? <span className={`eyebrow ${eyebrowClasses} ${alignment}`.trim()}>{eyebrow}</span> : null}
      <h2 className={`section-title ${titleClasses} ${alignment}`.trim()}>{title}</h2>
      {description ? (
        <p className={`section-copy ${copyClasses} mt-6 ${alignment}`.trim()}>{description}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;

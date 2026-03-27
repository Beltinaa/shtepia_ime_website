import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

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
  const copyClasses = light ? 'text-white/78' : 'text-muted-foreground';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={`min-w-0 ${className}`.trim()}
    >
      {eyebrow ? (
        <span className={`eyebrow ${eyebrowClasses} ${alignment}`.trim()}>{eyebrow}</span>
      ) : null}
      <h2 className={`section-title break-words ${titleClasses} ${alignment}`.trim()}>{title}</h2>
      {description ? (
        <p className={`section-copy mt-6 break-words ${copyClasses} ${alignment}`.trim()}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;

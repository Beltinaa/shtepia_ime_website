import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { fadeInUp, scaleIn } from '../../lib/animations';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const review = testimonials[activeIndex];

  return (
    <motion.section
      className="section-shell bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Guest Experiences" />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.article
            key={`${review.name}-${review.country}`}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="card-surface-lg p-8 sm:p-12"
          >
            <Quote size={36} className="text-secondary" />
            <p className="mt-8 max-w-3xl font-display text-3xl leading-tight text-foreground sm:text-4xl">
              “{review.text}”
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {review.name}, {review.country}
            </p>
          </motion.article>

          <motion.div variants={fadeInUp} className="flex items-center gap-3 lg:flex-col lg:items-end">
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-primary/15 bg-white p-3 text-primary transition duration-300 hover:bg-primary hover:text-white"
              onClick={() =>
                setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Show previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-primary/15 bg-white p-3 text-primary transition duration-300 hover:bg-primary hover:text-white"
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
              aria-label="Show next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="mt-8 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={`${item.name}-${item.country}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-10 bg-primary' : 'w-2.5 bg-primary/20'
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}

export default Testimonials;

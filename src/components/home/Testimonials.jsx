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

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.article
            key={`${review.name}-${review.country}`}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="card-surface-lg p-6 sm:p-10 lg:p-12"
          >
            <Quote size={32} className="text-secondary sm:h-9 sm:w-9" />
            <p className="mt-6 max-w-3xl font-display text-2xl leading-tight text-foreground sm:mt-8 sm:text-3xl lg:text-4xl">
              “{review.text}”
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:mt-8 sm:tracking-[0.2em]">
              {review.name}, {review.country}
            </p>
          </motion.article>

          <motion.div
            variants={fadeInUp}
            className="flex w-full items-center justify-between gap-3 sm:justify-start lg:w-auto lg:flex-col lg:items-end"
          >
            <button
              type="button"
              className="btn-lift inline-flex min-h-[3rem] min-w-[3rem] items-center justify-center rounded-full border border-primary/15 bg-white p-3 text-primary transition duration-300 hover:bg-primary hover:text-white"
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

        <div className="mt-8 flex justify-center gap-2 sm:justify-start">
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

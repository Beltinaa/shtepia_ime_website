import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { fadeInUp, scaleIn } from '../../hooks/useScrollAnimation';
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
      className="section-shell bg-primary text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Guest Experiences" light />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.article
            key={`${review.name}-${review.country}`}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12"
          >
            <Quote size={36} className="text-secondary" />
            <p className="mt-8 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
              “{review.text}”
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/68">
              {review.name}, {review.country}
            </p>
          </motion.article>

          <motion.div variants={fadeInUp} className="flex items-center gap-3 lg:flex-col lg:items-end">
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-white/15 p-3 text-white transition duration-300 hover:bg-white/10"
              onClick={() =>
                setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Show previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-white/15 p-3 text-white transition duration-300 hover:bg-white/10"
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
                activeIndex === index ? 'w-10 bg-secondary' : 'w-2.5 bg-white/30'
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

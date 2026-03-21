import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const reviews = [
  {
    name: 'Elena, Italy',
    quote:
      'The rooms felt beautifully quiet, and the team arranged rafting and dinner recommendations that made the whole stay effortless.',
  },
  {
    name: 'James, United Kingdom',
    quote:
      'A rare mix of polished design and genuine local warmth. Benja at sunrise and breakfast in the courtyard were standouts.',
  },
  {
    name: 'Mira, Albania',
    quote:
      'It captures the calm of Përmet perfectly. We stayed two nights and left wishing we had planned for four.',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const review = reviews[activeIndex];

  return (
    <section className="section-shell bg-primary text-white">
      <Container>
        <SectionHeading
          eyebrow="Guest Notes"
          title="A stay guests remember for its calm, care, and sense of place."
          description="Three recent impressions from travelers who used Shtëpia Ime as their base for discovering the valley."
          light
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.article
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12"
          >
            <Quote size={36} className="text-secondary" />
            <p className="mt-8 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
              “{review.quote}”
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/68">
              {review.name}
            </p>
          </motion.article>

          <div className="flex items-center gap-3 lg:flex-col lg:items-end">
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-white/15 p-3 text-white transition duration-300 hover:bg-white/10"
              onClick={() => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length)}
              aria-label="Show previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="btn-lift inline-flex rounded-full border border-white/15 p-3 text-white transition duration-300 hover:bg-white/10"
              onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)}
              aria-label="Show next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          {reviews.map((item, index) => (
            <button
              key={item.name}
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
    </section>
  );
}

export default Testimonials;

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

function AboutPreview() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="A House With Place"
              title="A refined stay shaped by the pace of southern Albania."
              description="Shtëpia Ime blends warm hospitality with calm, textural interiors and a direct connection to Përmet’s river valleys, mountain trails, and thermal springs. Every space is designed to feel intimate, restorative, and grounded in the local landscape."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-display text-4xl text-primary">3</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/60">
                  Signature rooms
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">4 min</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/60">
                  From town center
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">Year-round</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/60">
                  Outdoor escapes
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button as="link" to="/about" variant="secondary">
                Discover Our Story
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="panel-card overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1505693530355-93f5a75b8f4b?auto=format&fit=crop&w=1200&q=80"
              alt="Inviting guesthouse bedroom with natural light and warm textures"
              className="h-full min-h-[420px] w-full object-cover transition duration-300 ease-out hover:scale-105"
            />
            <div className="grid gap-4 border-t border-primary/10 bg-white p-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-lg leading-8 text-foreground/74">
                Expect local breakfasts, thoughtful concierge support, and a quiet base for
                exploring the Vjosa valley.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;

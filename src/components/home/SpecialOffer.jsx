import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import { fadeInLeft, fadeInRight, scaleIn } from '../../lib/animations';

const specialOffer = {
  heading: 'Exclusive Offers for an Unforgettable Stay',
  description:
    "Enjoy the perfect balance of excitement and tranquility with this exclusive package. Wake up to a delicious breakfast, explore the stunning landscapes of Përmet, and experience the adrenaline of rafting on Europe's last wild river!",
  title: 'Book Now! Adventure & Relaxation Package – €100 per person',
  includes: [
    '2-night stay at Shtepia Ime Guesthouse',
    'Daily homemade breakfast',
    'Thrilling rafting experience on the Vjosa River',
  ],
};

const packageEmailHref =
  'mailto:info@shtepiaime.eu?subject=Adventure%20Package%20Booking%20-%20%E2%82%AC100%20per%20person';
const packageWhatsAppHref =
  'https://wa.me/355695602419?text=Hello!%20I%27m%20interested%20in%20the%20Adventure%20%26%20Relaxation%20Package%20(%E2%82%AC100%20per%20person)';

function SpecialOffer() {
  return (
    <section className="section-shell bg-muted">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-white shadow-lg sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,196,176,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="pointer-events-none absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 lg:block" />
          <div className="pointer-events-none absolute bottom-10 left-[46%] hidden h-16 w-16 rounded-full bg-white/5 lg:block" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="font-medium text-white/90">Special Offer</span>
            </motion.div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {specialOffer.heading}
            </h2>
            <p className="mt-4 text-2xl font-semibold leading-tight text-secondary sm:text-3xl">
              {specialOffer.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82">
              {specialOffer.description}
            </p>

            <ul className="mb-10 mt-8 space-y-4">
              {specialOffer.includes.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href={packageEmailHref}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href={packageWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
            className="relative"
          >
            <motion.div
              variants={fadeInRight}
              className="rounded-[1.75rem] border border-white/15 bg-white/10 p-8 backdrop-blur-md lg:p-12"
            >
              <div className="mb-8 text-center">
                <span className="text-lg text-white/60">Starting from</span>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span className="font-display text-7xl font-bold text-white lg:text-8xl">
                    €100
                  </span>
                  <span className="text-xl text-white/70">/person</span>
                </div>
              </div>

              <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                    🏠
                  </div>
                  <span>2 Nights Accommodation</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                    🍳
                  </div>
                  <span>Daily Breakfast Included</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                    🚣
                  </div>
                  <span>Vjosa River Rafting</span>
                </div>
              </div>

              <motion.div
                className="mt-8 rounded-xl bg-secondary/20 py-3 text-center font-medium text-secondary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Limited availability - Book today!
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -right-4 -top-4 rounded-full bg-secondary px-4 py-2 font-bold text-primary shadow-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Best Value!
            </motion.div>
          </motion.div>
        </div>
        </div>
      </Container>
    </section>
  );
}

export default SpecialOffer;

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
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-5 py-10 text-white shadow-lg sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,196,176,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="pointer-events-none absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 lg:block" />
          <div className="pointer-events-none absolute bottom-10 left-[46%] hidden h-16 w-16 rounded-full bg-white/5 lg:block" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="min-w-0"
            >
              <motion.div
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-5 w-5 text-secondary" />
                <span className="font-medium text-white/90">Special Offer</span>
              </motion.div>

              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {specialOffer.heading}
              </h2>
              <p className="mt-4 text-xl font-semibold leading-tight text-secondary sm:text-2xl md:text-3xl">
                {specialOffer.title}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-relaxed">
                {specialOffer.description}
              </p>

              <ul className="mb-8 mt-6 space-y-4 sm:mb-10 sm:mt-8">
                {specialOffer.includes.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base leading-7 sm:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <motion.a
                  href={packageEmailHref}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-secondary sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
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
              className="relative min-w-0"
            >
              <motion.div
                variants={fadeInRight}
                className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:rounded-[1.75rem] sm:p-8 lg:p-12"
              >
                <div className="mb-6 text-center sm:mb-8">
                  <span className="text-base text-white/60 sm:text-lg">Starting from</span>
                  <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="font-display text-5xl font-bold text-white sm:text-6xl lg:text-8xl">
                      €100
                    </span>
                    <span className="text-base text-white/70 sm:text-xl">/person</span>
                  </div>
                </div>

                <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent sm:mb-8" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                      🏠
                    </div>
                    <span className="leading-6">2 Nights Accommodation</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                      🍳
                    </div>
                    <span className="leading-6">Daily Breakfast Included</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                      🚣
                    </div>
                    <span className="leading-6">Vjosa River Rafting</span>
                  </div>
                </div>

                <motion.div
                  className="mt-6 rounded-xl bg-secondary/20 px-4 py-3 text-center text-sm font-medium text-secondary sm:mt-8"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Limited availability - Book today!
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute right-4 top-4 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-lg sm:-right-4 sm:-top-4"
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

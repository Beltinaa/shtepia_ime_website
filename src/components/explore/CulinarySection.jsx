import { motion } from 'framer-motion';
import { culinaryDelights } from '../../data/culinary';
import { fadeInUp, scaleIn, staggerContainer } from '../../lib/animations';
import Container from '../ui/Container';

function CulinarySection() {
  return (
    <motion.section
      className="section-shell bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <Container>
        <motion.div variants={fadeInUp} className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">A Taste of Përmet – Culinary Delights</h2>
          <p className="section-copy mt-6">
            Përmet is renowned for its local cuisine, offering organic, homemade dishes that
            showcase the region&apos;s rich culinary traditions. Some must-try specialties include:
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {culinaryDelights.map((item) => (
            <motion.article
              key={item.id}
              variants={scaleIn}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(26,26,26,0.1)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="card-surface overflow-hidden transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg">
                  {item.emoji}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default CulinarySection;

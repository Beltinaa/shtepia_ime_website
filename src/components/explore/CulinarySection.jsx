import { motion } from 'framer-motion';
import { culinaryDelights } from '../../data/culinary';
import Container from '../ui/Container';

function CulinarySection() {
  return (
    <section className="section-shell bg-muted">
      <Container>
        <div className="max-w-4xl">
          <h2 className="section-title">A Taste of Përmet – Culinary Delights</h2>
          <p className="section-copy mt-6">
            Përmet is renowned for its local cuisine, offering organic, homemade dishes that
            showcase the region&apos;s rich culinary traditions. Some must-try specialties include:
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {culinaryDelights.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="panel-card overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-3xl">{item.emoji}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-foreground/74">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CulinarySection;

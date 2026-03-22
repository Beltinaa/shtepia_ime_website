import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const amenities = [
  {
    id: 1,
    title: 'Cozy Guesthouse',
    description:
      'Enjoy a warm and inviting stay with comfortable amenities and stunning mountain views.',
  },
  {
    id: 2,
    title: 'Full Amenities',
    description:
      'Enjoy air-conditioned rooms, a minibar, a private bathroom, and thoughtful amenities for a relaxing stay.',
  },
  {
    id: 3,
    title: 'Morning Indulgence',
    description:
      'Wake up to a delightful buffet breakfast and complimentary coffee to start your day right.',
  },
  {
    id: 4,
    title: 'Outdoor Spaces',
    description:
      'Spend your days relaxing in the garden, making use of barbecue facilities, or admiring the stunning views.',
  },
];

function Amenities() {
  return (
    <section className="section-shell bg-muted">
      <Container>
        <SectionHeading title="Serene & Comfortable Stay" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {amenities.map(({ id, title, description }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="panel-card p-8"
            >
              <h3 className="font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-4 text-foreground/74">{description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Amenities;

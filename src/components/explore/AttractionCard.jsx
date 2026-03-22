import { motion } from 'framer-motion';

function AttractionCard({ attraction }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="panel-card overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.title}
          className="aspect-[4/3] w-full object-cover transition duration-300 ease-out hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="font-display text-3xl leading-tight text-foreground">{attraction.title}</h3>
        <p className="mt-4 whitespace-pre-line text-base leading-8 text-foreground/74">
          {attraction.description}
        </p>
      </div>
    </motion.article>
  );
}

export default AttractionCard;

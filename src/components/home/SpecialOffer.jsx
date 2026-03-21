import Button from '../ui/Button';
import Container from '../ui/Container';
import { reservationEmailHref } from '../../data/site';

const specialOffer = {
  headline: 'Adventure & Relaxation Package – €100 per person',
  description:
    "Enjoy the perfect balance of excitement and tranquility with this exclusive package. Wake up to a delicious breakfast, explore the stunning landscapes of Përmet, and experience the adrenaline of rafting on Europe's last wild river!",
  includes: [
    '2-night stay at Shtepia Ime Guesthouse',
    'Daily homemade breakfast',
    'Thrilling rafting experience on the Vjosa River',
  ],
};

function SpecialOffer() {
  return (
    <section className="section-shell bg-background">
      <Container>
        <div className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-soft sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Special Offer
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {specialOffer.headline}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/74">
            {specialOffer.description}
          </p>
          <ul className="mt-8 space-y-3 text-foreground/74">
            {specialOffer.includes.map((item) => (
              <li key={item} className="rounded-2xl bg-muted px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <Button as="a" href={reservationEmailHref} className="mt-8">
            Book Now
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default SpecialOffer;

import Button from '../ui/Button';
import { reservationEmailHref } from '../../lib/bookingLinks';
import Container from '../ui/Container';

const specialOffer = {
  title: 'Book Now! Adventure & Relaxation Package – €100 per person',
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
            Exclusive Offers for an Unforgettable Stay
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/74">
            Enjoy the perfect balance of excitement and tranquility with this exclusive package.
            Wake up to a delicious breakfast, explore the stunning landscapes of Përmet, and
            experience the adrenaline of rafting on Europe&apos;s last wild river!
          </p>
          <p className="mt-8 text-lg font-semibold text-primary">{specialOffer.title}</p>
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

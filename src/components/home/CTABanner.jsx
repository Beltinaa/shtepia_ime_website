import Button from '../ui/Button';
import Container from '../ui/Container';
import { reservationEmailHref } from '../../data/site';

function CTABanner() {
  return (
    <section className="pb-24 lg:pb-32">
      <Container>
        <div className="rounded-[36px] bg-secondary px-6 py-12 text-foreground sm:px-10 lg:px-16 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Plan Your Escape
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Ready to Experience Përmet?
              </h2>
            </div>
            <Button as="a" href={reservationEmailHref} size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTABanner;

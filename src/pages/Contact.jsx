import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { siteDetails } from '../data/site';

const initialForm = {
  name: '',
  email: '',
  checkIn: '',
  checkOut: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const minDate = new Date().toISOString().split('T')[0];

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-28"
    >
      <section className="section-shell bg-background">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Reserve a room or ask us to shape your stay."
            description="Send your travel dates, room preference, and any activity plans. We usually respond quickly with availability, pricing, and recommendations."
          />

          <div className="mt-16 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="panel-card p-8 sm:p-10">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="field-base"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field-base"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="checkIn" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68">
                      Check-in
                    </label>
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      min={minDate}
                      onChange={handleChange}
                      className="field-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68">
                      Check-out
                    </label>
                    <input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      min={formData.checkIn || minDate}
                      onChange={handleChange}
                      className="field-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="field-base resize-none"
                    placeholder="Tell us about your room preference, arrival plans, or experiences you would like to add."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Inquiry
                </Button>

                {submitted ? (
                  <p className="text-sm text-primary">
                    Your inquiry has been prepared. Connect this form to your preferred booking or
                    email workflow to make it live.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="space-y-8">
              <article className="panel-card p-8 sm:p-10">
                <h2 className="font-display text-3xl text-foreground">Visit Shtëpia Ime</h2>
                <div className="mt-8 space-y-5 text-lg text-foreground/74">
                  <p className="inline-flex items-start gap-3">
                    <MapPin size={20} className="mt-1 shrink-0 text-primary" />
                    {siteDetails.addressLine1}, {siteDetails.addressLine2}
                  </p>
                  <p className="inline-flex items-center gap-3">
                    <Phone size={20} className="shrink-0 text-primary" />
                    {siteDetails.phone}
                  </p>
                  <p className="inline-flex items-center gap-3">
                    <Mail size={20} className="shrink-0 text-primary" />
                    {siteDetails.email}
                  </p>
                  <a
                    href={siteDetails.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-primary transition duration-300 hover:text-accent"
                  >
                    <Instagram size={20} className="shrink-0" />
                    {siteDetails.instagramHandle}
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-soft">
                <iframe
                  title="Map showing the location of Shtëpia Ime in Përmet"
                  src={siteDetails.mapEmbedUrl}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            </div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default Contact;

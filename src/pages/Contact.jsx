import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { siteDetails } from '../data/site';
import { fadeInLeft, fadeInRight, fadeInUp } from '../hooks/useScrollAnimation';
import { buildContactFormHref, reservationEmailHref } from '../lib/bookingLinks';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  room: '',
  checkin: '',
  checkout: '',
  message: '',
};

const contactFormFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: false },
  {
    name: 'room',
    label: 'Select Room',
    type: 'select',
    required: false,
    options: [
      'Double Room with Balcony',
      'Double Room with Balcony 1 (3 Adults)',
      'Deluxe Double Room with Balcony 1',
      'Deluxe Double Room with Balcony 2',
      'Double Room with Balcony 2 (3 Adults)',
      'Deluxe Double Room with Balcony 3',
    ],
  },
  { name: 'checkin', label: 'Check-in Date', type: 'date', required: false },
  { name: 'checkout', label: 'Check-out Date', type: 'date', required: false },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const minDate = new Date().toISOString().split('T')[0];

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildContactFormHref(formData);
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
            title="Contact Us"
            description="Looking for a cozy and welcoming place to stay? At Shtëpia Ime guest house, we offer a peaceful retreat with all the comforts you need. Book your stay today and experience the warmth and hospitality we're known for. We can't wait to welcome you!"
          />

          <div className="mt-16 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInLeft}
              className="panel-card p-8 sm:p-10"
            >
              <p className="eyebrow">Reach out to us</p>
              <p className="text-lg leading-8 text-foreground/74">
                We&apos;d love to hear from you! Whether you need more information or want to book
                your stay at Shtëpia Ime guest house, feel free to reach out. Our team is here to
                assist you and ensure a memorable experience. You can book easily through email,
                WhatsApp, or our contact form.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {contactFormFields.map((field) => {
                    if (field.type === 'textarea') {
                      return (
                        <div key={field.name} className="sm:col-span-2">
                          <label
                            htmlFor={field.name}
                            className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68"
                          >
                            {field.label}
                          </label>
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows="5"
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="field-base resize-none"
                            required={field.required}
                          />
                        </div>
                      );
                    }

                    if (field.type === 'select') {
                      return (
                        <div key={field.name} className="sm:col-span-2">
                          <label
                            htmlFor={field.name}
                            className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68"
                          >
                            {field.label}
                          </label>
                          <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="field-base"
                            required={field.required}
                          >
                            <option value="">Select Room</option>
                            {field.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }

                    return (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-foreground/68"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={formData[field.name]}
                          min={field.name === 'checkin' ? minDate : field.name === 'checkout' ? formData.checkin || minDate : undefined}
                          onChange={handleChange}
                          className="field-base"
                          required={field.required}
                        />
                      </div>
                    );
                  })}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Book Now
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInRight}
              className="space-y-8"
            >
              <motion.article variants={fadeInUp} className="panel-card p-8 sm:p-10">
                <h2 className="font-display text-3xl text-foreground">Contact Us</h2>
                <div className="mt-8 space-y-5 text-lg text-foreground/74">
                  <p className="inline-flex items-start gap-3">
                    <MapPin size={20} className="mt-1 shrink-0 text-primary" />
                    {siteDetails.address}
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href={`tel:${siteDetails.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-3">
                      <Phone size={20} className="shrink-0 text-primary" />
                      {siteDetails.phone}
                    </a>
                    <a href={`mailto:${siteDetails.email}`} className="inline-flex items-center gap-3">
                      <Mail size={20} className="shrink-0 text-primary" />
                      {siteDetails.email}
                    </a>
                  </div>
                  <a
                    href="https://wa.me/355695602419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-primary transition duration-300 hover:text-accent"
                  >
                    <MessageCircle size={20} className="shrink-0" />
                    {siteDetails.whatsapp}
                  </a>
                </div>
                <Button as="a" href={reservationEmailHref} className="mt-8">
                  Book Now
                </Button>
              </motion.article>

              <motion.article
                variants={fadeInUp}
                className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-soft"
              >
                <iframe
                  title="Map showing the location of Shtëpia Ime in Përmet"
                  src={siteDetails.mapEmbedUrl}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.article>
            </motion.div>
          </div>
        </Container>
      </section>
    </motion.main>
  );
}

export default Contact;

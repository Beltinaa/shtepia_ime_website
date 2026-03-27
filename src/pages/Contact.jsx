import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';
import Container from '../components/ui/Container';
import { siteDetails } from '../data/site';
import { rooms } from '../data/rooms';

function ContactInfoCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.label === 'WhatsApp' || item.label === 'Address' ? '_blank' : undefined}
      rel={item.label === 'WhatsApp' || item.label === 'Address' ? 'noopener noreferrer' : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:gap-5 sm:p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
      whileHover={{ x: 4 }}
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary sm:h-14 sm:w-14">
        <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.18em]">
          {item.label}
        </span>
        <span className="break-words text-base font-semibold leading-7 text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {item.value}
        </span>
      </div>
      <ArrowRight className="mt-1 hidden h-5 w-5 flex-shrink-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
    </motion.a>
  );
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  room: '',
  checkin: '',
  checkout: '',
  message: '',
};

const labelClasses =
  'mb-2 flex flex-wrap items-center gap-1 text-sm font-medium leading-6 text-foreground';
const optionalLabelClasses = 'text-xs text-[color:var(--muted-foreground)]';
const fieldBaseClasses =
  'w-full min-h-[3.25rem] rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';
const fieldWithIconClasses = `${fieldBaseClasses} pl-12`;
const errorFieldClasses =
  'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200';

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roomOptions = useMemo(() => rooms.map(({ title }) => title), []);
  const today = new Date().toISOString().split('T')[0];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteDetails.phone,
      href: 'tel:+355695602419',
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteDetails.email,
      href: 'mailto:info@shtepiaime.eu',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteDetails.whatsapp,
      href: 'https://wa.me/355695602419',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: siteDetails.address,
      href: 'https://maps.google.com/?q=Baba+Alushi+Street+Permet+Albania',
    },
  ];

  const validateField = (name, value, currentData = formData) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[\p{L}\s'-]+$/u.test(value.trim())) return 'Name contains invalid characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email';
        }
        return '';
      case 'phone':
        if (value && !/^[+]?[\d\s\-()]{8,}$/.test(value.trim())) {
          return 'Please enter a valid phone number';
        }
        return '';
      case 'checkin':
        if (value) {
          const checkinDate = new Date(value);
          const normalizedToday = new Date();
          normalizedToday.setHours(0, 0, 0, 0);
          if (checkinDate < normalizedToday) return 'Check-in date cannot be in the past';
        }
        return '';
      case 'checkout':
        if (value && currentData.checkin) {
          const checkinDate = new Date(currentData.checkin);
          const checkoutDate = new Date(value);
          if (checkoutDate <= checkinDate) return 'Check-out must be after check-in';
        }
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        nextErrors[key] = error;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);

    if (touched[name]) {
      const error = validateField(name, value, nextFormData);
      setErrors((current) => ({ ...current, [name]: error }));
    }

    if (name === 'checkin' && touched.checkout) {
      const checkoutError = validateField('checkout', nextFormData.checkout, nextFormData);
      setErrors((current) => ({ ...current, checkout: checkoutError }));
    }
  };

  const handleBlur = ({ target: { name, value } }) => {
    setTouched((current) => ({ ...current, [name]: true }));
    const error = validateField(name, value);
    setErrors((current) => ({ ...current, [name]: error }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allTouched = Object.keys(formData).reduce((accumulator, key) => {
      accumulator[key] = true;
      return accumulator;
    }, {});

    setTouched(allTouched);
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Room: ${formData.room || 'Not specified'}
Check-in: ${formData.checkin || 'Not specified'}
Check-out: ${formData.checkout || 'Not specified'}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:info@shtepiaime.eu?subject=${encodeURIComponent(
      `Contact Form - ${formData.name}`
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData(initialFormData);
      setTouched({});
      setErrors({});

      window.setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-20 pt-28 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary blur-3xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-relaxed md:text-xl">
              Looking for a cozy and welcoming place to stay? At Shtepia Ime guest house, we offer
              a peaceful retreat with all the comforts you need. We can&apos;t wait to welcome you!
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-16">
            <motion.div
              className="space-y-8 lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
                  Reach out to us
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted-foreground)]">
                  We&apos;d love to hear from you! Whether you need more information or want to
                  book your stay, feel free to reach out. Our team is here to assist you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <ContactInfoCard key={item.label} item={item} index={index} />
                ))}
              </div>

              <motion.div
                className="rounded-2xl bg-muted/70 p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Response Time</h3>
                </div>
                <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                  We typically respond within 2-4 hours during business hours. For urgent inquiries,
                  please contact us via WhatsApp.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              >
                <a
                  href="mailto:info@shtepiaime.eu?subject=Booking%20Inquiry"
                  className="btn-primary flex w-full flex-1 items-center justify-center gap-2 px-6 py-3 text-base"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
                <a
                  href="https://wa.me/355695602419?text=Hello!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[3.25rem] w-full flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:p-6 lg:p-10">
                <div className="mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl">Send us a Message</h2>
                  <p className="mt-2 text-base leading-7 text-[color:var(--muted-foreground)]">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <AnimatePresence>
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                      <p className="text-sm leading-6 text-green-800">
                        Your email client should open shortly. Thank you for reaching out!
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClasses}>
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Your full name"
                          className={`${fieldWithIconClasses} ${
                            errors.name && touched.name
                              ? errorFieldClasses
                              : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.name && touched.name ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.name}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="your@email.com"
                          className={`${fieldWithIconClasses} ${
                            errors.email && touched.email
                              ? errorFieldClasses
                              : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && touched.email ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.email}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClasses}>
                        Phone <span className={optionalLabelClasses}>(Optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+355 69 XXX XXXX"
                          className={`${fieldWithIconClasses} ${
                            errors.phone && touched.phone
                              ? errorFieldClasses
                              : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.phone && touched.phone ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Select Room <span className={optionalLabelClasses}>(Optional)</span>
                      </label>
                      <select
                        name="room"
                        value={formData.room}
                        onChange={handleChange}
                        className={`${fieldBaseClasses} cursor-pointer appearance-none`}
                      >
                        <option value="">Choose a room...</option>
                        {roomOptions.map((room) => (
                          <option key={room} value={room}>
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClasses}>
                        Check-in Date <span className={optionalLabelClasses}>(Optional)</span>
                      </label>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                        <input
                          type="date"
                          name="checkin"
                          value={formData.checkin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          min={today}
                          className={`${fieldWithIconClasses} cursor-pointer ${
                            errors.checkin && touched.checkin
                              ? errorFieldClasses
                              : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.checkin && touched.checkin ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.checkin}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Check-out Date <span className={optionalLabelClasses}>(Optional)</span>
                      </label>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                        <input
                          type="date"
                          name="checkout"
                          value={formData.checkout}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          min={formData.checkin || today}
                          className={`${fieldWithIconClasses} cursor-pointer ${
                            errors.checkout && touched.checkout
                              ? errorFieldClasses
                              : ''
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.checkout && touched.checkout ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-2 flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.checkout}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[color:var(--muted-foreground)]" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your stay requirements, special requests, or any questions you have..."
                        rows={5}
                        className={`${fieldWithIconClasses} resize-none ${
                          errors.message && touched.message
                            ? errorFieldClasses
                            : ''
                        }`}
                      />
                    </div>

                    <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
                      <AnimatePresence>
                        {errors.message && touched.message ? (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="flex items-center gap-1 text-sm text-red-600"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {errors.message}
                          </motion.p>
                        ) : (
                          <span />
                        )}
                      </AnimatePresence>
                      <span
                        className={`ml-auto text-xs ${
                          formData.message.trim().length < 10
                            ? 'text-[color:var(--muted-foreground)]'
                            : 'text-green-600'
                        }`}
                      >
                        {formData.message.trim().length}/10 min characters
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 sm:text-lg ${
                      isSubmitting
                        ? 'cursor-not-allowed bg-primary/70'
                        : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[color:var(--muted-foreground)]">
                    By submitting this form, you agree to our privacy policy. We&apos;ll never
                    share your information with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 sm:py-16">
        <Container>
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-display text-3xl md:text-4xl">Find Us</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted-foreground)]">
              Located in the heart of Permet, just 500m from the city center
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <iframe
              title="Map showing the location of Shtepia Ime in Permet"
              src={siteDetails.mapEmbedUrl}
              className="h-[320px] w-full border-0 sm:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;

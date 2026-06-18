'use client';

import { useState, Suspense } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'All Services',
    'Yoruba Language Online Teaching',
    'Ewi / Yoruba Chanting & Poetry',
    'MC / Event Compere Services',
    'Jingle Production',
    'Church Programs & Worship',
    'Burial & Tribute Services',
    'Wedding Ceremony Services',
    'Additional Creative Services',
    'Yoruba Classes'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:Yorubalanguage29@gmail.com?subject=Service Enquiry - ${form.service}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-text-light/80 max-w-2xl mx-auto">We respond within 24 hours. Contact us to book a service, ask questions, or discuss your needs.</p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Phone className="w-8 h-8" />,
              title: 'Phone',
              content: '+234 813 030 1366',
              link: 'tel:+2348130301366'
            },
            {
              icon: <Mail className="w-8 h-8" />,
              title: 'Email',
              content: 'Yorubalanguage29@gmail.com',
              link: 'mailto:Yorubalanguage29@gmail.com'
            },
            {
              icon: <span className="text-3xl">💬</span>,
              title: 'WhatsApp',
              content: 'Chat with us on WhatsApp',
              link: 'https://wa.me/2348130301366'
            }
          ].map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target={contact.link.startsWith('http') && !contact.link.startsWith('mailto:') && !contact.link.startsWith('tel:') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') && !contact.link.startsWith('mailto:') && !contact.link.startsWith('tel:') ? 'noopener noreferrer' : undefined}
              className="bg-ivory rounded-lg p-8 border-l-4 border-gold hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-gold mb-4 flex justify-center">{contact.icon}</div>
              <h3 className="font-semibold text-navy text-lg mb-2">{contact.title}</h3>
              <p className="text-text-primary/80">{contact.content}</p>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="bg-gold/10 rounded-lg p-6 max-w-4xl mx-auto text-center mb-16">
          <p className="text-text-primary/80">
            Based in Nigeria, we serve clients globally. We are available for consultations across all time zones.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-ivory">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Send us a Message
          </h2>

          {submitted && (
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded mb-8">
              <p className="text-green-800 font-semibold">Thank you for your enquiry! We'll get back to you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-navy font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-navy font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-navy font-semibold mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:border-gold"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-navy font-semibold mb-2">Service Enquiry *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:border-gold"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-navy font-semibold mb-2">Message *</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:border-gold resize-none"
                placeholder="Tell us about your enquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              Send Enquiry
            </button>
          </form>

          <p className="text-center text-text-primary/70 text-sm mt-6">
            We respond to all enquiries within 24 hours. Thank you for your interest in Ibafoluejire!
          </p>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen" />}>
      <ContactContent />
    </Suspense>
  );
}

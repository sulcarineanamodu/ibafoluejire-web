'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { BookOpen, Mic2, Music, Church, Heart } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Yoruba Language Online Teaching',
    description: 'Beginner/Intermediate/Advanced levels, private & group sessions with cultural context.',
    href: '/services#language',
  },
  {
    icon: Mic2,
    title: 'Ewi / Yoruba Chanting & Poetry',
    description: 'Custom composition and live performance of ancient Yoruba spoken word.',
    href: '/services#ewi',
  },
  {
    icon: Mic2,
    title: 'MC / Event Compere Services',
    description: 'Bilingual compere for weddings, ceremonies, and cultural events.',
    href: '/services#mc',
  },
  {
    icon: Music,
    title: 'Jingle Production',
    description: 'Custom composition with studio-quality recording in Yoruba & English.',
    href: '/services#jingles',
  },
  {
    icon: Church,
    title: 'Church Programs & Worship',
    description: 'Oríkì Olódùmarè compositions and spiritual worship content.',
    href: '/services#church',
  },
  {
    icon: Heart,
    title: 'Burial & Tribute Services',
    description: 'Eulogy narration and ceremonial tributes with deep cultural respect.',
    href: '/services#tributes',
  },
];

const pillars = [
  {
    title: 'Cultural Expertise',
    description: 'Deep knowledge of Yoruba traditions, protocols, and sacred expressions.',
  },
  {
    title: 'Premium Production',
    description: 'Professional-grade audio, video, and event management services.',
  },
  {
    title: 'Personalised Service',
    description: 'Custom tailored solutions for your unique cultural and creative needs.',
  },
  {
    title: 'Spiritual Grounding',
    description: 'Every service infused with reverence for Yoruba heritage and values.',
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <>
      <HeroSection />

      {/* Brand Intro Strip */}
      <section className="bg-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Cultural Institution', icon: '🏛️' },
              { title: 'Media Brand', icon: '🎬' },
              { title: 'Learning Platform', icon: '📚' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-lg font-semibold text-navy">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 font-bold">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              Explore All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 font-bold">
              Why Choose Ibafoluejire
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border-l-4 border-gold"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{pillar.title}</h3>
                <p className="text-text-primary/80 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="font-serif text-4xl md:text-5xl text-text-light mb-6 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            className="text-lg text-gold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact us today to book a service, enquire about Yoruba classes, or discuss your event.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all text-center"
            >
              Book a Service
            </Link>
            <a
              href="https://wa.me/2348130301366?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fbb58] transition-all text-center"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

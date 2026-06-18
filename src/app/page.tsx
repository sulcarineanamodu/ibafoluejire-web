'use client'

import { CinematicHero } from '@/components/CinematicHero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Mic2, Music, Church, Heart, Wand2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-navy-dark">
      {/* Hero Section */}
      <CinematicHero />

      {/* Brand Pillars Strip */}
      <section className="bg-gradient-to-r from-navy to-navy-dark py-12 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏛', label: 'Cultural Institution', subtext: 'Preserving Yoruba oral tradition' },
              { icon: '🎙', label: 'Media & Production', subtext: 'Studio-quality audio and performance' },
              { icon: '📚', label: 'Learning Platform', subtext: 'Language classes for all levels' },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl mb-4">{pillar.icon}</p>
                <h3 className="font-cormorant text-xl text-ivory font-semibold mb-2">{pillar.label}</h3>
                <p className="font-inter text-sm text-ivory/60">{pillar.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preserving Heritage Section */}
      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-cinzel text-4xl md:text-5xl text-navy text-center mb-16 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Legacy Built on Three Pillars
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Language',
                body: 'Teaching Yoruba to future generations — one word, one lesson, one family at a time.',
                icon: '📖',
              },
              {
                title: 'Voice',
                body: 'Ewi chanting, Oríkì, and ceremonial expression — the spoken art of our ancestors.',
                icon: '🎤',
              },
              {
                title: 'Spirituality',
                body: 'Praise and reverence rooted in Yoruba tradition — for the church, the altar, and the soul.',
                icon: '🙏',
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl mb-6">{pillar.icon}</p>
                <h3 className="font-cormorant text-2xl text-gold font-semibold mb-4">{pillar.title}</h3>
                <p className="font-inter text-navy/70 leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Glassmorphism) */}
      <section className="bg-navy-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold mb-4">Our Services</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Yoruba Language Teaching', desc: 'Online classes for all levels' },
              { icon: Mic2, title: 'Ewi Chanting', desc: 'Ancient Yoruba spoken word' },
              { icon: Music, title: 'MC / Compere Services', desc: 'Event hosting with cultural respect' },
              { icon: Music, title: 'Jingle Production', desc: 'Custom audio for brands' },
              { icon: Church, title: 'Church Programs', desc: 'Worship and spiritual content' },
              { icon: Heart, title: 'Burial & Tribute', desc: 'Ceremonial excellence' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-full p-8 rounded-2xl transition-all duration-400 hover:-translate-y-2"
                  style={{
                    background: 'rgba(11, 28, 63, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201, 168, 76, 0.3)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.boxShadow =
                      '0 0 40px rgba(201, 168, 76, 0.2), 0 20px 40px rgba(0,0,0,0.4)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(201, 168, 76, 0.7)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.boxShadow =
                      '0 4px 24px rgba(0,0,0,0.3)'
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(201, 168, 76, 0.3)'
                  }}
                >
                  <service.icon className="w-12 h-12 text-gold mb-4 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="font-cormorant text-xl text-ivory font-semibold mb-2">{service.title}</h3>
                  <p className="font-inter text-sm text-ivory/70 mb-4">{service.desc}</p>
                  <Link href="/services" className="font-inter text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                    Enquire →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-navy py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Events Hosted' },
              { number: '500+', label: 'Students Taught' },
              { number: '50+', label: 'Audio Productions' },
              { number: '44+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-cinzel text-5xl text-gold font-bold mb-2">{stat.number}</p>
                <p className="font-inter text-xs text-ivory/60 uppercase tracking-widest">{stat.label}</p>
                {i < 3 && <div className="hidden md:block absolute right-0 h-12 w-px bg-gold/30 top-1/2 -translate-y-1/2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold via-gold-light to-burgundy py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="font-cinzel text-4xl md:text-5xl text-navy font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Bring Your Culture to Life?
          </motion.h2>
          <motion.p
            className="font-inter text-lg text-navy/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether it's a Yoruba lesson, a ceremonial performance, or a jingle production — we are ready to serve you with excellence.
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
              className="px-8 py-4 bg-navy text-gold font-semibold rounded-lg hover:bg-navy-dark transition-all"
            >
              Book a Service
            </Link>
            <a
              href="https://wa.me/2348130301366"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#25D366] font-semibold rounded-lg hover:bg-ivory transition-all"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

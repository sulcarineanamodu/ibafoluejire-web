'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Mic2, Music, Church, Heart } from 'lucide-react'
import { PatternOverlay } from '@/components/PatternOverlay'

const services = [
  {
    icon: BookOpen,
    title: 'Yoruba Language Teaching',
    desc: 'Beginner, Intermediate, Advanced & Private lessons',
    href: '#',
  },
  {
    icon: Mic2,
    title: 'Ewi / Yoruba Chanting',
    desc: 'Ancient Yoruba spoken word & poetry performances',
    href: '#',
  },
  {
    icon: Music,
    title: 'MC / Event Compere',
    desc: 'Professional ceremony hosting with cultural respect',
    href: '#',
  },
  {
    icon: Music,
    title: 'Jingle Production',
    desc: 'Custom audio production for brands & organizations',
    href: '#',
  },
  {
    icon: Church,
    title: 'Church Programs',
    desc: 'Worship content & spiritual ceremony hosting',
    href: '#',
  },
  {
    icon: Heart,
    title: 'Burial & Tribute',
    desc: 'Ceremonial excellence for life celebrations',
    href: '#',
  },
]

export default function Services() {
  return (
    <div className="bg-navy-dark">
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-navy-dark overflow-hidden pt-32 pb-20">
        <PatternOverlay opacity={0.06} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="font-cinzel text-5xl md:text-6xl text-ivory font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="h-1 w-16 bg-gold mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="h-full p-8 rounded-2xl transition-all duration-400 hover:-translate-y-2 cursor-pointer"
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
                  <p className="font-inter text-sm text-ivory/70">{service.desc}</p>
                  <Link
                    href="/contact"
                    className="font-inter text-gold text-sm font-semibold hover:text-gold-light transition-colors inline-block mt-4"
                  >
                    Enquire →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold via-gold-light to-burgundy py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="font-cinzel text-4xl text-navy font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Book?
          </motion.h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-navy text-gold font-semibold rounded-lg hover:bg-navy-dark transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  )
}

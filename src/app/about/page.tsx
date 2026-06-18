'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PatternOverlay } from '@/components/PatternOverlay'

export default function About() {
  return (
    <div className="bg-navy-dark">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-navy-dark overflow-hidden pt-32 pb-20">
        <PatternOverlay opacity={0.06} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="font-cinzel text-5xl md:text-6xl text-ivory font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.div
            className="h-1 w-16 bg-gold mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="font-inter text-lg text-ivory/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Preserving Yoruba heritage through language, voice, and spiritual expression
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-ivory py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-4xl text-navy font-bold mb-6">Who We Are</h2>
            <p className="font-inter text-lg text-navy/70 leading-relaxed mb-4">
              Ibafoluejire Global Services Ltd is a cultural, creative, and spiritual media company dedicated to
              preserving and promoting the Yoruba language, oral tradition, and ceremonial excellence. Through
              education, performance, and production, we bring the richness of Yoruba heritage to life.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-gold/10 p-8 rounded-2xl border-l-4 border-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl text-navy font-bold mb-4">Our Mission</h2>
            <p className="font-inter text-lg text-navy/70 leading-relaxed">
              To be the foremost creative platform connecting the world to Yoruba culture, language, and spiritual
              expression through professional services, innovative teaching, and deeply respectful ceremony.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-navy p-8 rounded-2xl border-l-4 border-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-cinzel text-3xl text-gold font-bold mb-4">Our Vision</h2>
            <p className="font-inter text-lg text-ivory/70 leading-relaxed">
              A world where Yoruba language, Ewi, and cultural ceremony are celebrated with the premium presentation
              and spiritual depth they deserve, passed down with pride to future generations.
            </p>
          </motion.div>

          {/* Values */}
          <div>
            <h2 className="font-cinzel text-3xl text-navy font-bold mb-8">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Cultural Integrity', desc: 'Unwavering respect for Yoruba traditions' },
                { title: 'Spiritual Depth', desc: 'Reverence infused in every service' },
                { title: 'Professional Excellence', desc: 'Premium quality in all we create' },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-lg border-t-4 border-gold shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <h3 className="font-cormorant text-xl text-gold font-semibold mb-3">{value.title}</h3>
                  <p className="font-inter text-navy/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-navy text-ivory font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

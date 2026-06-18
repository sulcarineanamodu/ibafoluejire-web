'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PatternOverlay } from '@/components/PatternOverlay'

const levels = [
  {
    title: 'Beginner',
    desc: 'Perfect for those starting their Yoruba journey',
    features: ['Greetings & phrases', 'Alphabet & pronunciation', 'Numbers & time', 'Basic conversations'],
  },
  {
    title: 'Intermediate',
    desc: 'Build confidence and conversational skills',
    features: ['Grammar fundamentals', 'Expanded vocabulary', 'Natural conversation', 'Idioms & expressions'],
  },
  {
    title: 'Advanced',
    desc: 'Master fluency and cultural depth',
    features: ['Complex grammar', 'Fluent conversation', 'Yoruba poetry', 'Ewi appreciation'],
  },
  {
    title: 'Private Lessons',
    desc: 'Tailored 1-on-1 sessions for your pace',
    features: ['Personalized curriculum', 'One-on-one attention', 'Flexible scheduling', 'Customized focus'],
  },
]

export default function Classes() {
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
            Learn Yoruba Online
          </motion.h1>
          <motion.div
            className="h-1 w-16 bg-gold mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="h-full p-8 rounded-2xl transition-all duration-400 hover:-translate-y-2"
                  style={{
                    background: 'rgba(11, 28, 63, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201, 168, 76, 0.3)',
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
                  <h3 className="font-cormorant text-2xl text-gold font-semibold mb-2">{level.title}</h3>
                  <p className="font-inter text-sm text-ivory/70 mb-6">{level.desc}</p>

                  <ul className="space-y-2 mb-8">
                    {level.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm font-inter text-ivory/80">
                        <span className="text-gold font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact?service=Yoruba Classes"
                    className="block text-center px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all text-sm"
                  >
                    Enquire
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
            Start Your Journey Today
          </motion.h2>
          <Link
            href="/contact?service=Yoruba Classes"
            className="inline-block px-8 py-4 bg-navy text-gold font-semibold rounded-lg hover:bg-navy-dark transition-colors"
          >
            Enquire About Classes
          </Link>
        </div>
      </section>
    </div>
  )
}

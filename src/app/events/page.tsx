'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PatternOverlay } from '@/components/PatternOverlay'

const events = [
  { icon: '💍', title: 'Yoruba Weddings', desc: 'Traditional ceremony hosting with cultural protocols' },
  { icon: '👥', title: 'Introduction Ceremonies', desc: 'Elegant hosting for traditional introductions' },
  { icon: '🍼', title: 'Naming Ceremonies', desc: 'Joyful compere services for new arrivals' },
  { icon: '⛪', title: 'Church Programs', desc: 'Hosting and worship coordination' },
  { icon: '🕯️', title: 'Burial & Tributes', desc: 'Dignified ceremony hosting for final celebrations' },
  { icon: '🎊', title: 'Corporate & Cultural Festivals', desc: 'Professional event management for celebrations' },
  { icon: '🎉', title: 'Social Events', desc: 'Hosting for birthdays, anniversaries, milestones' },
  { icon: '🎤', title: 'Cultural Programs', desc: 'Educational events and heritage presentations' },
]

export default function Events() {
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
            Events & Ceremonies
          </motion.h1>
          <motion.div
            className="h-1 w-16 bg-gold mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: 'rgba(11, 28, 63, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                }}
              >
                <p className="text-4xl mb-4">{event.icon}</p>
                <h3 className="font-cormorant text-lg text-ivory font-semibold mb-2">{event.title}</h3>
                <p className="font-inter text-sm text-ivory/70">{event.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact?service=Events and Ceremonies"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Book Your Date
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

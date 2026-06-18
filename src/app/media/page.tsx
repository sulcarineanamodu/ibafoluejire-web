'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Video, MessageSquare } from 'lucide-react'
import { PatternOverlay } from '@/components/PatternOverlay'

export default function Media() {
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
            Experience the Culture
          </motion.h1>
          <motion.p
            className="font-inter text-lg text-ivory/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear, see, and feel the magic of Yoruba culture through our work
          </motion.p>
        </div>
      </section>

      {/* Audio Samples */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <motion.h2
            className="font-cinzel text-4xl text-ivory text-center font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Audio Samples
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Music, title: 'Ewi Chanting', desc: 'Yoruba spoken word performances' },
              { icon: Music, title: 'Jingles', desc: 'Custom audio compositions' },
              { icon: Music, title: 'Oríkì Olódùmarè', desc: 'Sacred worship content' },
              { icon: Music, title: 'Tribute Recordings', desc: 'Ceremonial tributes' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center border-2 border-dashed border-gold/40"
              >
                <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-cormorant text-lg text-ivory font-semibold mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-ivory/70 mb-6">{item.desc}</p>
                <p className="text-navy/40 text-xs">Coming Soon</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <motion.h2
            className="font-cinzel text-4xl text-ivory text-center font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Video Performances
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Ceremony Highlights', desc: 'Behind-the-scenes from events' },
              { title: 'Performance Reels', desc: 'Ewi, worship, and cultural presentations' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center border-2 border-dashed border-gold/40 min-h-64 flex flex-col items-center justify-center"
              >
                <Video className="w-12 h-12 text-navy/20 mb-4" />
                <h3 className="font-cormorant text-lg text-ivory font-semibold mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-ivory/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-cinzel text-4xl text-ivory text-center font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center border-2 border-dashed border-gold/40"
              >
                <MessageSquare className="w-8 h-8 text-navy/20 mx-auto mb-4" />
                <div className="text-gold text-lg mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
                <p className="text-ivory/70 italic text-sm mb-6">Coming soon...</p>
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
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Request a Sample
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

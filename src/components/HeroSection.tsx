'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent opacity-20" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center relative z-10 py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-navy font-serif text-4xl font-bold">I</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-text-light mb-6 font-bold leading-tight"
            variants={itemVariants}
          >
            Bringing Yoruba Culture,<br />Voice, Worship & Events<br />to Life
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gold mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Premium Yoruba language teaching, Ewi chanting, event compere services, jingles, worship content, tributes, and ceremonial productions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all transform hover:scale-105 text-center"
            >
              Book a Service
            </Link>
            <Link
              href="/classes"
              className="px-8 py-3 border-2 border-gold text-text-light font-semibold rounded-lg hover:bg-gold/10 transition-all text-center"
            >
              Learn Yoruba Online
            </Link>
            <a
              href="https://wa.me/2348130301366?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fbb58] transition-all text-center"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gold" size={32} />
        </motion.div>
      </div>
    </section>
  );
}

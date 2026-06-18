'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { PatternOverlay } from './PatternOverlay'
import { GoldParticles } from './GoldParticles'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function CinematicHero() {
  return (
    <section className="relative min-h-screen bg-navy-dark overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C3F] via-[#060E1F] to-[#060E1F]" />

      {/* Gold Light Ray Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.12) 0%, transparent 55%)',
        }}
      />

      {/* Adire Pattern Overlay */}
      <PatternOverlay opacity={0.06} />

      {/* Gold Particles */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Side - 60% */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Gold Label */}
            <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
              <div className="h-0.5 w-12 bg-gold" />
              <p className="font-inter text-xs tracking-[0.3em] text-gold uppercase">
                Since 1982
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-cinzel text-5xl md:text-6xl lg:text-7xl text-ivory font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              Preserving Yoruba Heritage Through Voice, Worship & Culture
            </motion.h1>

            {/* Body Text */}
            <motion.p
              className="font-inter text-lg text-ivory/70 max-w-lg mb-12 leading-relaxed"
              variants={itemVariants}
            >
              From Yoruba language education and Ewi performances to worship productions and
              ceremonial excellence, Ibafoluejire Global Services Ltd brings culture, spirituality,
              and creativity to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
              >
                Book a Service
              </Link>
              <Link
                href="/classes"
                className="px-8 py-4 border-2 border-gold text-ivory font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300"
              >
                Learn Yoruba
              </Link>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-ivory text-ivory font-semibold rounded-lg hover:bg-ivory/10 transition-all duration-300"
              >
                Watch Performances
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - 40% */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              {/* Outer Ring (Slow Reverse Rotation) */}
              <div
                className="absolute inset-0 rounded-full border-2 border-gold/20"
                style={{
                  animation: 'spin-slow-reverse 30s linear infinite',
                }}
              />

              {/* Middle Ring (Fast Rotation) */}
              <div
                className="absolute inset-8 rounded-full border border-gold/40"
                style={{
                  animation: 'spin-slow 20s linear infinite',
                }}
              />

              {/* Glow Circle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 80px rgba(201,168,76,0.25), inset 0 0 80px rgba(201,168,76,0.15)',
                }}
              />

              {/* Logo Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gold/50 flex items-center justify-center bg-navy">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.jpg"
                    alt="Ibafoluejire Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Light Sweep Reflection */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background:
                    'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                  animation: 'light-sweep 4s ease-in-out infinite',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gold" size={32} />
      </motion.div>
    </section>
  )
}

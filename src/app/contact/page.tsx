'use client'

import { useState, Suspense } from 'react'
import { Mail, Phone } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { PatternOverlay } from '@/components/PatternOverlay'
import { motion } from 'framer-motion'

function ContactContent() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service') || ''
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'All Services',
    'Yoruba Language Teaching',
    'Ewi / Yoruba Chanting',
    'MC / Event Compere',
    'Jingle Production',
    'Church Programs',
    'Burial & Tribute',
    'Wedding Ceremony',
    'Other Services',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    const mailto = `mailto:Yorubalanguage29@gmail.com?subject=Service Enquiry - ${form.service}&body=${encodeURIComponent(mailtoBody)}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

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
            Get in Touch
          </motion.h1>
          <motion.p
            className="font-inter text-lg text-ivory/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We respond within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Phone, title: 'Phone', content: '+234 813 030 1366', link: 'tel:+2348130301366' },
            { icon: Mail, title: 'Email', content: 'Yorubalanguage29@gmail.com', link: 'mailto:Yorubalanguage29@gmail.com' },
            { icon: undefined, title: 'WhatsApp', content: 'Chat with us', link: 'https://wa.me/2348130301366' },
          ].map((contact, i) => (
            <motion.a
              key={i}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(11, 28, 63, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201, 168, 76, 0.3)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 40px rgba(201, 168, 76, 0.2)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'
              }}
            >
              {contact.icon && <contact.icon className="w-8 h-8 text-gold mx-auto mb-4" />}
              {!contact.icon && <div className="text-3xl mb-4">💬</div>}
              <h3 className="font-cormorant text-xl text-gold font-semibold mb-2">{contact.title}</h3>
              <p className="font-inter text-ivory/70">{contact.content}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-ivory py-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            className="font-cinzel text-4xl text-navy font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Send us a Message
          </motion.h2>

          {submitted && (
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded mb-8">
              <p className="text-green-800 font-semibold">Thank you! We'll be in touch shortly.</p>
            </div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-inter font-semibold text-navy mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-inter font-semibold text-navy mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 font-inter"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-inter font-semibold text-navy mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 font-inter"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block font-inter font-semibold text-navy mb-2">Service Enquiry *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 font-inter"
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
              <label className="block font-inter font-semibold text-navy mb-2">Message *</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 font-inter resize-none"
                placeholder="Tell us about your enquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-navy text-ivory font-semibold rounded-lg hover:bg-navy-dark transition-colors font-inter"
            >
              Send Enquiry
            </button>
          </motion.form>

          <p className="text-center text-navy/70 text-sm mt-6 font-inter">
            Based in Nigeria · Serving clients globally
          </p>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-navy-dark min-h-screen" />}>
      <ContactContent />
    </Suspense>
  )
}

'use client';

import Link from 'next/link';
import { PatternOverlay } from './PatternOverlay';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Yoruba Classes', href: '/classes' },
    { label: 'Events', href: '/events' },
    { label: 'Media', href: '/media' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-navy-dark text-text-light overflow-hidden">
      {/* Pattern Overlay */}
      <PatternOverlay opacity={0.04} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-lg">
                <span className="text-navy font-cinzel font-bold text-2xl">I</span>
              </div>
            </Link>
            <p className="text-text-light/70 text-sm mb-6 leading-relaxed font-inter">
              Celebrating Yoruba Culture, Language & Ceremony
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-cinzel text-sm tracking-widest text-gold uppercase mb-6 font-bold">
              About
            </h4>
            <p className="text-text-light/60 text-sm font-inter leading-relaxed">
              Ibafoluejire Global Services Ltd is dedicated to preserving and promoting Yoruba culture worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-sm tracking-widest text-gold uppercase mb-6 font-bold">
              Services
            </h4>
            <ul className="space-y-2">
              {['Yoruba Language', 'Ewi Chanting', 'MC/Compere', 'Jingle Production', 'Church Programs', 'Burial & Tribute'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-text-light/60 hover:text-gold transition-colors text-sm font-inter"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-sm tracking-widest text-gold uppercase mb-6 font-bold">
              Contact
            </h4>
            <div className="space-y-4 text-sm font-inter">
              <div>
                <p className="text-gold font-semibold mb-1">Phone</p>
                <a
                  href="tel:+2348130301366"
                  className="text-text-light/60 hover:text-gold transition-colors"
                >
                  +234 813 030 1366
                </a>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">Email</p>
                <a
                  href="mailto:Yorubalanguage29@gmail.com"
                  className="text-text-light/60 hover:text-gold transition-colors break-all"
                >
                  Yorubalanguage29@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/2348130301366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/60 hover:text-gold transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-light/50 text-xs font-inter">
              © {currentYear} Ibafoluejire Global Services Ltd. Managed by Prestige Web Co.
            </p>
            <p className="text-text-light/50 text-xs font-inter">
              Based in Nigeria · Serving clients globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

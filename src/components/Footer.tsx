'use client';

import Link from 'next/link';

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
    <footer className="bg-navy text-text-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xl">I</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold">Ibafoluejire</h3>
            </Link>
            <p className="text-text-light/80 text-sm mb-6 leading-relaxed">
              Celebrating Yoruba Culture, Language & Ceremony
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-light/80 hover:text-gold transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-text-light/80">
                <span className="text-gold font-semibold">Phone:</span>
                <br />
                +234 813 030 1366
              </p>
              <p className="text-text-light/80">
                <span className="text-gold font-semibold">Email:</span>
                <br />
                <a href="mailto:Yorubalanguage29@gmail.com" className="hover:text-gold transition-colors">
                  Yorubalanguage29@gmail.com
                </a>
              </p>
              <p className="text-text-light/80">
                <span className="text-gold font-semibold">WhatsApp:</span>
                <br />
                <a href="https://wa.me/2348130301366" className="hover:text-gold transition-colors">
                  Chat with us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-light/60 text-sm">
              © {currentYear} Ibafoluejire Global Services Ltd. Managed by Prestige Web Co.
            </p>
            <p className="text-text-light/60 text-sm">
              Based in Nigeria · Serving clients globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

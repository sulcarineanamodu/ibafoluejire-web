'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/classes', label: 'Yoruba Classes' },
    { href: '/events', label: 'Events' },
    { href: '/media', label: 'Media' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? 'bg-navy/95 shadow-2xl shadow-gold/10'
          : 'bg-navy-dark/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image src="/logo.png" alt="Ibafoluejire Logo" fill className="object-contain" />
          </div>
          <span className="text-ivory hidden sm:inline font-cormorant font-semibold text-lg">Ibafoluejire</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-inter text-sm transition-colors duration-300 ${
                isScrolled
                  ? 'text-text-light hover:text-gold'
                  : 'text-text-light/80 hover:text-gold-light'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2 bg-gradient-to-r from-gold to-gold-light text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all text-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-light"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-navy border-t border-gold/20">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-text-light hover:text-gold transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-gold text-navy font-semibold rounded text-center hover:bg-gold-light transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, href, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="h-full bg-navy border-t-4 border-gold p-8 rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
            <Icon className="text-gold" size={32} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-text-light mb-3">{title}</h3>

        {/* Description */}
        <p className="text-text-light/80 mb-6 text-sm leading-relaxed">{description}</p>

        {/* Link */}
        <Link
          href={href}
          className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors group/link"
        >
          Learn More
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

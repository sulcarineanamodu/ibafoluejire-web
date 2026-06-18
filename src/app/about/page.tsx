import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Ibafoluejire Global Services Ltd',
  description: 'Our story, mission, and vision for preserving and celebrating Yoruba culture, language, and ceremony.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Who We Are */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-text-primary/80 leading-relaxed mb-4">
              Ibafoluejire Global Services Ltd is a cultural, creative, and spiritual media company dedicated to preserving and promoting the Yoruba language, oral tradition, and ceremonial excellence. Through education, performance, and production, we bring the richness of Yoruba heritage to life — from intimate private lessons to grand ceremonial productions.
            </p>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              Based in Nigeria and serving clients globally, we are committed to ensuring that Yoruba culture receives the premium presentation and reverent treatment it deserves.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gold/10 p-8 rounded-lg border-l-4 border-gold">
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              To be the foremost creative platform connecting the world to Yoruba culture, language, and spiritual expression through professional services, innovative teaching, and deeply respectful ceremony.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-ivory p-8 rounded-lg border-l-4 border-navy">
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              A world where Yoruba language, Ewi, and cultural ceremony are celebrated with the premium presentation and spiritual depth they deserve, passed down with pride to future generations.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Cultural Integrity', desc: 'Unwavering respect for Yoruba traditions and sacred protocols.' },
                { title: 'Spiritual Depth', desc: 'Every service infused with reverence and meaningful connection.' },
                { title: 'Professional Excellence', desc: 'Premium quality in production, teaching, and ceremony.' },
              ].map((value, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-t-4 border-gold shadow-sm">
                  <h3 className="font-semibold text-navy text-xl mb-3">{value.title}</h3>
                  <p className="text-text-primary/80">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

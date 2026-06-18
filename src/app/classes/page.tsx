import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yoruba Classes | Ibafoluejire Global Services Ltd',
  description: 'Learn Yoruba online — Beginner, Intermediate, Advanced, and Private lessons with cultural context.',
};

export default function ClassesPage() {
  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'Perfect for those starting their Yoruba journey',
      includes: [
        'Greetings & basic phrases',
        'Yoruba alphabet & pronunciation',
        'Numbers & counting',
        'Days, months & time',
        'Simple conversations',
        'Cultural context & etiquette'
      ]
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Build confidence and conversational skills',
      includes: [
        'Grammar fundamentals',
        'Expanded vocabulary',
        'Natural conversation practice',
        'Idioms & expressions',
        'Writing & listening skills',
        'Cultural nuances'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Master fluency and cultural depth',
      includes: [
        'Complex grammar & syntax',
        'Fluent conversation',
        'Yoruba poetry & literature',
        'Ewi appreciation',
        'Traditional expressions',
        'Mastery of cultural context'
      ]
    },
    {
      id: 'private',
      title: 'Private Lessons',
      description: 'Tailored 1-on-1 sessions for your pace',
      includes: [
        'Personalised curriculum',
        'One-on-one attention',
        'Flexible scheduling',
        'Customised focus areas',
        'Rapid progress',
        'Direct feedback'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Learn Yoruba Online</h1>
          <p className="text-text-light/80 max-w-2xl mx-auto">Discover the richness of Yoruba language through expert teaching and cultural immersion.</p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-text-primary/80 leading-relaxed mb-6">
            Our comprehensive Yoruba language programme combines expert instruction with deep cultural context. Whether you're reconnecting with your heritage, expanding your professional skills, or simply passionate about African languages, we have the perfect programme for you.
          </p>
          <p className="text-lg text-text-primary/80 leading-relaxed">
            All sessions are conducted online via Zoom or WhatsApp, with flexible scheduling to fit your lifestyle.
          </p>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {levels.map((level) => (
              <div key={level.id} className="bg-white rounded-lg p-8 border-t-4 border-gold shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">{level.title}</h3>
                <p className="text-text-primary/80 text-sm mb-6">{level.description}</p>

                <div className="space-y-2 mb-8">
                  {level.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gold font-bold">✓</span>
                      <span className="text-text-primary/70">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact?service=Yoruba Classes"
                  className="block text-center px-6 py-2 bg-navy text-text-light font-semibold rounded hover:bg-navy-dark transition-colors text-sm"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Choose Your Format
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👥', title: 'Group Classes', desc: 'Learn with others in an interactive community setting.' },
              { icon: '🎯', title: 'Private Lessons', desc: 'One-on-one tuition tailored to your specific goals.' },
              { icon: '⏰', title: 'Flexible Schedule', desc: 'Morning, afternoon, or evening sessions that work for you.' },
              { icon: '💻', title: 'Online via Zoom', desc: 'Learn from anywhere in the world with video & screen sharing.' },
            ].map((format, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{format.icon}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{format.title}</h3>
                <p className="text-text-primary/80 text-sm">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-light font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-lg text-gold mb-8">Connect with us to choose your level, discuss scheduling, and begin learning Yoruba with expert guidance.</p>
          <Link
            href="/contact?service=Yoruba Classes"
            className="inline-block px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            Enquire About Classes
          </Link>
        </div>
      </section>
    </div>
  );
}

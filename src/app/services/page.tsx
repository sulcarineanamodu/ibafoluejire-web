import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Ibafoluejire Global Services Ltd',
  description: 'Yoruba language teaching, Ewi chanting, event MC services, jingle production, worship content, and ceremonial productions.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'language',
      title: 'Yoruba Language Online Teaching',
      tagline: 'Language is the gateway to culture. Let us open that door for you.',
      forWho: 'Diaspora families, students, professionals, heritage seekers',
      includes: [
        'Beginner/Intermediate/Advanced levels',
        'Private & group sessions',
        'Pronunciation coaching',
        'Grammar & cultural expression',
        'Flexible online scheduling'
      ]
    },
    {
      id: 'ewi',
      title: 'Ewi / Yoruba Chanting & Poetry',
      tagline: 'Where rhythm meets meaning — the ancient art of Yoruba spoken word.',
      forWho: 'Events, ceremonies, media productions, cultural organisations',
      includes: [
        'Custom Ewi composition',
        'Live performance',
        'Recorded delivery',
        'Motivational & celebratory themes'
      ]
    },
    {
      id: 'mc',
      title: 'MC / Event Compere Services',
      tagline: 'Your event deserves a voice that commands the room and honours the culture.',
      forWho: 'Weddings, naming ceremonies, corporate events, cultural festivals, church programs',
      includes: [
        'Bilingual (English & Yoruba) compere',
        'Traditional greetings & protocols',
        'Full event flow management',
        'Rehearsal coordination'
      ]
    },
    {
      id: 'jingles',
      title: 'Jingle Production',
      tagline: 'A great jingle is remembered long after the moment passes.',
      forWho: 'Businesses, NGOs, churches, radio stations, social media brands',
      includes: [
        'Custom composition',
        'Yoruba & English options',
        'Studio-quality recording',
        'Quick turnaround'
      ]
    },
    {
      id: 'church',
      title: 'Church Programs — Oríkì Olódùmarè & Worship Content',
      tagline: 'Elevating worship through the poetic power of Yoruba sacred expression.',
      forWho: 'Churches, ministries, prayer programmes, gospel events',
      includes: [
        'Oríkì Olódùmarè compositions',
        'Worship voiceover',
        'Program hosting',
        'Spiritual chanting'
      ]
    },
    {
      id: 'tributes',
      title: 'Burial & Tribute Services',
      tagline: 'Honouring a life well lived with the dignity and depth it deserves.',
      forWho: 'Families planning burial ceremonies, tribute events',
      includes: [
        'Eulogy narration in Yoruba',
        'Tribute Ewi',
        'Ceremonial compere services',
        'Recorded tribute content'
      ]
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony Services',
      tagline: 'Your love story, told in the language of your roots.',
      forWho: 'Traditional Yoruba weddings, introduction ceremonies, white weddings with cultural elements',
      includes: [
        'Traditional ceremony hosting',
        'Bilingual compere',
        'Cultural blessings & protocols',
        'Coordination with families'
      ]
    },
    {
      id: 'other',
      title: 'Additional Creative Services',
      tagline: 'Your voice. Your story. Your audience.',
      forWho: 'Diverse creative projects',
      includes: [
        'Yoruba Storytelling',
        'Voice-over Production',
        'Podcast Intro/Outro',
        'Motivational Ewi',
        'Social Media Audio Content'
      ]
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-text-light/80 max-w-2xl mx-auto">Premium creative, educational, and ceremonial services celebrating Yoruba culture.</p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
              {/* Content */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gold font-semibold mb-6 italic">"{service.tagline}"</p>

                <div className="mb-8">
                  <h3 className="text-navy font-semibold mb-2">Who it's for:</h3>
                  <p className="text-text-primary/80">{service.forWho}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-navy font-semibold mb-4">What's included:</h3>
                  <ul className="space-y-2">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-gold font-bold mt-1">✓</span>
                        <span className="text-text-primary/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?service=${service.title}`}
                  className="inline-block px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Enquire About This Service
                </Link>
              </div>

              {/* Image placeholder */}
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-navy/10 rounded-lg h-96 flex items-center justify-center border-2 border-gold/20">
                  <div className="text-center">
                    <p className="text-navy/40 text-lg">Service Showcase</p>
                    <p className="text-navy/30 text-sm mt-2">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-6">Ready to Book?</h2>
          <p className="text-lg text-text-primary/80 mb-8">Contact us today to discuss your needs, request a quote, or schedule a service.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

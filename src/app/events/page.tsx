import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events & Ceremonies | Ibafoluejire Global Services Ltd',
  description: 'Premium event compere, ceremony hosting, and cultural event services.',
};

export default function EventsPage() {
  const eventTypes = [
    { icon: '💍', title: 'Traditional Yoruba Weddings', desc: 'Complete ceremony hosting with cultural protocols and bilingual compere.' },
    { icon: '👥', title: 'Introduction Ceremonies', desc: 'Elegant hosting for traditional introductions and engagement celebrations.' },
    { icon: '🍼', title: 'Naming Ceremonies', desc: 'Joyful compere services celebrating the arrival of new life.' },
    { icon: '⛪', title: 'Church Programs', desc: 'Hosting, worship coordination, and Oríkì Olódùmarè presentations.' },
    { icon: '🕯️', title: 'Burial & Funeral Tributes', desc: 'Dignified ceremony hosting and tribute Ewi for final celebrations.' },
    { icon: '🎊', title: 'Corporate & Cultural Festivals', desc: 'Professional event management for large-scale cultural celebrations.' },
    { icon: '🎉', title: 'Social Events', desc: 'Hosting for birthdays, anniversaries, and special milestone celebrations.' },
    { icon: '🎤', title: 'Cultural Programs', desc: 'Educational events, heritage presentations, and cultural showcases.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Events & Ceremonies</h1>
          <p className="text-text-light/80 max-w-2xl mx-auto">Professional compere and ceremony services that honour Yoruba traditions.</p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, i) => (
              <div
                key={i}
                className="bg-ivory rounded-lg p-6 border-l-4 border-gold hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{event.title}</h3>
                <p className="text-text-primary/80 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-gold/10 to-burgundy/10 rounded-lg p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-navy font-bold mb-4">Book Your Date</h2>
          <p className="text-text-primary/80 mb-8">Whether you're planning a intimate celebration or a grand ceremonial event, we're here to ensure every moment is handled with professionalism, cultural respect, and joy.</p>
          <Link
            href="/contact?service=Events and Ceremonies"
            className="inline-block px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
          >
            Enquire About Your Event
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Why Hire Ibafoluejire?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cultural Expertise',
                points: [
                  'Deep knowledge of Yoruba traditions & protocols',
                  'Respect for sacred ceremonies & customs',
                  'Authentic language & appropriate greetings',
                  'Guidance on traditional arrangements'
                ]
              },
              {
                title: 'Professional Excellence',
                points: [
                  'Polished, confident voice & presence',
                  'Bilingual (English & Yoruba) fluency',
                  'Event flow management & timing',
                  'Coordination with families & organisers'
                ]
              },
              {
                title: 'Personalised Service',
                points: [
                  'Pre-event planning & coordination',
                  'Rehearsals & familiarisation',
                  'Flexible to your vision & needs',
                  'Responsive & attentive throughout'
                ]
              },
              {
                title: 'Spiritual Grounding',
                points: [
                  'Reverence for ceremonial significance',
                  'Appropriate tone for each moment',
                  'Honoring ancestors & heritage',
                  'Creating meaningful connections'
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-navy text-xl mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gold font-bold">✓</span>
                      <span className="text-text-primary/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-light font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-lg text-gold mb-8">Contact us today to discuss your event, ask questions, and book your date with confidence.</p>
          <a
            href="https://wa.me/2348130301366?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20event%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fbb58] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}

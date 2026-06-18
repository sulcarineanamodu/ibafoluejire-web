import type { Metadata } from 'next';
import Link from 'next/link';
import { Music, Video, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Showcase | Ibafoluejire Global Services Ltd',
  description: 'Experience our Ewi chanting, jingles, performances, and client testimonials.',
};

export default function MediaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy text-text-light py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Experience the Culture</h1>
          <p className="text-text-light/80 max-w-2xl mx-auto">Hear, see, and feel the magic of Yoruba culture through our work.</p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Audio Samples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Audio Samples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Music className="w-8 h-8" />, title: 'Ewi Chanting', desc: 'Ancient Yoruba spoken word & poetry performances' },
              { icon: <Music className="w-8 h-8" />, title: 'Jingles', desc: 'Custom composition jingles for brands & businesses' },
              { icon: <Music className="w-8 h-8" />, title: 'Oríkì Olódùmarè', desc: 'Sacred worship & praise performances' },
              { icon: <Music className="w-8 h-8" />, title: 'Tributes', desc: 'Ceremonial tribute narratives & recordings' },
              { icon: <Music className="w-8 h-8" />, title: 'Teaching Samples', desc: 'Language lessons & pronunciation guides' },
              { icon: <Music className="w-8 h-8" />, title: 'Event Highlights', desc: 'Recordings from ceremonies & events' },
            ].map((item, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-gold/40 rounded-lg p-8 text-center hover:border-gold transition-colors"
              >
                <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-text-primary/70 text-sm mb-6">{item.desc}</p>
                <div className="w-16 h-16 mx-auto bg-navy/5 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy text-2xl">▶</span>
                </div>
                <p className="text-navy/40 text-xs">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/10 rounded-lg p-8 text-center max-w-2xl mx-auto mb-20">
          <p className="text-text-primary/80">
            Audio samples coming soon. In the meantime, reach out to request a sample of our work or to discuss your project needs.
          </p>
        </div>
      </section>

      {/* Video Gallery Placeholder */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Video Performances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Ceremony Highlights', desc: 'Behind-the-scenes from weddings, naming ceremonies, and events' },
              { title: 'Performance Reels', desc: 'Ewi chanting, worship performances, and cultural presentations' },
              { title: 'Teaching Videos', desc: 'Yoruba language tutorials & cultural education content' },
              { title: 'Client Testimonials (Video)', desc: 'See what clients say about working with us' },
            ].map((item, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-gold/40 rounded-lg p-8 flex flex-col items-center justify-center min-h-64 hover:border-gold transition-colors"
              >
                <Video className="text-navy/20 mb-4" size={48} />
                <h3 className="font-semibold text-navy text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-text-primary/70 text-sm text-center mb-6">{item.desc}</p>
                <p className="text-navy/40 text-xs">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/10 rounded-lg p-8 text-center max-w-2xl mx-auto mb-20">
          <p className="text-text-primary/80">
            Video content coming soon. Subscribe to our channels for the latest performances and updates.
          </p>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-12 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-2 border-dashed border-gold/40 rounded-lg p-8 text-center hover:border-gold transition-colors"
              >
                <MessageSquare className="text-navy/20 mx-auto mb-4" size={32} />
                <div className="text-gold text-lg mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
                <p className="text-text-primary/70 italic mb-6 text-sm">
                  "Testimonial from a satisfied client..."
                </p>
                <p className="text-navy font-semibold text-sm">Client Name</p>
                <p className="text-text-primary/60 text-xs">Service Type</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/10 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <p className="text-text-primary/80 mb-6">
            Client testimonials coming soon as we build our portfolio of satisfied clients.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-text-light font-semibold rounded-lg hover:bg-navy-dark transition-colors"
          >
            Request a Sample
          </Link>
        </div>
      </section>
    </div>
  );
}

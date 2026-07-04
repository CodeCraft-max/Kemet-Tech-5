import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const TESTIMONIALS = [
  {
    name: 'David Okonkwo',
    title: 'Frontend Engineer @ Stripe',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'Kemet Tech\'s Oracle Path was the single best investment I made in my career. Within 4 months I landed a role that doubled my previous salary.',
  },
  {
    name: 'Sara El-Amin',
    title: 'ML Engineer @ DeepMind',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'The AI courses here are genuinely cutting-edge. Nadia\'s LLM course alone was worth more than the bootcamp I paid $15,000 for.',
  },
  {
    name: 'Marcus Andrade',
    title: 'Cloud Architect @ Microsoft',
    image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'The project-based approach is what sets Kemet apart. I built a real Kubernetes cluster, not a toy app. That portfolio got me 6 interviews in one week.',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} className="star-filled fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="py-28 relative bg-night-900 overflow-hidden">
      <div className="orb w-96 h-96 bg-teal-700/5 bottom-0 right-[-5%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">{t.testimonials.sectionLabel}</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            {t.testimonials.title}
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => {
            const translated = t.testimonials.items[index];
            return (
            <div key={translated.name} className="glass-card glass-card-hover rounded-2xl p-7 relative group flex flex-col">
              <Quote
                size={48}
                className="absolute top-5 right-5 text-gold-700/15 group-hover:text-gold-700/25 transition-colors"
              />

              <Stars n={testimonial.rating} />

              <blockquote className="text-ivory-300 text-sm leading-relaxed mt-5 mb-6 flex-1 font-light italic">
                "{translated.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <img
                  src={testimonial.image}
                  alt={translated.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gold-700/30"
                />
                <div>
                  <div className="text-ivory-100 font-semibold text-sm">{translated.name}</div>
                  <div className="text-ivory-500 text-xs">{translated.title}</div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

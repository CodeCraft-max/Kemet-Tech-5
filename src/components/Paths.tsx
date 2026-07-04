import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const PATHS = [
  { title: 'Scribe', color: 'teal' },
  { title: 'Oracle', color: 'gold', featured: true },
  { title: 'Pharaoh', color: 'nile' },
];

const colorStyles: Record<string, { border: string; text: string; bg: string; btn: string }> = {
  teal: {
    border: 'border-teal-600/30',
    text: 'text-teal-400',
    bg: 'bg-teal-600/10',
    btn: 'btn-outline',
  },
  gold: {
    border: 'border-gold-600/50',
    text: 'text-gold-300',
    bg: 'bg-gold-600/10',
    btn: 'btn-gold',
  },
  nile: {
    border: 'border-nile-600/30',
    text: 'text-nile-400',
    bg: 'bg-nile-600/10',
    btn: 'btn-outline',
  },
};

export default function Paths() {
  const { t } = useLanguage();
  return (
    <section id="paths" className="py-28 relative bg-night-900 overflow-hidden">
      <div className="orb w-96 h-96 bg-nile-700/6 bottom-0 left-[-5%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">{t.paths.sectionLabel}</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            {t.paths.title}
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t.paths.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PATHS.map((path, index) => {
            const c = colorStyles[path.color];
            return (
              <div
                key={path.title}
                className={`glass-card glass-card-hover rounded-2xl p-7 flex flex-col border ${c.border} relative ${
                  path.featured ? 'pricing-featured' : ''
                }`}
              >
                {path.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-night-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {t.paths.featuredBadge}
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                  <span className={`font-display font-bold text-lg ${c.text}`}>
                    {path.title[0]}
                  </span>
                </div>

                <div className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-1`}>
                  {t.paths.items[index].subtitle}
                </div>
                <h3 className="font-display text-2xl font-bold text-ivory-100 mb-3">{t.paths.items[index].title}</h3>
                <p className="text-ivory-500 text-sm leading-relaxed mb-5">{t.paths.items[index].desc}</p>

                <div className="flex gap-4 mb-6">
                  <div className={`px-3 py-1.5 rounded-lg ${c.bg} border ${c.border} text-xs font-semibold ${c.text}`}>
                    {t.paths.items[index].duration}
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg ${c.bg} border ${c.border} text-xs font-semibold ${c.text}`}>
                    {t.paths.items[index].courses} {t.paths.coursesLabel}
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {t.paths.items[index].features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-ivory-400 text-sm">
                      <Check size={14} className={`${c.text} mt-0.5 shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#pricing" className={`${c.btn} justify-center text-xs`}>
                  {t.paths.items[index].cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

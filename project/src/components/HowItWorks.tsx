import { Search, BookOpen, Code2, Trophy } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Choose Your Path',
    desc: 'Browse 80+ curated courses across four disciplines. Filter by skill level, duration, or career goal.',
  },
  {
    num: '02',
    icon: BookOpen,
    title: 'Learn by Doing',
    desc: 'Every lesson is anchored to a real project. Watch, read, practice — on any device, at any pace.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build Real Projects',
    desc: 'Apply your skills to capstone projects reviewed by industry experts and added to your portfolio.',
  },
  {
    num: '04',
    icon: Trophy,
    title: 'Get Certified',
    desc: 'Earn a Kemet Tech credential recognized by 500+ hiring partners across the globe.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 relative bg-night-950 overflow-hidden">
      <div className="orb w-80 h-80 bg-teal-600/6 bottom-0 left-[-5%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">The Process</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            Your Path to{' '}
            <span className="gold-text">Mastery</span>
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            A proven four-step journey from curious beginner to confident professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-700/30 to-transparent" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full glass-card flex items-center justify-center border-gold-700/20 group-hover:border-gold-500/40 transition-all duration-400 group-hover:shadow-gold">
                  <step.icon size={28} className="text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-600 flex items-center justify-center">
                  <span className="text-night-950 text-xs font-black">{i + 1}</span>
                </div>
              </div>

              <div className="text-gold-600/40 font-display text-4xl font-bold mb-2 leading-none">
                {step.num}
              </div>
              <h3 className="text-ivory-100 font-bold text-base mb-3 group-hover:text-gold-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-ivory-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

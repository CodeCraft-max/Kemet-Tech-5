import { useState } from 'react';
import { Globe, Brain, Database, Cloud, ArrowRight } from 'lucide-react';

const DOMAINS = [
  {
    id: 'web',
    icon: Globe,
    label: 'Web Development',
    color: 'nile',
    desc: 'Build stunning, performant web apps with React, TypeScript, and modern tooling.',
    skills: ['React 18', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'ai',
    icon: Brain,
    label: 'AI & Machine Learning',
    color: 'teal',
    desc: 'Master neural networks, LLMs, and production ML systems from first principles.',
    skills: ['Python', 'PyTorch', 'Transformers', 'MLOps', 'LangChain'],
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'data',
    icon: Database,
    label: 'Data Science',
    color: 'scarab',
    desc: 'Transform raw data into actionable insights with statistical analysis and visualization.',
    skills: ['Python', 'Pandas', 'SQL', 'Tableau', 'Spark'],
    image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'cloud',
    icon: Cloud,
    label: 'Cloud Engineering',
    color: 'sienna',
    desc: 'Architect and deploy scalable cloud infrastructure on AWS, GCP, and Azure.',
    skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?w=600&h=400&fit=crop',
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; dot: string }> = {
  nile: {
    border: 'border-nile-600/40',
    text: 'text-nile-400',
    bg: 'bg-nile-600/10',
    dot: 'bg-nile-400',
  },
  teal: {
    border: 'border-teal-600/40',
    text: 'text-teal-400',
    bg: 'bg-teal-600/10',
    dot: 'bg-teal-400',
  },
  scarab: {
    border: 'border-scarab-600/40',
    text: 'text-scarab-400',
    bg: 'bg-scarab-600/10',
    dot: 'bg-scarab-400',
  },
  sienna: {
    border: 'border-sienna-600/40',
    text: 'text-sienna-400',
    bg: 'bg-sienna-600/10',
    dot: 'bg-sienna-400',
  },
};

export default function Domains() {
  const [active, setActive] = useState(0);
  const domain = DOMAINS[active];
  const c = colorMap[domain.color];

  return (
    <section className="py-28 relative overflow-hidden bg-night-900">
      <div className="orb w-96 h-96 bg-gold-600/5 top-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">What You'll Master</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            Four Pillars of{' '}
            <span className="gold-text">Modern Tech</span>
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Choose your domain. Build real projects. Emerge with skills the industry demands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="flex flex-col gap-4">
            {DOMAINS.map((d, i) => {
              const cc = colorMap[d.color];
              const isActive = i === active;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? `glass-card ${cc.border} ${cc.bg}`
                      : 'border-white/5 bg-night-800/30 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? `${cc.bg} border ${cc.border}` : 'bg-night-700/50'
                      }`}
                    >
                      <d.icon
                        size={18}
                        className={isActive ? cc.text : 'text-ivory-500'}
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold text-sm tracking-wide ${
                          isActive ? 'text-ivory-100' : 'text-ivory-400'
                        }`}
                      >
                        {d.label}
                      </div>
                      {isActive && (
                        <div className="text-ivory-500 text-xs mt-1 leading-relaxed">
                          {d.desc}
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <ArrowRight size={16} className={cc.text} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual panel */}
          <div className={`glass-card rounded-2xl overflow-hidden border ${c.border}`}>
            <div className="relative h-52 overflow-hidden">
              <img
                src={domain.image}
                alt={domain.label}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/40 to-transparent" />
              <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full ${c.bg} border ${c.border}`}>
                <domain.icon size={12} className={c.text} />
                <span className={`text-xs font-bold tracking-wide ${c.text}`}>{domain.label}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-ivory-400 text-sm leading-relaxed mb-5">{domain.desc}</p>
              <div className="mb-6">
                <div className="text-ivory-500 text-xs uppercase tracking-wider mb-3 font-semibold">
                  Core Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map(s => (
                    <span
                      key={s}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text} border ${c.border}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a href="#courses" className="btn-gold w-full justify-center text-xs">
                Explore {domain.label} Courses
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChevronDown, Zap, Globe, Brain, Cloud } from 'lucide-react';

const TECH_PILLS = [
  { icon: Globe, label: 'Web Dev' },
  { icon: Brain, label: 'AI & ML' },
  { icon: Zap, label: 'Data Science' },
  { icon: Cloud, label: 'Cloud' },
];

function PyramidSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 70" fill="none" className={className}>
      <polygon points="40,4 76,66 4,66" stroke="url(#pyrGrad)" strokeWidth="1" fill="rgba(212,160,23,0.04)" />
      <polygon points="40,18 64,54 16,54" stroke="url(#pyrGrad2)" strokeWidth="0.5" fill="rgba(212,160,23,0.02)" />
      <defs>
        <linearGradient id="pyrGrad" x1="40" y1="4" x2="40" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d4a017" stopOpacity="0.9" />
          <stop offset="1" stopColor="#d4a017" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="pyrGrad2" x1="40" y1="18" x2="40" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5bc00" stopOpacity="0.6" />
          <stop offset="1" stopColor="#f5bc00" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function EyeOfRa() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8 lg:mb-0">
      {/* Outer rings */}
      <div className="eye-ring-1 absolute inset-0 rounded-full border border-gold-600/30" />
      <div className="eye-ring-2 absolute inset-4 rounded-full border border-gold-500/25" />
      <div className="eye-ring-3 absolute inset-8 rounded-full border border-gold-400/20" />
      {/* Central eye SVG */}
      <div className="absolute inset-12 flex items-center justify-center">
        <svg viewBox="0 0 80 48" fill="none" className="w-full">
          <path
            d="M4 24 Q40 2 76 24 Q40 46 4 24Z"
            stroke="url(#eyeGrad)"
            strokeWidth="1.5"
            fill="rgba(212,160,23,0.06)"
          />
          <circle cx="40" cy="24" r="10" stroke="url(#eyeGrad)" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="24" r="5" fill="url(#eyeGrad)" />
          {/* Lash lines */}
          <line x1="40" y1="4" x2="40" y2="10" stroke="#d4a017" strokeWidth="1" opacity="0.7" />
          <line x1="20" y1="8" x2="24" y2="14" stroke="#d4a017" strokeWidth="1" opacity="0.5" />
          <line x1="60" y1="8" x2="56" y2="14" stroke="#d4a017" strokeWidth="1" opacity="0.5" />
          <defs>
            <linearGradient id="eyeGrad" x1="0" y1="0" x2="80" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4a017" />
              <stop offset="1" stopColor="#f5bc00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-night-950" />
      <div className="hero-glow absolute inset-0" />

      {/* Ambient orbs */}
      <div className="orb w-96 h-96 bg-gold-600/10 top-[-10%] left-[-10%]" />
      <div className="orb w-80 h-80 bg-nile-600/10 bottom-[10%] right-[-5%]" />
      <div className="orb w-64 h-64 bg-teal-600/08 top-[30%] right-[20%]" />

      {/* Floating pyramids */}
      <div className="pyramid-float absolute top-16 right-8 lg:right-32 opacity-30">
        <PyramidSvg className="w-24 h-24" />
      </div>
      <div className="pyramid-float-2 absolute bottom-32 left-8 lg:left-24 opacity-20">
        <PyramidSvg className="w-16 h-16" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="section-label mb-6">Est. in the Age of Discovery</div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
            <span className="text-ivory-100">Ancient</span>
            <br />
            <span className="gold-text">Wisdom,</span>
            <br />
            <span className="text-ivory-100">Modern</span>
            <span className="text-ivory-300"> Skills.</span>
          </h1>

          <p className="text-ivory-400 text-lg leading-relaxed max-w-lg mb-8 font-light">
            Master the technologies shaping tomorrow through immersive, project-based learning
            inspired by the builders of ancient civilizations. Your journey to mastery begins here.
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {TECH_PILLS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-700/30 bg-gold-900/10 text-gold-300 text-xs font-semibold tracking-wide hover:border-gold-500/50 hover:bg-gold-800/15 transition-all duration-300 cursor-default"
              >
                <Icon size={12} />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#courses" className="btn-gold">
              Explore Courses
              <ChevronDown size={16} />
            </a>
            <a href="#paths" className="btn-outline">
              View Paths
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?w=80&h=80&fit=crop',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="student"
                  className="w-9 h-9 rounded-full border-2 border-night-950 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="text-ivory-200 font-bold text-sm">12,000+ students</div>
              <div className="text-ivory-500 text-xs">already enrolled</div>
            </div>
          </div>
        </div>

        {/* Eye of Ra visual */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <EyeOfRa />
          <div className="text-center mt-4">
            <div className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Eye of Ra</div>
            <div className="text-ivory-500 text-xs mt-1">See what's possible</div>
          </div>

          {/* Floating stat cards */}
          <div className="glass-card rounded-lg p-4 absolute top-0 right-0 text-center min-w-[110px]">
            <div className="stat-num text-2xl font-bold">98%</div>
            <div className="text-ivory-500 text-xs mt-1">Job Placement</div>
          </div>
          <div className="glass-card rounded-lg p-4 absolute bottom-8 left-0 text-center min-w-[110px]">
            <div className="stat-num text-2xl font-bold">4.9</div>
            <div className="text-ivory-500 text-xs mt-1">Avg. Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-ivory-600 text-xs tracking-widest uppercase">Scroll</div>
        <ChevronDown size={16} className="text-gold-600" />
      </div>
    </section>
  );
}

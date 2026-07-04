import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-num text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const STATS = [
    { icon: Users, value: 12000, suffix: '+', label: t.stats.students },
    { icon: BookOpen, value: 80, suffix: '+', label: t.stats.courses },
    { icon: Award, value: 98, suffix: '%', label: t.stats.placement },
    { icon: Globe, value: 50, suffix: '+', label: t.stats.countries },
  ];

  return (
    <section className="py-20 relative bg-night-950 overflow-hidden">
      {/* Horizontal gold band */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-600/4 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-5 border-gold-700/20 group-hover:border-gold-500/40 group-hover:shadow-gold transition-all duration-300">
                <Icon size={22} className="text-gold-400" />
              </div>
              <Counter target={value} suffix={suffix} />
              <div className="text-ivory-500 text-sm mt-2 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

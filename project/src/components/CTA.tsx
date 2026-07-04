import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-night-900">
      {/* Radial burst */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,160,23,0.1) 0%, transparent 70%)',
        }}
      />
      <div className="orb w-64 h-64 bg-nile-600/10 bottom-0 left-[10%] pointer-events-none" />
      <div className="orb w-64 h-64 bg-teal-600/8 top-0 right-[10%] pointer-events-none" />

      {/* Sun symbol */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-gold-700/6 animate-rotate-slow" />
        <div className="absolute inset-10 rounded-full border border-gold-600/8" />
        <div className="absolute inset-20 rounded-full border border-gold-500/6" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-2xl glass-card border-gold-600/30 flex items-center justify-center mx-auto mb-8 shadow-gold">
          <Sparkles size={28} className="text-gold-400" />
        </div>

        <div className="section-label justify-center mb-6">Your Journey Awaits</div>

        <h2 className="font-display text-5xl lg:text-6xl font-bold text-ivory-100 leading-tight mb-6">
          Ready to Build{' '}
          <span className="gold-text">Something Great?</span>
        </h2>

        <p className="text-ivory-400 text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light">
          Join 12,000+ students who transformed their careers with Kemet Tech.
          Start free today — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-gold text-sm py-4 px-8">
            Start Learning Free
            <ArrowRight size={16} />
          </a>
          <a href="#courses" className="btn-outline text-sm py-4 px-8">
            Browse All Courses
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-ivory-500 text-xs font-medium">
          <span>No credit card needed</span>
          <span className="text-gold-700">&#x2B22;</span>
          <span>Cancel anytime</span>
          <span className="text-gold-700">&#x2B22;</span>
          <span>30-day guarantee</span>
        </div>
      </div>
    </section>
  );
}

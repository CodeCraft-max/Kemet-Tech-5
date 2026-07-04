import { Check, Zap } from 'lucide-react';

const PLANS = [
  {
    name: 'Apprentice',
    price: 0,
    period: 'Forever Free',
    desc: 'Dip your toes into the knowledge of the ancients — no commitment required.',
    features: [
      '5 free courses',
      'Community forum access',
      'Course previews',
      'Basic progress tracking',
    ],
    cta: 'Start for Free',
    variant: 'outline',
    color: 'teal',
  },
  {
    name: 'Scribe',
    price: 49,
    period: 'per month',
    desc: 'Full access to all courses and paths. The fastest route to career transformation.',
    features: [
      'All 80+ courses',
      'All career paths',
      'Project reviews',
      'Certificate of completion',
      'Community + Discord access',
      'Monthly live Q&As',
    ],
    cta: 'Become a Scribe',
    variant: 'gold',
    featured: true,
    color: 'gold',
  },
  {
    name: 'Pharaoh',
    price: 149,
    period: 'per month',
    desc: 'Everything in Scribe, plus 1-on-1 mentorship and priority job placement support.',
    features: [
      'Everything in Scribe',
      '4 mentor sessions / month',
      'Career coaching',
      'Resume & LinkedIn review',
      'Job board priority access',
      'Custom learning plan',
    ],
    cta: 'Ascend to Pharaoh',
    variant: 'outline',
    color: 'nile',
  },
];

const colorAccents: Record<string, string> = {
  teal: 'text-teal-400',
  gold: 'text-gold-300',
  nile: 'text-nile-400',
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 relative bg-night-950 overflow-hidden">
      <div className="orb w-96 h-96 bg-gold-700/6 top-0 left-[-10%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">Simple Pricing</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            Invest in Your <span className="gold-text">Future</span>
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            No hidden fees. Cancel anytime. Your first month is covered by a 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`glass-card glass-card-hover rounded-2xl p-7 flex flex-col relative ${
                plan.featured ? 'pricing-featured' : 'border-white/8'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gold-gradient text-night-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  <Zap size={10} />
                  Best Value
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest ${colorAccents[plan.color]} mb-3`}>
                {plan.name}
              </div>

              <div className="flex items-end gap-2 mb-2">
                <span className="font-display text-5xl font-bold text-ivory-100">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-ivory-500 text-sm mb-2 font-light">{plan.period}</span>
                )}
              </div>
              <div className="text-ivory-500 text-xs mb-1">{plan.period === 'Forever Free' ? plan.period : ''}</div>

              <p className="text-ivory-500 text-sm leading-relaxed mb-7">{plan.desc}</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-ivory-400 text-sm">
                    <Check size={14} className={`${colorAccents[plan.color]} mt-0.5 shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`${plan.variant === 'gold' ? 'btn-gold' : 'btn-outline'} justify-center text-xs`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-ivory-600 text-xs mt-8">
          All plans include a 30-day money-back guarantee. Questions?{' '}
          <a href="#" className="text-gold-500 hover:text-gold-400 underline">Chat with us.</a>
        </p>
      </div>
    </section>
  );
}

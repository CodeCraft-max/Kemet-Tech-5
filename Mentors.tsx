import { Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const MENTORS = [
  {
    name: 'Amara Osei',
    title: 'Lead Web Engineer',
    company: 'ex-Google',
    specialties: ['React', 'TypeScript', 'System Design'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=400&h=400&fit=crop&face',
    bio: '10 years building large-scale web applications. Shipped products used by 100M+ users.',
  },
  {
    name: 'Nadia Khalil',
    title: 'AI Research Engineer',
    company: 'ex-OpenAI',
    specialties: ['LLMs', 'PyTorch', 'MLOps'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400&h=400&fit=crop&face',
    bio: 'Published researcher with 15+ papers on language models and AI safety.',
  },
  {
    name: 'Kofi Mensah',
    title: 'Cloud Architect',
    company: 'ex-AWS',
    specialties: ['AWS', 'Terraform', 'Kubernetes'],
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400&h=400&fit=crop&face',
    bio: 'Designed cloud infrastructure for Fortune 500 companies and unicorn startups.',
  },
  {
    name: 'Yasmine Diallo',
    title: 'Data Science Lead',
    company: 'ex-Netflix',
    specialties: ['Python', 'Spark', 'Analytics'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=400&fit=crop&face',
    bio: 'Built recommendation systems serving 250M+ subscribers. Kaggle Grandmaster.',
  },
];

export default function Mentors() {
  const { t } = useLanguage();
  return (
    <section id="mentors" className="py-28 relative bg-night-950 overflow-hidden">
      <div className="orb w-80 h-80 bg-gold-700/5 top-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center">{t.mentors.sectionLabel}</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ivory-100 mt-2">
            {t.mentors.title}
          </h2>
          <p className="text-ivory-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t.mentors.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor, index) => {
            const translated = t.mentors.items[index];
            return (
            <div key={mentor.name} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/20 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-ivory-100 font-bold text-base group-hover:text-gold-300 transition-colors">
                  {translated.name}
                </h3>
                <div className="text-gold-500 text-xs font-semibold mt-0.5">{translated.title}</div>
                <div className="text-ivory-500 text-xs mt-0.5 mb-3">{translated.company}</div>

                <p className="text-ivory-500 text-xs leading-relaxed mb-4">{translated.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {translated.specialties.map(s => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full text-xs bg-gold-900/20 text-gold-400 border border-gold-700/25"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-ivory-600">
                  <button className="hover:text-gold-400 transition-colors"><Twitter size={14} /></button>
                  <button className="hover:text-gold-400 transition-colors"><Linkedin size={14} /></button>
                  <button className="hover:text-gold-400 transition-colors"><Github size={14} /></button>
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

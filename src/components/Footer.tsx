import { Mail, ArrowRight, Facebook, Github, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com/', label: 'Github' },
  { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1Eo96rPnLE/', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://web.whatsapp.com', label: 'Telegram' },
  { icon: Instagram, href: 'https://www.instagram.com/kemettech9/?__pwa=1', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@kemet.tech1?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
];

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className="shrink-0">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.13v13.24a2.9 2.9 0 1 1-2-2.77V9.28a6 6 0 1 0 5.13 5.93V8.56a7.96 7.96 0 0 0 4.77 1.6V6.69Z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-night-950 border-t border-gold-800/15">
      {/* Newsletter band */}
      <div className="border-b border-gold-800/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-ivory-100">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-ivory-500 text-sm mt-1">
              {t.footer.newsletterText}
            </p>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex gap-2 w-full max-w-md"
          >
            <div className="relative flex-1">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory-600" />
              <input
                type="email"
                placeholder={t.footer.placeholder}
                className="w-full pl-9 pr-4 py-3 bg-night-800 border border-gold-800/20 rounded-lg text-ivory-200 text-sm placeholder-ivory-600 focus:outline-none focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/30 transition-all"
              />
            </div>
            <button type="submit" className="btn-gold text-xs py-3 px-5 shrink-0">
              {t.footer.subscribe}
              <ArrowRight size={13} />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <polygon points="16,2 30,28 2,28" fill="none" stroke="url(#fGrad)" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="4" fill="url(#fGrad)" opacity="0.8" />
                <defs>
                  <linearGradient id="fGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4a017" />
                    <stop offset="1" stopColor="#f5bc00" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display font-bold text-lg">
                <span className="gold-text">Kemet</span>
                <span className="text-ivory-300"> Tech</span>
              </span>
            </div>
            <p className="text-ivory-600 text-xs leading-relaxed mb-6">
              {t.hero.title[0]}<br />{t.hero.title[2]}<br />{t.hero.title[3]}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-night-900 border border-gold-800/20 text-ivory-400 hover:text-gold-400 hover:border-gold-600/40 hover:bg-night-800 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {t.footer.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-ivory-300 font-bold text-xs uppercase tracking-widest mb-4">
                {section.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-ivory-600 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold-800/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory-700 text-xs">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <a href="tel:01201502589" className="text-ivory-700 text-xs hover:text-gold-400 transition-colors">
              For call: 012 01502589
            </a>
            <p className="text-ivory-700 text-xs">
              {t.footer.built}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

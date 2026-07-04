import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.paths, href: '#paths' },
    { label: t.nav.mentors, href: '#mentors' },
    { label: t.nav.pricing, href: '#pricing' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-night-900/95 backdrop-blur-xl border-b border-gold-800/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <polygon
                points="16,2 30,28 2,28"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="16" r="4" fill="url(#logoGrad)" opacity="0.8" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d4a017" />
                  <stop offset="1" stopColor="#f5bc00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wide">
            <span className="gold-text">Kemet</span>
            <span className="text-ivory-200"> Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <label className="flex items-center gap-2 rounded-full border border-gold-700/30 bg-night-900/50 px-3 py-2 text-xs text-ivory-300">
            <span className="sr-only">{t.nav.language}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as typeof language)}
              className="bg-transparent outline-none"
              aria-label={t.nav.language}
            >
              {languages.map((option) => (
                <option key={option.value} value={option.value} className="bg-night-950 text-ivory-200">
                  {option.nativeName}
                </option>
              ))}
            </select>
          </label>
          <a href="#pricing" className="nav-link">{t.nav.signIn}</a>
          <a href="#pricing" className="btn-gold text-xs py-2.5 px-5">
            {t.nav.startLearning}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-ivory-300 hover:text-gold-400 transition-colors"
          aria-label={t.nav.menuLabel}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-night-900/98 backdrop-blur-xl border-t border-gold-800/20">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ivory-300 hover:text-gold-400 font-semibold text-sm tracking-widest uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
            <label className="flex flex-col gap-2 text-sm text-ivory-300">
              <span>{t.nav.language}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as typeof language)}
                className="rounded-lg border border-gold-700/30 bg-night-950 px-3 py-2 text-ivory-200 outline-none"
                aria-label={t.nav.language}
              >
                {languages.map((option) => (
                  <option key={option.value} value={option.value} className="bg-night-950 text-ivory-200">
                    {option.nativeName}
                  </option>
                ))}
              </select>
            </label>
            <a href="#pricing" className="btn-gold text-xs py-3 justify-center mt-2">
              {t.nav.startLearning}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

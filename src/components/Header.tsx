import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, ESTABLISHMENT } from '../data/establishment';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #333' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className="flex items-center gap-2 group"
              aria-label={ESTABLISHMENT.name}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ background: '#FFC928' }}
              >
                <UtensilsCrossed size={20} color="#080808" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <span
                  className="font-black tracking-tight leading-none text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.95rem' }}
                >
                  ESPECIAL<br />
                  <span style={{ color: '#FFC928' }}>LANCHES</span>
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-sm font-semibold transition-colors duration-200 relative"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: isActive ? '#FFC928' : '#C6C6C6',
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: '#FFC928' }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={ESTABLISHMENT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: '#FFC928',
                  color: '#080808',
                  fontFamily: 'Montserrat, sans-serif',
                }}
                aria-label="Fale conosco pelo WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                Fale conosco
              </a>
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
                style={{ color: '#FFC928', background: 'rgba(255,201,40,0.1)' }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          pointerEvents: mobileOpen ? 'auto' : 'none',
          opacity: mobileOpen ? 1 : 0,
        }}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="absolute top-16 left-0 right-0 flex flex-col gap-1 px-4 py-6 transition-transform duration-300"
          style={{
            background: '#141414',
            borderBottom: '1px solid #333',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
          }}
          aria-label="Menu mobile"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: activeSection === item.href.replace('#', '') ? '#FFC928' : '#C6C6C6',
                background: activeSection === item.href.replace('#', '') ? 'rgba(255,201,40,0.08)' : 'transparent',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={ESTABLISHMENT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-full text-base font-bold"
            style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            Fale conosco
          </a>
        </nav>
      </div>
    </>
  );
}

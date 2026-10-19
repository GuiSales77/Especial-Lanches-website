import { ChevronDown, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { ESTABLISHMENT } from '../data/establishment';

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#080808', paddingTop: '5rem' }}
      aria-label="Seção inicial"
    >
      {/* Decorative diagonal shape */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, rgba(255,201,40,0.04) 0%, transparent 50%)',
        }}
      />
      {/* Yellow accent bar — top left */}
      <div
        className="absolute top-0 left-0 h-1 w-48"
        style={{ background: '#FFC928' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column — copy ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="h-px w-12 hidden sm:block"
                style={{ background: '#FFC928' }}
                aria-hidden="true"
              />
              <span
                className="text-xs sm:text-sm font-bold tracking-widest uppercase"
                style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
              >
                Bem-vindo ao
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-none tracking-tight text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ESPECIAL{' '}
              <span style={{ color: '#FFC928' }}>LANCHES</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: '#C6C6C6', fontFamily: 'Montserrat, sans-serif' }}
            >
              Sabor que merece destaque.
            </p>

            {/* Description */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-md"
              style={{ color: '#9CA3AF' }}
            >
              Conheça o Especial Lanches, explore nosso cardápio e descubra as
              opções disponíveis para deixar seu momento ainda mais especial.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={16} style={{ color: '#FFC928', flexShrink: 0 }} />
              <span className="text-sm font-medium" style={{ color: '#C6C6C6' }}>
                {ESTABLISHMENT.city} – {ESTABLISHMENT.state}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleScroll('cardapio')}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{
                  background: '#FFC928',
                  color: '#080808',
                  fontFamily: 'Montserrat, sans-serif',
                }}
                aria-label="Ver cardápio"
              >
                VER CARDÁPIO
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <a
                href={ESTABLISHMENT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  border: '2px solid #FFC928',
                  color: '#FFC928',
                  fontFamily: 'Montserrat, sans-serif',
                  background: 'transparent',
                }}
                aria-label="Entrar em contato"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                ENTRAR EM CONTATO
              </a>
            </div>
          </div>

          {/* ── Right column — image ─────────────────────────────────────────── */}
          <div className="relative flex items-center justify-center">
            {/* Decorative ring */}
            <div
              className="absolute inset-4 rounded-full opacity-10"
              style={{ border: '2px solid #FFC928' }}
              aria-hidden="true"
            />
            {/* Decorative diagonal accent */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 opacity-30"
              style={{
                background: '#FFC928',
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 opacity-20"
              style={{
                background: '#FFC928',
                clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
              }}
              aria-hidden="true"
            />

            {/* Main image wrapper */}
            <div
              className="relative z-10 rounded-2xl overflow-hidden w-full max-w-lg aspect-square"
              style={{ border: '2px solid #333' }}
            >
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85"
                alt="Imagem ilustrativa de hambúrguer — não representa um produto específico do Especial Lanches"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.6) 100%)',
                }}
                aria-hidden="true"
              />
              {/* Disclaimer badge */}
              <div
                className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg text-xs text-center"
                style={{ background: 'rgba(8,8,8,0.8)', color: '#9CA3AF', border: '1px solid #333' }}
              >
                Imagem ilustrativa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-70"
        onClick={() => handleScroll('diferenciais')}
        aria-label="Rolar para baixo"
        style={{ color: '#FFC928' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C6C6C6' }}>
          Explore
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}

import { MapPin, ExternalLink } from 'lucide-react';
import { ESTABLISHMENT } from '../data/establishment';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Imagem ilustrativa — ambiente gastronômico',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Imagem ilustrativa — balcão de atendimento',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Imagem ilustrativa — lanche artesanal',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
    alt: 'Imagem ilustrativa — espetinho na brasa',
  },
];

export function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="sobre"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 overflow-hidden"
      style={{ background: '#141414' }}
      aria-label="Sobre o estabelecimento"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — copy ─────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 animate-fade-up">
            <div>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
              >
                Conheça
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-white leading-none"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ESPECIAL{' '}
                <span style={{ color: '#FFC928' }}>LANCHES</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#C6C6C6' }}>
              Conheça o Especial Lanches, localizado em Hortolândia, São Paulo. Consulte nosso
              cardápio, veja as informações do estabelecimento e encontre a melhor forma de
              entrar em contato.
            </p>

            {/* Address block */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: '#1B1B1B', border: '1px solid #333' }}
            >
              <MapPin size={18} style={{ color: '#FFC928', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Endereço
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {ESTABLISHMENT.addressFull}
                </p>
              </div>
            </div>

            <a
              href={ESTABLISHMENT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
              aria-label="Abrir localização no Google Maps"
            >
              <ExternalLink size={15} strokeWidth={2.5} />
              COMO CHEGAR
            </a>
          </div>

          {/* ── Right — gallery ──────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 animate-fade-up" style={{ transitionDelay: '150ms' }}>
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ border: '1px solid #333', aspectRatio: '1' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,201,40,0.08)' }}
                  aria-hidden="true"
                />
              </div>
            ))}
            <div
              className="col-span-2 text-center py-2 text-xs rounded-lg"
              style={{ background: 'rgba(8,8,8,0.5)', color: '#9CA3AF' }}
            >
              Imagens ilustrativas — aguardando fotografias reais do estabelecimento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

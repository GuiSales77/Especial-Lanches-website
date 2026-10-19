import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { ESTABLISHMENT } from '../data/establishment';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contato"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: '#141414' }}
      aria-label="Seção de contato e localização"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
          >
            Onde estamos
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            CONTATO
          </h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Block 1 — Address */}
          <div
            className="animate-fade-up flex flex-col gap-4 p-6 rounded-2xl"
            style={{ background: '#1B1B1B', border: '1px solid #333', transitionDelay: '0ms' }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{ background: 'rgba(255,201,40,0.12)', border: '1px solid rgba(255,201,40,0.3)' }}
            >
              <MapPin size={22} style={{ color: '#FFC928' }} strokeWidth={1.8} />
            </div>
            <div>
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                VISITE-NOS
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                {ESTABLISHMENT.addressFull}
              </p>
            </div>
            <a
              href={ESTABLISHMENT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 mt-auto"
              style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
              aria-label="Abrir no mapa"
            >
              <ExternalLink size={14} strokeWidth={2.5} />
              ABRIR NO MAPA
            </a>
          </div>

          {/* Block 2 — Phone */}
          <div
            className="animate-fade-up flex flex-col gap-4 p-6 rounded-2xl"
            style={{ background: '#1B1B1B', border: '1px solid #333', transitionDelay: '80ms' }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{ background: 'rgba(255,201,40,0.12)', border: '1px solid rgba(255,201,40,0.3)' }}
            >
              <Phone size={22} style={{ color: '#FFC928' }} strokeWidth={1.8} />
            </div>
            <div>
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                FALE CONOSCO
              </h3>
              <p className="text-xl font-bold" style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}>
                {ESTABLISHMENT.phone}
              </p>
            </div>
            <a
              href={`tel:${ESTABLISHMENT.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 mt-auto"
              style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
              aria-label={`Ligar para ${ESTABLISHMENT.phone}`}
            >
              <Phone size={14} strokeWidth={2.5} />
              LIGAR AGORA
            </a>
          </div>

          {/* Block 3 — WhatsApp */}
          <div
            className="animate-fade-up flex flex-col gap-4 p-6 rounded-2xl"
            style={{ background: '#1B1B1B', border: '1px solid #333', transitionDelay: '160ms' }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)' }}
            >
              <MessageCircle size={22} style={{ color: '#25D366' }} strokeWidth={1.8} />
            </div>
            <div>
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                PREFERE MENSAGEM?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                Manda mensagem no WhatsApp, respondemos em breve!
              </p>
            </div>
            <a
              href={ESTABLISHMENT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 mt-auto"
              style={{ background: '#25D366', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}
              aria-label="Chamar no WhatsApp"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>

        {/* Map */}
        <LocationMap />
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <div
      className="animate-fade-up rounded-2xl overflow-hidden"
      style={{ border: '1px solid #333', background: '#1B1B1B' }}
    >
      {/* Map header */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{ borderBottom: '1px solid #333' }}
      >
        <MapPin size={16} style={{ color: '#FFC928' }} />
        <span className="text-sm font-medium" style={{ color: '#C6C6C6' }}>
          {ESTABLISHMENT.addressFull}
        </span>
      </div>

      {/* iframe map */}
      <div className="relative w-full" style={{ paddingBottom: '40%', minHeight: '260px' }}>
        <iframe
          title="Localização do Especial Lanches no Google Maps"
          src="https://maps.google.com/maps?q=R.+Cec%C3%ADlio+Nunes+da+Silva+513+Hortol%C3%A2ndia+SP+Brasil&output=embed&z=16"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Mapa da localização do Especial Lanches"
        />
      </div>

      {/* Map footer */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderTop: '1px solid #333' }}
      >
        <span className="text-xs" style={{ color: '#9CA3AF' }}>
          Hortolândia – SP
        </span>
        <a
          href={ESTABLISHMENT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
          style={{ color: '#FFC928' }}
          aria-label="Abrir mapa completo no Google Maps"
        >
          <ExternalLink size={12} />
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}

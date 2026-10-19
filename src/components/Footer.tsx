import { UtensilsCrossed, MapPin, Phone, MessageCircle, Star, ExternalLink } from 'lucide-react';
import { ESTABLISHMENT, NAV_ITEMS } from '../data/establishment';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: '#080808', borderTop: '1px solid #333' }}
      aria-label="Rodapé"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg"
                style={{ background: '#FFC928' }}
              >
                <UtensilsCrossed size={20} color="#080808" strokeWidth={2.5} />
              </div>
              <span
                className="font-black text-white leading-none text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ESPECIAL<br />
                <span style={{ color: '#FFC928' }}>LANCHES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
              {ESTABLISHMENT.tagline}
            </p>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              {ESTABLISHMENT.city} – {ESTABLISHMENT.state}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
            >
              Navegação
            </h3>
            <nav aria-label="Rodapé — links de navegação">
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(e, item.href)}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: '#9CA3AF' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
            >
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${ESTABLISHMENT.phoneRaw}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#9CA3AF' }}
                  aria-label={`Ligar: ${ESTABLISHMENT.phone}`}
                >
                  <Phone size={14} style={{ color: '#FFC928', flexShrink: 0 }} />
                  {ESTABLISHMENT.phone}
                </a>
              </li>
              <li>
                <a
                  href={ESTABLISHMENT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#9CA3AF' }}
                  aria-label="Chamar no WhatsApp"
                >
                  <MessageCircle size={14} style={{ color: '#25D366', flexShrink: 0 }} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={ESTABLISHMENT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#9CA3AF' }}
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPin size={14} style={{ color: '#FFC928', flexShrink: 0 }} />
                  Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Address + Reviews */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
            >
              Endereço
            </h3>
            <address className="not-italic mb-4">
              <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                {ESTABLISHMENT.address}<br />
                {ESTABLISHMENT.neighborhood}<br />
                {ESTABLISHMENT.city} – {ESTABLISHMENT.state}<br />
                CEP {ESTABLISHMENT.zipCode}
              </p>
            </address>
            <a
              href={ESTABLISHMENT.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: '#FFC928' }}
              aria-label="Ver avaliações no Google"
            >
              <Star size={14} fill="#FFC928" stroke="none" />
              {ESTABLISHMENT.reviewCount} avaliações
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1F1F1F' }} className="mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#9CA3AF' }}>
            © {year} {ESTABLISHMENT.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: '#333' }}>
            Site desenvolvido para fins de apresentação
          </p>
        </div>
      </div>
    </footer>
  );
}

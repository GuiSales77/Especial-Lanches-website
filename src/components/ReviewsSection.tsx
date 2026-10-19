import { ExternalLink, Star } from 'lucide-react';
import { ESTABLISHMENT } from '../data/establishment';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ReviewsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="avaliacoes"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: '#080808' }}
      aria-label="Seção de avaliações"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
          >
            O que dizem nossos clientes
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            AVALIAÇÕES
          </h2>
        </div>

        {/* Google Reviews card */}
        <div className="max-w-xl mx-auto animate-fade-up">
          <div
            className="flex flex-col items-center gap-6 p-8 rounded-2xl"
            style={{ background: '#1B1B1B', border: '1px solid #333' }}
          >
            {/* Google branding */}
            <div className="flex items-center gap-3">
              {/* Google G SVG */}
              <svg
                viewBox="0 0 48 48"
                width="36"
                height="36"
                aria-label="Google"
                role="img"
              >
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.3 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
                <path fill="#FBBC05" d="M24 46c5.6 0 10.6-1.9 14.6-5l-6.8-5.6C29.9 37 27.1 38 24 38c-5.7 0-10.6-3-13.2-7.5l-7 5.4C7.5 42.7 15.2 46 24 46z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-1.1 3.2-3.5 5.7-6.8 7.1l6.8 5.6c3.9-3.6 6.2-9 6.2-15.3 0-1.3-.2-2.7-.5-4z"/>
              </svg>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Google Avaliações
              </span>
            </div>

            {/* Stars + count */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1" aria-label="Avaliado no Google">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={28}
                    fill="#FFC928"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-base font-medium" style={{ color: '#C6C6C6' }}>
                <strong className="text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {ESTABLISHMENT.reviewCount} avaliações
                </strong>{' '}
                no Google
              </p>
              <p className="text-sm text-center max-w-xs" style={{ color: '#9CA3AF' }}>
                Confira as avaliações reais diretamente na página do Google para obter
                informações atualizadas.
              </p>
            </div>

            {/* CTA */}
            <a
              href={ESTABLISHMENT.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
              aria-label="Ver avaliações no Google"
            >
              <ExternalLink size={16} strokeWidth={2.5} />
              VER AVALIAÇÕES NO GOOGLE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

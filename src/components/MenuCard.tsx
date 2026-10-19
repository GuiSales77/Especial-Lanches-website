import { MessageCircle } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { ESTABLISHMENT } from '../data/establishment';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const whatsappLink = `${ESTABLISHMENT.whatsappMessage}&text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre: ${item.name}`
  )}`;

  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#1B1B1B',
        border: '1px solid #333',
      }}
      aria-label={item.name}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={item.image}
          alt={
            item.placeholder
              ? `Imagem ilustrativa — não representa um produto específico do Especial Lanches`
              : item.name
          }
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(8,8,8,0.5) 100%)',
          }}
          aria-hidden="true"
        />
        {item.placeholder && (
          <span
            className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-medium"
            style={{ background: 'rgba(8,8,8,0.85)', color: '#9CA3AF', border: '1px solid #333' }}
          >
            Ilustrativo
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-3 p-4">
        <h3
          className="text-base font-bold text-white leading-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {item.name}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          {item.price ? (
            <span className="font-bold text-lg" style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}>
              R$ {item.price}
            </span>
          ) : (
            <span className="text-sm" style={{ color: '#9CA3AF' }}>
              Consulte o valor
            </span>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
            aria-label={`Consultar ${item.name} pelo WhatsApp`}
          >
            <MessageCircle size={13} strokeWidth={2.5} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

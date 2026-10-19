import { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuCard } from './MenuCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageCircle } from 'lucide-react';
import { ESTABLISHMENT } from '../data/establishment';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('lanches');
  const sectionRef = useScrollAnimation();

  const filtered = MENU_ITEMS.filter((item) => item.categoryId === activeCategory);

  return (
    <section
      id="cardapio"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: '#080808' }}
      aria-label="Seção de cardápio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 animate-fade-up">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: '#FFC928', fontFamily: 'Montserrat, sans-serif' }}
          >
            Conheça nossas opções
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            CARDÁPIO
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Explore as opções disponíveis no Especial Lanches.
          </p>
        </div>

        {/* Placeholder notice */}
        <div
          className="animate-fade-up flex items-start gap-3 px-5 py-4 rounded-2xl mb-10 mx-auto max-w-2xl"
          style={{ background: 'rgba(255,201,40,0.06)', border: '1px solid rgba(255,201,40,0.2)' }}
        >
          <span style={{ color: '#FFC928', flexShrink: 0, marginTop: '2px' }}>ℹ</span>
          <p className="text-sm leading-relaxed" style={{ color: '#C6C6C6' }}>
            <strong className="text-white">Cardápio em atualização.</strong> As imagens e nomes
            abaixo são ilustrativos e ainda não representam os produtos reais. Entre em contato
            pelo WhatsApp para consultar as opções disponíveis.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                background: activeCategory === cat.id ? '#FFC928' : '#1B1B1B',
                color: activeCategory === cat.id ? '#080808' : '#C6C6C6',
                border: activeCategory === cat.id ? '1px solid #FFC928' : '1px solid #333',
              }}
              aria-pressed={activeCategory === cat.id}
              aria-label={`Ver ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-16 rounded-2xl"
            style={{ background: '#1B1B1B', border: '1px solid #333' }}
          >
            <p className="text-lg font-semibold text-white mb-2">
              Produtos em breve
            </p>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Esta categoria ainda não possui itens cadastrados.
            </p>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
            Não encontrou o que procura? Fale diretamente conosco.
          </p>
          <a
            href={ESTABLISHMENT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ background: '#FFC928', color: '#080808', fontFamily: 'Montserrat, sans-serif' }}
            aria-label="Consultar cardápio pelo WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            CONSULTAR PELO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

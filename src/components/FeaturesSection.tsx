import { BookOpen, Store, Star, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Nosso cardápio',
    description: 'Explore as opções disponíveis e encontre o que mais agrada o seu paladar.',
    href: '#cardapio',
  },
  {
    icon: Store,
    title: 'Conheça o estabelecimento',
    description: 'Saiba mais sobre o Especial Lanches e venha nos visitar em Hortolândia.',
    href: '#sobre',
  },
  {
    icon: Star,
    title: 'Avaliações dos clientes',
    description: 'Confira o que nossos clientes dizem sobre a experiência no estabelecimento.',
    href: '#avaliacoes',
  },
  {
    icon: MapPin,
    title: 'Estamos em Hortolândia',
    description: 'Venha nos visitar! Confira o endereço completo e como chegar até nós.',
    href: '#contato',
  },
];

export function FeaturesSection() {
  const sectionRef = useScrollAnimation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="diferenciais"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-12 lg:py-16"
      style={{ background: '#141414', borderBottom: '1px solid #333' }}
      aria-label="Seção de diferenciais"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.title}
                href={feature.href}
                onClick={(e) => handleClick(e, feature.href)}
                className="animate-fade-up group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: '#1B1B1B',
                  border: '1px solid #333',
                  transitionDelay: `${i * 80}ms`,
                  textDecoration: 'none',
                }}
                aria-label={feature.title}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,201,40,0.12)', border: '1px solid rgba(255,201,40,0.3)' }}
                >
                  <Icon size={22} style={{ color: '#FFC928' }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {feature.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

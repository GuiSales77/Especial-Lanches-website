// ─── Establishment Info ───────────────────────────────────────────────────────
export const ESTABLISHMENT = {
  name: 'Especial Lanches',
  tagline: 'Sabor que merece destaque.',
  city: 'Hortolândia',
  state: 'SP',
  country: 'Brasil',
  address: 'R. Cecílio Nunes da Silva, 513–599',
  neighborhood: 'Jardim Nossa Sra. Auxiliadora',
  zipCode: '13183-581',
  addressFull: 'R. Cecílio Nunes da Silva, 513–599, Jardim Nossa Sra. Auxiliadora, Hortolândia – SP, CEP 13183-581',
  phone: '(19) 98102-1987',
  phoneRaw: '+5519981021987',
  whatsapp: 'https://wa.me/5519981021987',
  whatsappMessage:
    'https://wa.me/5519981021987?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20card%C3%A1pio%20do%20Especial%20Lanches.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Cec%C3%ADlio+Nunes+da+Silva+513+Jardim+Nossa+Sra.+Auxiliadora+Hortol%C3%A2ndia+SP',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=R.+Cecílio+Nunes+da+Silva+513+Hortolândia+SP&output=embed',
  googleReviews:
    'https://www.google.com/search?q=Especial+Lanches+Hortol%C3%A2ndia',
  reviewCount: 116,
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
] as const;

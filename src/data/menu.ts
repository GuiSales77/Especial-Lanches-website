// Menu data — update products, descriptions and prices here.
// All entries marked placeholder: true should be replaced with real products.

export type MenuCategory = {
  id: string;
  label: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: string | null; // null = consult via WhatsApp
  image: string; // Unsplash URL used as layout placeholder
  placeholder: boolean; // true = illustrative only, not a confirmed product
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'lanches', label: 'Lanches' },
  { id: 'porcoes', label: 'Porções' },
  { id: 'espetinhos', label: 'Espetinhos' },
  { id: 'bebidas', label: 'Bebidas' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Lanches (illustrative) ─────────────────────────────────────────────────
  {
    id: 'lanche-1',
    categoryId: 'lanches',
    name: 'Lanche Especial',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    placeholder: true,
  },
  {
    id: 'lanche-2',
    categoryId: 'lanches',
    name: 'Lanche Duplo',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
    placeholder: true,
  },
  {
    id: 'lanche-3',
    categoryId: 'lanches',
    name: 'Lanche da Casa',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&q=80',
    placeholder: true,
  },
  // ── Porções (illustrative) ─────────────────────────────────────────────────
  {
    id: 'porcao-1',
    categoryId: 'porcoes',
    name: 'Porção de Batata',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',
    placeholder: true,
  },
  {
    id: 'porcao-2',
    categoryId: 'porcoes',
    name: 'Porção Mista',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80',
    placeholder: true,
  },
  // ── Espetinhos (illustrative) ──────────────────────────────────────────────
  {
    id: 'espetinho-1',
    categoryId: 'espetinhos',
    name: 'Espetinho de Carne',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    placeholder: true,
  },
  {
    id: 'espetinho-2',
    categoryId: 'espetinhos',
    name: 'Espetinho de Frango',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
    placeholder: true,
  },
  // ── Bebidas (illustrative) ─────────────────────────────────────────────────
  {
    id: 'bebida-1',
    categoryId: 'bebidas',
    name: 'Refrigerante',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80',
    placeholder: true,
  },
  {
    id: 'bebida-2',
    categoryId: 'bebidas',
    name: 'Suco Natural',
    description: 'Item ilustrativo. Consulte o cardápio real pelo WhatsApp.',
    price: null,
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
    placeholder: true,
  },
];

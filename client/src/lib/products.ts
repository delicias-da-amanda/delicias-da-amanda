// Organic Minimalism: Product data structure with day-of-week filtering

export type DayOfWeek = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado';

export interface ProductOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'biscoitos' | 'lanches' | 'marmitas'| 'paes' | 'saudaveis' | 'bebidas';
  image: string;
  hasOptions: boolean;
  options?: ProductOption[];
  availableDays: DayOfWeek[]; // Days when this product is available
}

export const DAYS_OF_WEEK: DayOfWeek[] = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

export const DAYS_LABELS: Record<DayOfWeek, string> = {
  segunda: 'Segunda',
  terca: 'Terça',
  quarta: 'Quarta',
  quinta: 'Quinta',
  sexta: 'Sexta',
  sabado: 'Sábado'
};

export const products: Product[] = [
  // Biscoitos Amanteigados (Sequilhos)
  {
    id: 'biscoito-amanteigado',
    name: 'Biscoito Amanteigado',
    description: 'Sequilhos crocantes e amanteigados, feitos artesanalmente',
    price: 0, // Price varies by option
    category: 'biscoitos',
    image: '/images/biscoito-amanteigado.jpg',
    hasOptions: true,
    options: [
      { name: 'Tradicional', price: 6.00 },
      { name: 'Com chocolate', price: 7.00 },
      { name: 'Com Goiabada', price: 7.00 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  
  // Lanches
  {
    id: 'lanche-carne-louca',
    name: 'Lanche de Carne Louca',
    description: 'Delicioso lanche com carne desfiada temperada',
    price: 8.00,
    category: 'lanches',
    image: '/images/lanches-hero.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'lanche-baguete-frango',
    name: 'Lanche de Baguete de Filé de Frango',
    description: 'Baguete crocante recheada com filé de frango grelhado',
    price: 12.00,
    category: 'lanches',
    image: '/images/baguete.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  
  // Pães Especiais
  {
    id: 'pao-recheado',
    name: 'Pão Recheado',
    description: 'Pão quentinho recheado com ingredientes selecionados',
    price: 0, // Price varies by option
    category: 'paes',
    image: '/images/recheado.jpg',
    hasOptions: true,
    options: [
      { name: 'Calabresa', price: 16 },
      { name: 'Calabresa com Requeijão Cremoso', price: 18 },
      { name: 'Calabresa com Queijo e Requijão', price: 18 },
      { name: 'Calabresa, Frango e Requijão', price: 18 },
      { name: 'Calabresa com Presunto e Queijo', price: 18 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'pao-caseirinho',
    name: 'Pão Caseirinho',
    description: 'Pão caseiro tradicional, macio e saboroso',
    price: 10.00,
    category: 'paes',
    image: '/images/pao-caseiro.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },

  // Marmitas Fit

  {
    id: 'salada-fit',
    name: '🥗 Salada Fit',
    description: 'Leve, saborosa e super saudável.!',
    price: 10,
    category: 'marmitas',
    image: '/images/salada-fit.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'marmita-tradicional',
    name: '🥗 Marmita Fitness Tradicional - Equilíbrio entre proteínas, carboidratos e legumes.',
    description: 'Arroz integral ou branco. Frango grelhado / carne magra / peixe / ovos. Legumes cozidos ou salteados. 👉 Ideal para quem quer alimentação saudável no dia a dia.',
    price: 0, // Price varies by option
    category: 'marmitas',
    image: '/images/marmita-trad.jpg',
    hasOptions: true,
    options: [
      { name: 'Frango Grelhado', price: 18 },
      { name: 'Carne Magra (Patinho)', price: 20 },
      { name: 'Peixe Grelhado', price: 18 },
      { name: 'Ovos cozidos', price: 16 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'marmita-low',
    name: '🥩 Marmita Low Carb - Pouco ou nenhum carboidrato.',
    description: 'Carnes (frango, carne bovina, peixe ou ovos). Legumes (abobrinha, brócolis, couve-flor). Gordura boa (azeite). 👉 Indicada para quem busca emagrecimento.',
    price: 0, // Price varies by option
    category: 'marmitas',
    image: '/images/marmita-low.jpg',
    hasOptions: true,
    options: [
      { name: 'Frango Grelhado', price: 18 },
      { name: 'Carne Magra (Patinho)', price: 20 },
      { name: 'Peixe Grelhado', price: 18 },
      { name: 'Ovos cozidos', price: 16 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'marmita-veget-vegan',
    name: '🥗 Marmita Fitness Vegetariana ou Vegana- Sem carnes, rica em nutrientes.',
    description: 'Legumes variados. Grãos (Grão-de-bico, lentilha ou feijão). Ovos ou PTS (Proteina texturizada de soja).',
    price: 0, 
    category: 'marmitas',
    image: '/images/vegano-vege.jpg',
    hasOptions: true,
    options: [
      { name: 'Vegetariana 1: Legumes variados. Grãos (Grão-de-bico, lentilha ou feijão)', price: 18 },
      { name: 'Vegetariana 2: Legumes variados. Grãos (Grão-de-bico, lentilha ou feijão) e Ovos Cozidos', price: 19 },
      { name: 'Vegetariana 3: Legumes variados. Grãos (Grão-de-bico, lentilha ou feijão) e PTS', price: 19 },
      { name: 'Vegana 1: Leguminosa (lentilha ou grão-de-bico), legumes e verduras. Arroz integral ou macarrão integral', price: 18 },
      { name: 'Vegana 2: Leguminosa (lentilha ou grão-de-bico), legumes e verduras. Arroz integral ou macarrão integral e PTS', price: 19 }
    ], // Vírgula adicionada aqui
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
},

  // Sobremesas Saudáveis

  {
    id: 'overnight-200ml',
    name: 'Overnight 200ml',
    description: 'Leve, cremoso e delicioso!',
    price: 0, // Price varies by option
    category: 'saudaveis',
    image: '/images/overnight.jpg',
    hasOptions: true,
    options: [
      { name: 'Maracuja (geleia), Iogurte Natural, Semente de Chia e Aveia em Flocos', price: 10 },
      { name: 'Morango, Iogurte Natural, Semente de Chia e Aveia em Flocos', price: 10 },
      { name: 'Manga, Iogurte Natural, Semente de Chia e Aveia em Flocos', price: 10 }
    ],
    availableDays: ['terca', 'quarta', 'quinta', 'sabado']
  },
  {
    id: 'lanche-natural',
    name: 'Lanche Natural',
    description: 'Lanche saudável e saboroso',
    price: 0, // Price varies by option
    category: 'saudaveis',
    image: '/images/lanche-natural.jpg',
    hasOptions: true,
    options: [
      { name: 'Atum', price: 9.00 },
      { name: 'Frango', price: 9.00 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'salada-de-frutas-200ml',
    name: 'Salada de Frutas (Banana, Mamão, Morango, Manga Laranja e Maça)200ml',
    description: 'Refrescante, leve e cheia de sabor!',
    price: 10,
    category: 'saudaveis',
    image: '/images/salada-frutas.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },

  // Bebidas

  {
    id: 'refrigerante-200ml',
    name: 'Refrigerante 200ml',
    description: 'Refrigerante gelado para acompanhar seu lanche',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/refri.jpg',
    hasOptions: true,
    options: [
      { name: 'Coca-Cola', price: 3.50 },
      { name: 'Guaraná', price: 3.50 },
      { name: 'Fanta Laranja', price: 3.50 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  }
];

export const categories = [
  { id: 'biscoitos', name: 'Biscoitos Amanteigados (Sequilhos)', icon: '🍪' },
  { id: 'lanches', name: 'Lanches', icon: '🥪' },
  { id: 'marmitas', name: 'Marmitas Fit', icon: '🥗' },
  { id: 'paes', name: 'Pães Especiais', icon: '🥖' },
  { id: 'saudaveis', name: 'Sobremesas Saudáveis', icon: '🥥' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
];

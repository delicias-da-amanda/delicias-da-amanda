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
  category: 'biscoitos' | 'lanches' | 'marmitas'|'marmitas-trad'|'paes' | 'saudaveis' | 'bebidas';
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
    description: 'Aquela receita clássica que desmancha no paladar. Perfeitos para acompanhar seu café.',
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
    id: 'lanche-natural',
    name: 'Lanche Natural',
    description: 'Saudável por natureza, artesanal por escolha. Sabor leve que alimenta e satisfaz.',
    price: 0, // Price varies by option
    category: 'lanches',
    image: '/images/lanche-natural.jpg',
    hasOptions: true,
    options: [
      { name: 'Atum', price: 9.00 },
      { name: 'Frango', price: 9.00 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'lanche-carne-louca',
    name: 'Lanche de Carne Louca',
    description: 'Carne desfiada suculenta e artesanalmente temperada. O clássico irresistível, cheio de sabor e tradição.',
    price: 8.00,
    category: 'lanches',
    image: '/images/lanches-hero.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
    
  // Pães Especiais
  {
    id: 'pao-recheado',
    name: 'Pão Recheado',
    description: 'O equilíbrio perfeito entre uma massa macia e um recheio suculento. Qualidade e sabor em cada fatia.',
    price: 0, // Price varies by option
    category: 'paes',
    image: '/images/recheado.jpg',
    hasOptions: true,
    options: [
      { name: 'Calabresa', price: 18 },
      { name: 'Calabresa com Requeijão Cremoso', price: 20 },
      { name: 'Calabresa com Queijo e Requeijão', price: 22 },
      { name: 'Frango com Requeijão', price: 22 },
      { name: 'Presunto e Queijo', price: 20 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'pao-caseirinho',
    name: 'Pão Caseirinho',
    description: 'O verdadeiro sabor de casa. Massa ultra macia e artesanal, perfeita para aquele café quentinho. Um carinho em forma de pão.',
    price: 12.00,
    category: 'paes',
    image: '/images/pao-caseiro.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },

  // Marmitas Tradicionais

  {
    id: 'Feijoada Tudo Junto',
    name: '🍛 Feijoada Magra (Tudo Junto)',
    description: 'Sabor de feijoada raiz em versão mais leve! Feijão bem temperado com carnes selecionadas e menos gordurosas, acompanhada de arroz, farofa, couve e torresmo — tudo junto na marmita.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/feijoada.jpg',
    hasOptions: true,
    options: [
      { name: '🍛 Pequena', price: 25 },
      { name: '🍛 Média', price: 30 },
      { name: '🍛 Grande', price: 35 }
      ],
    availableDays: ['quarta','sabado']
  },
  {
    id: 'Feijoada Separada',
    name: '🍛 Feijoada Magra (Separada)',
    description: 'Feijão bem temperado com carnes selecionadas e menos gordurosas. Acompanha arroz soltinho, farofa, couve e torresmo, tudo separadinho para você montar do seu jeito.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/feijoada.jpg',
    hasOptions: true,
    options: [
      { name: '🍛 Pequena', price: 35 },
      { name: '🍛 Média', price: 55 },
      { name: '🍛 Grande', price: 75 }
      ],
    availableDays: ['quarta','sabado']
  },
  {
    id: 'Virado à Paulista',
    name: '😋🍛 Virado à Paulista',
    description: 'Arroz soltinho, tutu de feijão bem temperado, couve refogada, banana frita, bisteca suculenta e ovo frito no ponto.',
    price: 24,
    category: 'marmitas-trad',
    image: '/images/viradoapaulista.jpg',
    hasOptions: false,
    availableDays: ['segunda']
  },
  {
    id: 'Frango ao Molho',
    name: '😋🍗 Frango ao Molho com batata',
    description: 'Frango macio e suculento ao molho caseiro, acompanhado de batata cozida, arroz soltinho e feijão bem temperado.',
    price: 20,
    category: 'marmitas-trad',
    image: '/images/frangoaomolho.jpg',
    hasOptions: false,
    availableDays: ['terca']
  },
   {
    id: 'Picanho',
    name: '😋🥩 Picadinho',
    description: 'Carne macia em cubos, cozida com batata e cenoura no tempero caseiro, acompanhada de arroz soltinho e feijão bem temperado.',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/picadinho.jpg',
    hasOptions: false,
    availableDays: ['terca']
  },
  {
    id: 'Macarrão ao molho',
    name: '🍝 Macarrão ao Molho com carne',
    description: 'Macarrão ao molho caseiro com carne bem temperada, acompanhado de frango assado suculento e salada de maionese caseira.',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/macarraoaomolho.jpg',
    hasOptions: false,
    availableDays: ['quinta']
  },
   {
    id: 'Panqueca',
    name: '🌯🍟 Panqueca de Carne ou Frango',
    description: 'Panqueca recheada com carne bem temperada ou frango suculento, coberta com molho caseiro, acompanhada de arroz soltinho e batata frita crocante.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/panqueca.jpg',
    hasOptions: true,
    options: [
      { name: '🌯 Panqueca de Carne', price: 22 },
      { name: '🌯 Panqueca de Frango', price: 22 },
     ],
    availableDays: ['quinta']
  },
  {
    id: 'Filé de Merluza',
    name: '😋🐟 Filé de Merluza à Milanesa',
    description: 'Filé de merluza crocante por fora e macio por dentro, acompanhado de arroz soltinho e feijão bem temperado. Escolha entre batata frita douradinha ou polenta frita crocante para completar.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/merluzaamilanesa.jpg',
    hasOptions: true,
    options: [
      { name: '🌯 Filé de Merluza à Milanesa com Batata Frita', price: 23 },
      { name: '🌯 Filé de Merluza à Milanesa com Polenta Frita', price: 23 },
     ],
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Tilápia',
    name: '😋🐟 Filé de Tilápia Grelhado',
    description: 'Filé de tilápia grelhado no ponto certo, leve e suculento, acompanhado de purê de batata cremoso, arroz soltinho e feijão bem temperado.',
    price: 23,
    category: 'marmitas-trad',
    image: '/images/filedetilapia.jpg',
    hasOptions: false,
    availableDays: ['sexta']
  },
  {
    id: 'Strogonoff de Frango',
    name: '😋🍗 Strogonoff de Frango',
    description: 'Frango em cubos ao molho cremoso e bem temperado, acompanhado de arroz soltinho e batata palha crocante.',
    price: 20,
    category: 'marmitas-trad',
    image: '/images/strogonoff.jpg',
    hasOptions: false,
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Frango',
    name: '😋🍗 Filé de Frango acompanhado de Farofa crocante',
    description: 'Filé de frango grelhado, macio e suculento, acompanhado de arroz soltinho, feijão bem temperado e farofa crocante.',
    price: 18,
    category: 'marmitas-trad',
    image: '/images/filedefrango.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'Bife à Cavalo',
    name: '🍳🥩 Bife à Cavalo',
    description: 'Bife suculento preparado no ponto certo, com ovo frito na hora, acompanhado de arroz soltinho e feijão bem temperado.',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/bifeacavalo.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'Calabresa acebolada',
    name: '🍳🍛 Calabresa acebolada com ovos fritos',
    description: 'Calabresa douradinha com bastante cebola refogada, acompanhada de dois ovos fritos no ponto, arroz soltinho e feijão bem temperado.',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/calabresa.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  
  // Marmitas Fit

  {
    id: 'salada-fit',
    name: '🥗 Salada Fit',
    description: 'Praticidade e saúde em cada garfada. Nutritiva, saborosa e pronta para o seu dia a dia.',
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
    description: 'Carnes (frango, carne bovina, peixe ou ovos). Legumes. Gordura boa (azeite). 👉 Indicada para quem busca emagrecimento.',
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
    id: 'suco-detox-classico-300ml',
    name: '🥬 Detox Clássicos (limpeza do organismo) 300ml',
    description: 'Auxiliam na eliminação de toxinas, melhoram a digestão e promovem mais disposição no dia a dia.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/suco-detox.jpg',
    hasOptions: true,
    options: [
      { name: 'Couve + Limão + Gengibre - 300ml', price: 10 },
      { name: 'Couve + Maçã + Hortelã - 300ml', price: 10 },
      { name: 'Pepino + Limão + Hortelã - 300ml', price: 10 },
      { name: 'Abacaxi + Hortelã + Gengibre - 300ml', price: 10 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'suco-detox-energetico-300ml',
    name: '💪 Detox Energético (Combinações nutritivas e naturalmente energéticas) 300ml',
    description: 'Auxiliam no aumento da disposição, fortalecimento do organismo e recuperação da energia de forma saudável.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/suco-detox.jpg',
    hasOptions: true,
    options: [
      { name: 'Beterraba + Laranja + Gengibre - 300ml', price: 10 },
      { name: 'Cenoura + Laranja + Beterraba - 300ml', price: 10 },
      { name: 'Manga + Gengibre + Limão - 300ml', price: 10 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'suco-natural-300ml',
    name: '🍹 Sucos Naturais - 300ml',
    description: 'Preparados com frutas frescas e selecionadas, sem conservantes ou adição de açúcares.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/sucos.jpg',
    hasOptions: true,
    options: [
      { name: 'Laranja – Refrescante e rica em vitamina C. - 300ml', price: 10 },
      { name: 'Abacaxi – Leve, digestivo e tropical. - 300ml', price: 10 },
      { name: 'Abacaxi com Hortelã – Refrescante e aromático. - 300ml', price: 10 },
      { name: 'Maracujá – Sabor marcante e suave. - 300ml', price: 10 },
      { name: 'Limão – Cítrico e revigorante - 300ml', price: 8 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'refrigerante-200ml',
    name: 'Refrigerante 200ml',
    description: 'Refrescante, gelado e no tamanho ideal para sua refeição. O acompanhamento clássico que não pode faltar.',
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
  { id: 'marmitas-trad', name: 'Marmitas Tradicionais', icon: '🍛' },
  { id: 'marmitas', name: 'Marmitas Fit', icon: '🥗' },
  { id: 'paes', name: 'Pães Especiais', icon: '🥖' },
  { id: 'saudaveis', name: 'Sobremesas Saudáveis', icon: '🥥' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
];

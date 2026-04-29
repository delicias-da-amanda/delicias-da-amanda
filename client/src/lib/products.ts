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
  category: 'marmitas'|'marmitas-trad'|'paes' | 'biscoitos' | 'lanches' | 'saudaveis' | 'bebidas';
  image: string;
  hasOptions: boolean;
  options?: ProductOption[];
  drinkOptions?: ProductOption[]; 
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
  
 // Marmitas Tradicionais

 {
    id: 'COMBO - Feijoada Separada',
    name: '🍛 Combo - Feijoada Magra (Separada)',
    description: 'Feijão bem temperado com carnes selecionadas e menos gordurosas. Acompanha arroz soltinho, farofa, couve e torresmo, tudo separadinho para você montar do seu jeito. E mais uma deliciosa Coca-cola geladinha.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combo.jpg',
    hasOptions: true,
    options: [
      { name: '🍛 Média + Coca-Cola 1l', price: 67.90 },
      { name: '🍛 Grande + Coca-Cola 2l', price: 89.90 }
      ],
    availableDays: ['quarta','sabado']
  }, 
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
    id: '🌭✨ Linguiça Toscana Recheada Especial',
    name: '🌭✨ Linguiça Toscana Recheada Especial',
    description: 'Linguiça toscana suculenta e recheada, cheia de sabor, acompanhada de batatas rústicas, arroz branco soltinho e feijão bem temperado. 😋🍽️',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/linguiça.jpg',
    hasOptions: false,
    availableDays: ['segunda']
  },

  {
    id: 'Parmegiana de Frango',
    name: '🍽️ Parmegiana de Frango',
    description: 'Suculento filé de frango empanado, coberto com molho de tomate e queijo derretido, formando uma parmegiana irresistível. Acompanha batata frita crocante, arroz soltinho e feijão fresquinho, garantindo um prato completo, saboroso e perfeito para matar a fome com muito sabor! 😋',
    price: 26,
    category: 'marmitas-trad',
    image: '/images/parmegiana.jpg',
    hasOptions: false,
    availableDays: ['segunda','quarta']
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
    price: 24,
    category: 'marmitas-trad',
    image: '/images/picadinho.jpg',
    hasOptions: false,
    availableDays: ['terca']
  },
  {
    id: 'Macarrão ao molho + Refrigeirante',
    name: 'Combo Duo Sabor - Nossa massa suculenta acompanhada de um refrigerante',
    description: 'Macarrão ao molho com carne, frango assado e maionese caseira. Acompanha refrigerante à sua escolha. Ou que tal Panqueca (Carne ou Frango) com batatas fritas crocantes e sequinhas. Acompanha refrigerante à sua escolha.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combonana.jpg',
    hasOptions: true,
    options: [
    { name: '🍝 Macarrão ao Molho com carne', price: 31.50 },
    { name: '🌯🍟 Panqueca de Carne', price: 31.50 },
    { name: '🌯🍟 Panqueca de Frango', price: 31.50 }
    ],
    drinkOptions: [
    { name: 'Coca-Cola 600ml', price: 0 },
    { name: 'Guaraná 600ml', price: 0 }
    
  ],
    availableDays: ['quinta']
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
    description: 'Panqueca recheada com carne bem temperada ou frango desfiado suculento, coberta com molho caseiro, acompanhada de arroz soltinho e batata frita crocante.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/panqueca.jpg',
    hasOptions: true,
    options: [
      { name: '🌯🍟 Panqueca de Carne', price: 22 },
      { name: '🌯🍟 Panqueca de Frango', price: 22 }
      ],
    availableDays: ['quinta']
  },
  {
    id: 'Pescado da Casa',
    name: '🍽️ "Pescado da Casa" + Suco Del Valle: O par perfeito! 🍝✨',
    description: '"Filé suculento com crosta dourada e crocante, preparado com aquele tempero caseiro especial. Acompanha suco Del Valle geladinho para uma refeição completa e saborosa." ou "Filé de tilápia leve e macio, grelhado no ponto certo. A combinação perfeita com suco Del Valle para quem busca leveza e muito sabor."',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combopescado.jpg',
    hasOptions: true,
    options: [
    { name: '😋🐟 Filé de Merluza à Milanesa', price: 31.50 },
    { name: '😋🐟 Filé de Tilápia Grelhado', price: 31.50 }
    ],
    drinkOptions: [
    { name: 'Suco Del Valle de Uva 290ml', price: 0 },
    { name: 'Suco Del Valle de Manga 290ml', price: 0 },
    { name: 'Suco Del Valle de Pêssego 290ml', price: 0 }
    
  ],
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Merluza',
    name: '😋🐟 Filé de Merluza à Milanesa',
    description: 'Filé de merluza crocante por fora e macio por dentro, acompanhado de arroz soltinho, feijão bem temperado e batata frita douradinha para completar.',
    price: 23,
    category: 'marmitas-trad',
    image: '/images/merluzaamilanesa.jpg',
    hasOptions: false,
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Tilápia',
    name: '😋🐟 Filé de Tilápia Grelhado',
    description: 'Filé de tilápia grelhado no ponto certo, leve e suculento, acompanhado de purê de batata cremoso, arroz soltinho e feijão bem temperado.',
    price: 23,
    category: 'marmitas-trad',
    image: '/images/tilapia.jpg',
    hasOptions: false,
    availableDays: ['sexta']
  },
  {
    id: 'Strogonoff de Frango',
    name: '😋🍗 Strogonoff de Frango',
    description: 'Frango em cubos ao molho cremoso e bem temperado, acompanhado de arroz soltinho e batata palha crocante.',
    price: 22,
    category: 'marmitas-trad',
    image: '/images/strogonoff.jpg',
    hasOptions: false,
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Frango',
    name: '😋🍗 Filé de Frango acompanhado de Farofa crocante',
    description: 'Filé de frango grelhado, macio e suculento, acompanhado de arroz soltinho, feijão bem temperado e farofa crocante.',
    price: 20,
    category: 'marmitas-trad',
    image: '/images/filedefrango.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'Bife à Cavalo',
    name: '🍳🥩 Bife à Cavalo',
    description: 'Bife suculento preparado no ponto certo, com ovo frito na hora, acompanhado de arroz soltinho e feijão bem temperado.',
    price: 24,
    category: 'marmitas-trad',
    image: '/images/bifeacavalo.jpg',
    hasOptions: false,
    availableDays: ['segunda','terca', 'quarta', 'quinta', 'sexta', 'sabado']
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
      { name: 'Ovos cozidos', price: 16 }
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
    availableDays: ['segunda', 'quarta', 'sexta']
  },
  {
    id: 'lanche-carne-louca',
    name: 'Lanche de Carne Louca',
    description: 'Carne desfiada suculenta e artesanalmente temperada. O clássico irresistível, cheio de sabor e tradição.',
    price: 9.00,
    category: 'lanches',
    image: '/images/lanches-hero.jpg',
    hasOptions: false,
    availableDays: ['terca', 'quinta']
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
 
  // Sobremesas Saudáveis

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
      { name: 'Cenoura + Laranja + Gengibre - 300ml', price: 10 },
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
    id: 'refrigerante-Coca',
    name: 'Refrigerante Coca-Cola',
    description: 'Refrescante, gelado e no tamanho ideal para sua refeição. O acompanhamento clássico que não pode faltar.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/coca.jpg',
    hasOptions: true,
    options: [
      { name: 'Coca-Cola', price: 3.50 },
      { name: 'Coca-Cola 600ml', price: 9.90 },
      { name: 'Coca-Cola 1l', price: 11.90 },
      { name: 'Coca-Cola 2l', price: 16.50 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },
  {
    id: 'refrigerante-guarana',
    name: 'Refrigerante Guaraná',
    description: 'Refrescante, gelado e no tamanho ideal para sua refeição. O acompanhamento clássico que não pode faltar.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/guarana.jpg',
    hasOptions: true,
    options: [
      { name: 'Guaraná', price: 3.50 },
      { name: 'Guaraná 600ml', price: 9.90 },
      { name: 'Guaraná 1l', price: 11.90 },
      { name: 'Guaraná 2l', price: 16.50 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  }
];

export const categories = [
  { id: 'marmitas-trad', name: 'Marmitas Tradicionais', icon: '🍛' },
  { id: 'marmitas', name: 'Marmitas Fit', icon: '🥗' },
  { id: 'paes', name: 'Pães Especiais', icon: '🥖' },
  { id: 'biscoitos', name: 'Biscoitos Amanteigados (Sequilhos)', icon: '🍪' },
  { id: 'lanches', name: 'Lanches', icon: '🥪' },
  { id: 'saudaveis', name: 'Sobremesas Saudáveis', icon: '🥥' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
];

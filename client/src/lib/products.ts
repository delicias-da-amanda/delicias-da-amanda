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
  category: 'marmitas-trad'|'paes' | 'biscoitos' | 'lanches' | 'sobremesas' | 'bebidas';
  image: string;
  hasOptions: boolean;
  options?: ProductOption[];
  drinkOptions?: ProductOption[]; 
  availableDays: DayOfWeek[]; // Dias em que o produto aparece no site
  active?: boolean;
  
  // 🚀 NOVOS CAMPOS PARA REGRAS DE ENCOMENDA
  productionDay?: DayOfWeek;  // Ex: 'sexta'
  deadlineLabel?: string;     // Ex: 'pedidos até quinta às 16:00'
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
    name: '🍛 COMBO Alquimia Perfeita - Feijoada Magra (Separada)',
    description: 'Feijão bem temperado com carnes selecionadas e menos gordurosas. Acompanha arroz soltinho, farofa, couve e torresmo, tudo separadinho para você montar do seu jeito. E mais uma deliciosa Coca-cola geladinha.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combo.jpg',
    hasOptions: true,
    options: [
      { name: '🍛 Pequena + Coca-Cola 600ml', price: 44.90 },
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
    price: 0,
    category: 'marmitas-trad',
    image: '/images/viradoapaulista.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 21 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 24 }
    ],
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
    active: false,
    availableDays: ['terca']
  },

  {
    id: 'Parmegiana de Frango',
    name: '🍽️ Parmegiana de Frango',
    description: 'Suculento filé de frango empanado, coberto com molho de tomate e queijo derretido, formando uma parmegiana irresistível. Acompanha batata frita crocante, arroz soltinho e feijão fresquinho, garantindo um prato completo, saboroso e perfeito para matar a fome com muito sabor! 😋',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/parmegiana.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 23 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 26 }
    ],
    availableDays: ['segunda','quarta']
  },
  {
    id: 'Bisteca  com Fritas',
    name: '🥩🍟 Bisteca com Fritas',
    description: 'Deliciosa bisteca frita douradinha e suculenta, servida com arroz branco soltinho, feijão caseiro bem temperado e uma porção de batata frita crocante.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/bisteca.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 20 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 22 }
    ],
    availableDays: ['segunda']
  },
  {
    id: 'Frango ao Molho',
    name: '😋🍗 Frango ao Molho com batata',
    description: 'Frango macio e suculento ao molho caseiro, acompanhado de batata cozida, arroz soltinho e feijão bem temperado.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/frangoaomolho.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 20 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 22 }
    ],
    availableDays: ['terca']
  },
   {
    id: 'Picanho',
    name: '😋🥩 Picadinho',
    description: 'Carne macia em cubos, cozida com batata e cenoura no tempero caseiro, acompanhada de arroz soltinho e feijão bem temperado.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/picadinho.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 21 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 24 }
    ],
    availableDays: ['terca']
  },
  {
    id: 'Macarrão ao molho + Refrigeirante',
    name: 'Combo Duo Sabor - Nossa massa suculenta acompanhada de um refrigerante',
    description: 'Nhoque Artesanal ao Sugo com Frango Assado. Acompanha refrigerante à sua escolha. Ou que tal Panqueca (Carne ou Frango) com batatas fritas crocantes e sequinhas. Acompanha refrigerante à sua escolha.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combomassas.jpg',
    hasOptions: true,
    options: [
    { name: '🍝 Nhoque Artesanal ao Sugo com Frango Assado', price: 35 },
    { name: '🌯🍟 Panqueca de Carne', price: 33 },
    { name: '🌯🍟 Panqueca de Frango', price: 33 }
    ],
    drinkOptions: [
    { name: 'Coca-Cola 600ml', price: 0 },
    { name: 'Guaraná 600ml', price: 0 }
    
  ],
    availableDays: ['quinta']
  },
    {
    id: 'Nhoque Artesanal ao Sugo com Frango Assado',
    name: '🍝 Nhoque Artesanal ao Sugo com Frango Assado',
    description: 'Nhoque de batata leve e artesanal ao molho de tomates frescos, acompanhado por uma suculenta sobrecoxa de frango assada. Para completar, nosso tradicional arroz soltinho e feijão  caprichado. Uma refeição completa e afetiva!',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/nhoque.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 23 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 26 }
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
    active: false,
    availableDays: ['segunda']
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
      { name: '🌯🍟 Panqueca de Carne', price: 24 },
      { name: '🌯🍟 Panqueca de Frango', price: 24 }
      ],
    availableDays: ['quinta']
  },
  {
    id: 'Pescado da Casa',
    name: '🍽️ "Pescado da Casa" + Suco Del Valle: O par perfeito! 🍝✨',
    description: '"Filé de Merluza à Milanesa suculenta com crosta dourada e crocante, preparado com aquele tempero caseiro especial, acompanha um refrigerante 600ml geladinho para uma refeição completa e saborosa." ou "Filé de tilápia leve e macio, grelhado no ponto certo. A combinação perfeita com um refrigerante 600ml para quem busca leveza e muito sabor."',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/combopescado.jpg',
    hasOptions: true,
    options: [
    { name: '😋🐟 Filé de Merluza à Milanesa', price: 33.00 },
    { name: '😋🐟 Filé de Tilápia Grelhado', price: 33.00 }
    ],
    drinkOptions: [
    { name: 'Coca-Cola 600ml', price: 0 },
    { name: 'Guaraná 600ml', price: 0 }
    
  ],
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Merluza',
    name: '😋🐟 Filé de Merluza à Milanesa',
    description: 'Filé de merluza crocante por fora e macio por dentro, acompanhado de arroz soltinho, feijão bem temperado e batata frita douradinha para completar.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/merluzaamilanesa.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 21 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 23 }
    ],
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Tilápia',
    name: '😋🐟 Filé de Tilápia Grelhado',
    description: 'Filé de tilápia grelhado no ponto certo, leve e suculento, acompanhado de purê de batata cremoso, arroz soltinho e feijão bem temperado.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/tilapia.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 21 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 23 }
    ],
    availableDays: ['sexta']
  },
  {
    id: 'Strogonoff de Frango',
    name: '😋🍗 Strogonoff de Frango',
    description: 'Frango em cubos ao molho cremoso e bem temperado, acompanhado de arroz soltinho e batata palha crocante.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/strogonoff.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 20 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 22 }
    ],
    availableDays: ['sexta']
  },
  {
    id: 'Filé de Frango',
    name: '😋🍗 Filé de Frango acompanhado de Farofa crocante',
    description: 'Filé de frango grelhado, macio e suculento, acompanhado de arroz soltinho, feijão bem temperado e farofa crocante.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/filedefrango.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 18 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 20 }
    ],
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
    active: false,
    availableDays: ['segunda']
  },
  {
    id: 'Calabresa acebolada',
    name: '🍳🍛 Calabresa acebolada com ovos fritos',
    description: 'Calabresa douradinha com bastante cebola refogada, acompanhada de dois ovos fritos no ponto, arroz soltinho e feijão bem temperado.',
    price: 0,
    category: 'marmitas-trad',
    image: '/images/calabresa.jpg',
    hasOptions: true,
    options: [
    { name: 'Pequena Magia (Brotinho) - "A magia do nosso sabor concentrada na medida exata" (Aprox. 500g)', price: 20 },
    { name: 'Grande Alquimia (Tradicional) - "A nossa alquimia completa para quem precisa de energia total no almoço" (Aprox. 700g)', price: 22 }
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
  price: 0, 
  category: 'paes',
  image: '/images/recheado.jpg',
  hasOptions: true,
  options: [
    { name: 'Calabresa', price: 20 },
    { name: 'Calabresa com Requeijão Cremoso', price: 22 },
    { name: 'Calabresa com Queijo e Requeijão', price: 24 },
    { name: 'Frango com Requeijão', price: 24 },
    { name: 'Presunto e Queijo', price: 22 },
    { name: '4 Queijos', price: 28 }
  ],
  availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'],
  
  // 🏢 Configuração da Encomenda:
  productionDay: 'sexta',
  deadlineLabel: 'Faça seu pedido até quinta-feira às 16:00'
},
{
  id: 'pao-caseirinho',
  name: 'Pão Caseirinho',
  description: 'O verdadeiro sabor de casa. Massa ultra macia e artesanal, perfeita para aquele café quentinho. Um carinho em forma de pão.',
  price: 12.00,
  category: 'paes',
  image: '/images/pao-caseiro.jpg',
  hasOptions: false,
  availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'],
  
  // 🏢 Configuração da Encomenda:
  productionDay: 'sexta',
  deadlineLabel: 'Faça seu pedido até quinta-feira às 16:00'
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
 
  // Sobremesas

  {
    id: 'mousse-de-limao',
    name: '🍋 🥄Mousse de Limão',
    description: 'Deliciosa mousse de limão super cremosa, preparada com ingredientes selecionados para garantir o equilíbrio perfeito entre o doce e o cítrico',
    price: 7,
    category: 'sobremesas',
    image: '/images/mousse.jpg',
    hasOptions: false,
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta']
  },
   {
    id: 'bolo-de-pote-200ml',
    name: '🍰 Bolo de Pote - Prestígio ou Brigadeiro 200ml',
    description: 'Deliciosas camadas de massa de chocolate e recheio cremoso. Escolha entre o clássico Prestígio, com creme de coco, ou o irresistível Brigadeiro, para os apaixonados por chocolate. 😋🍫',
    price: 0, // Price varies by option
    category: 'sobremesas',
    image: '/images/bolodepote.jpg',
    hasOptions: true,
    options: [
      { name: 'Prestigio - 200ml', price: 10 },
      { name: 'Brigadeiro - 200ml', price: 10 }
    ],
    availableDays: ['terca', 'quarta', 'quinta', 'sexta', 'sabado']
  },

  // Bebidas

  {
    id: 'refrigerante-Coca',
    name: 'Refrigerante Coca-Cola',
    description: 'Refrescante, gelado e no tamanho ideal para sua refeição. O acompanhamento clássico que não pode faltar.',
    price: 0, // Price varies by option
    category: 'bebidas',
    image: '/images/coca.jpg',
    hasOptions: true,
    options: [
      { name: 'Coca-Cola lata 310ml', price: 7.50 },
      { name: 'Coca-Cola 600ml', price: 11.00 },
      { name: 'Coca-Cola 1l', price: 12.90 },
      { name: 'Coca-Cola 2l', price: 16.90 }
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
      { name: 'Guaraná lata 350ml', price: 7.50 },
      { name: 'Guaraná 600ml', price: 11.00 },
      { name: 'Guaraná 1l', price: 12.90 },
      { name: 'Guaraná 2l', price: 16.90 }
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
      { name: 'Limão – Cítrico e revigorante - 300ml', price: 8 }
    ],
    availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  }
];

export const categories = [
  { id: 'marmitas-trad', name: 'Marmitas Tradicionais', icon: '🍛' },
  { id: 'paes', name: 'Pães Especiais', icon: '🥖' },
  { id: 'biscoitos', name: 'Biscoitos Amanteigados (Sequilhos)', icon: '🍪' },
  { id: 'lanches', name: 'Lanches', icon: '🥪' },
  { id: 'sobremesas', name: 'Sobremesas', icon: '🍰' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
];

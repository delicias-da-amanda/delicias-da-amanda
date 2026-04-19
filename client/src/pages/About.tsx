/* 
Design: Organic Minimalism
- Storytelling layout with organic flow
- Warm imagery and generous whitespace
*/

import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Amor em Cada Receita',
      description: 'Cada produto é preparado com dedicação e carinho, seguindo receitas tradicionais que passam de geração em geração.'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Ingredientes Naturais',
      description: 'Selecionamos cuidadosamente ingredientes frescos e de qualidade, priorizando fornecedores locais e sustentáveis.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Feito para Você',
      description: 'Valorizamos cada cliente e nos dedicamos a oferecer produtos que trazem conforto e felicidade para seu dia.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Qualidade Artesanal',
      description: 'Produção artesanal em pequenos lotes garante frescor, sabor autêntico e atenção aos detalhes em cada produto.'
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight">
              Nossa História
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Alquimia da Amanda</strong> nasceu do amor pela culinária caseira e do desejo de compartilhar sabores que aquecem o coração. O que começou com o aroma dos nossos primeiros pães artesanais, sequilhos e marmitas fit, transformou-se em um cardápio completo feito para acompanhar todos os momentos do seu dia.
              </p>
              <p>
                A Alquimia da Amanda nasceu do amor pela culinária caseira e da paixão por transformar ingredientes simples em experiências que aquecem o coração. ✨ Cada receita carrega um toque especial — uma verdadeira alquimia de sabores, feita com cuidado, afeto e dedicação diária.

O que começou com o aroma irresistível dos nossos pães artesanais, sequilhos e marmitas fit, evoluiu e se transformou. Hoje, nosso cardápio é completo e pensado para acompanhar todos os momentos do seu dia: das marmitas tradicionais com tempero de família aos sucos detox refrescantes e lanches preparados com ingredientes selecionados.

Mais do que crescer, nós nos transformamos — sem nunca perder a essência. Seguimos unindo sabor, qualidade e praticidade, sempre com aquele carinho que faz toda diferença em cada detalhe.
              </p>
              <p>
                Nosso compromisso permanece o mesmo desde o início: fazer você se sentir em casa, com sabores que alimentam o corpo, confortam a alma e transformam o seu dia. 🍽️💛
              </p>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/images/nossahistoria.png"
                alt="Sobre a Alquimia da Amanda"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que transformam cada preparo em uma verdadeira experiência de sabor e cuidado:

             ❤️ Afeto em Cada Detalhe
             Cada prato carrega mais do que ingredientes — leva carinho, dedicação e aquele toque especial que transforma refeições em momentos que aquecem o coração.

            🥖 Essência Artesanal
             Mantemos viva a nossa origem, valorizando o preparo cuidadoso, os ingredientes selecionados e a qualidade que só o feito com atenção e amor pode oferecer.

            🏠 Conexão e Acolhimento
            Acreditamos que a comida tem o poder de aproximar pessoas. Por isso, criamos experiências que fazem você se sentir em casa, em cada pedido.

            ⚡ Transformação com Propósito
             Assim como a nossa essência, estamos sempre evoluindo — trazendo mais variedade, praticidade e sabor, sem abrir mão da qualidade e do cuidado que nos definem.

            🍽️ Qualidade e Sabor de Verdade
             Compromisso com refeições frescas, bem preparadas e cheias de sabor, para tornar o seu dia mais leve, prático e especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="rounded-3xl border-2 border-border hover:border-accent transition-all duration-400 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="text-center p-8 rounded-3xl bg-accent/10 border-2 border-accent/20">
            <div className="text-4xl mb-3">🏠</div>
            <h4 className="font-display font-semibold text-foreground mb-2">Produção Caseira</h4>
            <p className="text-sm text-muted-foreground">Feito na hora com técnicas artesanais</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-accent/10 border-2 border-accent/20">
            <div className="text-4xl mb-3">✨</div>
            <h4 className="font-display font-semibold text-foreground mb-2">Ingredientes Selecionados</h4>
            <p className="text-sm text-muted-foreground">Qualidade em cada ingrediente</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-accent/10 border-2 border-accent/20">
            <div className="text-4xl mb-3">💚</div>
            <h4 className="font-display font-semibold text-foreground mb-2">Feito com Amor</h4>
            <p className="text-sm text-muted-foreground">Dedicação em cada produto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

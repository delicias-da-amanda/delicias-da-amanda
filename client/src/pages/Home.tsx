/* 
Design: Organic Minimalism
- Hero section with warm imagery and generous spacing
- Soft shadows and rounded corners throughout
- Organic flow with asymmetric layouts
*/

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Heart, Sparkles, Star } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Feito com Carinho',
      description: 'Cada produto é preparado artesanalmente com ingredientes selecionados'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Sempre Fresquinho',
      description: 'Produção diária para garantir a qualidade e o sabor caseiro'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Ingredientes Selecionados',
      description: 'Utilizamos apenas os melhores ingredientes em nossas receitas'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Os pães recheados são simplesmente maravilhosos! Viraram tradição no café da manhã da família.',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'Sequilhos perfeitos, crocantes e saborosos. Recomendo muito!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'Lanches deliciosos e atendimento impecável. Sempre peço pelo WhatsApp!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Produtos Artesanais
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-tight">
                Sabores feitos com carinho,{' '}
                <span className="text-accent">direto para sua casa</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Descubra o prazer de saborear produtos artesanais preparados com dedicação e ingredientes de qualidade. 
                Cada mordida é uma experiência única.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cardapio" className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full h-14 px-8 text-base font-medium group w-full" asChild>
                    <span>
                      Ver Produtos
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full h-14 px-8 text-base font-medium"
                  onClick={() => window.open('https://wa.me/5511986511287', '_blank')}
                >
                  Pedir pelo WhatsApp
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-banner.jpg"
                  alt="Produtos da Delícias da Amanda"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-3xl p-6 shadow-xl border-2 border-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-lg">5.0</p>
                    <p className="text-sm text-muted-foreground">Avaliação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Por que escolher a Delícias da Amanda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso compromisso é oferecer produtos de qualidade que trazem conforto e felicidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="rounded-3xl border-2 border-border hover:border-accent transition-all duration-400 hover:-translate-y-2 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Pronto para fazer seu pedido?
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Navegue pelo nosso cardápio e escolha seus produtos favoritos. 
              Entrega rápida e atendimento personalizado!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cardapio" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="rounded-full h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 w-full"
                  asChild
                >
                  <span>Ver Cardápio Completo</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

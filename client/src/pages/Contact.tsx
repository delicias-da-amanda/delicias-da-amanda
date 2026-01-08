/* 
Design: Organic Minimalism
- Contact cards with social media links
- Warm and inviting layout
*/

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'WhatsApp',
      description: 'Faça seu pedido ou tire dúvidas',
      action: 'Enviar mensagem',
      link: 'https://wa.me/5511986511287',
      color: 'bg-green-500/10 text-green-700 hover:bg-green-500/20'
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: 'Instagram',
      description: 'Acompanhe novidades e promoções',
      action: 'Seguir @deliciasdaamanda',
      link: 'https://instagram.com/deliciasdaamanda',
      color: 'bg-pink-500/10 text-pink-700 hover:bg-pink-500/20'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Google Meu Negócio',
      description: 'Veja avaliações e localização',
      action: 'Ver no Google',
      link: 'https://g.page/deliciasdaamanda',
      color: 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20'
    }
  ];

  const businessInfo = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 14h', 'Domingo: Fechado']
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      details: ['(11) 1198651-1287', 'WhatsApp disponível']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'E-mail',
      details: ['contato@deliciasdaamanda.com.br', 'Respondemos em até 24h']
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você! Escolha a forma de contato que preferir
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="rounded-3xl border-2 border-border hover:border-accent transition-all duration-400 hover:-translate-y-2 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full ${method.color} flex items-center justify-center mx-auto mb-6 transition-colors duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {method.description}
                </p>
                <Button
                  onClick={() => window.open(method.link, '_blank')}
                  className="w-full rounded-full"
                  variant="outline"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Info */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-foreground text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Informações de Atendimento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <Card 
                key={index}
                className="rounded-3xl border-2 border-border bg-card animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-accent text-accent-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
            Pronto para fazer seu pedido?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e faça seu pedido agora mesmo. 
            Estamos ansiosos para atender você!
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90"
            onClick={() => window.open('https://wa.me/5511986511287', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

/* 
Design: Organic Minimalism
- Hero section with warm imagery and generous spacing
- Soft shadows and rounded corners throughout
- Organic flow with asymmetric layouts
*/

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion'; // Recomendo instalar: npm install framer-motion

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-accent selection:text-white">
      
      {/* Hero Section - Foco total no nome e impacto */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-12">
            
            {/* Badge Minimalista */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-[0.2em] font-medium"
            >
              <Sparkles className="h-3 w-3" />
              Sabor Artesanal • 2026
            </motion.div>
            
            {/* Título Gigante (Viewport Width) */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[14vw] md:text-[11vw] font-bold leading-[0.8] uppercase tracking-tighter"
            >
              Alquimia <br />
              <span className="text-accent italic font-light">da Amanda</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-md text-sm md:text-base uppercase tracking-widest text-muted-foreground font-light leading-relaxed"
            >
              Sabores feitos com dedicação e ingredientes de qualidade, direto para sua casa.
            </motion.p>

           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
         >
           <img 
            src="/images/logo.png" 
            alt="Logo Alquimia da Amanda" 
            className="h-48 w-auto" 
        />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-8 items-center pt-8"
            >
              <Link href="/cardapio">
                <button className="group text-lg font-medium uppercase tracking-tighter flex items-center gap-2 border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-all">
                  Ver Cardápio
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Detalhe de linha vertical (estilo portfólio) */}
        <div className="absolute bottom-0 left-1/2 w-[1px] h-20 bg-border" />
      </section>

      {/* Seção Sobre / Frase de Impacto */}
      <section className="py-32 bg-card text-card-foreground border-y border-border">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight uppercase">
                Acreditamos que o alimento é uma forma de <span className="text-accent">conexão</span> e carinho entre as pessoas.
              </h2>
            </div>
            <div className="lg:col-span-4 text-muted-foreground text-sm uppercase tracking-widest leading-loose">
              Cada mordida é uma verdadeira alquimia de sabores — uma experiência única que transforma ingredientes selecionados em momentos inesquecíveis, com preparo fresco todos os dias e um toque especial que só a Alquimia da Amanda tem. ✨🍽️
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Minimalista */}
      <section className="py-40 bg-secondary text-foreground dark:text-white overflow-hidden transition-colors duration-300">
        <div className="container px-6 text-center">
          <h2 className="text-[10vw] font-bold uppercase tracking-tighter leading-none mb-12">
            Peça agora
          </h2>
          <Button 
            variant="outline"
            className="rounded-full h-20 px-12 text-xl border-foreground text-foreground dark:border-white dark:text-white hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black transition-all"
            onClick={() => window.open('https://wa.me/5511', '_blank')}
          >
            WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}

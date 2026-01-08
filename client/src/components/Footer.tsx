/* 
Design: Organic Minimalism
- Soft olive green background with cream text
- Generous spacing and organic shapes
*/

import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-xl">
                🍞
              </div>
              <h3 className="text-xl font-display font-semibold">Delícias da Amanda</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Produtos artesanais feitos com carinho e ingredientes selecionados. 
              Sabores que aquecem o coração e trazem memórias afetivas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm hover:opacity-70 transition-opacity duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="/cardapio" className="text-sm hover:opacity-70 transition-opacity duration-300">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-sm hover:opacity-70 transition-opacity duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="text-sm hover:opacity-70 transition-opacity duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Fale Conosco</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/551111986511287" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/deliciasdaamanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span>@deliciasdaamanda</span>
              </a>
              <a 
                href="https://g.page/deliciasdaamanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:opacity-70 transition-opacity duration-300"
              >
                <MapPin className="h-5 w-5" />
                <span>Google Meu Negócio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Delícias da Amanda. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 opacity-70">
            Feito com 💚 e muito carinho
          </p>
        </div>
      </div>
    </footer>
  );
}

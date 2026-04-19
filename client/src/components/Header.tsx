import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from 'framer-motion';

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/cardapio', label: 'Cardápio' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' }
  ];

  return (
    // Removido bg-background e shadow para ficar transparente sobre o Hero
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-8 transition-all duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo Minimalista: Apenas texto ou ícone discreto */}
          <Link href="/" className="flex flex-col cursor-pointer group">
            <span className="text-xl font-bold uppercase tracking-[0.2em] leading-none">
              Amanda
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1 group-hover:text-accent transition-colors">
              Alquimia
            </span>
          </Link>

          {/* Desktop Nav: Links pequenos e em caixa alta (Estilo Portfólio) */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:opacity-50 relative ${
                  location === link.href ? 'font-bold' : 'font-medium'
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground" />
                )}
              </Link>
            ))}
          </nav>

          {/* Ações: Botões circulares e limpos */}
          <div className="flex items-center gap-3 md:gap-6">
            <ThemeToggle />
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:opacity-50 transition-opacity"
            >
              <ShoppingCart className="h-5 w-5 stroke-[1.5px]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-[9px] flex items-center justify-center rounded-full text-white font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay: Tela cheia como o do Kuon */}
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-background z-[-1] flex flex-col items-center justify-center gap-8 text-center"
          >
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-bold uppercase tracking-tighter hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}
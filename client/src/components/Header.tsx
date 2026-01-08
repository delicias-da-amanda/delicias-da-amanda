/* 
Design: Organic Minimalism
- Warm cream background with soft shadows
- Fraunces serif for logo, DM Sans for navigation
- Generous spacing and rounded corners
*/

import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl transition-transform duration-400 group-hover:scale-105">
              🍞
            </div>
            <div>
              <h1 className="text-2xl font-display font-semibold text-foreground tracking-tight">
                Delícias da Amanda
              </h1>
              <p className="text-xs text-muted-foreground font-body">Feito com carinho</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`font-body font-medium text-sm transition-colors duration-300 hover:text-accent ${
                  location === link.href ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onCartClick}
              variant="outline"
              size="icon"
              className="relative rounded-full h-12 w-12 border-2 transition-all duration-300 hover:scale-105 hover:border-accent"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground rounded-full font-mono text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full h-12 w-12"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body font-medium text-base py-2 transition-colors duration-300 hover:text-accent ${
                    location === link.href ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

/* 
Design: Organic Minimalism
- Floating WhatsApp button with pulse animation
- Smooth hover effects
*/

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos da Delícias da Amanda.');
    window.open(`https://wa.me/5511953293602?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 bg-green-500 hover:bg-green-600 text-white animate-bounce-subtle"
      style={{
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }}
    >
      <MessageCircle className="h-8 w-8" />
      <span className="sr-only">Falar no WhatsApp</span>
    </Button>
  );
}

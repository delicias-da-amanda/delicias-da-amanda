/* 
Design: Organic Minimalism
- Slide-in from right with backdrop blur
- Generous spacing and rounded elements
- Smooth transitions
*/

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Minus, ShoppingBag, MessageCircle, Printer } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [observations, setObservations] = useState('');

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return toast.error('Seu carrinho está vazio!');
    if (!customerName.trim()) return toast.error('Por favor, informe seu nome!');

    const totalPedido = getTotalPrice();

    let message = `*🍞 NOVO PEDIDO - DELÍCIAS DA AMANDA*\n`;
    message += `------------------------------------------\n\n`;
    message += `👤 *Cliente:* ${customerName}\n\n`;
    
    message += `📦 *ITENS DO PEDIDO:*\n`;
    items.forEach(item => {
      const itemName = item.selectedOption 
        ? `${item.product.name} (${item.selectedOption.name})`
        : item.product.name;
      const price = item.selectedOption?.price || item.product.price;
      message += `• ${item.quantity}x ${itemName} - R$ ${(price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n------------------------------------------\n`;
    message += `✅ *TOTAL FINAL: R$ ${totalPedido.toFixed(2).replace('.', ',')}*\n`;
    message += `------------------------------------------\n`;

    if (observations.trim()) {
      message += `\n📝 *Observações:* ${observations}`;
    }

    const whatsappUrl = `https://wa.me/5511986511287?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para WhatsApp...');
  };

  const handlePrint = () => {
    if (items.length === 0) return toast.error('Seu carrinho está vazio!');
    if (!customerName.trim()) return toast.error('Por favor, informe seu nome!');

    const printHTML = `
      <html>
        <head>
          <title>Pedido - Delícias da Amanda</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #4A3933; }
            .header { text-align: center; border-bottom: 2px solid #8B9474; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
            th { background: #8B9474; color: white; }
            .total-section { text-align: right; margin-top: 20px; }
            .footer { text-align: center; margin-top: 30px; font-style: italic; color: #8B9474; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🍞 Delícias da Amanda</h1>
            <p>Comprovante de Pedido</p>
          </div>
          <p><strong>Cliente:</strong> ${customerName}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <table>
            <thead>
              <tr><th>Produto</th><th>Qtd</th><th>Total</th></tr>
            </thead>
            <tbody>
              ${items.map(item => `
                <tr>
                  <td>${item.product.name} ${item.selectedOption ? `(${item.selectedOption.name})` : ''}</td>
                  <td>${item.quantity}</td>
                  <td>R$ ${( (item.selectedOption?.price || item.product.price) * item.quantity).toFixed(2).replace('.', ',')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="total-section">
            <h3>TOTAL: R$ ${getTotalPrice().toFixed(2).replace('.', ',')}</h3>
          </div>
          ${observations ? `<p><strong>Obs:</strong> ${observations}</p>` : ''}
          <div class="footer"><p>🌟 Agradecemos a preferência!</p></div>
        </body>
      </html>
    `;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const pri = iframe.contentWindow;
    if (pri) {
      pri.document.open();
      pri.document.write(printHTML);
      pri.document.close();
      setTimeout(() => {
        pri.focus();
        pri.print();
        setTimeout(() => document.body.removeChild(iframe), 1000);
      }, 500);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display">Seu Carrinho</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Seu carrinho está vazio' : `${items.length} ${items.length === 1 ? 'item' : 'itens'} no carrinho`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Adicione produtos ao seu carrinho</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 my-6">
              {items.map(item => (
                <div key={item.uniqueId} className="flex gap-4 p-4 rounded-2xl border-2 border-border bg-card">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground text-sm line-clamp-1">{item.product.name}</h4>
                    {item.selectedOption && <p className="text-xs text-muted-foreground mt-1">{item.selectedOption.name}</p>}
                    <p className="text-sm font-mono text-accent mt-1">R$ {(item.selectedOption?.price || item.product.price).toFixed(2).replace('.', ',')}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)}><Minus className="h-3 w-3" /></Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}><Plus className="h-3 w-3" /></Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full shrink-0" onClick={() => removeFromCart(item.uniqueId)}><X className="h-4 w-4" /></Button>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Seu Nome *</label>
                <Input placeholder="Digite seu nome" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Observações</label>
                <Textarea placeholder="Ex: sem cebola..." value={observations} onChange={(e) => setObservations(e.target.value)} className="rounded-xl min-h-[80px]" />
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-display font-semibold text-foreground">Total do Pedido</span>
                <span className="text-2xl font-mono font-bold text-accent">R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={handleWhatsAppOrder} className="w-full rounded-full h-12 font-medium" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" /> Finalizar no WhatsApp
              </Button>
              <Button onClick={handlePrint} variant="outline" className="w-full rounded-full h-12 font-medium" size="lg">
                <Printer className="mr-2 h-5 w-5" /> Imprimir Pedido
              </Button>
              <Button onClick={() => { clearCart(); toast.success('Carrinho limpo!'); }} variant="ghost" className="w-full rounded-full h-10 text-sm">
                Limpar Carrinho
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
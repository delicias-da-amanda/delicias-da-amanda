/* Design: Organic Minimalism
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
import { X, Plus, Minus, ShoppingBag, MessageCircle, Printer, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

import { PaymentSelector } from '@/components/PaymentSelector';
import { usePayment } from '@/contexts/PaymentContext';
import { generateAvailableTimes } from '@/lib/utils';

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

interface ViaCepData {
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [observations, setObservations] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const { paymentMethod } = usePayment();

  // NOVOS ESTADOS PARA O FRETE
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<number | null>(null);
  const [infoLocalidade, setInfoLocalidade] = useState('');
  const [carregandoCep, setCarregandoCep] = useState(false);

  // Atualiza os horários disponíveis sempre que o carrinho for aberto
  useEffect(() => {
    if (open) {
      setAvailableTimes(generateAvailableTimes());
    }
  }, [open]);

  // Máscara de CEP automatizada
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, '');
    if (valor.length > 5) {
      valor = `${valor.slice(0, 5)}-${valor.slice(5, 8)}`;
    }
    setCep(valor);
  };

  // Cálculo de frete consultando API com base na sua localização em Mairiporã
  const calcularFrete = async () => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      return toast.error('Por favor, informe um CEP válido com 8 dígitos!');
    }

    setCarregandoCep(true);
    setInfoLocalidade('Buscando endereço...');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados: ViaCepData = await response.json();

      if (dados.erro) {
        setInfoLocalidade('');
        setFrete(null);
        return toast.error('CEP não encontrado. Verifique os números!');
      }

      setInfoLocalidade(`${dados.logradouro || ''}, ${dados.bairro || ''} - ${dados.localidade}/${dados.uf}`);

      const cidade = dados.localidade?.toLowerCase() || '';
      const bairro = dados.bairro?.toLowerCase() || '';
      let valorCalculado = 0;

      // REGRAS DE FRETE MOLDADAS PARA SUA BASE (07611-035 - Mairiporã)
      if (cidade === 'mairiporã') {
        if (bairro.includes('centro') || bairro.includes('vila')) {
          valorCalculado = 3.00; // Raio mais próximo
        } else {
          valorCalculado = 6.00; // Bairros afastados de Mairiporã
        }
      } else if (['são paulo', 'guarulhos', 'franco da rocha'].includes(cidade)) {
        valorCalculado = 18.00; // Municípios limítrofes
      } else if (dados.uf === 'SP') {
        valorCalculado = 28.00; // Restante do estado de SP
      } else {
        valorCalculado = 40.00; // Outros Estados
      }

      setFrete(valorCalculado);
      toast.success('Taxa de entrega calculada!');
    } catch (error) {
      setInfoLocalidade('');
      setFrete(null);
      toast.error('Erro ao calcular o frete. Tente novamente.');
    } finally {
      setCarregandoCep(false);
    }
  };

  const subtotal = getTotalPrice();
  const valorFreteEfetivo = frete || 0;
  const totalGeral = subtotal + valorFreteEfetivo;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return toast.error('Seu carrinho está vazio!');
    if (!customerName.trim()) return toast.error('Por favor, informe seu nome!');
    if (frete === null) return toast.error('Por favor, calcule o frete informando o CEP!');
    
    if (availableTimes.length > 0 && !deliveryTime) {
      return toast.error('Por favor, selecione o horário que deseja receber seu pedido!');
    }
    
    if (!paymentMethod) return toast.error('Selecione a forma de pagamento!');

    let message = `*🍲 NOVO PEDIDO - ALQUIMIA DA AMANDA 🥘*\n`;
    message += `------------------------------------------\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    
    if (deliveryTime) {
      message += `⏰ *Horário Desejado:* ${deliveryTime}\n`;
    }
    
    message += `💳 *Pagamento:* ${paymentMethod.toUpperCase()}\n`;
    
    if (paymentMethod === 'pix') {
      message += `🔑 *Chave PIX:* 66.120.230/0001-00\n`;
    }
    
    message += `📍 *Endereço de Entrega:* ${infoLocalidade} (CEP: ${cep})\n\n`;

    message += `📦 *ITENS DO PEDIDO:*\n`;
    items.forEach(item => {
      const itemName = item.selectedOption 
        ? `${item.product.name} (${item.selectedOption.name})`
        : item.product.name;
      const price = item.selectedOption?.price || item.product.price;
      message += `• ${item.quantity}x ${itemName} - R$ ${(price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n------------------------------------------\n`;
    message += `💵 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    message += `🛵 *Taxa de Entrega:* R$ ${valorFreteEfetivo.toFixed(2).replace('.', ',')}\n`;
    message += `✅ *TOTAL FINAL: R$ ${totalGeral.toFixed(2).replace('.', ',')}*\n`;
    message += `------------------------------------------\n`;

    if (observations.trim()) {
      message += `\n📝 *Observações:* ${observations}`;
    }

    const whatsappUrl = `https://wa.me/5511953293602?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para WhatsApp...');
  };

  const handlePrint = () => {
    if (items.length === 0) return toast.error('Seu carrinho está vazio!');
    if (!customerName.trim()) return toast.error('Por favor, informe seu nome!');
    if (frete === null) return toast.error('Por favor, calcule o frete informando o CEP!');
    const paymentLabel = paymentMethod ? paymentMethod.toUpperCase() : 'NÃO INFORMADO';

    const printHTML = `
      <html>
        <head>
          <title>Pedido - Alquimia da Amanda</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #4A3933; }
            .header { text-align: center; border-bottom: 2px solid #8B9474; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eee; }
            th { background: #8B9474; color: white; }
            .total-section { text-align: right; margin-top: 20px; line-height: 1.6; }
            .footer { text-align: center; margin-top: 30px; font-style: italic; color: #8B9474; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🍲 Alquimia da Amanda 🥘</h1>
            <p>Comprovante de Pedido</p>
          </div>

          <p><strong>Cliente:</strong> ${customerName}</p>
          ${deliveryTime ? `<p><strong>Horário Desejado:</strong> ${deliveryTime}</p>` : ''}
          <p><strong>Entrega em:</strong> ${infoLocalidade} (CEP: ${cep})</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>

          ${paymentMethod === 'pix' ? `
            <p><strong>Pagamento:</strong> PIX</p>
            <p><strong>Chave PIX:</strong> 66.120.230/0001-00</p>
          ` : `
            <p><strong>Pagamento:</strong> ${paymentLabel}</p>
          `}
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
            <p>Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
            <p>Taxa de Entrega: R$ ${valorFreteEfetivo.toFixed(2).replace('.', ',')}</p>
            <h3>TOTAL FINAL: R$ ${totalGeral.toFixed(2).replace('.', ',')}</h3>
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
                    <p className="text-sm font-mono text-accent mt-1">R$ {((item.selectedOption?.price || item.product.price) * item.quantity).toFixed(2).replace('.', ',')}</p>
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

              {/* BLOCO DO CEP INTEGRADO ESTILO IFOOD */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">CEP para Entrega *</label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="00000-000" 
                    value={cep} 
                    onChange={handleCepChange} 
                    maxLength={9} 
                    className="rounded-xl font-mono text-center" 
                  />
                  <Button onClick={calcularFrete} disabled={carregandoCep} variant="secondary" className="rounded-xl px-4 shrink-0">
                    {carregandoCep ? '...' : 'Calcular'}
                  </Button>
                </div>
                {infoLocalidade && (
                  <div className="mt-2 text-xs bg-muted/40 p-2.5 rounded-xl border border-border flex gap-1.5 items-start text-foreground/80">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{infoLocalidade}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Observações</label>
                <Textarea placeholder="Ex: sem cebola..." value={observations} onChange={(e) => setObservations(e.target.value)} className="rounded-xl min-h-[80px]" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Horário Desejado *</label>
                {availableTimes.length > 0 ? (
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <option value="">Selecione um horário...</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p className="text-[11px] text-destructive font-medium leading-tight">
                      Lamento! Atendimento encerrado hoje (11:30 - 15:00) ou sem tempo hábil para preparo.
                    </p>
                  </div>
                )}
                <p className="text-[10px] text-muted-foreground mt-1 px-1 italic">
                  * Pedidos exigem antecedência mínima de 20 minutes para preparo.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <PaymentSelector />
            </div>

            {/* PAINEL FINANCEIRO EXIBINDO SUBTOTAL, FRETE E TOTAL FINAL */}
            <div className="bg-accent/10 rounded-2xl p-4 mb-6 space-y-2">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Subtotal dos itens</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Taxa de Entrega</span>
                <span>{frete !== null ? `R$ ${valorFreteEfetivo.toFixed(2).replace('.', ',')}` : 'Calcule o CEP'}</span>
              </div>
              <Separator className="bg-accent/20 my-1" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-display font-semibold text-foreground">Total do Pedido</span>
                <span className="text-2xl font-mono font-bold text-accent">R$ {totalGeral.toFixed(2).replace('.', ',')}</span>
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
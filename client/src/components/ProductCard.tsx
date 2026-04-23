import { useState } from 'react';
import { Product, ProductOption } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ShoppingCart, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [step, setStep] = useState(1); // 1: Tamanho, 2: Bebida
  const [tempSelectedSize, setTempSelectedSize] = useState<ProductOption | undefined>();
  const { addToCart } = useCart();

  const handleOpenChange = (open: boolean) => {
    setShowOptions(open);
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setTempSelectedSize(undefined);
      }, 300);
    }
  };

  const handleAddToCart = () => {
    if (product.hasOptions && product.options && product.options.length > 0) {
      setStep(1);
      setShowOptions(true);
    } else {
      addToCart(product);
      toast.success(`${product.name} adicionado ao carrinho!`, {
        duration: 2000,
      });
    }
  };

  const handleOptionSelect = (option: ProductOption) => {
    // Se estivermos no passo 1 e o produto tiver opções de bebida (como no seu novo products.ts)
    if (step === 1 && product.drinkOptions && product.drinkOptions.length > 0) {
      setTempSelectedSize(option);
      setStep(2);
    } else {
      // Se não tiver bebida ou já estivermos no passo 2, finaliza
      finalizarCompra(option);
    }
  };

  const finalizarCompra = (drinkOption?: ProductOption) => {
    if (tempSelectedSize) {
      // Monta o nome combinado para a sacola (Ex: Pequena + Coca-Cola)
      const comboOption: ProductOption = {
        name: `${tempSelectedSize.name}${drinkOption ? ' + ' + drinkOption.name : ''}`,
        price: tempSelectedSize.price + (drinkOption?.price || 0)
      };
      addToCart(product, comboOption);
    } else {
      // Caso simples onde só tem uma opção
      addToCart(product, drinkOption);
    }

    toast.success(`Adicionado ao carrinho!`, { duration: 2000 });
    handleOpenChange(false);
  };

  const displayPrice = product.price > 0 
    ? `R$ ${product.price.toFixed(2).replace('.', ',')}` 
    : 'Veja opções';

  return (
    <>
      <Card className="group overflow-hidden rounded-3xl border-2 border-border hover:border-accent transition-all duration-400 hover:-translate-y-1 hover:shadow-lg bg-card flex flex-col h-full">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            loading="lazy"
          />
          {product.hasOptions && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
              Opções disponíveis
            </Badge>
          )}
        </div>

        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2 whitespace-normal">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-normal mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-mono font-medium text-accent">
              {displayPrice}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto">
          <Button
            onClick={handleAddToCart}
            className="w-full rounded-full h-12 font-medium transition-all duration-300 hover:scale-[1.02]"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showOptions} onOpenChange={handleOpenChange}>
        <DialogContent className="w-[95vw] max-w-[550px] max-h-[90vh] overflow-y-auto scrollbar-hide bg-card text-foreground p-6 rounded-[20px] flex flex-col gap-6">
          <DialogHeader className="pt-2">
            <DialogTitle className="text-2xl font-display">
              {step === 1 ? 'Escolha o tamanho' : 'Escolha a bebida'}
            </DialogTitle>
            <DialogDescription className="text-base">
              {step === 1 
                ? `Selecione a variação desejada de ${product.name}` 
                : 'Selecione a bebida para acompanhar seu combo'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-2 pb-4">
            {(step === 1 ? product.options : product.drinkOptions)?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group bg-card" 
              >
                <div className="text-left">
                  <p className="font-medium text-foreground">
                    {option.name}
                  </p>
                  {option.price > 0 && (
                    <p className="text-sm font-mono text-muted-foreground mt-1">
                      R$ {option.price.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300">
                  <Check className="h-4 w-4 text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}

            {step === 2 && (
              <Button 
                variant="ghost" 
                onClick={() => setStep(1)}
                className="w-full rounded-xl text-muted-foreground mt-2"
              >
                Voltar para tamanhos
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
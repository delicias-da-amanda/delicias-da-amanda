/* 
Design: Organic Minimalism
- Generous rounded corners (24px)
- Soft shadows with hover lift effect
- Warm color palette
*/

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
  const [selectedOption, setSelectedOption] = useState<ProductOption | undefined>();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.hasOptions && product.options && product.options.length > 0) {
      setShowOptions(true);
    } else {
      addToCart(product);
      toast.success(`${product.name} adicionado ao carrinho!`, {
        duration: 2000,
      });
    }
  };

  const handleOptionSelect = (option: ProductOption) => {
    addToCart(product, option);
    toast.success(`${product.name} (${option.name}) adicionado ao carrinho!`, {
      duration: 2000,
    });
    setShowOptions(false);
    setSelectedOption(undefined);
  };

  const displayPrice = product.price > 0 
    ? `R$ ${product.price.toFixed(2).replace('.', ',')}` 
    : 'Veja opções';

  return (
    <>
      <Card className="group overflow-hidden rounded-3xl border-2 border-border hover:border-accent transition-all duration-400 hover:-translate-y-1 hover:shadow-lg bg-card">
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

        <CardContent className="p-6">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-mono font-medium text-accent">
              {displayPrice}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
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

      {/* Options Dialog */}
      <Dialog open={showOptions} onOpenChange={setShowOptions}>
  <DialogContent className="w-[95vw] max-w-[550px] max-h-[90vh] overflow-y-auto scrollbar-hide bg-[#f8f8f7] p-6 rounded-[20px] flex flex-col gap-6">
    
    <DialogHeader className="pt-2"> {/* Adicionamos um pequeno respiro no topo */}
      <DialogTitle className="text-2xl font-display">Escolha uma opção</DialogTitle>
      <DialogDescription className="text-base">
        Selecione a variação desejada de {product.name}
      </DialogDescription>
    </DialogHeader>

    {/* Alteramos 'mt-4' para 'mt-2' e garantimos que o container tenha espaço inferior */}
    <div className="space-y-3 mt-2 pb-4">
      {product.options?.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionSelect(option)}
          className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group bg-white" 
        >
          {/* Adicionei 'bg-white' acima para destacar as opções do fundo cinza claro */}
          <div className="text-left">
            <p className="font-medium text-foreground">
              {option.name.includes(':') ? (
                <>
                  <strong>{option.name.split(':')[0]}</strong>:
                  {option.name.split(':')[1]}
                </>
              ) : (
                option.name
              )}
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
    </div>
  </DialogContent>
</Dialog>
    </>
  );
}

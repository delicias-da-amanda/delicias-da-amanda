"use client";
/* Design: Organic Minimalism
- Category filters with rounded badges
- Day-of-week filter for product availability
- Masonry-style grid with generous spacing
*/

import { useState, useMemo, useEffect } from 'react';
import { products, categories, DAYS_OF_WEEK, DAYS_LABELS, DayOfWeek } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | 'all'>('all');
  const [showAviso, setShowAviso] = useState(false);

  useEffect(() => {
    setShowAviso(true);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'paes-especiais') {
      alert('🥖 Lembrete: Pães especiais sob encomenda (24h de antecedência).');
    }
    setSelectedCategory(categoryId);
  };

  // Get current day of week
  const getCurrentDay = (): DayOfWeek => {
    const days: DayOfWeek[] = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    return days[new Date().getDay()];
  };

  // Filter products based on category and day
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const dayMatch = selectedDay === 'all' || product.availableDays.includes(selectedDay);
      return categoryMatch && dayMatch;
    });
  }, [selectedCategory, selectedDay]);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
            Nosso Cardápio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de produtos artesanais feitos com carinho
          </p>
        </div>

        {/* Day Filter */}
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-display font-semibold text-foreground">
              Filtrar por dia da semana
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDay === 'all' ? 'default' : 'outline'}
              className="rounded-full"
              onClick={() => setSelectedDay('all')}
            >
              Todos os dias
            </Button>
            <Button
              variant={selectedDay === getCurrentDay() ? 'default' : 'outline'}
              className="rounded-full"
              onClick={() => setSelectedDay(getCurrentDay())}
            >
              Hoje ({DAYS_LABELS[getCurrentDay()]})
            </Button>
            {DAYS_OF_WEEK.map(day => (
              <Button
                key={day}
                variant={selectedDay === day ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedDay(day)}
              >
                {DAYS_LABELS[day]}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="text-base px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedCategory('all')}
            >
              Todos
            </Badge>
            {categories.map(category => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className="text-base px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
              Nenhum produto disponível
            </h3>
            <p className="text-muted-foreground mb-6">
              Não há produtos disponíveis para os filtros selecionados.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDay('all');
              }}
              className="rounded-full"
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-16 p-8 rounded-3xl bg-accent/10 border-2 border-accent/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Dica:</strong> Alguns produtos podem estar disponíveis apenas em dias específicos da semana. 
            Use o filtro de dias para ver o que está disponível hoje ou em outros dias!
          </p>
        </div>
        {/* NOVO: Modal de Aviso Importante */}
        {showAviso && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl text-center space-y-4 border-2 border-accent/20">
              <h3 className="text-2xl font-display font-bold text-foreground">🕒 Aviso Importante</h3>
              <div className="text-left text-muted-foreground space-y-2 bg-accent/5 p-4 rounded-xl">
                <p>Para garantirmos pães sempre fresquinhos e recém-assados, orientamos pedidos com antecedência:</p>
                <p>🥖 <strong>Tarde:</strong> pedidos até 11h do mesmo dia.</p>
                <p>🥖 <strong>Manhã:</strong> pedidos no dia anterior.</p>
              </div>
              <p className="text-sm">Agradecemos a compreensão 💛</p>
              <Button onClick={() => setShowAviso(false)} className="w-full rounded-full bg-accent hover:bg-accent/90 text-white py-6">
                Entendi, ver cardápio
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

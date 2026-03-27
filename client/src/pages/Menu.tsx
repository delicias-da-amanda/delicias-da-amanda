"use client";

import { useState, useMemo, useEffect } from "react";
import {
  products,
  categories,
  DAYS_OF_WEEK,
  DAYS_LABELS,
  DayOfWeek,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { PaymentSelector } from "@/components/PaymentSelector";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function Menu() {
  const getCurrentDay = (): DayOfWeek => {
    const todayIndex = new Date().getDay();

    const days: DayOfWeek[] = [
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado",
    ];

    if (todayIndex === 0) return "segunda";
    return days[todayIndex - 1];
  };

  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");
  const [selectedDay, setSelectedDay] =
    useState<DayOfWeek | "all">(() => getCurrentDay());
  const [showAviso, setShowAviso] = useState(false);

  useEffect(() => {
    setShowAviso(true);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === "paes-especiais" || categoryId === "paes") {
      alert(
        "🥖 Atenção: Os produtos desta categoria são feitos sob medida para você. Não esqueça de realizar sua encomenda com antecedência!"
      );
    }
    setSelectedCategory(categoryId);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;
      const dayMatch =
        selectedDay === "all" ||
        product.availableDays.includes(selectedDay);
      return categoryMatch && dayMatch;
    });
  }, [selectedCategory, selectedDay]);

  return (
    <div className="min-h-screen py-12 md:py-20">
      {/* 🔥 POP-UP */}
{showAviso && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded-xl max-w-sm text-center shadow-lg">

      {/* IMAGEM */}
      <img
        src="/frango.jpg"
        alt="Prato da semana"
        className="w-full rounded-lg mb-3"
      />

      <h2 className="text-xl font-bold mb-2">
        🔥 Prato da Semana
      </h2>

      <p className="font-semibold">
        Frango ao Molho com Batata e Picadinho 🍛
      </p>

      <p className="text-sm text-gray-600 mb-4">
        Aproveite essa delícia com preço promocional!
      </p>

      {/* BOTÕES */}
      <div className="flex gap-2 justify-center">
        <button
       onClick={() => {
       setSelectedDay(getCurrentDay()); // seleciona o dia atual
       setShowAviso(false); // fecha o pop-up
       }}
       className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
      Ver Pratos de Hoje
      </button>

        <button
          onClick={() => setShowAviso(false)}
          className="bg-gray-300 px-4 py-2 rounded-lg"
        >
          Fechar
        </button>
      </div>

    </div>
  </div>
)}
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Nosso Cardápio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de produtos artesanais feitos com carinho
          </p>
        </div>

        {/* Seleção de Pagamento */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-4">
            Como você prefere pagar?
          </h3>
          <div className="flex justify-center">
            <PaymentSelector />
          </div>
        </div>

        {/* Day Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">
              Filtrar por dia da semana
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDay === "all" ? "default" : "outline"}
              onClick={() => setSelectedDay("all")}
              className="rounded-full"
            >
              Todos os dias
            </Button>

            <Button
              variant={
                selectedDay === getCurrentDay()
                  ? "default"
                  : "outline"
              }
              onClick={() => setSelectedDay(getCurrentDay())}
              className="rounded-full"
            >
              Hoje ({DAYS_LABELS[getCurrentDay()] || "Fechado"})
            </Button>

            {DAYS_OF_WEEK.map((day) => (
              <Button
                key={day}
                variant={
                  selectedDay === day ? "default" : "outline"
                }
                onClick={() => setSelectedDay(day)}
                className="rounded-full"
              >
                {DAYS_LABELS[day]}
              </Button>
            ))}
          </div>
        </div>
        {/* ✅ AQUI ESTAVA FALTANDO O FECHAMENTO */}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={
                selectedCategory === "all"
                  ? "default"
                  : "outline"
              }
              className="cursor-pointer"
              onClick={() => setSelectedCategory("all")}
            >
              Todos
            </Badge>

            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={
                  selectedCategory === category.id
                    ? "default"
                    : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  handleCategoryClick(category.id)
                }
              >
                {category.icon} {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold mb-2">
              Nenhum produto disponível
            </h3>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDay("all");
              }}
              className="rounded-full"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

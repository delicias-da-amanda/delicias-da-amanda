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

    <div className="relative max-w-sm w-full">

      {/* ❌ BOTÃO FECHAR */}
      <button
        onClick={() => setShowAviso(false)}
        className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 shadow-md"
      >
        ✕
      </button>

      {/* 🖼️ IMAGEM CLICÁVEL */}
      <video
      src="/santa.mp4"
      autoPlay
      loop
      muted
     className="w-full rounded-xl cursor-pointer"
        onClick={() => {
  setSelectedCategory("santa"); // 👉 FILTRA SEMANA SANTA
  setSelectedDay("all"); // filtra o dia atual
  setShowAviso(false);

  setTimeout(() => {
    document
      .getElementById("produtos")
      ?.scrollIntoView({ behavior: "smooth" });
     }, 100);
     }}
      />

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
          <div
        id="produtos"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

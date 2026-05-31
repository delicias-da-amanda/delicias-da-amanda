"use client";

import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/PaymentContext";

// ==========================================
// CONTROLE DE VENDAS DO SÁBADO
// Altere para false para bloquear as vendas aos sábados. 
// Mude para true quando decidir reabrir no futuro.
const IS_SATURDAY_OPEN = false; 
// ==========================================

export function PaymentSelector() {
  const { paymentMethod, setPaymentMethod } = usePayment();

// Altere temporariamente de:
const isSaturday = new Date().getDay() === 6;

// Para isto (forçando o sistema a fingir que hoje é sábado):
const isSaturday = true;

  if (isClosedToday) {
    return (
      <div className="w-full p-4 text-center border border-destructive/50 bg-destructive/10 rounded-lg">
        <p className="text-sm font-semibold text-destructive">
          Não realizamos vendas aos sábados. Que tal dar uma olhadinha no cardápio para planejar seu próximo pedido?
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant={paymentMethod === "pix" ? "default" : "outline"}
        onClick={() => setPaymentMethod("pix")}
      >
        PIX
      </Button>

      <Button
        variant={paymentMethod === "credito" ? "default" : "outline"}
        onClick={() => setPaymentMethod("credito")}
      >
        Crédito/Débito
      </Button>

      <Button
        variant={paymentMethod === "debito" ? "default" : "outline"}
        onClick={() => setPaymentMethod("debito")}
      >
        VA
      </Button>

      <Button
        variant={paymentMethod === "alimentacao" ? "default" : "outline"}
        onClick={() => setPaymentMethod("alimentacao")}
      >
        VR
      </Button>

      <Button
        variant={paymentMethod === "refeicao" ? "default" : "outline"}
        onClick={() => setPaymentMethod("refeicao")}
      >
        Dinheiro
      </Button>
    </div>
  );
}
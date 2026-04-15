"use client";

import { Button } from "@/components/ui/button";
import { usePayment } from "@/contexts/PaymentContext";

export function PaymentSelector() {
  const { paymentMethod, setPaymentMethod } = usePayment();

  return (
    <div className="flex gap-3">
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

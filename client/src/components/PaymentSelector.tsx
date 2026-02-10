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
        Crédito
      </Button>

      <Button
        variant={paymentMethod === "debito" ? "default" : "outline"}
        onClick={() => setPaymentMethod("debito")}
      >
        Débito
      </Button>

      <Button
        variant={paymentMethod === "dinheiro" ? "default" : "outline"}
        onClick={() => setPaymentMethod("dinheiro")}
>
        Dinheiro
      </Button>
    </div>
  );
}

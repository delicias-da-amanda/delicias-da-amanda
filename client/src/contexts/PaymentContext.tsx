import { createContext, useContext, useState } from "react";

export type PaymentMethod =
  | "pix"
  | "credito"
  | "debito"
  | "dinheiro"
  | "outra-forma"
  | null;

type PaymentContextType = {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
};

const PaymentContext = createContext({} as PaymentContextType);

export const PaymentProvider = ({ children }: { children: React.ReactNode }) => {
  const [paymentMethod, setPaymentMethod] =
  useState<PaymentMethod>(null);

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error("usePayment deve ser usado dentro de PaymentProvider");
  }

  return context;
};

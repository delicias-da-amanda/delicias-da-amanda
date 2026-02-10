import { createContext, useContext, useState } from "react";

export type PaymentMethod = "pix" | "credito" | "debito" | "dinheiro";

type PaymentContextType = {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
};

const PaymentContext = createContext({} as PaymentContextType);

export const PaymentProvider = ({ children }: { children: React.ReactNode }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("dinheiro");

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);

import { usePayment } from "@/contexts/PaymentContext";

export default function Comanda() {
  const { paymentMethod } = usePayment();

  const PIX_KEY = "11 98651-1287";

  return (
    <div id="print-area" className="p-4 text-sm">
      <h2 className="text-center font-bold text-lg mb-2">
        Delícias da Amanda
      </h2>

      <p className="mb-1">
        <strong>Forma de pagamento:</strong>{" "}
        {paymentMethod.toUpperCase()}
      </p>

      {paymentMethod === "pix" && (
        <div className="mt-2">
          <p className="font-semibold">Pague via Pix</p>
          <p>
            <strong>Chave Pix:</strong> {PIX_KEY}
          </p>
        </div>
      )}

      <hr className="my-3" />
      <p className="text-center">Obrigado pela preferência ❤️</p>
    </div>
  );
}

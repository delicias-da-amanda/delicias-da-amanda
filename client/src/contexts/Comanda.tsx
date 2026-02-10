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
         <div className="mt-3 text-center border rounded-md p-3">
    <p className="font-semibold">Pagamento via PIX</p>
    <p className="text-xs mt-1">Chave PIX:</p>

    <p className="font-mono text-sm mt-1">
      11986511287
    </p>

    <p className="text-xs text-muted-foreground mt-2">
      Delícias da Amanda
    </p>
  </div>
      )}

      <hr className="my-3" />
      <p className="text-center">Obrigado pela preferência ❤️</p>
    </div>
  );
}

import { usePayment } from "@/contexts/PaymentContext";

export default function Comanda() {
  const { paymentMethod } = usePayment();

  const PIX_KEY = "66.120.230/0001-00";

  // 🔹 Mapeamento amigável da forma de pagamento
  const paymentLabelMap: Record<string, string> = {
     pix: "PIX",
  cartao: "Cartão de Crédito/Débito",
  vale_alimentacao: "VA",
  vale_refeicao: "VR",
  dinheiro: "Dinheiro",
  };

  const paymentLabel = paymentMethod
    ? paymentLabelMap[paymentMethod]
    : "Não informado";

  const generateWhatsAppMessage = () => {
    let message = `
🧾 *Delícias da Amanda*

Forma de pagamento: ${paymentLabel}
`;

    if (paymentMethod === "pix") {
      message += `
💠 *Pagamento via PIX*
Chave PIX: ${PIX_KEY}
Delícias da Amanda
`;
    }

    message += `
Obrigado pela preferência ❤️
`;

    return encodeURIComponent(message);
  };

  return (
    <div id="print-area" className="p-4 text-sm">
      <h2 className="text-center font-bold text-lg mb-2">
        Delícias da Amanda
      </h2>

      <p className="mb-1">
        <strong>Forma de pagamento:</strong> {paymentLabel}
      </p>

      {paymentMethod === "pix" && (
        <div className="mt-3 text-center border rounded-md p-3">
          <p className="font-semibold">Pagamento via PIX</p>
          <p className="text-xs mt-1">Chave PIX:</p>

          <p className="font-mono text-sm mt-1">
            {PIX_KEY}
          </p>

          <p className="text-xs text-muted-foreground mt-2">
            Delícias da Amanda
          </p>
        </div>
      )}

      <hr className="my-3" />

      <button
        className="mt-3 w-full no-print"
        onClick={() => {
          const text = generateWhatsAppMessage();
          window.open(
            `https://wa.me/5511953293602?text=${text}`,
            "_blank"
          );
        }}
      >
        📲 Enviar Comanda no WhatsApp
      </button>

      <p className="text-center mt-3">
        Obrigado pela preferência ❤️
      </p>
    </div>
  );
}
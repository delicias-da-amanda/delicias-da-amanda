import React, { useState } from 'react';

export const ShippingCalculator = () => {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);

  const handleCalcular = () => {
    // Lógica temporária: se tiver 8 números, finge que calculou
    if (cep.length === 8) {
      setResultado("Frete fixo: R$ 5,00");
    } else {
      setResultado("CEP inválido");
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h4>Calcular Frete</h4>
      <input 
        type="text" 
        placeholder="00000000" 
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleCalcular}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};
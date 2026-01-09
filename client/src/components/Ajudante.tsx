import React, { useState, useEffect } from 'react';
import './Ajudante.css';

const Ajudante = () => {
  const [mensagem, setMensagem] = useState("Olá! Vamos cozinhar algo hoje?");

  // Exemplo de lógica para mudar a frase
  useEffect(() => {
    if (window.location.pathname === '/carrinho') {
      setMensagem("Ótima escolha! Vamos fechar o pedido?");
    }
  }, []);

  return (
    <div className="ajudante-container">
      <div className="balao-fala">{mensagem}</div>
      <img src="/ajudante.png" alt="Chef Ajudante" className="imagem-ajudante" />
    </div>
  );
};

export default Ajudante;
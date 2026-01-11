# Delícias da Amanda - Instruções de Uso

## 📋 Sobre o Site

Este é um cardápio digital completo e moderno para a **Delícias da Amanda**, desenvolvido com design **Organic Minimalism** (Minimalismo Orgânico), que transmite autenticidade, calor e qualidade artesanal através de:

- Paleta de cores terrosas e naturais (creme, marrom chocolate, verde oliva, coral)
- Formas suaves e arredondadas (bordas de 28px)
- Espaçamento generoso e respirável
- Tipografia elegante (Fraunces serif + DM Sans)
- Micro-interações delicadas e animações suaves

## 🎨 Funcionalidades Principais

### 1. **Página Inicial (Home)**
- Banner hero com imagem de alta qualidade
- Seção de características (Feito com Carinho, Sempre Fresquinho, Ingredientes Selecionados)
- Depoimentos de clientes com avaliações
- Call-to-action para ver produtos ou pedir pelo WhatsApp

### 2. **Cardápio Completo**
- **Filtro por Categoria**: Biscoitos Amanteigados, Lanches, Pães Especiais, Bebidas
- **Filtro por Dia da Semana**: Permite configurar quais produtos aparecem em cada dia
  - Botão "Todos os dias"
  - Botão "Hoje" (mostra automaticamente o dia atual)
  - Botões individuais para cada dia da semana
- Cards de produtos com imagens, descrições e preços
- Produtos com múltiplas opções (ex: Biscoito Tradicional, Com Chocolate, Com Goiabada)

### 3. **Sistema de Carrinho Inteligente**
- Adicionar produtos ao carrinho (com ou sem opções)
- Ajustar quantidade de cada item
- Campo para nome do cliente (obrigatório)
- Campo para observações (ex: "sem cebola", "entregar às 15h")
- Cálculo automático do total
- **Botão "Finalizar no WhatsApp"**: Gera mensagem formatada e abre WhatsApp
- **Botão "Imprimir Pedido"**: Gera PDF com comprovante do pedido
- Armazenamento local (localStorage) - carrinho persiste mesmo após fechar o navegador

### 4. **Integração com Redes Sociais**
- **WhatsApp**: Botão flutuante sempre visível + integração no carrinho
- **Instagram**: Links no rodapé e página de contato
- **Google Meu Negócio**: Links no rodapé e página de contato

### 5. **Página Sobre**
- História da marca
- Valores e princípios
- Selos de qualidade (Produção Caseira, Ingredientes Selecionados, Feito com Amor)

### 6. **Página de Contato**
- Cards interativos para WhatsApp, Instagram e Google Meu Negócio
- Informações de horário de atendimento
- Telefone e e-mail

## 🛠️ Como Usar o Site

### Para Clientes:

1. **Navegar pelo Cardápio**:
   - Acesse a página "Cardápio"
   - Use os filtros de categoria para ver produtos específicos
   - Use o filtro de dia da semana para ver o que está disponível hoje ou em outros dias

2. **Adicionar Produtos ao Carrinho**:
   - Clique em "Adicionar ao Carrinho" no produto desejado
   - Se o produto tiver opções (ex: sabores), escolha a opção desejada
   - O produto será adicionado automaticamente

3. **Finalizar Pedido**:
   - Clique no ícone do carrinho no cabeçalho
   - Revise os itens, ajuste quantidades se necessário
   - Preencha seu nome (obrigatório)
   - Adicione observações se desejar
   - Clique em "Finalizar no WhatsApp" para enviar o pedido
   - OU clique em "Imprimir Pedido" para gerar um PDF

4. **Contato Direto**:
   - Use o botão flutuante verde do WhatsApp (canto inferior direito)
   - Ou acesse a página "Contato" para outras opções

### Para Administradores:

#### Como Editar Produtos:

1. Abra o arquivo: `client/src/lib/products.ts`
2. Localize o array `products`
3. Para adicionar um novo produto, copie e cole um produto existente e edite:

```typescript
{
  id: 'novo-produto',
  name: 'Nome do Produto',
  description: 'Descrição curta do produto',
  price: 10.00,
  category: 'biscoitos', // ou 'lanches', 'paes', 'bebidas'
  image: '/images/foto-produto.jpg',
  hasOptions: false, // true se tiver opções
  options: [ // apenas se hasOptions for true
    { name: 'Opção 1', price: 10.00 },
    { name: 'Opção 2', price: 12.00 }
  ],
  availableDays: ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
}
```

#### Como Configurar Dias Disponíveis:

Para fazer um produto aparecer apenas em dias específicos, edite o campo `availableDays`:

```typescript
// Produto disponível apenas às quartas-feiras:
availableDays: ['quarta']

// Produto disponível de segunda a sexta:
availableDays: ['segunda', 'terca', 'quarta', 'quinta', 'sexta']

// Produto disponível apenas nos finais de semana:
availableDays: ['sabado', 'domingo']
```

#### Como Alterar Número do WhatsApp:

Procure por `5511999999999` em todos os arquivos e substitua pelo número real:
- `client/src/components/FloatingWhatsApp.tsx`
- `client/src/components/CartSidebar.tsx`
- `client/src/components/Footer.tsx`
- `client/src/pages/Contact.tsx`

Formato: `55` (código do Brasil) + `11` (DDD) + `999999999` (número com 9 dígitos)

#### Como Adicionar Imagens:

1. Coloque as imagens na pasta: `client/public/images/`
2. Referencie no código como: `/images/nome-da-imagem.jpg`
3. Formatos recomendados: JPG, PNG, WebP
4. Tamanho recomendado: máximo 1MB por imagem

## 📱 Funciona Offline

O site foi desenvolvido para funcionar **localmente sem necessidade de internet**:

- Todas as imagens estão incorporadas no projeto
- Dados dos produtos armazenados localmente
- Carrinho salvo no navegador (localStorage)
- Apenas a integração com WhatsApp/Instagram requer internet

## 🎯 Recursos Técnicos

- **Framework**: React 19 + TypeScript
- **Estilização**: Tailwind CSS 4 + shadcn/ui
- **Roteamento**: Wouter (client-side routing)
- **Fontes**: Google Fonts (Fraunces, DM Sans, DM Mono)
- **Armazenamento**: localStorage (navegador)
- **Responsivo**: Mobile-first, funciona em todos os dispositivos

## 📞 Suporte

Para dúvidas ou personalizações adicionais, entre em contato através do WhatsApp ou e-mail fornecidos no site.

---

**Desenvolvido com 💚 e muito carinho para a Delícias da Amanda**

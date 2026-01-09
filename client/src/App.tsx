import { useCart } from "./contexts/CartContext"; 
import { ShoppingBag } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ajudante from "@/components/Ajudante";
import "@/components/Ajudante.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useState } from "react";

function Router() {
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useCart();

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/cardapio" component={Menu} />
          <Route path="/sobre" component={About} />
          <Route path="/contato" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      
      {/* Componente de Carrinho (Apenas uma vez) */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* BOTÃO FLUTUANTE DA SACOLA */}
      {items.length > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          style={{ 
            position: 'fixed', 
            bottom: '100px', 
            right: '24px', 
            zIndex: 999, 
            backgroundColor: '#8B9474', 
            color: 'white',
            padding: '16px 24px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <ShoppingBag size={24} />
            <span style={{ 
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: '#ef4444',
              color: 'white',
              fontSize: '12px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              border: '2px solid white'
            }}>
              {items.length}
            </span>
          </div>
          <span style={{ fontWeight: '600' }} className="hidden sm:inline">
            Ver Sacola
          </span>
        </button>
      )}

      <FloatingWhatsApp />

      {/* ADICIONE AQUI: A sua nova ajudante chef */}
      <Ajudante />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster position="top-center" />
            <Router />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
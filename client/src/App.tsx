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
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useState } from "react";

function Router() {
  const [cartOpen, setCartOpen] = useState(false);
  // 2. Pegue os itens do carrinho aqui
  const { items } = useCart();

  return (
   <>
      <Header onCartClick={() => setCartOpen(true)} />
      <main>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/cardapio"} component={Menu} />
          <Route path={"/sobre"} component={About} />
          <Route path={"/contato"} component={Contact} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* --- BOTÃO FLUTUANTE ADICIONADO AQUI --- */}
      {true && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-24 right-6 z-40 flex items-center gap-3 bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <div className="relative">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-white text-accent text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm">
              {items.length}
            </span>
          </div>
          <span className="font-medium pr-2 hidden sm:block">Ver Sacola</span>
        </button>
      )}

      <FloatingWhatsApp />
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

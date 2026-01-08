import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, ProductOption } from '@/lib/products';

export interface CartItem {
  product: Product;
  selectedOption?: ProductOption;
  quantity: number;
  uniqueId: string; // To handle same product with different options
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedOption?: ProductOption) => void;
  removeFromCart: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load cart from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('delicias-amanda-cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('delicias-amanda-cart', JSON.stringify(items));
    }
  }, [items]);

  const addToCart = (product: Product, selectedOption?: ProductOption) => {
    const uniqueId = `${product.id}-${selectedOption?.name || 'default'}`;
    
    setItems(prev => {
      const existingIndex = prev.findIndex(item => item.uniqueId === uniqueId);
      
      if (existingIndex >= 0) {
        // Item already exists, increase quantity
        const newItems = [...prev];
        newItems[existingIndex].quantity += 1;
        return newItems;
      } else {
        // Add new item
        return [...prev, {
          product,
          selectedOption,
          quantity: 1,
          uniqueId
        }];
      }
    });
  };

  const removeFromCart = (uniqueId: string) => {
    setItems(prev => prev.filter(item => item.uniqueId !== uniqueId));
  };

  const updateQuantity = (uniqueId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(uniqueId);
      return;
    }
    
    setItems(prev => prev.map(item => 
      item.uniqueId === uniqueId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.selectedOption?.price || item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

import { useState, useEffect } from 'react';
import { DayOfWeek, DAYS_OF_WEEK } from '@/lib/products';

interface ProductAvailability {
  [productId: string]: DayOfWeek[];
}

const STORAGE_KEY = 'delicias-amanda-product-availability';

export function useProductAvailability() {
  const [availability, setAvailability] = useState<ProductAvailability>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(availability));
    }
  }, [availability]);

  const updateProductAvailability = (productId: string, days: DayOfWeek[]) => {
    setAvailability(prev => ({
      ...prev,
      [productId]: days
    }));
  };

  const getProductAvailability = (productId: string): DayOfWeek[] => {
    return availability[productId] || DAYS_OF_WEEK;
  };

  const isProductAvailableToday = (productId: string): boolean => {
    const days: DayOfWeek[] = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const today = days[new Date().getDay()];
    const productDays = getProductAvailability(productId);
    return productDays.includes(today);
  };

  return {
    availability,
    updateProductAvailability,
    getProductAvailability,
    isProductAvailableToday
  };
}

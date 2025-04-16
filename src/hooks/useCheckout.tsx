
import { create } from 'zustand';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CheckoutStore {
  orderNumber: string | null;
  customerInfo: CustomerInfo | null;
  setCustomerInfo: (info: CustomerInfo) => void;
  completeCheckout: () => void;
  reset: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  orderNumber: null,
  customerInfo: null,
  setCustomerInfo: (info) => set({ customerInfo: info }),
  completeCheckout: () => {
    // Generate a random order number
    const orderNum = `GV-${Math.floor(100000 + Math.random() * 900000)}`;
    set({ orderNumber: orderNum });
  },
  reset: () => set({ orderNumber: null, customerInfo: null }),
}));

export const useCheckout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const { 
    orderNumber, 
    customerInfo, 
    setCustomerInfo, 
    completeCheckout,
    reset 
  } = useCheckoutStore();

  const processOrder = (info: CustomerInfo) => {
    setCustomerInfo(info);
    completeCheckout();
    clearCart();
    
    toast.success("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return {
    orderNumber,
    customerInfo,
    processOrder,
    reset
  };
};

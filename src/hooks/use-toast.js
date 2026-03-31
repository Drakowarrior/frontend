import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return { toast, toasts };
};
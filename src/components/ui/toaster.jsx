import React from 'react';
import { useToast } from '../../hooks/use-toast';

export const Toaster = () => {
  const { toasts } = useToast();
  
  return (
    <div className="toaster-container">
      {toasts.map((toast, index) => (
        <div key={index} className="toast">
          <div className="toast-title">{toast.title}</div>
          <div className="toast-description">{toast.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Toaster;
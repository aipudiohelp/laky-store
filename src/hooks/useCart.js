"use client";
import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // 'order' | 'quiz' | null
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openOrderModal = (product) => {
    setSelectedProduct(product);
    setActiveModal("order");
  };

  const openQuizModal = () => {
    setActiveModal("quiz");
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        activeModal,
        selectedProduct,
        openOrderModal,
        openQuizModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

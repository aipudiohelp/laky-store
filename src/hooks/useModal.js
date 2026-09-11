"use client";
import { useCart } from "./useCart";

export function useModal() {
  const { activeModal, selectedProduct, openOrderModal, openQuizModal, closeModal } = useCart();
  return {
    isOpen: activeModal !== null,
    modalType: activeModal,
    selectedProduct,
    openOrderModal,
    openQuizModal,
    closeModal,
  };
}

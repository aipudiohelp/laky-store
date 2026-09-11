import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppLink({
  phoneNumber = "201000000000",
  productName,
  price,
  customerName = "",
  customerAddress = "",
}) {
  let message = `مرحباً، أود إتمام طلب المنتج التالي:\n`;
  message += `📦 *المنتج:* ${productName}\n`;
  if (price) message += `💰 *السعر:* ${price} ج.م\n`;
  if (customerName) message += `👤 *الاسم:* ${customerName}\n`;
  if (customerAddress) message += `📍 *العنوان:* ${customerAddress}\n`;
  message += `\nيرجى تأكيد موعد الشحن والاستلام والدفع عند الاستلام. شكراً لكم!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

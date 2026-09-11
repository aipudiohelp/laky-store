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
  phoneNumber = "201025484524", // <-- ضع رقمك هنا لاستقبال الطلبات
  productName,
  price,
  customerName = "",
  customerPhone = "",
  customerAddress = "",
}) {
  const orderId = `ORD-${Date.now().toString().slice(-5)}`;
  
  let message = `*طلب جديد عبر المتجر* 🛍️\n`;
  message += `----------------------------\n`;
  message += `📦 *المنتج المطلوب:* ${productName}\n`;
  message += `💰 *السعر:* ${price} ج.م\n`;
  message += `💳 *طريقة الدفع:* الدفع عند الاستلام (COD)\n`;
  message += `----------------------------\n`;
  message += `👤 *اسم العميل:* ${customerName}\n`;
  message += `📱 *رقم الهاتف للتوصيل:* ${customerPhone}\n`;
  message += `📍 *عنوان الشحن بالتفصيل:* ${customerAddress}\n`;
  message += `🆔 *كود الطلب:* ${orderId}\n`;
  message += `----------------------------\n`;
  message += `أرجو تأكيد تجهيز الشحنة وموعد الاستلام. شكراً لكم!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

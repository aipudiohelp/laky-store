"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  // رقم هاتفك المعتمد
  const phoneNumber = "201025484524"; 
  const message = "مرحباً، أود الاستفسار عن منتجات ريحانة وكافيلو المتوفرة في المتجر.";
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* تلميح المساعدة بألوان الهوية الهادئة */}
      <div className="hidden sm:flex items-center bg-[#FDF7F3] text-[#4B4B4B] text-xs font-bold py-2 px-3.5 rounded-2xl shadow-lg border border-[#EADFD5]">
        <span>تحدثي معنا مباشرة 💬</span>
      </div>

      {/* الزر العائم بالأخضر الطبيعي المعتمد مع تأثير النبض */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#6B8F7A]/30 animate-ping pointer-events-none" />
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}

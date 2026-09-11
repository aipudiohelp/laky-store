"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  // ضع رقم هاتفك هنا مع كود الدولة
  const phoneNumber = "201025484524"; 
  const message = "مرحباً، أود الاستفسار عن منتجات ريحانة وكافيلو المتوفرة في المتجر.";
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* تلميح مساعدة متحرك يظهر بجانب الزر */}
      <div className="hidden sm:flex items-center bg-white text-gray-800 text-xs font-bold py-2 px-3.5 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
        <span>تحدثي معنا مباشرة 💬</span>
      </div>

      {/* الزر العائم مع تأثير النبض الدائري */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-transform transform hover:scale-110 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle size={30} className="relative z-10" />
      </a>
    </div>
  );
}

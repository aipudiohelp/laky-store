"use client";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const { openOrderModal } = useCart();
  const isCavillo = product.brand === "cavillo";

  return (
    <div className="bg-white rounded-3xl border border-[#EADFD5] p-4 flex flex-col justify-between product-card-shadow relative group transition-all duration-300">
      {/* شارة التميز الذهبية الهادئة */}
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-black px-2.5 py-1 rounded-full bg-[#D4AF7C] text-[#4B4B4B] shadow-xs flex items-center gap-1">
          <Sparkles size={12} />
          {product.badge}
        </span>
      )}

      {/* مساحة صورة المنتج مع إطار وخلفية الهوية */}
      <div className="relative w-full aspect-square rounded-2xl bg-[#FDF7F3] border border-[#EADFD5] flex items-center justify-center overflow-hidden mb-4 group-hover:border-[#C8E0C9] transition">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center p-4">
            <div className="w-16 h-16 rounded-full bg-white shadow-xs flex items-center justify-center mx-auto mb-2 text-2xl border border-[#EADFD5]">
              {isCavillo ? "🧴" : "🌿"}
            </div>
            <span className="text-xs text-[#A67C5B] font-bold">{product.subtitle}</span>
          </div>
        )}
      </div>

      {/* تفاصيل المنتج والأسعار بألوان الهوية */}
      <div className="space-y-1.5 text-right mb-4">
        <h4 className="font-extrabold text-[#4B4B4B] text-base group-hover:text-[#6B8F7A] transition leading-tight">
          {product.name}
        </h4>
        <p className="text-xs text-[#4B4B4B]/70 line-clamp-1">{product.subtitle}</p>
        
        <div className="flex items-center gap-2 pt-2">
          <span className="text-lg font-black text-[#4B4B4B]">{product.price} ج.م</span>
          {product.originalPrice && (
            <span className="text-xs text-[#A67C5B]/70 line-through font-semibold">{product.originalPrice} ج.م</span>
          )}
        </div>
      </div>

      {/* زر اتخاذ القرار الفوري بالأخضر الطبيعي الأساسي */}
      <button
        type="button"
        onClick={() => openOrderModal(product)}
        className="w-full py-3.5 px-4 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] font-bold rounded-2xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-[#6B8F7A]/15 active:scale-95 cursor-pointer"
      >
        <ShoppingBag size={18} className="text-[#FDF7F3]" />
        <span>اطلب الآن</span>
      </button>
    </div>
  );
}

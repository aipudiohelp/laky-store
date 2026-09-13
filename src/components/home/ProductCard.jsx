"use client";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const { openOrderModal } = useCart();
  const isCavillo = product.brand === "cavillo";

  return (
    <div className="bg-white rounded-3xl border border-[#EADFD5]/90 p-4 flex flex-col justify-between product-card-shadow relative group hover:border-[#9FC8A1] hover:shadow-xl transition-all duration-300">
      
      {/* شارة التميز الذهبية الفاخرة */}
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-black px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF7C] to-[#E6C99F] text-[#3D2916] shadow-sm flex items-center gap-1">
          <Sparkles size={12} className="text-[#3D2916]" />
          {product.badge}
        </span>
      )}

      {/* مساحة صورة المنتج بإضاءة داخلية نقية */}
      <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#FAF6F3] to-white border border-[#EADFD5] flex items-center justify-center overflow-hidden mb-3.5 group-hover:border-[#9FC8A1] transition-all">
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

      {/* تفاصيل المنتج وتنسيق الأسعار المحفز للطلب */}
      <div className="space-y-1.5 text-right mb-4">
        <h4 className="font-extrabold text-[#2E332F] text-base group-hover:text-[#2D6A4F] transition-colors leading-snug">
          {product.name}
        </h4>
        <p className="text-xs text-[#7A6B63] line-clamp-1 font-medium">{product.subtitle}</p>
        
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-xl font-black text-[#2D6A4F]">{product.price} ج.م</span>
          {product.originalPrice && (
            <span className="text-xs text-stone-400 line-through font-bold">
              {product.originalPrice} ج.م
            </span>
          )}
        </div>
      </div>

      {/* زر اتخاذ القرار الفوري بتدرج زمردي غني وجذاب */}
      <button
        type="button"
        onClick={() => openOrderModal(product)}
        className="w-full py-3.5 px-4 bg-gradient-to-r from-[#2D6A4F] to-[#3B7A5C] hover:from-[#23533E] hover:to-[#2D6A4F] text-white font-black rounded-2xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-[#2D6A4F]/20 hover:shadow-lg active:scale-95 cursor-pointer"
      >
        <ShoppingBag size={18} className="text-white" />
        <span>اطلبي الآن</span>
      </button>
    </div>
  );
}

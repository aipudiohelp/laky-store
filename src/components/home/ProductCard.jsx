"use client";
import { useCart } from "@/hooks/useCart";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const { openOrderModal } = useCart();
  const isCavillo = product.brand === "cavillo";

  // ألوان صريحة ومباشرة لمنع أي تعارض في البناء
  const btnStyle = isCavillo
    ? "bg-[#963852] hover:bg-[#7e283f] text-white shadow-[#963852]/20"
    : "bg-[#183827] hover:bg-[#10261A] text-white shadow-[#183827]/20";

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-4 flex flex-col justify-between product-card-shadow relative group">
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-black px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 shadow-sm flex items-center gap-1">
          <Sparkles size={12} />
          {product.badge}
        </span>
      )}

      {/* مساحة صورة المنتج */}
      <div className="relative w-full aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-white transition">
        <div className="text-center p-4">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-2xl">
            {isCavillo ? "🧴" : "🌿"}
          </div>
          <span className="text-xs text-gray-400 font-semibold">{product.subtitle}</span>
        </div>
      </div>

      {/* تفاصيل المنتج والسعر الواضح */}
      <div className="space-y-1.5 text-right mb-4">
        <h4 className="font-extrabold text-gray-900 text-base group-hover:text-emerald-900 transition leading-tight">
          {product.name}
        </h4>
        <p className="text-xs text-gray-500 line-clamp-1">{product.subtitle}</p>
        
        <div className="flex items-center gap-2 pt-2">
          <span className="text-lg font-black text-gray-900">{product.price} ج.م</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{product.originalPrice} ج.م</span>
          )}
        </div>
      </div>

      {/* زر اتخاذ القرار الفوري الظاهر والبارز */}
      <button
        type="button"
        onClick={() => openOrderModal(product)}
        className={`w-full py-3.5 px-4 font-black rounded-2xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-95 cursor-pointer ${btnStyle}`}
      >
        <ShoppingBag size={18} className="text-white" />
        <span className="text-white">اطلب الآن</span>
      </button>
    </div>
  );
}

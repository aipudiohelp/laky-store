"use client";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const { openOrderModal } = useCart();
  const isCavillo = product.brand === "cavillo";

  const btnBg = isCavillo
    ? "bg-cavillo-main hover:bg-cavillo-hover"
    : "bg-raihanna-main hover:bg-raihanna-hover";

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-4 flex flex-col justify-between product-card-shadow relative group">
      {product.badge && (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-black px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 shadow-sm flex items-center gap-1">
          <Sparkles size={12} />
          {product.badge}
        </span>
      )}

      {/* مساحة صورة المنتج التوضيحية */}
      <div className="relative w-full aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-white transition">
        <div className="text-center p-4">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-2 text-2xl">
            {isCavillo ? "🧴" : "🌿"}
          </div>
          <span className="text-xs text-gray-400 font-semibold">{product.subtitle}</span>
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="space-y-1.5 text-right mb-4">
        <h4 className="font-extrabold text-gray-900 text-base group-hover:text-brand-green transition leading-tight">
          {product.name}
        </h4>
        <p className="text-xs text-gray-500 line-clamp-1">{product.subtitle}</p>
        
        <div className="flex items-center gap-2 pt-2">
          <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>

      {/* زر اتخاذ القرار الفوري */}
      <button
        onClick={() => openOrderModal(product)}
        className={`w-full py-3 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${btnBg}`}
      >
        <ShoppingBag size={16} />
        <span>اطلب الآن</span>
      </button>
    </div>
  );
}

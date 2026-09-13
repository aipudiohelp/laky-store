import ProductCard from "./ProductCard";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function BrandSection({ brand, title, subtitle, logoText, products }) {
  const isCavillo = brand === "cavillo";
  const isRaihanna = brand === "raihanna";

  const bannerConfig = isCavillo
    ? {
        bg: "bg-gradient-to-l from-[#6E3B33] via-[#8B4D43] to-[#A35E53]",
        shadow: "shadow-xl shadow-[#6E3B33]/20",
        badge: "✨ عناية مخملية فائقة وترطيب عميق",
        badgeStyle: "bg-white/15 text-[#FDF7F3] border-white/20",
        btnColor: "hover:text-[#6E3B33]",
      }
    : {
        bg: "bg-gradient-to-l from-[#1B4332] via-[#2D6A4F] to-[#407B5E]",
        shadow: "shadow-xl shadow-[#1B4332]/20",
        badge: "🌿 تركيبات عشبية ونقاء طبيعي 100%",
        badgeStyle: "bg-white/15 text-[#FDF7F3] border-white/20",
        btnColor: "hover:text-[#1B4332]",
      };

  return (
    <section className="py-6 sm:py-8 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* بنر ريحانة الترويجي باستخدام التصميم المرفوع */}
        {isRaihanna ? (
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#EADFD5] mb-6 group">
            <img
              src="/images/raihanna-banner.png"
              alt="منتجات ريحانة Raihanna"
              className="w-full h-auto object-cover max-h-[280px] sm:max-h-[340px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* زر عائم لتصفح المنتجات */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
              <a
                href="#products"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D6A4F]/95 hover:bg-[#1B4332] text-white font-black text-[11px] sm:text-xs rounded-full backdrop-blur-md shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
              >
                <span>عرض كل منتجات {logoText}</span>
                <ArrowLeft size={13} />
              </a>
            </div>
          </div>
        ) : (
          /* البانر التعريفي الافتراضي لماركة كافيلو */
          <div
            className={`p-6 md:p-8 rounded-3xl ${bannerConfig.bg} ${bannerConfig.shadow} mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10 relative overflow-hidden`}
          >
            <div className="absolute -top-12 -left-12 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 text-right z-10">
              <div className="bg-white/15 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/25 shadow-inner shrink-0">
                <span className="text-2xl md:text-3xl font-black tracking-wider font-sans text-white">
                  {logoText}
                </span>
              </div>

              <div className="space-y-1">
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black border ${bannerConfig.badgeStyle}`}>
                  <Sparkles size={11} />
                  {bannerConfig.badge}
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                  {title}
                </h2>
                <p className="text-xs md:text-sm text-white/90 font-medium">
                  {subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              className={`z-10 px-6 py-3 bg-white text-[#2E332F] ${bannerConfig.btnColor} font-black text-xs rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-1.5 self-stretch md:self-auto justify-center`}
            >
              <span>عرض كل منتجات {logoText}</span>
              <ArrowLeft size={14} />
            </button>
          </div>
        )}

        {/* شبكة كروت المنتجات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

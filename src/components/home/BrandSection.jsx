import ProductCard from "./ProductCard";

export default function BrandSection({ brand, title, subtitle, logoText, products }) {
  const isCavillo = brand === "cavillo";

  const bannerBg = isCavillo
    ? "bg-gradient-to-r from-[#80243C] via-[#963852] to-[#B04C68] text-white"
    : "bg-gradient-to-r from-[#0E261A] via-[#183827] to-[#254F38] text-white";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* البانر التعريفي للبراند */}
        <div className={`p-6 md:p-8 rounded-3xl ${bannerBg} shadow-xl mb-6 flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex items-center gap-4 text-right">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
              <span className="text-2xl md:text-3xl font-black tracking-wide font-sans">{logoText}</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black leading-snug">{title}</h2>
              <p className="text-xs md:text-sm text-white/80 font-medium mt-1">{subtitle}</p>
            </div>
          </div>

          <button className="px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-100 font-extrabold text-xs rounded-full transition shadow-md whitespace-nowrap">
            + عرض جميع المنتجات
          </button>
        </div>

        {/* شبكة منتجات البراند */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

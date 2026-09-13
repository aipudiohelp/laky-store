import ProductCard from "./ProductCard";

export default function BrandSection({ brand, title, subtitle, logoText, products }) {
  const isCavillo = brand === "cavillo";

  // تطبيق الهوية المعتمدة: بني دافئ لكافيلو وأخضر طبيعي لريحانة مع خطوط عاجية ناعمة
  const bannerStyle = isCavillo
    ? "bg-[#A67C5B] text-[#FDF7F3]"
    : "bg-[#6B8F7A] text-[#FDF7F3]";

  return (
    <section className="py-8 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* البانر التعريفي للبراند المتناسق مع الهوية */}
        <div className={`p-6 md:p-8 rounded-3xl ${bannerStyle} shadow-md mb-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#EADFD5]`}>
          <div className="flex items-center gap-4 text-right">
            <div className="bg-white/15 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/25">
              <span className="text-2xl md:text-3xl font-black tracking-wide font-sans">{logoText}</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black leading-snug">{title}</h2>
              <p className="text-xs md:text-sm text-[#FDF7F3]/90 font-medium mt-1">{subtitle}</p>
            </div>
          </div>

          <button
            type="button"
            className="px-5 py-2.5 bg-[#FDF7F3] text-[#4B4B4B] hover:bg-white font-extrabold text-xs rounded-full transition shadow-xs whitespace-nowrap cursor-pointer"
          >
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

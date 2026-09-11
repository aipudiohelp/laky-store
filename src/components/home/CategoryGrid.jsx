import { ArrowLeft } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    { title: "باكدجات العناية", tag: "تصفح الآن", icon: "🎁", color: "from-amber-50 to-orange-50", link: "#products" },
    { title: "العناية بالبشرة", tag: "تصفح الآن", icon: "🌸", color: "from-rose-50 to-pink-50", link: "#products" },
    { title: "العناية بالشعر", tag: "تصفح الآن", icon: "🌿", color: "from-emerald-50 to-green-50", link: "#products" },
    { title: "العناية بالجسم", tag: "تصفح الآن", icon: "🧴", color: "from-sky-50 to-teal-50", link: "#products" },
  ];

  return (
    <section id="categories" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className={`p-5 rounded-3xl bg-gradient-to-br ${cat.color} border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{cat.title}</h3>
              <span className="text-xs text-gray-500 font-semibold flex items-center gap-1 group-hover:text-brand-green transition">
                {cat.tag} <ArrowLeft size={13} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

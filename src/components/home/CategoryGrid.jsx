import { ArrowLeft } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "باكدجات العناية",
      tag: "تصفحي الآن",
      icon: "🎁",
      bg: "bg-[#D4AF7C]/15",
      border: "border-[#D4AF7C]/30",
      link: "#products",
    },
    {
      title: "العناية بالبشرة",
      tag: "تصفحي الآن",
      icon: "🌸",
      bg: "bg-[#F8D7DC]/50",
      border: "border-[#F8D7DC]",
      link: "#products",
    },
    {
      title: "العناية بالشعر",
      tag: "تصفحي الآن",
      icon: "🌿",
      bg: "bg-[#C8E0C9]/40",
      border: "border-[#C8E0C9]",
      link: "#products",
    },
    {
      title: "العناية بالجسم",
      tag: "تصفحي الآن",
      icon: "🧴",
      bg: "bg-[#EADFD5]/50",
      border: "border-[#EADFD5]",
      link: "#products",
    },
  ];

  return (
    <section id="categories" className="py-8 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className={`p-5 rounded-3xl ${cat.bg} border ${cat.border} flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}
            >
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-extrabold text-[#4B4B4B] text-sm sm:text-base mb-1">
                {cat.title}
              </h3>
              <span className="text-xs text-[#A67C5B] font-bold flex items-center gap-1 group-hover:text-[#6B8F7A] transition">
                {cat.tag} <ArrowLeft size={13} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

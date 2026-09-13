import { ArrowLeft } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "باكدجات العناية",
      subtitle: "أعلى توفير ونتائج متكاملة",
      tag: "العروض",
      icon: "🎁",
      badgeBg: "bg-amber-100/70 border-amber-200/80",
      cardHover: "hover:border-[#D4AF7C]",
      link: "#products",
    },
    {
      title: "العناية بالبشرة",
      subtitle: "نضارة وتوحيد لون فوري",
      tag: "الروتين",
      icon: "🌸",
      badgeBg: "bg-rose-100/60 border-[#F3B6C3]",
      cardHover: "hover:border-[#F3B6C3]",
      link: "#products",
    },
    {
      title: "العناية بالشعر",
      subtitle: "كثافة، ترميم ومنع تساقط",
      tag: "الحلول",
      icon: "🌿",
      badgeBg: "bg-emerald-100/70 border-[#9FC8A1]",
      cardHover: "hover:border-[#9FC8A1]",
      link: "#products",
    },
    {
      title: "العناية بالجسم",
      subtitle: "ترطيب عميق ونعومة حريرية",
      tag: "التألق",
      icon: "🧴",
      badgeBg: "bg-[#FAF2EB] border-[#EADFD5]",
      cardHover: "hover:border-[#A67C5B]",
      link: "#products",
    },
  ];

  return (
    <section id="categories" className="py-4 sm:py-8 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-5">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className={`relative p-2 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#EADFD5] flex flex-col items-center justify-between text-center transition-all duration-300 shadow-2xs hover:shadow-lg hover:-translate-y-1 group ${cat.cardHover}`}
            >
              {/* أيقونة القسم */}
              <div
                className={`w-10 h-10 sm:w-15 sm:h-15 rounded-xl sm:rounded-2xl ${cat.badgeBg} border flex items-center justify-center text-lg sm:text-3xl mb-1.5 sm:mb-3 shadow-2xs group-hover:scale-105 transition-transform duration-300`}
              >
                {cat.icon}
              </div>

              {/* عنوان القسم */}
              <div className="space-y-0.5 mb-1.5 sm:mb-3">
                <h3 className="font-black text-[#2E332F] text-[11px] sm:text-base leading-tight">
                  {cat.title}
                </h3>
                <p className="hidden sm:block text-xs text-[#7A6B63] font-medium line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>

              {/* رابط سريع */}
              <span className="text-[10px] sm:text-xs font-black text-[#2D6A4F] flex items-center justify-center gap-0.5 group-hover:text-[#1F4C38] transition-colors">
                <span>{cat.tag}</span>
                <ArrowLeft size={11} className="group-hover:-translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

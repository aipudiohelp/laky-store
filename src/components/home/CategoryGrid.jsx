import { ArrowLeft } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "باكدجات العناية",
      subtitle: "أعلى توفير ونتائج متكاملة",
      tag: "تسوقي العروض",
      icon: "🎁",
      badgeBg: "bg-amber-100/70 border-amber-200/80",
      cardHover: "hover:border-[#D4AF7C]",
      link: "#products",
    },
    {
      title: "العناية بالبشرة",
      subtitle: "نضارة وتوحيد لون فوري",
      tag: "اكتشفي الروتين",
      icon: "🌸",
      badgeBg: "bg-rose-100/60 border-[#F3B6C3]",
      cardHover: "hover:border-[#F3B6C3]",
      link: "#products",
    },
    {
      title: "العناية بالشعر",
      subtitle: "كثافة، ترميم ومنع تساقط",
      tag: "تصفحي الحلول",
      icon: "🌿",
      badgeBg: "bg-emerald-100/70 border-[#9FC8A1]",
      cardHover: "hover:border-[#9FC8A1]",
      link: "#products",
    },
    {
      title: "العناية بالجسم",
      subtitle: "ترطيب عميق ونعومة حريرية",
      tag: "تألقي الآن",
      icon: "🧴",
      badgeBg: "bg-[#FAF2EB] border-[#EADFD5]",
      cardHover: "hover:border-[#A67C5B]",
      link: "#products",
    },
  ];

  return (
    <section id="categories" className="py-6 sm:py-8 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className={`relative p-4 sm:p-5 rounded-3xl bg-white border border-[#EADFD5] flex flex-col items-center justify-between text-center transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 group ${cat.cardHover}`}
            >
              {/* إطار الأيقونة البوتيكي المميز */}
              <div
                className={`w-13 h-13 sm:w-15 sm:h-15 rounded-2xl ${cat.badgeBg} border flex items-center justify-center text-2xl sm:text-3xl mb-3 shadow-2xs group-hover:scale-110 transition-transform duration-300`}
              >
                {cat.icon}
              </div>

              {/* العنوان والوصف السريع الموجه للنتائج */}
              <div className="space-y-0.5 sm:space-y-1 mb-3">
                <h3 className="font-black text-[#2E332F] text-sm sm:text-base leading-snug">
                  {cat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#7A6B63] font-medium line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>

              {/* رابط التصفح بالزمردي البارز */}
              <span className="text-xs font-black text-[#2D6A4F] flex items-center gap-1 group-hover:text-[#1F4C38] transition-colors">
                <span>{cat.tag}</span>
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

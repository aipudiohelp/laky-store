import { ShieldCheck, Truck, Banknote, Clock } from "lucide-react";

export default function TrustBar() {
  const trustFeatures = [
    {
      title: "دفع عند الاستلام",
      desc: "معاينة شحنتك قبل السداد لثقة وراحة تامة",
      icon: Banknote,
    },
    {
      title: "منتجات أصلية 100%",
      desc: "من ريحانة وكافيلو المعتمدة رسمياً",
      icon: ShieldCheck,
    },
    {
      title: "توصيل سريع وآمن",
      desc: "لكافة المحافظات والمناطق حتى باب منزلك",
      icon: Truck,
    },
    {
      title: "دعم ومتابعة بعد الشراء",
      desc: "نحن معكِ خطوة بخطوة لأفضل روتين ونتيجة",
      icon: Clock,
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FDF7F3] border-t border-b border-[#EADFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustFeatures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EADFD5] shadow-xs hover:shadow-md hover:border-[#9FC8A1] transition-all duration-300 flex items-center gap-4 text-right group"
              >
                {/* إطار الأيقونة بتدرج ناعم يبرز الفخامة والمصداقية */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8F4ED] to-[#D8EFE2] text-[#2D6A4F] border border-[#9FC8A1]/40 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <IconComponent size={22} className="stroke-[2.2]" />
                </div>
                
                <div>
                  <h4 className="font-black text-[#2E332F] text-sm group-hover:text-[#2D6A4F] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C5652] font-medium mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

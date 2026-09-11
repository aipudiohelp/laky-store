import { ShieldCheck, Truck, Banknote, Clock } from "lucide-react";

export default function TrustBar() {
  const trustFeatures = [
    {
      title: "دفع عند الاستلام",
      desc: "لراحة وثقة تامة وافحصي شحنتك",
      icon: Banknote,
    },
    {
      title: "منتجات أصلية 100%",
      desc: "من ريحانة وكافيلو المعتمدة",
      icon: ShieldCheck,
    },
    {
      title: "توصيل سريع وآمن",
      desc: "لكافة المحافظات والمناطق",
      icon: Truck,
    },
    {
      title: "دعم ومتابعة بعد الشراء",
      desc: "نحن معكِ خطوة بخطوة للنتيجة",
      icon: Clock,
    },
  ];

  return (
    <section className="py-10 bg-[#FAFCFA] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 text-right"
              >
                <div className="w-12 h-12 bg-emerald-50 text-brand-green rounded-2xl flex items-center justify-center shrink-0">
                  <IconComponent size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

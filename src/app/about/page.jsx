"use client";
import Link from "next/link";
import { Sparkles, Heart, ShieldCheck, Award, Users, ArrowLeft, MessageCircle } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "أصالة وموثوقية 100%",
      desc: "نلتزم بتوفير المنتجات الأصلية مباشرة من مصنعيها المعتمدين، بغلاف أمان مصنعي كامل يضمن جودتها وفعاليتها.",
    },
    {
      icon: Sparkles,
      title: "مكونات طبيعية وآمنة",
      desc: "نختار تركيبات خالية من المواد الكيميائية الضارة، غنية بالزيوت النقية ومستخلصات الأعشاب لنتائج دائمة وصحية.",
    },
    {
      icon: Heart,
      title: "العناية المتكاملة للأسرة",
      desc: "نهتم بجمال وصحة كل فرد في أسرتك عبر توفير حلول عناية بالبشرة والشعر والجسم تلبي مختلف الاحتياجات اليومية.",
    },
    {
      icon: Award,
      title: "حق المعاينة والدعم المستمر",
      desc: "ثقتك هي أولويتنا، لذلك نتيح معاينة الشحنة قبل الدفع ونقدم متابعة واستشارات عناية مستمرة بعد الشراء.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF7F3] text-[#2E332F] py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ترويسة الصفحة وقصة المتجر */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E8F4ED] border border-[#9FC8A1]/60 text-[#224A32] rounded-full text-xs font-black shadow-2xs">
            <Users size={13} className="text-[#2D6A4F]" />
            <span>قصتنا وهويتنا</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E332F] tracking-tight">
            عناية أفضل .. <span className="text-[#2D6A4F]">لحياة أجمل</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C5652] font-medium leading-relaxed">
            انطلق متجر «لكي ولأسرتك» ليكون وجهتكِ الموثوقة الأولى في عالم العناية الطبيعية الفاخرة، حيث نجمع بين قوة الطبيعة وأحدث ما توصلت إليه أبحاث الجمال للبشرة والشعر.
          </p>
        </div>

        {/* بطاقة الرؤية والرسالة */}
        <div className="bg-white rounded-3xl border border-[#EADFD5] p-6 sm:p-10 shadow-xs space-y-6 text-right">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-[#2E332F]">
              رؤيتنا ورسالتنا لكِ
            </h2>
            <p className="text-sm sm:text-base text-[#5C5652] leading-relaxed font-medium">
              نؤمن في «لكي ولأسرتك» بأن الجمال الحقيقي يبدأ من العناية الصحية والآمنة. نبتعد تماماً عن الحلول المؤقتة أو المكونات التجارية القاسية، ونركز على تقديم روتين متوازن يعالج أسباب التلف من الجذور ويمنح بشرتك وشعرك نضارة وحيوية تدوم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#EADFD5]">
            <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-[#EADFD5]">
              <h3 className="font-black text-sm text-[#2D6A4F] mb-1">رسالتنا</h3>
              <p className="text-xs sm:text-sm text-[#5C5652] font-medium leading-relaxed">
                توفير منتجات تجميل وعناية أصلية وموثوقة، بأسعار مدروسة وتجربة تسوق مريحة تبدأ من الاستشارة وتنتهي بباب منزلك.
              </p>
            </div>
            <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-[#EADFD5]">
              <h3 className="font-black text-sm text-[#8C644B] mb-1">وعدنا</h3>
              <p className="text-xs sm:text-sm text-[#5C5652] font-medium leading-relaxed">
                عدم المساومة على الجودة؛ منتجاتنا تخضع لأعلى معايير الرقابة والتغليف لضمان وصولها بأعلى كفاءة ونقاء.
              </p>
            </div>
          </div>
        </div>

        {/* شركاء النجاح والعلامات التجارية المعتمدة */}
        <div className="space-y-6 text-right">
          <div className="text-center sm:text-right">
            <span className="text-xs font-black text-[#8C644B]">العلامات المعتمدة لدينا</span>
            <h2 className="text-2xl font-black text-[#2E332F] mt-1">منتجات مختارة بأعلى المعايير</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-[#1B4332]/15 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-black bg-white/15 px-3 py-1 rounded-full inline-block">
                  طبيعة وعلاج عشبي
                </span>
                <h3 className="text-2xl font-black font-sans">ريحانة | Raihanna</h3>
                <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                  علامة رائدة في استخلاص الزيوت النباتية والأعشاب الطبيعية لعلاج تساقط وهيشان الشعر، وترميم البصيلات، وتقديم حلول العناية بالجسم بمستخلصات نقية ومجربة.
                </p>
              </div>
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 text-xs font-black text-white hover:text-emerald-200 transition"
              >
                <span>تصفحي منتجات ريحانة</span>
                <ArrowLeft size={14} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#6E3B33] to-[#8B4D43] text-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-[#6E3B33]/15 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-black bg-white/15 px-3 py-1 rounded-full inline-block">
                  نضارة وعناية مخملية
                </span>
                <h3 className="text-2xl font-black font-sans">كافيلو | Cavillo</h3>
                <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                  تركيبات طبية وتجميلية متطورة تعتمد على حمض الهيالورونيك، فيتامين C، وزبدة الشيا لترطيب عميق يدوم، وتفتيح آمن للبشرة وحماية حاجز الجلد من العوامل الخارجية.
                </p>
              </div>
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 text-xs font-black text-white hover:text-rose-200 transition"
              >
                <span>تصفحي منتجات كافيلو</span>
                <ArrowLeft size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ركائزنا وقيمنا */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#2E332F]">لماذا تختارين «لكي ولأسرتك»؟</h2>
            <p className="text-xs sm:text-sm text-[#5C5652] font-medium mt-1">قيم ومبادئ نلتزم بها مع كل طلب</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-3xl border border-[#EADFD5] shadow-xs text-right space-y-3 hover:border-[#9FC8A1] hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#E8F4ED] text-[#2D6A4F] border border-[#9FC8A1]/40 flex items-center justify-center shadow-2xs">
                    <IconComp size={20} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-sm font-black text-[#2E332F]">{v.title}</h3>
                  <p className="text-xs text-[#5C5652] leading-relaxed font-medium">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* بنر الدعوة للتسوق والتواصل */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2D6A4F] to-[#407B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#2D6A4F]/20">
          <div className="space-y-1 text-right">
            <h3 className="text-lg sm:text-xl font-black">يسعدنا انضمامك لعائلة «لكي ولأسرتك»</h3>
            <p className="text-xs sm:text-sm text-white/90 font-medium">ابدئي رحلة العناية الخاصة بكِ اليوم واستمتعي بجمال مفعم بالصحة والنعومة.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#products"
              className="px-6 py-3.5 bg-white text-[#2D6A4F] hover:bg-[#FAF6F3] font-black text-xs rounded-2xl shadow-md transition-all whitespace-nowrap active:scale-95"
            >
              اكتشفي المنتجات ←
            </Link>
            <a
              href="https://wa.me/201025484524?text=مرحباً،%20أود%20التعرف%20أكثر%20على%20منتجاتكم"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white/15 hover:bg-white/20 text-white font-black text-xs rounded-2xl border border-white/25 transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <MessageCircle size={15} />
              <span>تحدثي معنا</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

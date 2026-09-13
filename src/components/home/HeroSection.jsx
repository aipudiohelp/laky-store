"use client";
import { Check, ShieldCheck, Headphones, Heart, ArrowLeft, HelpCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function HeroSection() {
  const { openQuizModal } = useCart();

  return (
    <section className="relative overflow-hidden bg-[#FDF7F3] py-8 lg:py-16 border-b border-[#EADFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* الجانب الأيمن: العناوين ونقاط الإقناع والطلب */}
          <div className="lg:col-span-6 space-y-6 text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#C8E0C9]/60 border border-[#C8E0C9] text-[#4B4B4B] rounded-full text-xs font-black">
              <span>✨ جودة طبيعية ومضمونة 100%</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#4B4B4B] leading-[1.25]">
              عنايتك تبدأ <br />
              <span className="text-[#6B8F7A] underline decoration-[#D4AF7C] decoration-wavy underline-offset-8">
                بالأختيار الصح
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#4B4B4B]/85 leading-relaxed max-w-xl font-medium">
              منتجات مختارة بعناية من ريحانة وكافيلو لتساعدك على روتين العناية المناسب لكِ ولأسرتكِ، لتحصلي على بشرة نضرة وشعر مفعم بالحيوية والنعومة.
            </p>

            {/* أزرار التحويل الفوري المعتمدة على الهوية */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] font-black text-sm rounded-2xl shadow-lg shadow-[#6B8F7A]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>اكتشف المنتجات</span>
                <ArrowLeft size={18} />
              </a>

              <button
                type="button"
                onClick={openQuizModal}
                className="w-full sm:w-auto px-6 py-4 bg-[#F8D7DC] hover:bg-[#F2C2C9] text-[#4B4B4B] font-bold text-sm rounded-2xl transition shadow-xs flex items-center justify-center gap-2 active:scale-95 border border-[#EADFD5] cursor-pointer"
              >
                <HelpCircle size={18} className="text-[#A67C5B]" />
                <span>مش عارفة تختاري؟ ساعدني</span>
              </button>
            </div>

            {/* شارات الثقة الأربعة */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-[#EADFD5]">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#EADFD5] shadow-xs">
                <Check className="text-[#6B8F7A] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#4B4B4B]">منتجات أصلية</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#EADFD5] shadow-xs">
                <ShieldCheck className="text-[#6B8F7A] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#4B4B4B]">اختيارات موثوقة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#EADFD5] shadow-xs">
                <Headphones className="text-[#6B8F7A] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#4B4B4B]">دعم ومساعدة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#EADFD5] shadow-xs">
                <Heart className="text-[#A67C5B] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#4B4B4B]">لأنكِ تستحقين</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: مشغل الفيديو السينمائي بنسبة 1:1 */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <video
                src="/images/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 right-3 bg-[#FDF7F3]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#EADFD5] text-[11px] font-black text-[#4B4B4B] shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6B8F7A] animate-pulse" />
                <span>جمالك يبدأ هنا ✨</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

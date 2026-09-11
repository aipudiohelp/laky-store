"use client";
import { Check, ShieldCheck, Headphones, Heart, ArrowLeft, HelpCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function HeroSection() {
  const { openQuizModal } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-white to-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* الجانب الأيمن: العناوين وأزرار اتخاذ القرار */}
          <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/70 border border-emerald-200 text-emerald-800 rounded-full text-xs font-bold">
              <span>✨ جودة أصلية مضمونة 100%</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.25]">
              عنايتك تبدأ <br />
              <span className="text-brand-green underline decoration-emerald-300 decoration-wavy underline-offset-8">
                بالأختيار الصح
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
              منتجات مختارة بعناية من ريحانة وكافيلو لتساعدك على روتين العناية المناسب لكِ ولأسرتكِ، لتحصلي على بشرة نضرة وشعر مفعم بالحيوية.
            </p>

            {/* أزرار التحويل النفسي الفوري */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#products"
                className="px-8 py-4 bg-brand-green hover:bg-brand-greenHover text-white font-black text-sm rounded-2xl shadow-xl shadow-brand-green/20 transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>اكتشف المنتجات؟</span>
                <ArrowLeft size={18} />
              </a>

              <button
                onClick={openQuizModal}
                className="px-6 py-4 bg-white hover:bg-gray-50 border-2 border-emerald-900/10 text-gray-800 font-bold text-sm rounded-2xl transition shadow-sm flex items-center gap-2"
              >
                <HelpCircle size={18} className="text-emerald-700" />
                <span>مش عارف تختار؟ ساعدني</span>
              </button>
            </div>

            {/* أيقونات الثقة الأربعة الظاهرة على يمين التصميم */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                <Check className="text-brand-green shrink-0" size={18} />
                <span className="text-xs font-bold text-gray-800">منتجات أصلية</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                <ShieldCheck className="text-brand-green shrink-0" size={18} />
                <span className="text-xs font-bold text-gray-800">اختيارات موثوقة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                <Headphones className="text-brand-green shrink-0" size={18} />
                <span className="text-xs font-bold text-gray-800">دعم ومساعدة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                <Heart className="text-brand-green shrink-0" size={18} />
                <span className="text-xs font-bold text-gray-800">تستحقين الأفضل</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الصورة التعبيرية المشرقة */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-emerald-100 to-rose-50 flex items-center justify-center p-6 text-center">
              <div className="space-y-3">
                <span className="text-7xl">✨🧖‍♀️</span>
                <p className="text-2xl font-black text-brand-green tracking-wide">جمالك يبدأ هنا</p>
                <p className="text-xs font-bold text-gray-500">طبيعة نقية لشعر وبشرة أكثر شباباً</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

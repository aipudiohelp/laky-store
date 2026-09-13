"use client";
import { Check, ShieldCheck, Headphones, Heart, ArrowLeft, HelpCircle, Sparkles, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function HeroSection() {
  const { openQuizModal } = useCart();

  return (
    <section className="relative overflow-hidden bg-[#FDF7F3] py-6 sm:py-10 lg:py-14 border-b border-[#EADFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* الجانب الأيمن: العناوين، الإثبات الاجتماعي، وأزرار التحويل */}
          <div className="lg:col-span-6 space-y-5 text-right order-2 lg:order-1">
            
            {/* بادجات الثقة والتقييم لجذب العميل فورياً */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C8E0C9]/80 border border-[#9FC8A1] text-[#224A32] rounded-full text-xs font-black shadow-xs">
                <Sparkles size={13} className="text-[#224A32]" />
                <span>طبيعية ومضمونة 100%</span>
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50/90 border border-amber-200/90 rounded-full text-[11px] font-black text-amber-900 shadow-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span>4.9/5 (أكثر من 10 آلاف تجربة ناجحة)</span>
              </div>
            </div>

            {/* العنوان الرئيسي بلون حيوي وتدرج زمردي فاخر */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2E332F] leading-[1.2] tracking-tight">
              عنايتك تبدأ <br />
              <span className="bg-gradient-to-l from-[#2D6A4F] to-[#407B5E] bg-clip-text text-transparent">
                بالاختيار الصح
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#4B4B4B]/90 leading-relaxed max-w-xl font-medium">
              تركيبات طبيعية فاخرة ومختارة بعناية من ريحانة وكافيلو تمنحكِ نضارة ملحوظة وترميماً فورياً للبشرة والشعر من أول استخدام.
            </p>

            {/* أزرار التحويل الفوري بدرجات حيوية ومشجعة للمس والطلب */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-[#2D6A4F] to-[#3B7A5C] hover:from-[#23533E] hover:to-[#2D6A4F] text-[#FDF7F3] font-black text-sm sm:text-base rounded-2xl shadow-lg shadow-[#2D6A4F]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span>اكتشفي المنتجات الآن</span>
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={openQuizModal}
                className="px-6 py-4 bg-[#FDE8EC] hover:bg-[#F9D4DC] text-[#7A273D] font-black text-sm rounded-2xl transition-all duration-200 shadow-xs flex items-center justify-center gap-2 active:scale-95 border border-[#F3B6C3] cursor-pointer"
              >
                <HelpCircle size={18} className="text-[#7A273D]" />
                <span>مش عارفة تختاري؟ ساعدني</span>
              </button>
            </div>

            {/* بطاقات الضمان الأربعة */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#EADFD5]">
              <div className="flex items-center gap-2 p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-xs">
                <Check className="text-[#2D6A4F] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#3D403D]">أصلية 100%</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-xs">
                <ShieldCheck className="text-[#2D6A4F] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#3D403D]">معاينة عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-xs">
                <Headphones className="text-[#2D6A4F] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#3D403D]">استشارة مجانية</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-xs">
                <Heart className="text-[#A67C5B] shrink-0" size={17} />
                <span className="text-xs font-bold text-[#3D403D]">لأنكِ تستحقين</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: كادر الفيديو بإضاءة محيطية فاخرة ومقاس متجاوب */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-md lg:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-[#A67C5B]/20 border-4 border-white bg-white">
              <video
                src="/images/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EADFD5] text-[11px] font-black text-[#2E332F] shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
                <span>جمالك يبدأ هنا ✨</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

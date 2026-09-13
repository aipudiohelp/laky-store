"use client";
import { Check, ShieldCheck, Headphones, Heart, ArrowLeft, HelpCircle, Sparkles, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function HeroSection() {
  const { openQuizModal } = useCart();

  return (
    <section className="relative overflow-hidden bg-[#FDF7F3] py-4 sm:py-8 lg:py-14 border-b border-[#EADFD5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          
          {/* الجانب الأيمن: العناوين، الأزرار، والضمانات (الترتيب الأول دائماً على الموبايل والديسكتوب) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-5 text-right order-1 lg:order-1">
            
            {/* بادجات التقييم والضمان المدمجة */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#C8E0C9]/80 border border-[#9FC8A1] text-[#224A32] rounded-full text-[10px] sm:text-xs font-black shadow-2xs">
                <Sparkles size={11} className="text-[#224A32]" />
                <span>طبيعية ومضمونة 100%</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-50/90 border border-amber-200/90 rounded-full text-[10px] sm:text-[11px] font-black text-amber-900 shadow-2xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span>4.9/5 (أكثر من 10 آلاف تجربة ناجحة)</span>
              </div>
            </div>

            {/* العنوان الرئيسي بمقاس متجاوب بدون تشتيت */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#2E332F] leading-tight sm:leading-[1.2] tracking-tight">
              عنايتك تبدأ <br />
              <span className="bg-gradient-to-l from-[#2D6A4F] to-[#407B5E] bg-clip-text text-transparent">
                بالاختيار الصح
              </span>
            </h1>

            {/* الوصف المختصر */}
            <p className="text-xs sm:text-base text-[#4B4B4B]/90 leading-relaxed max-w-xl font-medium">
              تركيبات طبيعية فاخرة ومختارة بعناية من ريحانة وكافيلو تمنحكِ نضارة ملحوظة وترميماً فورياً للبشرة والشعر من أول استخدام.
            </p>

            {/* أزرار التحويل جنباً إلى جنب في صف واحد على الموبايل لتوفير المساحة */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 pt-1">
              <a
                href="#products"
                className="px-3 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2D6A4F] to-[#3B7A5C] hover:from-[#23533E] hover:to-[#2D6A4F] text-[#FDF7F3] font-black text-xs sm:text-base rounded-xl sm:rounded-2xl shadow-md shadow-[#2D6A4F]/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2.5 active:scale-95 text-center cursor-pointer"
              >
                <span>اكتشفي المنتجات</span>
                <ArrowLeft size={15} className="shrink-0" />
              </a>

              <button
                type="button"
                onClick={openQuizModal}
                className="px-2 sm:px-6 py-3 sm:py-4 bg-[#FDE8EC] hover:bg-[#F9D4DC] text-[#7A273D] font-black text-xs sm:text-sm rounded-xl sm:rounded-2xl transition-all duration-200 shadow-2xs flex items-center justify-center gap-1.5 active:scale-95 border border-[#F3B6C3] text-center cursor-pointer"
              >
                <HelpCircle size={15} className="text-[#7A273D] shrink-0" />
                <span className="truncate">مش عارفة تختاري؟</span>
              </button>
            </div>

            {/* بطاقات الضمان الأربعة في صفوف متراصة وأنيقة */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pt-2.5 sm:pt-4 border-t border-[#EADFD5]">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 p-2 sm:p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-2xs">
                <Check className="text-[#2D6A4F] shrink-0" size={14} />
                <span className="text-[11px] sm:text-xs font-bold text-[#3D403D]">أصلية 100%</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 p-2 sm:p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-2xs">
                <ShieldCheck className="text-[#2D6A4F] shrink-0" size={14} />
                <span className="text-[11px] sm:text-xs font-bold text-[#3D403D]">معاينة عند الاستلام</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 p-2 sm:p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-2xs">
                <Headphones className="text-[#2D6A4F] shrink-0" size={14} />
                <span className="text-[11px] sm:text-xs font-bold text-[#3D403D]">استشارة مجانية</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 p-2 sm:p-2.5 bg-white/90 rounded-xl border border-[#EADFD5] shadow-2xs">
                <Heart className="text-[#A67C5B] shrink-0" size={14} />
                <span className="text-[11px] sm:text-xs font-bold text-[#3D403D]">لأنكِ تستحقين</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: كادر الفيديو (يأتي تالياً على الموبايل بمقاس متناسق لا يلتهم الشاشة) */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex justify-center pt-2 sm:pt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-sm lg:max-w-lg aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-[#A67C5B]/15 border-2 sm:border-4 border-white bg-white">
              <video
                src="/images/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#EADFD5] text-[10px] sm:text-[11px] font-black text-[#2E332F] shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] animate-pulse" />
                <span>جمالك يبدأ هنا ✨</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

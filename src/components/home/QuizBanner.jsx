"use client";
import { useCart } from "@/hooks/useCart";
import { Sparkles, MessageSquare, Headphones, UserCheck, HelpCircle, ArrowLeft } from "lucide-react";

export default function QuizBanner() {
  const { openQuizModal } = useCart();

  return (
    <section className="py-8 sm:py-10 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAF5F0] to-[#F5ECE3] rounded-3xl p-6 sm:p-10 border border-[#EADFD5] shadow-lg shadow-[#A67C5B]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* إضاءات محيطية خافتة لإعطاء عمق فاخر */}
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#C8E0C9]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#F8D7DC]/35 rounded-full blur-3xl pointer-events-none" />

          {/* الجانب الأيمن: النصوص التوجيهية المحفزة */}
          <div className="space-y-3 text-right max-w-xl z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r from-[#FDE8EC] to-[#FFF0F3] border border-[#F3B6C3] rounded-full text-xs font-black text-[#7A273D] shadow-2xs">
              <Sparkles size={14} className="text-[#A67C5B]" />
              <span>استشارة تفاعلية سريعة ومجانية</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-[#2E332F] leading-tight">
              محتارة في اختيار الروتين المناسب لبشرتك أو شعرك؟
            </h3>
            
            <p className="text-sm text-[#5C5652] font-medium leading-relaxed">
              أجيبي عن سؤالين وسيقترح لكِ نظامنا الذكي أفضل تركيبة تمنحكِ أقصى نتيجة وأعلى توفير من أول استخدام.
            </p>
          </div>

          {/* الجانب الأيسر: مزايا الدعم وزر الاختبار الفاخر */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto justify-end z-10">
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-3 text-xs font-bold text-[#3D403D]">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EADFD5] shadow-2xs">
                <MessageSquare size={15} className="text-[#2D6A4F] shrink-0" />
                <span className="whitespace-nowrap">عبر واتساب</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EADFD5] shadow-2xs">
                <Headphones size={15} className="text-[#2D6A4F] shrink-0" />
                <span className="whitespace-nowrap">دعم فوري</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EADFD5] shadow-2xs">
                <UserCheck size={15} className="text-[#2D6A4F] shrink-0" />
                <span className="whitespace-nowrap">ترشيح مخصص</span>
              </div>
            </div>

            {/* زر الاختبار بتدرج زمردي حيوي ومحفز للضغط */}
            <button
              type="button"
              onClick={openQuizModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2D6A4F] to-[#3B7A5C] hover:from-[#23533E] hover:to-[#2D6A4F] text-white font-black text-sm rounded-2xl shadow-lg shadow-[#2D6A4F]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap group"
            >
              <HelpCircle size={19} />
              <span>ساعدني أختار الآن</span>
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";
import { useCart } from "@/hooks/useCart";
import { Sparkles, MessageSquare, Headphones, UserCheck, HelpCircle } from "lucide-react";

export default function QuizBanner() {
  const { openQuizModal } = useCart();

  return (
    <section className="py-10 bg-[#FDF7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EADFD5]/40 rounded-3xl p-6 sm:p-10 border border-[#EADFD5] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          
          {/* الجانب الأيمن: النصوص التوجيهية */}
          <div className="space-y-3 text-right max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#F8D7DC] rounded-full text-xs font-black text-[#4B4B4B]">
              <Sparkles size={14} className="text-[#A67C5B]" />
              <span>استشارة سريعة في دقيقة واحدة</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#4B4B4B] leading-tight">
              مش متأكدة من المنتج المناسب لكِ ؟
            </h3>
            <p className="text-sm text-[#4B4B4B]/80 font-medium leading-relaxed">
              أجيبي على سؤالين بسيطين وسيقوم نظامنا بترشيح الروتين الأنسب لمشكلة بشرتك أو شعرك بأعلى نتيجة وأفضل عناية.
            </p>
          </div>

          {/* الجانب الأيسر: مميزات الدعم وزر الاختبار */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-end">
            <div className="flex items-center gap-4 text-xs font-bold text-[#4B4B4B]">
              <div className="flex items-center gap-1.5">
                <MessageSquare size={16} className="text-[#6B8F7A]" />
                <span>عبر واتساب</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones size={16} className="text-[#6B8F7A]" />
                <span>مساعدة مباشرة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={16} className="text-[#6B8F7A]" />
                <span>ترشيحات مخصصة</span>
              </div>
            </div>

            {/* الزر الرئيسي بالأخضر الطبيعي الأساسي */}
            <button
              type="button"
              onClick={openQuizModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] font-black text-sm rounded-2xl shadow-lg shadow-[#6B8F7A]/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <HelpCircle size={19} />
              <span>ساعدني أختار الآن</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

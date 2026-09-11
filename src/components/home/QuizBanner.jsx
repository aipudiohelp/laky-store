"use client";
import { useCart } from "@/hooks/useCart";
import { Sparkles, MessageSquare, Headphones, UserCheck, HelpCircle } from "lucide-react";

export default function QuizBanner() {
  const { openQuizModal } = useCart();

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-50/70 via-emerald-50/50 to-teal-50/70 rounded-3xl p-6 sm:p-10 border border-emerald-100 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          
          {/* الجانب الأيمن: النصوص والشرح */}
          <div className="space-y-3 text-right max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 rounded-full text-xs font-black text-[#153E2A]">
              <Sparkles size={14} className="text-[#153E2A]" />
              <span>استشارة سريعة في دقيقة واحدة</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              مش متأكدة من المنتج المناسب لكِ ؟
            </h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              أجيبي على سؤالين بسيطين وسيقوم نظامنا بترشيح الروتين الأنسب لمشكلة بشرتك أو شعرك بأعلى نتيجة وتوفير.
            </p>
          </div>

          {/* الجانب الأيسر: أيقونات المساعدة والزر الواضح */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-end">
            <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
              <div className="flex items-center gap-1.5">
                <MessageSquare size={16} className="text-[#153E2A]" />
                <span>عبر واتساب</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Headphones size={16} className="text-[#153E2A]" />
                <span>مساعدة مباشرة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck size={16} className="text-[#153E2A]" />
                <span>ترشيحات مخصصة</span>
              </div>
            </div>

            {/* الزر البارز بلون صريح لا يتأثر بإعدادات الـ Build */}
            <button
              type="button"
              onClick={openQuizModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#153E2A] hover:bg-[#0E2B1D] text-white font-black text-sm rounded-2xl shadow-xl shadow-[#153E2A]/25 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <HelpCircle size={19} className="text-white" />
              <span className="text-white">ساعدني أختار الآن</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

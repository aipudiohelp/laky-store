"use client";
import { useCart } from "@/hooks/useCart";
import { Sparkles, MessageSquare, Headphones, UserCheck, HelpCircle } from "lucide-react";

export default function QuizBanner() {
  const { openQuizModal } = useCart();

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-50/80 via-emerald-50/60 to-teal-50/80 rounded-3xl p-8 border border-emerald-100/60 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          
          <div className="space-y-3 text-right max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-bold text-brand-green border border-gray-100">
              <Sparkles size={14} /> استشارة سريعة في دقيقة واحدة
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              مش متأكدة من المنتج المناسب لكِ ؟
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              أجيبي على سؤالين بسيطين وسيقوم نظامنا بترشيح الروتين الأنسب لمشكلة بشرتك أو شعرك بأعلى نتيجة وتوفير.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
              <div className="flex items-center gap-1.5"><MessageSquare size={16} className="text-emerald-700" /> عبر واتساب</div>
              <div className="flex items-center gap-1.5"><Headphones size={16} className="text-emerald-700" /> مساعدة مباشرة</div>
              <div className="flex items-center gap-1.5"><UserCheck size={16} className="text-emerald-700" /> ترشيحات مخصصة</div>
            </div>

            <button
              onClick={openQuizModal}
              className="px-8 py-4 bg-brand-green hover:bg-brand-greenHover text-white font-black text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <HelpCircle size={18} />
              <span>ساعدني أختار الآن</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

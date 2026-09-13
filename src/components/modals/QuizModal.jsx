"use client";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { quizSteps, quizRecommendations } from "@/data/quizQuestions";
import { products } from "@/data/products";
import { X, Sparkles, Check, ArrowRight, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function QuizModal() {
  const { isOpen, modalType, closeModal, openOrderModal } = useModal();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedTarget, setSelectedTarget] = useState("skin");
  const [result, setResult] = useState(null);

  if (!isOpen || modalType !== "quiz") return null;

  const currentStep = quizSteps[currentStepIndex];

  const handleOptionSelect = (target) => {
    if (currentStepIndex === 0) {
      setSelectedTarget(target);
      setCurrentStepIndex(1);
    } else {
      const rec = quizRecommendations[selectedTarget] || quizRecommendations.skin;
      const matchedProduct = products.find((p) => p.id === rec.productId);
      setResult({ ...rec, product: matchedProduct });
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setResult(null);
  };

  const handleOrderResult = () => {
    if (result?.product) {
      closeModal();
      openOrderModal(result.product);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#FAF6F3] to-white rounded-3xl shadow-2xl p-6 md:p-8 border border-[#EADFD5] max-h-[92vh] overflow-y-auto">
        
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={() => {
            handleReset();
            closeModal();
          }}
          className="absolute top-4 left-4 p-2 text-[#4B4B4B] hover:text-[#2E332F] hover:bg-white bg-[#EADFD5]/70 rounded-full transition-colors z-10 cursor-pointer shadow-2xs"
        >
          <X size={18} />
        </button>

        {!result ? (
          <div>
            {/* مؤشر خطوات الاستشارة */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F4ED] border border-[#9FC8A1]/60 text-[#224A32] rounded-full text-xs font-black mb-3 shadow-2xs">
              <Sparkles size={13} className="text-[#2D6A4F]" />
              <span>مستشار العناية الذكي (سؤال {currentStepIndex + 1} من 2)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#2E332F] mb-6 leading-snug">
              {currentStep.title}
            </h3>
            
            {/* خيارات الإجابة التفاعلية وعالية التباين */}
            <div className="space-y-3">
              {currentStep.options.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionSelect(option.target)}
                  className="w-full text-right p-4 sm:p-5 rounded-2xl border-2 border-[#EADFD5] hover:border-[#2D6A4F] hover:bg-[#E8F4ED]/50 bg-white text-[#2E332F] font-bold text-sm sm:text-base transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-between group active:scale-[0.99] cursor-pointer"
                >
                  <span>{option.label}</span>
                  <div className="w-8 h-8 rounded-xl bg-[#FAF6F3] group-hover:bg-[#2D6A4F] group-hover:text-white text-[#7A6B63] flex items-center justify-center transition-colors shrink-0">
                    <ArrowRight size={16} className="transition-transform group-hover:-translate-x-0.5 rotate-180" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-5">
            {/* أيقونة اكتمال الترشيح */}
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#E8F4ED] to-[#D8EFE2] text-[#2D6A4F] border border-[#9FC8A1]/50 flex items-center justify-center mx-auto shadow-md shadow-[#2D6A4F]/15">
              <Sparkles size={30} />
            </div>
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 text-xs font-black text-[#7A273D] bg-gradient-to-r from-[#FDE8EC] to-[#FFF0F3] px-3.5 py-1 rounded-full border border-[#F3B6C3] shadow-2xs">
                ✨ الترشيح الأنسب لحالتك واحتياجك
              </span>
              <h3 className="text-2xl font-black text-[#2E332F] mt-2">
                {result.title}
              </h3>
              <p className="text-sm text-[#5C5652] leading-relaxed font-medium max-w-md mx-auto">
                {result.reason}
              </p>
            </div>

            {/* بطاقة معاينة المنتج المقترح */}
            {result.product && (
              <div className="p-4 bg-white rounded-2xl border border-[#EADFD5] shadow-xs flex items-center justify-between gap-4 text-right">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#FAF6F3] rounded-xl p-1 border border-[#EADFD5] flex items-center justify-center shrink-0 overflow-hidden">
                    {result.product.image ? (
                      <img
                        src={result.product.image}
                        alt={result.product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <ShoppingBag className="text-[#2D6A4F]" size={22} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#2E332F] line-clamp-1">{result.product.name}</h4>
                    <span className="text-xs text-[#7A6B63] font-medium">{result.product.subtitle}</span>
                  </div>
                </div>

                <div className="text-left shrink-0">
                  <span className="block text-xs text-[#7A6B63] font-bold">السعر اليوم</span>
                  <span className="text-lg font-black text-[#2D6A4F]">
                    {formatPrice ? formatPrice(result.product.price) : `${result.product.price} ج.م`}
                  </span>
                </div>
              </div>
            )}

            {/* أزرار اتخاذ القرار */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleOrderResult}
                className="w-full py-4 bg-gradient-to-r from-[#2D6A4F] to-[#3B7A5C] hover:from-[#23533E] hover:to-[#2D6A4F] text-white font-black rounded-2xl shadow-xl shadow-[#2D6A4F]/25 hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <Check size={19} className="stroke-[2.5]" />
                <span>اطلبي هذا المنتج الآن بنقرة واحدة</span>
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-[#7A6B63] hover:text-[#2E332F] font-black transition cursor-pointer"
              >
                إعادة الاختبار من البداية ↺
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

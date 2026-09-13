"use client";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { quizSteps, quizRecommendations } from "@/data/quizQuestions";
import { products } from "@/data/products";
import { X, Sparkles, Check, ArrowRight } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4B4B4B]/50 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FDF7F3] rounded-3xl shadow-2xl p-6 md:p-8 border border-[#EADFD5] max-h-[92vh] overflow-y-auto">
        
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={() => {
            handleReset();
            closeModal();
          }}
          className="absolute top-4 left-4 p-2 text-[#4B4B4B] hover:bg-white bg-[#EADFD5]/60 rounded-full transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!result ? (
          <div>
            <div className="flex items-center gap-2 text-[#6B8F7A] font-bold text-xs mb-2">
              <Sparkles size={16} />
              <span>مستشار العناية الذكي (سؤال {currentStepIndex + 1} من 2)</span>
            </div>
            <h3 className="text-xl font-bold text-[#4B4B4B] mb-6">{currentStep.title}</h3>
            
            <div className="space-y-3">
              {currentStep.options.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionSelect(option.target)}
                  className="w-full text-right p-4 rounded-2xl border-2 border-[#EADFD5] hover:border-[#6B8F7A] hover:bg-[#C8E0C9]/25 bg-white text-[#4B4B4B] font-semibold text-sm transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{option.label}</span>
                  <ArrowRight size={18} className="text-[#A67C5B] group-hover:text-[#6B8F7A] transition-transform group-hover:-translate-x-1 rotate-180" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-5">
            <div className="w-14 h-14 bg-[#C8E0C9]/40 text-[#6B8F7A] rounded-full flex items-center justify-center mx-auto border border-[#C8E0C9]">
              <Sparkles size={28} />
            </div>
            
            <div>
              <span className="text-xs font-bold text-[#4B4B4B] bg-[#F8D7DC] px-3.5 py-1 rounded-full border border-[#EADFD5]">
                الترشيح المثالي لحالتك
              </span>
              <h3 className="text-2xl font-black text-[#4B4B4B] mt-3">{result.title}</h3>
              <p className="text-sm text-[#4B4B4B]/80 mt-2 leading-relaxed font-medium">{result.reason}</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#EADFD5] flex items-center justify-between">
              <span className="text-sm font-bold text-[#4B4B4B]">السعر الخاص اليوم:</span>
              <span className="text-xl font-black text-[#6B8F7A]">{result.product?.price} ج.م</span>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleOrderResult}
                className="w-full py-4 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] font-bold rounded-2xl shadow-lg shadow-[#6B8F7A]/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-sm cursor-pointer"
              >
                <Check size={18} />
                <span>اطلبي هذا المنتج الآن بنقرة واحدة</span>
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-[#A67C5B] hover:text-[#4B4B4B] font-bold transition cursor-pointer"
              >
                إعادة الاختبار من البداية
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

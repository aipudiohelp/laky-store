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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <button
          onClick={() => {
            handleReset();
            closeModal();
          }}
          className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition"
        >
          <X size={20} />
        </button>

        {!result ? (
          <div>
            <div className="flex items-center gap-2 text-brand-green font-bold text-xs mb-2">
              <Sparkles size={16} />
              <span>مستشار العناية الذكي (سؤال {currentStepIndex + 1} من 2)</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">{currentStep.title}</h3>
            <div className="space-y-3">
              {currentStep.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option.target)}
                  className="w-full text-right p-4 rounded-2xl border-2 border-gray-100 hover:border-brand-green hover:bg-emerald-50/40 text-gray-800 font-semibold text-sm transition flex items-center justify-between group"
                >
                  <span>{option.label}</span>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-brand-green transition transform rotate-180" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center mx-auto">
              <Sparkles size={28} />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-green bg-emerald-50 px-3 py-1 rounded-full">
                الترشيح المثالي لحالتك
              </span>
              <h3 className="text-2xl font-black text-gray-900 mt-2">{result.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{result.reason}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">السعر الخاص اليوم:</span>
              <span className="text-xl font-black text-brand-green">{result.product?.price} ج.م</span>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleOrderResult}
                className="w-full py-4 bg-brand-green hover:bg-brand-greenHover text-white font-bold rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <Check size={18} />
                اطلبي هذا المنتج الآن بنقرة واحدة
              </button>
              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-800 font-semibold transition"
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

"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  HeartHandshake,
  ArrowLeft 
} from "lucide-react";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqCategories = [
    { id: "all", label: "جميع الأسئلة" },
    { id: "shipping", label: "الشحن والاستلام" },
    { id: "products", label: "جودة المنتجات والضمان" },
    { id: "routine", label: "الاستخدام واختيار الروتين" },
  ];

  const faqs = [
    {
      id: 1,
      category: "products",
      question: "هل منتجات ريحانة وكافيلو أصلية ومضمونة 100%؟",
      answer: "نعم، جميع المنتجات المعروضة في متجر «لكي ولأسرتك» أصلية تماماً ومستوردة أو مصنعة وفق أعلى معايير الجودة ومسجلة رسمياً. نحن الوكيل المعتمد لعلامتي ريحانة (Raihanna) وكافيلو (Cavillo) وتصلك العبوات مغلفة بغلاف الأمان الأصلي المصنعي."
    },
    {
      id: 2,
      category: "shipping",
      question: "هل يحق لي معاينة وتفقد الشحنة قبل الدفع للمندوب؟",
      answer: "بكل تأكيد! نتيح لكِ حق المعاينة الكاملة للشحنة عند وصول المندوب؛ حيث يمكنك التأكد من سلامة العبوات ومطابقتها للمنتجات المطلوبة قبل سداد أي مبلغ لضمان راحتك واطمئنانك التام."
    },
    {
      id: 3,
      category: "shipping",
      question: "ما هي مدة التوصيل وتكلفة الشحن لمحافظتي؟",
      answer: "يتم تجهيز وشحن الطلبات فور تأكيدك عبر واتساب. يستغرق التوصيل من 24 إلى 48 ساعة لمحافظات القاهرة والجيزة والإسكندرية، ومن 2 إلى 4 أيام عمل لباقي المحافظات والمناطق حتى باب منزلك."
    },
    {
      id: 4,
      category: "shipping",
      question: "ما هي طرق الدفع المتاحة داخل المتجر؟",
      answer: "نعتمد نظام الدفع عند الاستلام (نقدياً للمندوب بعد المعاينة)، كما يمكنك أيضاً التحويل عبر المحافظ الإلكترونية (فودافون كاش، إنستاباي) عند تأكيد الطلب مع خدمة العملاء إن كنتِ تفضلين ذلك."
    },
    {
      id: 5,
      category: "routine",
      question: "لست متأكدة من المنتج الأنسب لمشكلة شعري أو بشرتي، كيف أختار؟",
      answer: "يمكنك خوض اختبار «ساعدني أختار» التفاعلي المتاح في الصفحة الرئيسية لمعرفة الترشيح الدقيق لحالتك خلال دقيقة واحدة، أو الضغط على زر واتساب للتحدث مباشرة مع أخصائية العناية لتقديم استشارة مجانية مخصصة لكِ."
    },
    {
      id: 6,
      category: "routine",
      question: "متى تبدأ النتائج الملموسة في الظهور بعد استخدام المنتجات؟",
      answer: "معظم العميلات يلاحظن نعومة ملحوظة وترطيباً فورياً للشعر والبشرة من أول استخدام (خصوصاً مع ماسك Hair Therapy أو سيروم الهيالورونيك). أما بالنسبة للتفتيح، توحيد اللون، وعلاج تساقط الشعر، فإن النتائج التراكمية الدائمة تبدأ في الظهور بوضوح خلال 14 إلى 21 يوماً من الالتزام بالروتين."
    },
    {
      id: 7,
      category: "products",
      question: "هل المنتجات آمنة للحوامل والمرضعات؟",
      answer: "منتجات ريحانة وكافيلو تعتمد على خلاصات نباتية، زيوت عضوية، وزبدة طبيعية خالية من البارابين والمواد الكيميائية القاسية. تركيبات العناية بالشعر والترطيب آمنة تماماً، وننصح دائماً باستشارة طبيبكِ الخاص لأي عناية خاصة بفترة الحمل."
    }
  ];

  const filteredFaqs = activeTab === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeTab);

  const toggleAccordion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FDF7F3] text-[#2E332F] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E8F4ED] border border-[#9FC8A1]/60 text-[#224A32] rounded-full text-xs font-black shadow-2xs">
            <HelpCircle size={13} className="text-[#2D6A4F]" />
            <span>مركز المساعدة والإجابات السريعة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E332F] tracking-tight">
            الأسئلة <span className="text-[#2D6A4F]">الشائعة</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C5652] font-medium leading-relaxed">
            كل ما تحتاجين معرفته حول المنتجات، جودتها، طرق التوصيل، ومعاينة الطلبات قبل الدفع.
          </p>

          {/* تبويبات التصنيف */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveTab(cat.id);
                  setOpenQuestion(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-[#2D6A4F] text-white shadow-md shadow-[#2D6A4F]/20"
                    : "bg-white text-[#5C5652] border border-[#EADFD5] hover:border-[#2D6A4F]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* قائمة الأسئلة بنظام الأكورديون */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openQuestion === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#EADFD5] overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#9FC8A1]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-black text-[#2E332F] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#2D6A4F] text-white rotate-180"
                        : "bg-[#FAF6F3] text-[#7A6B63]"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#EADFD5]/60 text-right animate-fade-in">
                    <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* بطاقة المساعدة السريعة عبر واتساب */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2D6A4F] to-[#407B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#2D6A4F]/20">
          <div className="space-y-1 text-right">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-amber-300" />
              <h3 className="text-lg sm:text-xl font-black">لم تجدي إجابة لسؤالك؟</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/90 font-medium">
              فريق الاستشارات جاهز للإجابة على كافة استفساراتك حول المنتجات وطريقة استخدامها فوراً.
            </p>
          </div>

          <a
            href="https://wa.me/201025484524?text=مرحباً،%20لدي%20سؤال%20لم%20أجده%20في%20صفحة%20الأسئلة%20الشائعة"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white text-[#2D6A4F] hover:bg-[#FAF6F3] font-black text-xs rounded-2xl shadow-md transition-all whitespace-nowrap active:scale-95 flex items-center gap-2"
          >
            <MessageCircle size={17} />
            <span>اسألينا عبر واتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { 
  ShieldCheck, 
  Ban, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  FileText
} from "lucide-react";

export default function PolicyPage() {
  const policyPoints = [
    {
      title: "حق المعاينة الكاملة قبل الاستلام",
      desc: "يحق لكِ فحص وتفقد الشحنة والتأكد من مطابقة المنتجات والعبوات الخارجية تماماً في وجود المندوب قبل دفع أي مبالغ لراحتك واطمئنانك.",
      icon: ShieldCheck,
      color: "text-[#2D6A4F]",
      bg: "bg-[#E8F4ED]",
      border: "border-[#9FC8A1]/50"
    },
    {
      title: "لا يوجد استبدال أو استرجاع",
      desc: "حرصاً على الصحة والسلامة العامة وحماية لعميلاتنا، جميع مستحضرات التجميل والعناية الشخصية لا تقبل الإرجاع أو الاستبدال نهائياً بعد مغادرة المندوب.",
      icon: Ban,
      color: "text-[#7A273D]",
      bg: "bg-[#FDE8EC]",
      border: "border-[#F3B6C3]"
    },
    {
      title: "رفض فوري ومجاني في حال التلف",
      desc: "إذا لاحظتِ أثناء المعاينة وجود أي كسر أو تلف ناتج عن الشحن أو منتج غير مطابق، يحق لكِ رفض استلام الشحنة فوراً للمندوب دون دفع أي تكلفة.",
      icon: Truck,
      color: "text-[#2D6A4F]",
      bg: "bg-[#E8F4ED]",
      border: "border-[#9FC8A1]/50"
    },
    {
      title: "دفع آمن بعد التأكد والمعاينة",
      desc: "سداد قيمة الطلب يتم نقداً لمندوب الشحن فقط بعد فتح الطرد والتأكد التام من استلام المنتجات المطلوبة وبحالتيها الأصلية السليمة.",
      icon: CheckCircle2,
      color: "text-[#8C644B]",
      bg: "bg-[#FAF2EB]",
      border: "border-[#EADFD5]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF7F3] text-[#2E332F] py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E8F4ED] border border-[#9FC8A1]/60 text-[#224A32] rounded-full text-xs font-black shadow-2xs">
            <FileText size={13} className="text-[#2D6A4F]" />
            <span>ضمان الشراء والمعاينة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E332F] tracking-tight">
            سياسة <span className="text-[#2D6A4F]">المعاينة والاستلام</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C5652] font-medium leading-relaxed">
            في متجر لكي ولأسرتك، نضع ثقتكِ وسلامتكِ الصحية على رأس أولوياتنا. تضمن سياستنا حقكِ الكامل في معاينة طلبكِ قبل الدفع مع مراعاة المعايير الوقائية لمنتجات العناية.
          </p>
        </div>

        {/* كروت الضوابط الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {policyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-3xl border border-[#EADFD5] shadow-xs hover:shadow-md transition-all flex items-start gap-4 text-right"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} ${item.color} flex items-center justify-center shrink-0 shadow-2xs`}>
                  <Icon size={24} className="stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base font-black text-[#2E332F]">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* تفاصيل وشروط المعاينة والاستلام */}
        <div className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-[#EADFD5] shadow-sm mb-12 text-right">
          
          <div className="space-y-2 border-b border-[#EADFD5] pb-5">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <AlertCircle size={20} className="text-[#7A273D]" />
              <span>طبيعة منتجات التجميل والعناية الشخصية</span>
            </h3>
            <ul className="text-xs sm:text-sm text-[#5C5652] space-y-2 pt-2 leading-relaxed pr-6 list-disc">
              <li>نظراً لأن جميع معروضاتنا هي منتجات عناية شخصية وتجميل مخصصة للاستخدام الفردي، وحرصاً على السلامة الصحية العامة، فإنه **لا يتوفر استبدال أو استرجاع نهائياً** لأي منتج بمجرد استلامه ومغادرة مندوب الشحن.</li>
              <li>ضمانكِ الأساسي لحماية حقك هو المعاينة المباشرة والفحص الدقيق أثناء تواجد المندوب.</li>
            </ul>
          </div>

          <div className="space-y-2 border-b border-[#EADFD5] pb-5">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#2D6A4F]" />
              <span>ضوابط وإجراءات المعاينة مع المندوب</span>
            </h3>
            <ul className="text-xs sm:text-sm text-[#5C5652] space-y-2 pt-2 leading-relaxed pr-6 list-disc">
              <li>يحق للعميلة فتح طرد الشحن والتأكد من عدد العبوات ونوعية المنتجات ومطابقتها التامة للفاتورة قبل تسليم أي مبالغ مالية.</li>
              <li>يُشترط فحص سلامة التغليف الخارجي للعبوات وعدم وجود أي تسريب أو كسر أثناء المعاينة.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <Truck size={20} className="text-[#2D6A4F]" />
              <span>ماذا تفعلي في حالة وجود خطأ أو تلف بالشحنة؟</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed pt-1">
              إذا تبين أثناء المعاينة وصول منتج غير مطابق لطلبك أو وجود أي كسر أو تلف، قومي فوراً برفض استلام الشحنة وإعادتها مع نفس المندوب دون سداد أي رسوم، وتواصلي معنا عبر واتساب لنقوم بشحن طلب جديد وسليم لكِ مباشرة.
            </p>
          </div>

        </div>

        {/* بنر التواصل الفوري عبر واتساب */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2D6A4F] to-[#407B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#2D6A4F]/20">
          <div className="space-y-1 text-right">
            <h4 className="text-lg sm:text-xl font-black">هل لديكِ أي استفسار حول طلبكِ أو معاينة الشحنة؟</h4>
            <p className="text-xs sm:text-sm text-white/90 font-medium">فريق خدمة العملاء متواجد للمتابعة معكِ وتسهيل استلام طلبك بكل طمأنينة.</p>
          </div>

          <a
            href="https://wa.me/201025484524?text=مرحباً،%20لدي%20استفسار%20بخصوص%20معاينة%20واستلام%20الطلب"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white text-[#2D6A4F] hover:bg-[#FAF6F3] font-black text-xs rounded-2xl shadow-md transition-all whitespace-nowrap active:scale-95 flex items-center gap-2"
          >
            <MessageCircle size={17} />
            <span>تحدثي مع خدمة العملاء</span>
          </a>
        </div>

      </div>
    </div>
  );
}

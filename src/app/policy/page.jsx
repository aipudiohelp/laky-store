"use client";
import Link from "next/link";
import { 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  FileText,
  Clock
} from "lucide-react";

export default function PolicyPage() {
  const policyPoints = [
    {
      title: "حق المعاينة الكاملة عند الاستلام",
      desc: "يحق لكِ فحص وتفقد الشحنة والتأكد من مطابقة المنتجات والعبوات الخارجية تماماً قبل دفع أي مبالغ للمندوب لراحتك وطمأنينتك.",
      icon: ShieldCheck,
      color: "text-[#2D6A4F]",
      bg: "bg-[#E8F4ED]",
      border: "border-[#9FC8A1]/50"
    },
    {
      title: "الاستبدال والاسترجاع خلال 14 يوماً",
      desc: "يمكنكِ تقديم طلب استبدال أو استرجاع لأي منتج خلال 14 يوماً من تاريخ الاستلام طالما كان المنتج بحالته الأصلية ومغلقاً بغلاف الأمان.",
      icon: Clock,
      color: "text-[#8C644B]",
      bg: "bg-[#FAF2EB]",
      border: "border-[#EADFD5]"
    },
    {
      title: "شحن مجاني في حالة الخطأ أو التلف",
      desc: "إذا وصلتكِ شحنة بها أي عيب مصنعي أو تلف ناتج عن الشحن أو منتج غير مطابق لطلبكِ، نتحمل تكاليف الشحن كاملة ذهاباً وإياباً.",
      icon: Truck,
      color: "text-[#2D6A4F]",
      bg: "bg-[#E8F4ED]",
      border: "border-[#9FC8A1]/50"
    },
    {
      title: "استرداد مالي سريع ومباشر",
      desc: "في حالة إرجاع الطلب المعتمد، يتم رد كامل المبلغ نقداً عبر المندوب أو من خلال المحافظ الإلكترونية فور استلام المنتج وفحصه.",
      icon: RotateCcw,
      color: "text-[#7A273D]",
      bg: "bg-[#FDE8EC]",
      border: "border-[#F3B6C3]"
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
            سياسة <span className="text-[#2D6A4F]">الاسترجاع والاستبدال</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C5652] font-medium leading-relaxed">
            في متجر لكي ولأسرتك، نضع رضاكِ وسلامتكِ على رأس أولوياتنا. إليكِ جميع الشروط المنظمة لعمليات الاستلام والمعاينة والاسترجاع بكل شفافية.
          </p>
        </div>

        {/* كروت الضمانات الأربعة */}
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

        {/* تفاصيل وشروط الاستبدال والاسترجاع */}
        <div className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-[#EADFD5] shadow-sm mb-12 text-right">
          
          <div className="space-y-2 border-b border-[#EADFD5] pb-5">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#2D6A4F]" />
              <span>شروط قبول طلبات الاسترجاع والاستبدال</span>
            </h3>
            <ul className="text-xs sm:text-sm text-[#5C5652] space-y-2 pt-2 leading-relaxed pr-6 list-disc">
              <li>أن يكون المنتج في حالته الأصلية ولم يتم فتحه أو إزالة غلاف الأمان أو ملصق الحماية الشفاف.</li>
              <li>نظراً لطبيعة مستحضرات التجميل والعناية الشخصية وحرصاً على الصحة العامة، لا يمكن استرجاع أو استبدال العبوات المفتوحة أو المستخدمة إلا إذا ثبت وجود عيب مصنعي في العبوة نفسها.</li>
              <li>وجود فاتورة الطلب أو رقم الطلب المسجل على شحنة التوصيل للتأكد من بيانات الشراء.</li>
            </ul>
          </div>

          <div className="space-y-2 border-b border-[#EADFD5] pb-5">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <AlertCircle size={20} className="text-[#A67C5B]" />
              <span>تكاليف ورسوم الشحن</span>
            </h3>
            <ul className="text-xs sm:text-sm text-[#5C5652] space-y-2 pt-2 leading-relaxed pr-6 list-disc">
              <li>في حالة وصول منتج خاطئ أو تالف نتيجة الشحن، يتحمل المتجر كافة مصاريف استبدال الشحنة دون أي تكلفة إضافية على العميل.</li>
              <li>في حالة رغبة العميل في استبدال المنتج دون وجود أي عيب مصنعي (تغيير الرأي مع بقاء المنتج مغلقاً بتغليفه الأصلي)، يتحمل العميل فقط رسوم شركة الشحن للتوصيل الجديد.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-black text-[#2E332F] flex items-center gap-2">
              <RotateCcw size={20} className="text-[#2D6A4F]" />
              <span>خطوات تقديم طلب استرجاع أو استبدال</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5652] leading-relaxed pt-1">
              تواصلي مباشرة مع خدمة العملاء عبر واتساب وأرسلي رقم الهاتف المسجل به الطلب مع صورة واضحة للشحنة، وسيتم مراجعة الطلب وترتيب زيارة المندوب خلال 48 ساعة عمل.
            </p>
          </div>

        </div>

        {/* بنر التواصل الفوري عبر واتساب للشكاوى والطلبات */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2D6A4F] to-[#407B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#2D6A4F]/20">
          <div className="space-y-1 text-right">
            <h4 className="text-lg sm:text-xl font-black">هل لديكِ أي استفسار حول شحنتك؟</h4>
            <p className="text-xs sm:text-sm text-white/90 font-medium">فريق خدمة العملاء متواجد على مدار اليوم لمساعدتك وتسهيل إجراءاتك.</p>
          </div>

          <a
            href="https://wa.me/201025484524?text=مرحباً،%20لدي%20استفسار%20بخصوص%20سياسة%20الاسترجاع%20والاستبدال"
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

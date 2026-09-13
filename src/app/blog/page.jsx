"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Clock, ArrowLeft, BookOpen, CheckCircle2, ShoppingBag, X } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: "all", label: "جميع المقالات" },
    { id: "hair", label: "العناية بالشعر" },
    { id: "skin", label: "نضارة وتفتيح البشرة" },
    { id: "routine", label: "أسرار الروتين اليومي" },
  ];

  const articles = [
    {
      id: 1,
      category: "hair",
      title: "دليلك الشامل لعلاج هيشان الشعر وترميمه من الجذور",
      excerpt: "اكتشفي الأسباب الخفية وراء تلف بصيلات الشعر وكيف تعيد الزيوت الطبيعية وزبدة الشيا الحيوية والمرونة لشعرك المجهد.",
      readTime: "3 دقائق قراءة",
      date: "سبتمبر 2026",
      tag: "ترميم وتكثيف",
      productName: "ماسك وترميم Hair Therapy",
      productLink: "/#products",
      content: [
        "جفاف الشعر الشديد والتقصف ينتج غالباً عن استخدام مياه غير مفلترة أو حرارة مجففات الشعر دون حماية كافية.",
        "استخدام تركيبة مركزة بزيت الأركان المغربي يغلف ساق الشعرة بطبقة حماية تمنع فقدان الرطوبة الطبيعية.",
        "خطوات الروتين الموصى بها: وزعي الماسك على أطراف الشعر بعد الشامبو لمدة 10 دقائق، ثم اشطفيه بماء فاتر فقط لغلق المسام.",
        "النتيجة: اختفاء الهيشان بنسبة 85% من أول أسبوع وزيادة واضحة في مرونة ولمعان الشعر."
      ]
    },
    {
      id: 2,
      category: "skin",
      title: "الفرق بين حمض الهيالورونيك وفيتامين C في روتين النضارة",
      excerpt: "متى تستخدمين كل سيروم؟ وكيف تدمجين الاثنين معاً لتوحيد لون البشرة وملء الخطوط التعبيرية بأمان.",
      readTime: "4 دقائق قراءة",
      date: "سبتمبر 2026",
      tag: "تفتيح وترطيب",
      productName: "سيروم الهيالورونيك + فيتامين C",
      productLink: "/#products",
      content: [
        "فيتامين C مضاد أكسدة قوي يُفضل استخدامه في الروتين الصباحي لحماية خلايا الجلد من التأكسد وتفتيح التصبغات الناتجة عن الشمس.",
        "حمض الهيالورونيك يعمل كمغناطيس للماء؛ حيث يحتفظ بألف ضعف وزنه ماء داخل أنسجة البشرة ليمنحها مظهراً ممتلئاً وندياً.",
        "طريقة التطبيق المثالية: سيروم فيتامين C صباحاً يليه واقي الشمس، وسيروم الهيالورونيك مساءً على بشرة رطبة قليلاً قبل كريم الترطيب.",
        "النتيجة: بشرة مشدودة، تفتيح آمن للبقع الداكنة، وإشراقة طبيعية تدوم طوال اليوم."
      ]
    },
    {
      id: 3,
      category: "routine",
      title: "بديل مزيلات العرق الكيميائية: كيف تحمين بشرتك بأمان؟",
      excerpt: "لماذا تسبب مزيلات العرق التجارية اسمراراً والتهابات تحت الإبط؟ والحل الطبيعي البديل برائحة المسك النقي.",
      readTime: "2 دقيقة قراءة",
      date: "سبتمبر 2026",
      tag: "عناية طبيعية",
      productName: "بودرة Rai Fly الطبيعية",
      productLink: "/#products",
      content: [
        "تحتوي معظم المزيلات الصناعية على أملاح الألومنيوم التي تغلق المسام بالقوة، مما يسبب التهابات تحت الجلد وتصبغات داكنة عنيدة.",
        "الحل الطبيعي يكمن في البودرة الماصة للعرق والمطهرة المستخلصة من الأعشاب والمسك الأبيض الأصلي.",
        "تسمح التركيبة الطبيعية للبشرة بالتنفس دون حبس السموم، مع القضاء التام على البكتيريا المسببة للرائحة لمدة 48 ساعة.",
        "النتيجة: تفتيح تدريجي للمنطقة، جفاف مريح، ورائحة نظافة هادئة وراقية."
      ]
    },
    {
      id: 4,
      category: "skin",
      title: "تنظيف المسام دون جفاف: سر الغسول الرغوي بالفرشاة السيليكون",
      excerpt: "كيف تضمنين إزالة بقايا المكياج والدهون المتراكمة في المسام مع الحفاظ على حاجز البشرة الواقي دون تحسس.",
      readTime: "3 دقائق قراءة",
      date: "سبتمبر 2026",
      tag: "تنظيف عميق",
      productName: "غسول Rai Derma الرغوي",
      productLink: "/#products",
      content: [
        "الفرك القوي للوجه بالأيدي يوزع البكتيريا ويهيج المسام، بينما توفر الفرشاة السيليكونية تدليكاً لطيفاً ينشط الدورة الدموية.",
        "الرغوة الخفيفة الغنية بمستخلصات الأعشاب تذيب الدهون الزائدة وتفكك الرؤوس السوداء دون تجريد البشرة من طبقة الحماية.",
        "نصيحة الاستخدام: تدليك خفيف بحركات دائرية لمدة 60 ثانية مرتين يومياً.",
        "النتيجة: مسام نقية، مظهر نضر بدون لمعان دهني مزعج، وتجهيز البشرة لامتصاص السيروم."
      ]
    }
  ];

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDF7F3] text-[#2E332F] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ترويسة المدونة */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E8F4ED] border border-[#9FC8A1]/60 text-[#224A32] rounded-full text-xs font-black shadow-2xs">
            <BookOpen size={13} className="text-[#2D6A4F]" />
            <span>مدونة لكي ولأسرتك للجمال الطبيعي</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E332F] tracking-tight">
            نصائح وأسرار <span className="text-[#2D6A4F]">العناية الصحيحة</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5C5652] font-medium leading-relaxed">
            مقالات عملية ومبسطة تساعدك على بناء روتين عناية شخصي متكامل لشعر أكثر صحة وبشرة نضرة ومشرقة.
          </p>

          {/* تبويبات التصنيف */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#2D6A4F] text-white shadow-md shadow-[#2D6A4F]/20"
                    : "bg-white text-[#5C5652] border border-[#EADFD5] hover:border-[#2D6A4F]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة المقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl border border-[#EADFD5] p-6 sm:p-8 flex flex-col justify-between hover:border-[#9FC8A1] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#8C644B]">
                  <span className="bg-[#FAF6F3] border border-[#EADFD5] px-3 py-1 rounded-full text-[#2D6A4F] font-black">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-black text-[#2E332F] group-hover:text-[#2D6A4F] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm text-[#5C5652] leading-relaxed font-medium">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EADFD5] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-black text-[#2D6A4F] hover:text-[#1B4332] flex items-center gap-1 cursor-pointer group-hover:translate-x-[-2px] transition-transform"
                >
                  <span>اقرئي المقال بالكامل</span>
                  <ArrowLeft size={14} />
                </button>

                <span className="text-[11px] text-[#A67C5B] font-bold">{article.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* بنر العودة للمتجر والتسوق */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#2D6A4F] to-[#407B5E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#2D6A4F]/20">
          <div className="space-y-1 text-right">
            <h3 className="text-xl sm:text-2xl font-black">جاهزة لتبدئي روتينك الفعلي؟</h3>
            <p className="text-xs sm:text-sm text-white/90 font-medium">تصفحي جميع تركيبات ريحانة وكافيلو الأصلية المتوفرة بالمتجر اليوم.</p>
          </div>
          <Link
            href="/#products"
            className="px-7 py-3.5 bg-white text-[#2D6A4F] hover:bg-[#FAF6F3] font-black text-xs rounded-2xl shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            تسوقي المنتجات الآن ←
          </Link>
        </div>

      </div>

      {/* نافذة قراءة المقال التفصيلي */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#EADFD5] max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 left-5 p-2 bg-[#FAF6F3] hover:bg-[#EADFD5] text-[#2E332F] rounded-full transition cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-5 text-right">
              <span className="inline-block bg-[#E8F4ED] text-[#2D6A4F] border border-[#9FC8A1]/50 text-xs font-black px-3 py-1 rounded-full">
                {selectedArticle.tag}
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-[#2E332F] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="p-4 bg-[#FAF6F3] rounded-2xl border border-[#EADFD5] flex items-center justify-between text-xs font-bold text-[#8C644B]">
                <span>{selectedArticle.readTime}</span>
                <span>تاريخ النشر: {selectedArticle.date}</span>
              </div>

              <div className="space-y-3 pt-2">
                {selectedArticle.content.map((paragraph, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[#2D6A4F] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#4B4B4B] leading-relaxed font-medium">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* بطاقة المنتج المرتبط بالمقال */}
              <div className="pt-4 mt-4 border-t border-[#EADFD5] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF6F3] p-4 rounded-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D6A4F] border border-[#EADFD5]">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#8C644B] font-bold">المنتج المرشح في المقال:</span>
                    <span className="text-sm font-black text-[#2E332F]">{selectedArticle.productName}</span>
                  </div>
                </div>

                <Link
                  href={selectedArticle.productLink}
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-black rounded-xl transition text-center"
                >
                  اطلبي المنتج الآن
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

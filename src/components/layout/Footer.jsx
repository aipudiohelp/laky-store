export default function Footer() {
  return (
    <footer id="footer" className="bg-[#FDF7F3] border-t border-[#EADFD5] pt-10 pb-8 text-[#4B4B4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EADFD5]">
          
          {/* هوية المتجر واللوجو */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#6B8F7A] text-[#FDF7F3] rounded-full flex items-center justify-center font-bold text-lg shadow-xs">
              🌱
            </div>
            <div>
              <span className="text-xl font-bold text-[#4B4B4B] block leading-tight">لكي ولأسرتك</span>
              <span className="text-xs text-[#A67C5B] font-bold">عناية أفضل .. لحياة أجمل</span>
            </div>
          </div>

          {/* روابط التصفح والمعلومات */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#4B4B4B]/80">
            <a href="#" className="hover:text-[#6B8F7A] transition">من نحن</a>
            <a href="#" className="hover:text-[#6B8F7A] transition">المدونة</a>
            <a href="#" className="hover:text-[#6B8F7A] transition">الأسئلة الشائعة</a>
            <a href="#" className="hover:text-[#6B8F7A] transition">سياسة الصيانة والاستبدال</a>
            <a href="#" className="hover:text-[#6B8F7A] transition">تواصل معنا</a>
          </div>

          {/* قنوات التواصل الاجتماعي بهوية موحدة وغير مشبعة */}
          <div className="flex items-center gap-4 text-xs font-bold text-[#A67C5B]">
            <span className="hover:text-[#6B8F7A] cursor-pointer transition">Instagram</span>
            <span className="hover:text-[#6B8F7A] cursor-pointer transition">TikTok</span>
            <span className="hover:text-[#6B8F7A] cursor-pointer transition">Facebook</span>
            <span className="hover:text-[#6B8F7A] cursor-pointer transition">YouTube</span>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="pt-6 text-center text-xs text-[#A67C5B] font-medium">
          © {new Date().getFullYear()} لكي ولأسرتك - جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}

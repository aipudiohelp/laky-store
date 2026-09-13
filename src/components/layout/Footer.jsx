"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#FDF7F3] border-t border-[#EADFD5] pt-10 pb-8 text-[#2E332F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EADFD5]">
          
          {/* هوية المتجر واللوجو الرسمي */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#EADFD5] shadow-xs overflow-hidden shrink-0">
              <img
                src="/images/logo.png"
                alt="شعار لكي ولأسرتك"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }
                }}
              />
              <div className="w-full h-full bg-[#2D6A4F] text-[#FDF7F3] rounded-full hidden items-center justify-center text-lg font-black">
                🌱
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-[#2E332F] block leading-tight">لكي ولأسرتك</span>
              <span className="text-xs text-[#8C644B] font-bold mt-0.5 block">عناية أفضل .. لحياة أجمل</span>
            </div>
          </Link>

          {/* روابط التصفح والمعلومات */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-bold text-[#4B4B4B]">
            <Link href="/about" className="hover:text-[#2D6A4F] transition">من نحن</Link>
            <Link href="/blog" className="hover:text-[#2D6A4F] transition">المدونة</Link>
            <Link href="/faq" className="hover:text-[#2D6A4F] transition">الأسئلة الشائعة</Link>
            <Link href="/policy" className="hover:text-[#2D6A4F] transition">سياسة الاسترجاع والاستبدال</Link>
            <a
              href="https://wa.me/201025484524?text=مرحباً،%20أود%20التواصل%20مع%20خدمة%20العملاء"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2D6A4F] transition flex items-center gap-1"
            >
              <MessageCircle size={14} className="text-[#2D6A4F]" />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* منصة التواصل الوحيدة: رابط صفحة فيسبوك الرسمية */}
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/share/1C64rkrimr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#EADFD5] rounded-full text-xs font-black text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200 shadow-2xs group"
            >
              <span>تابعينا على فيسبوك</span>
              <span className="text-sm group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="pt-6 text-center text-xs text-[#8C644B] font-semibold">
          © 2026 لكي ولأسرتك - جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}

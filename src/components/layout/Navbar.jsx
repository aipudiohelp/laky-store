"use client";
import { useState } from "react";
import { ShoppingBag, Search, HelpCircle, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const { cartItems, openQuizModal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDF7F3]/95 backdrop-blur-md border-b border-[#EADFD5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* اللوجو والعلامة التجارية */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 bg-[#6B8F7A] text-[#FDF7F3] rounded-full flex items-center justify-center shadow-xs text-xl">
            🌱
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#4B4B4B] tracking-tight leading-tight">لكي ولأسرتك</span>
            <span className="text-xs text-[#A67C5B] font-bold tracking-wide">عناية أفضل .. لحياة أجمل</span>
          </div>
        </a>

        {/* روابط التنقل الرئيسية */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#4B4B4B]">
          <a href="#" className="text-[#6B8F7A] transition">الرئيسية</a>
          <a href="#products" className="hover:text-[#6B8F7A] transition">المنتجات</a>
          <a href="#categories" className="hover:text-[#6B8F7A] transition">روتين العناية</a>
          <button
            type="button"
            onClick={openQuizModal}
            className="text-[#A67C5B] hover:text-[#8C6546] transition flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <HelpCircle size={16} />
            <span>ساعدني أختار</span>
          </button>
          <a href="#about" className="hover:text-[#6B8F7A] transition">من نحن</a>
          <a href="#footer" className="hover:text-[#6B8F7A] transition">تواصل معنا</a>
        </nav>

        {/* حقل البحث والسلة بالهوية الجديدة */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center relative w-56 md:w-64">
            <input
              type="text"
              placeholder="ابحثي عن منتجك..."
              className="w-full pl-3 pr-9 py-2 bg-white border border-[#EADFD5] rounded-full text-xs text-[#4B4B4B] placeholder:text-[#A67C5B]/60 focus:border-[#6B8F7A] focus:outline-none transition"
            />
            <Search size={16} className="absolute right-3 text-[#A67C5B]/70 pointer-events-none" />
          </div>

          <div className="relative p-2.5 bg-white rounded-full border border-[#EADFD5]">
            <ShoppingBag size={20} className="text-[#4B4B4B]" />
            <span className="absolute -top-1 -right-1 bg-[#A67C5B] text-[#FDF7F3] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {cartItems.length}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4B4B4B] rounded-xl hover:bg-white border border-[#EADFD5] transition"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDF7F3] border-b border-[#EADFD5] px-6 py-4 space-y-3 font-bold text-sm text-[#4B4B4B]">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#6B8F7A]">الرئيسية</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#6B8F7A] transition">المنتجات</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#6B8F7A] transition">روتين العناية</a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openQuizModal();
            }}
            className="w-full text-right py-2 text-[#A67C5B] flex items-center gap-1.5"
          >
            <HelpCircle size={16} />
            <span>ساعدني أختار (اختبار الروتين)</span>
          </button>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#6B8F7A] transition">من نحن</a>
          <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#6B8F7A] transition">تواصل معنا</a>
        </div>
      )}
    </header>
  );
}

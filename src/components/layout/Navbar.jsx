"use client";
import { useState } from "react";
import { ShoppingBag, Search, HelpCircle, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const { cartItems, openQuizModal } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* اللوجو والعلامة التجارية */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-800 to-green-900 rounded-full flex items-center justify-center shadow-md text-white font-black text-xl">
            🌱
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-gray-900 tracking-tight leading-tight">لكي ولأسرتك</span>
            <span className="text-xs text-emerald-800 font-bold tracking-wide">عناية أفضل .. لحياة أجمل</span>
          </div>
        </a>

        {/* روابط التنقل الرئيسية */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-gray-700">
          <a href="#" className="text-brand-green hover:text-brand-greenHover transition">الرئيسية</a>
          <a href="#products" className="hover:text-brand-green transition">المنتجات</a>
          <a href="#categories" className="hover:text-brand-green transition">روتين العناية</a>
          <button onClick={openQuizModal} className="text-emerald-700 hover:text-emerald-900 transition flex items-center gap-1">
            <HelpCircle size={16} />
            ساعدني أختار
          </button>
          <a href="#about" className="hover:text-brand-green transition">من نحن</a>
          <a href="#footer" className="hover:text-brand-green transition">تواصل معنا</a>
        </nav>

        {/* حقل البحث والسلة السريعة */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center relative w-56 md:w-64">
            <input
              type="text"
              placeholder="ابحث عن منتج أو احتياجك..."
              className="w-full pl-3 pr-9 py-2 bg-gray-100/80 border border-transparent rounded-full text-xs focus:bg-white focus:border-brand-green focus:outline-none transition"
            />
            <Search size={16} className="absolute right-3 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative p-2 bg-gray-50 rounded-full border border-gray-200">
            <ShoppingBag size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 font-semibold text-sm">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-green">الرئيسية</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">المنتجات</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">روتين العناية</a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openQuizModal();
            }}
            className="w-full text-right py-2 text-emerald-800 font-bold flex items-center gap-1.5"
          >
            <HelpCircle size={16} />
            ساعدني أختار (اختبار الروتين)
          </button>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">من نحن</a>
          <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">تواصل معنا</a>
        </div>
      )}
    </header>
  );
}

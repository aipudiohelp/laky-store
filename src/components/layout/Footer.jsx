import { ShieldCheck, Truck, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-100 pt-10 pb-8 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-800 text-white rounded-full flex items-center justify-center font-bold">
              🌱
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 block">لكي ولأسرتك</span>
              <span className="text-xs text-gray-500">عناية أفضل .. لحياة أجمل</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-600">
            <a href="#" className="hover:text-brand-green transition">من نحن</a>
            <a href="#" className="hover:text-brand-green transition">المدونة</a>
            <a href="#" className="hover:text-brand-green transition">الأسئلة الشائعة</a>
            <a href="#" className="hover:text-brand-green transition">سياسة الصيانة والاستبدال</a>
            <a href="#" className="hover:text-brand-green transition">تواصل معنا</a>
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="hover:text-pink-600 cursor-pointer transition">Instagram</span>
            <span className="hover:text-red-600 cursor-pointer transition">YouTube</span>
            <span className="hover:text-black cursor-pointer transition">TikTok</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Facebook</span>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-gray-400 font-medium">
          © {new Date().getFullYear()} لكي ولأسرتك - جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}

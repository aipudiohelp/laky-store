"use client";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { generateWhatsAppLink, formatPrice } from "@/lib/utils";
import { X, ShieldCheck, Truck, MessageCircle, AlertCircle, ShoppingBag } from "lucide-react";

export default function QuickOrderModal() {
  const { isOpen, modalType, selectedProduct, closeModal } = useModal();
  const [formData, setFormData] = useState({ fullName: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || modalType !== "order" || !selectedProduct) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };

  const handleSubmitAndRedirect = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrorMsg("يرجى ملء الاسم ورقم الهاتف والعنوان لتجهيز شحنتك فوراً.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    // إنشاء رابط محادثة واتساب متضمناً كافة البيانات
    const whatsAppUrl = generateWhatsAppLink({
      productName: selectedProduct.name,
      price: selectedProduct.price,
      customerName: formData.fullName,
      customerPhone: formData.phone,
      customerAddress: formData.address,
    });

    try {
      // تسجيل نسخة من الطلب في السيرفر دون تعطيل العميل
      fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: selectedProduct,
          quantity: 1,
        }),
      }).catch((err) => console.error("Background sync error:", err));
    } catch (err) {
      // استمرار التحويل حتى لو حدث خطأ في الخادم
    }

    // التحويل الفوري إلى تطبيق واتساب
    setTimeout(() => {
      window.location.href = whatsAppUrl;
      setLoading(false);
      closeModal();
    }, 400);
  };

  const isCavillo = selectedProduct.brand === "cavillo";
  const btnBg = isCavillo ? "bg-cavillo-main hover:bg-cavillo-hover" : "bg-raihanna-main hover:bg-raihanna-hover";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={closeModal}
          className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8 space-y-5">
          {/* بطاقة تعريف المنتج المختار */}
          <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl p-2 border border-gray-100 flex items-center justify-center shrink-0">
              <ShoppingBag className={isCavillo ? "text-cavillo-main" : "text-raihanna-main"} size={30} />
            </div>
            <div>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isCavillo ? "bg-cavillo-tag text-cavillo-main" : "bg-raihanna-tag text-raihanna-main"}`}>
                {isCavillo ? "كافيلو Cavillo" : "ريحانة Raihanna"}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">{selectedProduct.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-black text-brand-green">{formatPrice(selectedProduct.price)}</span>
                {selectedProduct.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                )}
              </div>
            </div>
          </div>

          {/* شريط الثقة السريع */}
          <div className="bg-emerald-50/70 border border-emerald-100 p-2.5 rounded-2xl flex items-center justify-between text-xs text-emerald-800 font-medium">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> أصلي ومضمون 100%</span>
            <span className="flex items-center gap-1.5"><Truck size={16} /> دفع عند الاستلام والمعاينة</span>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-xs font-semibold border border-red-100">
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* نموذج الإدخال السريع */}
          <form onSubmit={handleSubmitAndRedirect} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">الاسم الكامل *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="اكتبي اسمك الثلاثي"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف (للتوصيل والتواصل) *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="010XXXXXXXX"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">العنوان بالتفصيل *</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="المحافظة - المدينة - اسم الشارع ورقم العقار"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 text-sm ${btnBg} disabled:opacity-50`}
              >
                <MessageCircle size={20} />
                <span>{loading ? "جاري تحويل طلبك للواتساب..." : "تأكيد الطلب فوراً عبر واتساب"}</span>
              </button>
              <p className="text-[11px] text-center text-gray-400 font-medium mt-2">
                ⚡ ستفتح معك محادثة واتساب مباشرة بتفاصيل طلبك لتأكيد الشحن فوراً.
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

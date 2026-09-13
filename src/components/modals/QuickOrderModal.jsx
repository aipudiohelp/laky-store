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
    }, 350);
  };

  const isCavillo = selectedProduct.brand === "cavillo";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4B4B4B]/50 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FDF7F3] rounded-3xl shadow-2xl overflow-hidden border border-[#EADFD5] max-h-[92vh] overflow-y-auto">
        
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 left-4 p-2 text-[#4B4B4B] hover:bg-white bg-[#EADFD5]/60 rounded-full transition-colors z-10 cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="p-6 md:p-8 space-y-5">
          {/* بطاقة تعريف المنتج المختار */}
          <div className="flex items-center gap-4 pb-4 border-b border-[#EADFD5]">
            <div className="w-16 h-16 bg-white rounded-2xl p-2 border border-[#EADFD5] flex items-center justify-center shrink-0">
              <ShoppingBag className="text-[#6B8F7A]" size={28} />
            </div>
            <div>
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${isCavillo ? "bg-[#F8D7DC] text-[#4B4B4B]" : "bg-[#C8E0C9]/70 text-[#4B4B4B]"}`}>
                {isCavillo ? "كافيلو Cavillo" : "ريحانة Raihanna"}
              </span>
              <h3 className="text-lg font-bold text-[#4B4B4B] mt-1">{selectedProduct.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-black text-[#4B4B4B]">{formatPrice(selectedProduct.price)}</span>
                {selectedProduct.originalPrice && (
                  <span className="text-xs text-[#A67C5B] line-through font-semibold">{formatPrice(selectedProduct.originalPrice)}</span>
                )}
              </div>
            </div>
          </div>

          {/* شريط الثقة السريع */}
          <div className="bg-[#C8E0C9]/40 border border-[#C8E0C9] p-2.5 rounded-2xl flex items-center justify-between text-xs text-[#4B4B4B] font-bold">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-[#6B8F7A]" /> أصلي ومضمون 100%</span>
            <span className="flex items-center gap-1.5"><Truck size={16} className="text-[#6B8F7A]" /> دفع عند الاستلام والمعاينة</span>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-3 bg-[#F8D7DC] text-[#4B4B4B] rounded-xl text-xs font-bold border border-[#EADFD5]">
              <AlertCircle size={16} className="text-[#A67C5B]" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* نموذج الإدخال السريع */}
          <form onSubmit={handleSubmitAndRedirect} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#4B4B4B] mb-1">الاسم الكامل *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="اكتبي اسمك الثلاثي"
                className="w-full px-4 py-3 bg-white border border-[#EADFD5] rounded-xl text-sm text-[#4B4B4B] placeholder:text-[#A67C5B]/50 focus:outline-none focus:border-[#6B8F7A] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#4B4B4B] mb-1">رقم الهاتف (للتوصيل والتواصل) *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="010XXXXXXXX"
                className="w-full px-4 py-3 bg-white border border-[#EADFD5] rounded-xl text-sm text-[#4B4B4B] placeholder:text-[#A67C5B]/50 focus:outline-none focus:border-[#6B8F7A] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#4B4B4B] mb-1">العنوان بالتفصيل *</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="المحافظة - المدينة - اسم الشارع ورقم العقار"
                className="w-full px-4 py-3 bg-white border border-[#EADFD5] rounded-xl text-sm text-[#4B4B4B] placeholder:text-[#A67C5B]/50 focus:outline-none focus:border-[#6B8F7A] transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#6B8F7A] hover:bg-[#557463] text-[#FDF7F3] font-bold rounded-2xl shadow-lg shadow-[#6B8F7A]/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-sm cursor-pointer disabled:opacity-50"
              >
                <MessageCircle size={20} />
                <span>{loading ? "جاري تحويل طلبك للواتساب..." : "تأكيد الطلب فوراً عبر واتساب"}</span>
              </button>
              <p className="text-[11px] text-center text-[#A67C5B] font-semibold mt-2">
                ⚡ ستفتح معك محادثة واتساب مباشرة بتفاصيل طلبك لتأكيد الشحن فوراً.
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { generateWhatsAppLink, formatPrice } from "@/lib/utils";
import { X, CheckCircle, ShieldCheck, Truck, MessageCircle, AlertCircle, ShoppingBag } from "lucide-react";

export default function QuickOrderModal() {
  const { isOpen, modalType, selectedProduct, closeModal } = useModal();
  const [formData, setFormData] = useState({ fullName: "", phone: "", address: "", notes: "" });
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || modalType !== "order" || !selectedProduct) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };

  const handleCodSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrorMsg("يرجى ملء الاسم، رقم الهاتف، والعنوان لإرسال الشحنة فوراً.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: selectedProduct,
          quantity: 1,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setOrderId(data.orderId);
        setOrderSuccess(true);
      } else {
        setErrorMsg(data.error || "حدث خطأ، يرجى المحاولة مرة أخرى.");
      }
    } catch (err) {
      setErrorMsg("تعذر الاتصال بالخادم، يرجى الطلب عبر واتساب.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppOrder = () => {
    const link = generateWhatsAppLink({
      productName: selectedProduct.name,
      price: selectedProduct.price,
      customerName: formData.fullName,
      customerAddress: formData.address,
    });
    window.open(link, "_blank");
  };

  const isCavillo = selectedProduct.brand === "cavillo";
  const accentColor = isCavillo ? "bg-cavillo-main hover:bg-cavillo-hover" : "bg-raihanna-main hover:bg-raihanna-hover";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {orderSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={38} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">تم تسجيل طلبك بنجاح!</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              رقم طلبك: <span className="font-bold text-gray-900">{orderId}</span>.<br />
              سيتواصل معك فريق التأكيد هاتفياً لتجهيز الشحن إلى عنوانك مباشرة. الدفع بالكامل عند الاستلام والمعاينة.
            </p>
            <button
              onClick={() => {
                setOrderSuccess(false);
                closeModal();
              }}
              className="w-full py-3.5 bg-brand-green text-white font-bold rounded-2xl hover:bg-brand-greenHover transition shadow-md"
            >
              متابعة التسوق
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl p-2 border border-gray-100 flex items-center justify-center shrink-0">
                <ShoppingBag className={isCavillo ? "text-cavillo-main" : "text-raihanna-main"} size={32} />
              </div>
              <div>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isCavillo ? "bg-cavillo-tag text-cavillo-main" : "bg-raihanna-tag text-raihanna-main"}`}>
                  {selectedProduct.brand === "cavillo" ? "كافيلو Cavillo" : "ريحانة Raihanna"}
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

            <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-2xl flex items-center justify-between text-xs text-emerald-800 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> أصلي ومضمون 100%</span>
              <span className="flex items-center gap-1.5"><Truck size={16} /> شحن سريع لجميع المحافظات</span>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-xs font-semibold border border-red-100">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleCodSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">الاسم الكامل *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="اكتبي اسمك الثلاثي"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف (للتوصيل) *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010XXXXXXXX"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">العنوان التفصيلي بالتحديد *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="المحافظة - المنطقة - اسم الشارع ورقم العمارة"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${accentColor} disabled:opacity-50`}
                >
                  {loading ? "جاري تسجيل الطلب..." : "تأكيد الطلب الآن (الدفع عند الاستلام)"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <MessageCircle size={18} />
                  أو اطلبي مباشرة عبر واتساب بنقرة واحدة
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

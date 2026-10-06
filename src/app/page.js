import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import BrandSection from "@/components/home/BrandSection";
import QuizBanner from "@/components/home/QuizBanner";
import TrustBar from "@/components/home/TrustBar";
import QuickOrderModal from "@/components/modals/QuickOrderModal";
import QuizModal from "@/components/modals/QuizModal";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { products } from "@/data/products";

export default function Home() {
  const raihannaProducts = products.filter((p) => p.brand === "raihanna");

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* الهيدر العلوي */}
      <Navbar />

      {/* قسم الهيرو وجذب الانتباه */}
      <HeroSection />

      {/* شبكة الأقسام الأربعة */}
      <CategoryGrid />

      {/* قسم منتجات ريحانة الحصري */}
      <div id="products">
        <BrandSection
          brand="raihanna"
          logoText="Raihanna"
          title="منتجات ريحانة المختارة"
          subtitle="تركيبات طبيعية فاخرة .. لشعر أكثر حيوية وبشرة تشع إشراقاً وجمالاً"
          products={raihannaProducts}
        />
      </div>

      {/* بنر الاختبار السريع: مش عارفة تختاري؟ */}
      <QuizBanner />

      {/* شريط الأمان والثقة الأربعة */}
      <TrustBar />

      {/* التذييل */}
      <Footer />

      {/* النوافذ المنبثقة للطلب والاختبار السريع */}
      <QuickOrderModal />
      <QuizModal />

      {/* زر الواتساب العائم المباشر */}
      <FloatingWhatsApp />
    </main>
  );
}

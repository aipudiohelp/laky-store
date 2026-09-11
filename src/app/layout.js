import "./globals.css";
import { CartProvider } from "@/hooks/useCart";

export const metadata = {
  title: "لكي ولأسرتك | عناية أفضل .. لحياة أجمل",
  description: "منتجات مختارة بعناية من ريحانة وكافيلو لتساعدك على روتين العناية المناسب لك ولأسرتك. تسوق آمن ودفع عند الاستلام.",
  keywords: "ريحانة, كافيلو, منتجات عناية, عناية بالبشرة, عناية بالشعر, لكي ولأسرتك",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased selection:bg-brand-green selection:text-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

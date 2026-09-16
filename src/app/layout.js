import "./globals.css";
import { CartProvider } from "@/hooks/useCart";
import Script from "next/script";

export const metadata = {
  title: "لكي ولأسرتك | عناية أفضل .. لحياة أجمل",
  description: "منتجات مختارة بعناية من ريحانة وكافيلو لتساعدك على روتين العناية المناسب لك ولأسرتك. تسوق آمن ودفع عند الاستلام.",
  keywords: "ريحانة, كافيلو, منتجات عناية, عناية بالبشرة, عناية بالشعر, لكي ولأسرتك",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yj3kzpb616");
          `}
        </Script>
      </head>
      <body className="antialiased selection:bg-brand-green selection:text-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

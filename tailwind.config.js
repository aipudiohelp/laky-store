/** @type {import('tailwind').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FDF7F3",        // أوف وايت / عاجي (الخلفية الرئيسية)
          dark: "#4B4B4B",      // الرمادي الداكن (النصوص والعناوين)
          green: "#6B8F7A",     // الأخضر الطبيعي الأساسي (الأزرار والروابط)
          greenDark: "#557463", // درجة Hover للأخضر
          sage: "#C8E0C9",      // الأخضر الطبيعي الفاتح (خلفيات ناعمة وشارات)
          brown: "#A67C5B",     // البني الدافئ (العناوين واللمسات الدافئة)
          brownDark: "#8C6546", // درجة Hover للبني
          gold: "#D4AF7C",      // الذهبي الهادئ (البادجات والعناصر المميزة)
          pink: "#F8D7DC",      // الوردي الهادئ (العناصر الجمالية والأزرار الثانوية)
          pinkHover: "#F2C2C9", // درجة Hover للوردي
          beige: "#EADFD5",     // البيج (الفواصل، الحدود والخلفيات الثانوية)
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

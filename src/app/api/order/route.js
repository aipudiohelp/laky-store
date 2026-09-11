import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, address, product, quantity = 1, notes } = body;

    if (!fullName || !phone || !address || !product) {
      return NextResponse.json(
        { error: "جميع الحقول الإلزامية مطلوبة (الاسم، الهاتف، العنوان، المنتج)" },
        { status: 400 }
      );
    }

    const orderData = {
      orderId: `ORD-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      customer: { fullName, phone, address },
      item: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity,
      },
      totalAmount: product.price * quantity,
      paymentMethod: "Cash On Delivery (COD)",
      notes: notes || "لا توجد ملاحظات إضافية",
    };

    // يمكن هنا إرسال البيانات فوراً إلى Telegram Bot أو Google Sheet أو CRM
    console.log("✅ New COD Order Received:", orderData);

    return NextResponse.json(
      {
        success: true,
        message: "تم تسجيل طلبك بنجاح! سيتواصل معك فريق خدمة العملاء لتأكيد الشحن.",
        orderId: orderData.orderId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Order Processing Error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة الطلب، يرجى المحاولة لاحقاً." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; name?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Dữ liệu không hợp lệ." },
      { status: 400 }
    );
  }

  const email = (body.email || "").trim();
  const name = (body.name || "").trim();

  if (!emailRe.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Email không hợp lệ." },
      { status: 422 }
    );
  }

  // Kết nối dữ liệu ra bên ngoài (tuỳ chọn):
  // Đặt biến môi trường EXTERNAL_WEBHOOK_URL (Google Apps Script / Formspree /
  // Zapier / Discord webhook...) để chuyển tiếp dữ liệu đăng ký.
  const webhook = process.env.EXTERNAL_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          source: "galaxy-ring-landing",
          at: new Date().toISOString(),
        }),
      });
    } catch {
      // Không chặn người dùng nếu webhook lỗi; vẫn coi như đăng ký thành công.
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Cảm ơn bạn! Chúng tôi sẽ gửi tin sớm nhất.",
  });
}

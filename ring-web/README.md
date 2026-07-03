# Galaxy Ring — Landing Page

Landing page giới thiệu sản phẩm **Samsung Galaxy Ring** theo phong cách
**storytelling / scrollytelling** tối giản, đơn sắc (lấy cảm hứng từ các site
award-winning như iyO trên Awwwards). Xây dựng bằng **Next.js 16 (App Router) +
TypeScript + Tailwind CSS v4 + Motion (Framer Motion)** — không dùng WebGL/3D
nặng để giữ hiệu năng cao.

## Tính năng

- **Thẩm mỹ đơn sắc (monochrome)**: nền gần đen `#0a0a0a`, typography lớn kiểu
  uppercase grotesk, nhiều khoảng trắng, đường kẻ mảnh, nhãn số kiểu editorial.
- **Hero**: wordmark khổng lồ "GALAXY RING" nằm sau sản phẩm nổi phía trước, có
  **parallax** khi cuộn.
- **Mask reveal**: chữ tiêu đề trượt lên từ sau lớp che (dùng `useInView`).
- **Marquee** chữ chạy vô tận (thuần CSS).
- **Custom cursor** (vanilla JS, `mix-blend-difference`, chỉ bật trên chuột).
- **Scrollytelling** (ảnh sticky crossfade Sáng → Ngày → Đêm) + fade-in-up.
- **Dark / Light mode** toggle (lưu `localStorage`, không nhấp nháy).
- **Micro-interactions**: hover, đổi màu titanium tương tác, spinner loading.
- **Form đăng ký** kết nối API (`/api/subscribe`), có thể forward ra webhook ngoài.
- **Video lazy-load** (chỉ tải & phát khi cuộn tới, có poster) — tối ưu hiệu năng.
- **SEO**: Meta title/description, Open Graph, Twitter Card, `sitemap.xml`,
  `robots.txt`.
- **Responsive** Desktop & Mobile; tôn trọng `prefers-reduced-motion`.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
```

Build production:

```bash
npm run build
npm start
```

## Cấu trúc

```
app/
  layout.tsx        # fonts, SEO metadata, theme init
  page.tsx          # lắp ráp các section
  globals.css       # design tokens, dark mode, utilities
  api/subscribe/    # route handler nhận đăng ký (kết nối webhook ngoài)
  robots.ts, sitemap.ts
components/          # Hero, Storytelling, Colors, Showcase, Specs, ...
lib/content.ts      # dữ liệu: features, specs, colors, stats
public/media/       # ảnh & video sản phẩm
```

## Kết nối dữ liệu ra bên ngoài

Form đăng ký POST tới `/api/subscribe`. Đặt biến môi trường
`EXTERNAL_WEBHOOK_URL` (xem `.env.example`) trỏ tới Google Apps Script /
Formspree / Zapier / Discord webhook để lưu email ra ngoài. Nếu để trống, form
vẫn chạy ở chế độ demo.

## Deploy (Vercel)

1. Push code lên GitHub.
2. Import repo vào [Vercel](https://vercel.com). **Root Directory** chọn thư mục
   `ring-web`.
3. (Tuỳ chọn) thêm biến môi trường `EXTERNAL_WEBHOOK_URL`.
4. Deploy.

## Ghi chú hiệu năng

- Ảnh dùng `next/image` (tự sinh WebP/AVIF, lazy-load, responsive `sizes`).
- **Video gốc khá nặng (10–21MB).** Nên nén lại bằng ffmpeg trước khi nộp để
  đạt điểm Lighthouse cao hơn, ví dụ:

  ```bash
  ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an output.mp4
  ```

## Bản quyền

Hình ảnh & video © Samsung Electronics — sử dụng cho mục đích học tập.

# Galaxy Ring — Landing Page

## Giới thiệu

Đây là trang landing page giới thiệu sản phẩm công nghệ **Samsung Galaxy Ring** —
một chiếc nhẫn thông minh theo dõi sức khoẻ. Dự án được xây dựng như một bài
thực hành xây dựng giao diện thương hiệu hiện đại: trình bày sản phẩm theo lối
kể chuyện khi cuộn trang (storytelling / scrollytelling), thẩm mỹ tối giản đơn
sắc, chuyển động mượt và tối ưu hiệu năng.

Phong cách thiết kế lấy cảm hứng từ các website award-winning (như iyO trên
Awwwards): bảng màu đơn sắc, typography khổ lớn kiểu uppercase, nhiều khoảng
trắng và chuyển động tinh tế theo thao tác cuộn. Toàn bộ hiệu ứng được làm bằng
CSS và thư viện animation nhẹ, không dùng WebGL/3D để giữ tốc độ tải cao.

## Công nghệ sử dụng

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) cho các animation theo cuộn và tương tác

## Các phần chính của trang

- **Hero**: wordmark "GALAXY RING" đặt bên trái, hình sản phẩm (nền trong suốt)
  nổi bên phải, đồng bộ với chế độ sáng/tối của trang.
- **Tính năng**: lưới các tính năng sức khoẻ nổi bật với biểu tượng và mô tả.
- **Trải nghiệm 24 giờ**: kể chuyện theo cuộn với ảnh sticky chuyển cảnh
  Sáng → Ngày → Đêm.
- **Chọn sắc thái**: xem ba màu titanium (Black, Silver, Gold), có nút chuyển
  ảnh trước/sau để xem nhiều góc của từng màu.
- **Chi tiết sản phẩm**: video minh hoạ (tải khi cuộn tới) kèm điểm nhấn.
- **Thông số kỹ thuật**: bảng thông số đầy đủ.
- **Đăng ký nhận tin**: form kết nối API, có thể chuyển tiếp dữ liệu ra webhook.

## Điểm kỹ thuật nổi bật

- **Dark / Light mode**: chuyển đổi và lưu lựa chọn trong `localStorage`, có
  script chạy trước khi vẽ để tránh nhấp nháy giao diện.
- **Responsive**: hiển thị tốt trên desktop và mobile; có menu dạng nút trên
  màn hình nhỏ, cuộn mượt tới từng section.
- **Hiệu ứng**: mask reveal cho tiêu đề, marquee chữ chạy vô tận (thuần CSS),
  con trỏ tuỳ biến trên thiết bị dùng chuột, fade-in-up khi cuộn.
- **Tối ưu hiệu năng**: ảnh dùng `next/image` (tự sinh WebP/AVIF, lazy-load),
  video chỉ tải và phát khi vào khung nhìn, tôn trọng `prefers-reduced-motion`.
- **SEO**: cấu hình đầy đủ thẻ meta (title, description), Open Graph, Twitter
  Card, cùng `sitemap.xml` và `robots.txt`.

## Chạy dự án

Mọi lệnh chạy trong thư mục `ring-web`.

```bash
npm install
npm run dev      # http://localhost:3000
```

Build và chạy bản production:

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
app/
  layout.tsx        # fonts, SEO metadata, khởi tạo theme
  page.tsx          # lắp ráp các section thành trang
  globals.css       # design tokens, dark mode, utilities
  api/subscribe/    # route handler nhận đăng ký (kết nối webhook ngoài)
  robots.ts, sitemap.ts
components/          # Hero, Navbar, Storytelling, Colors, Showcase, Specs, ...
lib/content.ts      # dữ liệu: features, specs, colors, stats
public/media/       # ảnh và video sản phẩm
```

## Kết nối dữ liệu ra bên ngoài

Form đăng ký gửi POST tới `/api/subscribe`. Đặt biến môi trường
`EXTERNAL_WEBHOOK_URL` (tham khảo `.env.example`) trỏ tới Google Apps Script,
Formspree, Zapier hoặc Discord webhook để lưu email ra ngoài. Nếu để trống,
form vẫn hoạt động ở chế độ demo.

## Triển khai (Vercel)

1. Đẩy mã nguồn lên GitHub.
2. Import repo vào Vercel, chọn **Root Directory** là thư mục `ring-web`.
3. (Tuỳ chọn) thêm biến môi trường `EXTERNAL_WEBHOOK_URL`.
4. Deploy.

## Ghi chú

- Video sản phẩm gốc khá nặng (khoảng 10–21MB). Nên nén lại trước khi triển khai
  để đạt điểm hiệu năng tốt hơn, ví dụ với ffmpeg:

  ```bash
  ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an output.mp4
  ```

## Bản quyền

Hình ảnh và video thuộc bản quyền Samsung Electronics, sử dụng cho mục đích
học tập.

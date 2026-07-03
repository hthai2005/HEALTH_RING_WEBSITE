export type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export const features: Feature[] = [
  {
    icon: "heart",
    title: "Nhịp tim & HRV",
    desc: "Cảm biến quang học theo dõi nhịp tim liên tục, lọc nhiễu chuyển động để cho kết quả chính xác cả ngày lẫn đêm.",
  },
  {
    icon: "moon",
    title: "Giấc ngủ sâu",
    desc: "Phân tích các giai đoạn ngủ, thời gian ngủ và phát hiện ngáy để bạn hiểu và cải thiện chất lượng nghỉ ngơi.",
  },
  {
    icon: "spark",
    title: "Energy Score",
    desc: "Galaxy AI tổng hợp dữ liệu sức khoẻ thành điểm năng lượng mỗi sáng, kèm gợi ý cá nhân hoá cho ngày mới.",
  },
  {
    icon: "drop",
    title: "SpO2 & Nhiệt độ da",
    desc: "Đo nồng độ oxy trong máu và theo dõi nhiệt độ da, hỗ trợ theo dõi chu kỳ và sức khoẻ tổng thể.",
  },
  {
    icon: "battery",
    title: "Pin đến 7 ngày",
    desc: "Đeo cả tuần không lo sạc. Hộp sạc mang theo cho thêm nhiều chu kỳ dùng, đèn LED báo trạng thái.",
  },
  {
    icon: "shield",
    title: "Bền bỉ 10 ATM",
    desc: "Khung titanium Grade 5 chống trầy, chuẩn chống nước 10 ATM và IP68 — rửa tay, tắm hay bơi đều thoải mái.",
  },
];

export type RingColor = {
  id: string;
  name: string;
  images: string[];
  swatch: string;
};

export const colors: RingColor[] = [
  {
    id: "black",
    name: "Titanium Black",
    images: [
      "/media/ring_titanium_black1.jpg",
      "/media/ring_titanium_black2.jpg",
      "/media/ring_titanium_black3.jpg",
      "/media/ring_titanium_black4.jpg",
    ],
    swatch: "#1c1c20",
  },
  {
    id: "silver",
    name: "Titanium Silver",
    images: [
      "/media/ring_titanium_silver1.jpg",
      "/media/ring_titanium_silver2.jpg",
      "/media/ring_titanium_silver3.jpg",
      "/media/ring_titanium_silver4.jpg",
    ],
    swatch: "#c7c9cc",
  },
  {
    id: "gold",
    name: "Titanium Gold",
    images: [
      "/media/ring_titanium_gold1.jpg",
      "/media/ring_titanium_gold2.jpg",
      "/media/ring_titanium_gold3.jpg",
      "/media/ring_titanium_gold4.jpg",
    ],
    swatch: "#c9a86a",
  },
];

export type Spec = {
  label: string;
  value: string;
};

export const specs: Spec[] = [
  { label: "Vật liệu", value: "Titanium Grade 5, thiết kế lõm chống trầy" },
  { label: "Kích thước", value: "Rộng 7.0mm · Dày 2.6mm" },
  { label: "Trọng lượng", value: "2.3g – 3.0g (tuỳ size)" },
  { label: "Size", value: "9 size (US 5–13), có bộ đo size" },
  { label: "Màu sắc", value: "Titanium Black · Silver · Gold" },
  { label: "Cảm biến", value: "Nhịp tim quang học · Gia tốc · Nhiệt độ da" },
  { label: "Theo dõi", value: "Nhịp tim, HRV, SpO2, giấc ngủ, nhiệt độ, chu kỳ" },
  { label: "Pin", value: "Đến 7 ngày · Hộp sạc kèm đèn LED" },
  { label: "Chống nước", value: "10 ATM + IP68" },
  { label: "Kết nối", value: "Bluetooth 5.4 · Samsung Health" },
];

export type StatItem = {
  value: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: "2.3g", label: "Nhẹ như không đeo" },
  { value: "7", label: "Ngày pin liên tục" },
  { value: "10 ATM", label: "Chống nước" },
  { value: "24/7", label: "Theo dõi sức khoẻ" },
];

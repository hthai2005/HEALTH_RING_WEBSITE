import LazyVideo from "./LazyVideo";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IconCheck } from "./Icons";

const rows = [
  {
    tag: "Pin & Hộp sạc",
    title: "Đeo cả tuần, quên việc sạc",
    desc: "Pin đến 7 ngày cho mỗi lần sạc. Hộp sạc nhỏ gọn mang theo cho thêm nhiều chu kỳ, đèn LED hiển thị trạng thái pin trực quan.",
    points: ["Pin đến 7 ngày", "Hộp sạc kèm đèn LED báo pin", "Sạc nhanh đầy trong ~80 phút"],
    video: "/media/ring_and_charging_case_with_LEDS.mp4",
    poster: "/media/ring_unboxing.jpg",
    reverse: false,
  },
  {
    tag: "Kết nối & Cử chỉ",
    title: "Liền mạch trong hệ sinh thái Galaxy",
    desc: "Kết nối Bluetooth 5.4 ổn định với điện thoại Galaxy. Vẩy nhẹ ngón tay để chụp ảnh hay tắt báo thức — điều khiển bằng cử chỉ tiện lợi.",
    points: ["Bluetooth 5.4", "Điều khiển bằng cử chỉ", "Đồng bộ Samsung Health"],
    video: "/media/ring_and_charging_case_connect.mp4",
    poster: "/media/ring_connect.jpg",
    reverse: true,
  },
];

export default function Showcase() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1500px] border-t border-border pt-8">
        <SectionLabel index="+" label="Trong từng chi tiết" />
        <div className="mt-16 flex flex-col gap-24">
          {rows.map((r) => (
            <div key={r.title} className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal className={r.reverse ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[1.8rem] border border-border">
                  <LazyVideo
                    src={r.video}
                    poster={r.poster}
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={r.reverse ? "lg:order-1" : ""}>
                <span className="eyebrow">{r.tag}</span>
                <h3 className="display mt-5 text-4xl sm:text-5xl">{r.title}</h3>
                <p className="mt-5 max-w-md text-muted">{r.desc}</p>
                <ul className="mt-8 flex flex-col gap-px">
                  {r.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 border-t border-border py-3 text-sm last:border-b"
                    >
                      <IconCheck className="h-4 w-4" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

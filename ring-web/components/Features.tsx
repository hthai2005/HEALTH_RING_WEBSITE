import { features } from "@/lib/content";
import { iconMap, type IconName } from "./Icons";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import MaskText from "./MaskText";

export default function Features() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-8 border-b border-border pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="01" label="Tính năng" />
            <h2 className="display mt-6 text-5xl sm:text-7xl">
              <MaskText lines={["Một chiếc nhẫn,", "thấu hiểu cơ thể"]} />
            </h2>
          </div>
          <Reveal className="max-w-sm text-muted" delay={0.2}>
            Ba cảm biến tí hon ôm trọn ngón tay, ghi lại từng nhịp đập và giấc
            ngủ — rồi Galaxy AI biến dữ liệu thành lời khuyên cho riêng bạn.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as IconName];
            return (
              <Reveal
                key={f.title}
                delay={(i % 3) * 0.08}
                className="group border-b border-border p-8 transition-colors duration-500 hover:bg-surface md:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-1" />
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="display mt-16 text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

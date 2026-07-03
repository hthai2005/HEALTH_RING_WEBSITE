import Image from "next/image";
import { specs } from "@/lib/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import MaskText from "./MaskText";

export default function Specs() {
  return (
    <section id="specs" className="px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1500px] border-t border-border pt-8">
        <SectionLabel index="04" label="Thông số kỹ thuật" />
        <h2 className="display mt-6 max-w-3xl text-5xl sm:text-7xl">
          <MaskText lines={["Sức mạnh trong", "2.3 gram"]} />
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.8rem] border border-border">
              <Image
                src="/media/ring_fit.jpg"
                alt="Galaxy Ring siêu nhẹ trên lòng bàn tay"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="display text-6xl">2.3g</p>
                <p className="mt-1 text-sm text-white/70">Nhẹ như không hề đeo</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-t border-border">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[minmax(90px,1fr)_1.6fr] gap-4 border-b border-border py-4 text-sm"
                >
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-fg">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

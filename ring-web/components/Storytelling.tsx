"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import MaskText from "./MaskText";

const chapters = [
  {
    tag: "06:30 — Buổi sáng",
    title: "Thức dậy cùng Energy Score",
    desc: "Mỗi sáng, Galaxy AI tổng hợp giấc ngủ và nhịp tim đêm qua thành điểm năng lượng, gợi ý cường độ vận động phù hợp cho ngày mới.",
    image: "/media/lifestyle_ring_try_on2.jpg",
    alt: "Đeo Galaxy Ring vào buổi sáng",
    input: [0, 0.25, 0.4],
    opacity: [1, 1, 0],
    scale: [1, 1, 1.08],
  },
  {
    tag: "14:00 — Ban ngày",
    title: "Theo dõi liền mạch, không vướng bận",
    desc: "Nhẹ chỉ 2.3g và ôm sát ngón tay, chiếc nhẫn âm thầm ghi lại nhịp tim, vận động và mức căng thẳng suốt cả ngày dài.",
    image: "/media/lifestyle_ring_try_on1.jpg",
    alt: "Galaxy Ring trên tay ban ngày",
    input: [0.3, 0.45, 0.6, 0.7],
    opacity: [0, 1, 1, 0],
    scale: [1.08, 1, 1, 1.08],
  },
  {
    tag: "23:00 — Ban đêm",
    title: "Giấc ngủ được thấu hiểu",
    desc: "Khi bạn chìm vào giấc ngủ, Galaxy Ring phân tích các giai đoạn ngủ, nhịp tim và nhiệt độ da để giúp bạn thức dậy sảng khoái hơn.",
    image: "/media/lifestyle_ring_try_on3.jpg",
    alt: "Galaxy Ring khi ngủ ban đêm",
    input: [0.6, 0.75, 1],
    opacity: [0, 1, 1],
    scale: [1.08, 1, 1],
  },
];

function ChapterImage({
  src,
  alt,
  progress,
  input,
  opacityOut,
  scaleOut,
}: {
  src: string;
  alt: string;
  progress: MotionValue<number>;
  input: number[];
  opacityOut: number[];
  scaleOut: number[];
}) {
  const opacity = useTransform(progress, input, opacityOut);
  const scale = useTransform(progress, input, scaleOut);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Storytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="story" ref={ref} className="relative">
      <div className="px-5 pt-24 pb-4 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-[1500px] border-t border-border pt-8">
          <SectionLabel index="02" label="Trải nghiệm 24 giờ" />
          <h2 className="display mt-6 max-w-3xl text-5xl sm:text-7xl">
            <MaskText lines={["Một ngày cùng", "Galaxy Ring"]} />
          </h2>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        {/* Sticky visual */}
        <div className="sticky top-0 hidden h-screen overflow-hidden lg:block">
          <div className="relative h-full w-full">
            {chapters.map((c) => (
              <ChapterImage
                key={c.image}
                src={c.image}
                alt={c.alt}
                progress={scrollYProgress}
                input={c.input}
                opacityOut={c.opacity}
                scaleOut={c.scale}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Scrolling chapters */}
        <div>
          {chapters.map((c) => (
            <div
              key={c.title}
              className="flex min-h-screen flex-col justify-center px-6 py-20 sm:px-14"
            >
              {/* Mobile image */}
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-3xl lg:hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-md"
              >
                <span className="eyebrow">{c.tag}</span>
                <h3 className="display mt-5 text-4xl sm:text-5xl">{c.title}</h3>
                <p className="mt-5 text-muted">{c.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

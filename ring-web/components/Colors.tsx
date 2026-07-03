"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { colors } from "@/lib/content";
import SectionLabel from "./SectionLabel";
import { IconArrow } from "./Icons";

export default function Colors() {
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState(0);
  const [dir, setDir] = useState(1);
  const color = colors[active];
  const total = color.images.length;
  const others = colors.filter((_, i) => i !== active).map((c) => c.name);

  function selectColor(i: number) {
    setActive(i);
    setPhoto(0);
  }
  function go(step: number) {
    setDir(step);
    setPhoto((p) => (p + step + total) % total);
  }

  return (
    <section id="colors" className="relative px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1500px] border-t border-border pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="03" label="Hoàn thiện Titanium" />
            <h2 className="display mt-6 text-5xl sm:text-7xl">Chọn sắc thái</h2>
          </div>
          <div className="flex items-center gap-3">
            {colors.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => selectColor(i)}
                aria-label={c.name}
                aria-pressed={i === active}
                className="relative h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <span
                  className="block h-full w-full rounded-full border border-border"
                  style={{ background: c.swatch }}
                />
                {i === active && (
                  <motion.span
                    layoutId="color-ring"
                    className="absolute -inset-2 rounded-full border border-fg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span className="eyebrow">
                  {String(active + 1).padStart(2, "0")} / {String(colors.length).padStart(2, "0")}
                </span>
                <p className="display mt-4 text-4xl sm:text-5xl">{color.name}</p>
              </motion.div>
            </AnimatePresence>
            <p className="mt-6 max-w-sm text-muted">
              Ba lớp hoàn thiện titanium Grade 5 sang trọng, chống trầy xước và
              bền bỉ theo thời gian. Chọn sắc thái hợp với bạn nhất.
            </p>
            <p className="mt-4 max-w-sm text-muted">
              Ngoài <span className="text-fg">{color.name}</span>, bạn còn có thể
              chọn <span className="text-fg">{others[0]}</span> và{" "}
              <span className="text-fg">{others[1]}</span>.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] light-stage">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={color.id + "-" + photo}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                    center: { opacity: 1, x: 0 },
                    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={color.images[photo]}
                    alt={`${color.name} — ảnh ${photo + 1}`}
                    fill
                    loading={photo === 0 && active === 0 ? undefined : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Ảnh trước"
                className="absolute top-1/2 left-4 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-contrast text-contrast-fg shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Ảnh kế tiếp"
                className="absolute top-1/2 right-4 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-contrast text-contrast-fg shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                <IconArrow className="h-4 w-4" />
              </button>

              {/* Photo counter */}
              <span className="eyebrow absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-contrast px-3 py-1 text-contrast-fg shadow-lg">
                {String(photo + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IconArrow } from "./Icons";
import MaskText from "./MaskText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-28 pb-8 sm:px-8"
    >
      {/* Top meta row */}
      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 mx-auto flex w-full max-w-[1500px] items-center justify-between"
      >
        <span className="eyebrow hidden sm:block">Smart Ring / 2026</span>
        <span className="eyebrow">Galaxy AI Health</span>
        <span className="eyebrow hidden sm:block">Titanium · IP68</span>
      </motion.div>

      {/* Main: text left, product right */}
      <div className="mx-auto grid w-full max-w-[1500px] flex-1 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT — wordmark + tagline + CTA */}
        <div className="order-2 lg:order-1">
          <h1 className="display text-[17vw] leading-[0.84] text-fg sm:text-[13vw] lg:text-[9rem]">
            <MaskText lines={["Galaxy"]} />
            <MaskText lines={["Ring"]} delay={0.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 max-w-md text-muted"
          >
            Nhẫn thông minh titanium siêu nhẹ. Theo dõi giấc ngủ, nhịp tim và
            năng lượng 24/7 với Galaxy AI. Pin đến 7 ngày.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#signup"
              className="group inline-flex items-center gap-2 rounded-full bg-contrast px-7 py-3.5 text-sm font-medium text-contrast-fg transition-opacity hover:opacity-80"
            >
              Đăng ký nhận tin
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              Khám phá
            </a>
          </motion.div>
        </div>

        {/* RIGHT — hero key visual (no scroll parallax) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          {/* Soft radial glow behind the rings for depth in both modes */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,var(--surface-strong),transparent_75%)]" />
          <Image
            src="/media/rings.png"
            alt="Galaxy Ring — Titanium Black, Silver, Gold"
            width={1804}
            height={1094}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative h-auto w-full rounded-[1.8rem] drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-20 mx-auto hidden w-full max-w-[1500px] items-center justify-between sm:flex"
      >
        <span className="eyebrow">Cuộn để khám phá</span>
        <span className="eyebrow">(01 — 05)</span>
      </motion.div>
    </section>
  );
}

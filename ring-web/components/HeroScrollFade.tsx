"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type HeroScrollFadeProps = {
  children: ReactNode;
  className?: string;
};

/** Minimal client wrapper — only scroll-linked opacity for hero chrome. */
export default function HeroScrollFade({ children, className }: HeroScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity: fade }} className={className}>
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

/**
 * Reveals each line by sliding it up from behind a clipping mask.
 * Uses the useInView hook (reliable even when the animated node sits inside
 * an overflow:hidden wrapper, where whileInView can fail to trigger).
 */
export default function MaskText({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: inView ? "0%" : "110%" }}
            transition={{
              duration: reduce ? 0 : 0.85,
              delay: reduce ? 0 : delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

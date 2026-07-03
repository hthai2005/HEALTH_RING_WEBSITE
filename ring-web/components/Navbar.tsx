"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#features", label: "Tính năng", n: "01" },
  { href: "#story", label: "Trải nghiệm", n: "02" },
  { href: "#colors", label: "Màu sắc", n: "03" },
  { href: "#specs", label: "Thông số", n: "04" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu, then smooth-scroll to the target. The scroll is
  // deferred until after the menu's close animation, otherwise the exit
  // transition cancels the programmatic smooth scroll. `scroll-padding-top`
  // (in globals.css) keeps the target clear of the fixed header.
  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href) as HTMLElement | null;
    setOpen(false);
    document.body.style.overflow = "";
    if (!el) return;
    window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 340);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-[var(--bg)]">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="display flex items-center gap-2 text-base tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-full border border-current">
            <span className="h-2.5 w-2.5 rounded-full border border-current" />
          </span>
          Galaxy Ring
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <span className="eyebrow text-[0.6rem]">{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#signup"
            className="hidden rounded-full bg-contrast px-4 py-2 text-sm font-medium text-contrast-fg transition-opacity hover:opacity-80 sm:block"
          >
            Đăng ký
          </a>
          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg transition-colors hover:bg-surface md:hidden"
          >
            <span className="relative block h-4 w-5">
              <motion.span
                className="absolute left-0 block h-[1.5px] w-5 bg-current"
                animate={open ? { top: 7, rotate: 45 } : { top: 3, rotate: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute left-0 block h-[1.5px] w-5 bg-current"
                animate={open ? { top: 7, rotate: -45 } : { top: 11, rotate: 0 }}
                transition={{ duration: 0.25 }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col px-5 pb-5 pt-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="flex items-center gap-3 border-b border-border py-4 text-lg text-fg transition-opacity active:opacity-60"
                >
                  <span className="eyebrow text-[0.65rem] text-muted">{l.n}</span>
                  {l.label}
                </a>
              ))}
              <a
                href="#signup"
                onClick={(e) => handleNav(e, "#signup")}
                className="mt-5 rounded-full bg-contrast px-4 py-3.5 text-center text-sm font-medium text-contrast-fg transition-opacity hover:opacity-80 active:opacity-70"
              >
                Đăng ký nhận tin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

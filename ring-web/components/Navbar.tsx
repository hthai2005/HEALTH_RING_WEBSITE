"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#features", label: "Tính năng", n: "01" },
  { href: "#story", label: "Trải nghiệm", n: "02" },
  { href: "#colors", label: "Màu sắc", n: "03" },
  { href: "#specs", label: "Thông số", n: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
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
        </div>
      </nav>
    </header>
  );
}

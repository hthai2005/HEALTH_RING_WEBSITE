"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IconArrow, IconCheck } from "./Icons";
import MaskText from "./MaskText";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.message || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch {
      setStatus("error");
      setMessage("Không thể kết nối máy chủ. Vui lòng thử lại.");
    }
  }

  return (
    <section id="signup" className="px-5 py-24 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-[1500px] border-t border-border pt-8">
        <span className="eyebrow">(05) — Đăng ký</span>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="display text-6xl sm:text-8xl">
            <MaskText lines={["Là người", "đầu tiên"]} />
          </h2>

          <div className="w-full">
            <p className="mb-8 max-w-md text-muted">
              Đăng ký để nhận thông tin ra mắt, ưu đãi đặt trước và mẹo chăm sóc
              sức khoẻ từ Galaxy AI.
            </p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 border-t border-border py-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-contrast text-contrast-fg">
                    <IconCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="display text-xl">Đăng ký thành công</p>
                    <p className="text-sm text-muted">{message}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="ml-auto text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                  >
                    Gửi email khác
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="flex flex-col gap-0"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên của bạn"
                    className="w-full border-t border-border bg-transparent py-4 text-lg outline-none placeholder:text-muted focus:border-fg"
                    aria-label="Tên của bạn"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full border-t border-border bg-transparent py-4 text-lg outline-none placeholder:text-muted focus:border-fg"
                    aria-label="Email"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-contrast px-7 py-4 font-medium text-contrast-fg transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Đăng ký ngay
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="mt-3 text-sm text-red-500">{message}</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

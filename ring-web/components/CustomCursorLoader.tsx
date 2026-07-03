"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function CustomCursorLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(enable, 1500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;
  return <CustomCursor />;
}

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  preload: false,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = "https://galaxy-ring-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Galaxy Ring — Sức khoẻ trên từng ngón tay",
    template: "%s · Galaxy Ring",
  },
  description:
    "Galaxy Ring — nhẫn thông minh titanium với Galaxy AI. Theo dõi giấc ngủ, nhịp tim, SpO2 và năng lượng 24/7. Pin đến 7 ngày, chống nước 10 ATM.",
  keywords: [
    "Galaxy Ring",
    "smart ring",
    "nhẫn thông minh",
    "theo dõi sức khoẻ",
    "wearable",
    "Samsung Health",
  ],
  authors: [{ name: "Galaxy Ring" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Galaxy Ring",
    title: "Galaxy Ring — Sức khoẻ trên từng ngón tay",
    description:
      "Nhẫn thông minh titanium với Galaxy AI. Theo dõi giấc ngủ, nhịp tim, năng lượng 24/7. Pin 7 ngày, chống nước 10 ATM.",
    images: [
      {
        url: "/media/ring_colors.jpg",
        width: 1024,
        height: 683,
        alt: "Galaxy Ring — ba màu Titanium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxy Ring — Sức khoẻ trên từng ngón tay",
    description:
      "Nhẫn thông minh titanium với Galaxy AI. Theo dõi sức khoẻ 24/7, pin 7 ngày, chống nước 10 ATM.",
    images: ["/media/ring_colors.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#eceae4" },
  ],
  colorScheme: "dark light",
};

/* Runs before paint to avoid theme flash */
const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className="min-h-screen antialiased cursor-none-desktop"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

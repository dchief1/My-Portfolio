import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Igwesi — Fullstack Engineer",
    template: "%s | Emmanuel Igwesi",
  },
  description:
    "Emmanuel Igwesi — Fullstack engineer building fast, secure, and reliable web applications using React, Next.js, Node.js, and Golang. Available for freelance and full-time opportunities.",
  keywords: [
    "Emmanuel Igwesi",
    "Fullstack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Golang",
    "Node.js",
    "Frontend",
    "Backend",
    "Portfolio",
  ],
  authors: [{ name: "Emmanuel Igwesi" }],
  openGraph: {
    title: "Emmanuel Igwesi — Fullstack Engineer",
    description:
      "Building fast, secure, and reliable web applications — React, Next.js, Node.js, and Golang. Available for hire.",
    siteName: "Emmanuel Igwesi — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Igwesi — Fullstack Engineer",
    description:
      "Building fast, secure, and reliable web applications — React, Next.js, Node.js, and Golang. Available for hire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}

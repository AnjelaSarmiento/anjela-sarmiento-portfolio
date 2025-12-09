import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Anjela Sofia G. Sarmiento - Full Stack Developer",
    template: "%s | Anjela Sofia G. Sarmiento",
  },
  description:
    "Developing solutions that are out of this world. Full Stack Developer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "developer",
    "portfolio",
    "full stack developer",
    "web development",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "frontend developer",
    "backend developer",
    "web designer",
  ],
  authors: [{ name: "Anjela Sofia G. Sarmiento" }],
  creator: "Anjela Sofia G. Sarmiento",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Anjela Sofia G. Sarmiento - Full Stack Developer",
    description: "Developing solutions that are out of this world.",
    siteName: "Anjela Sofia G. Sarmiento Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjela Sofia G. Sarmiento - Full Stack Developer",
    description: "Developing solutions that are out of this world.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


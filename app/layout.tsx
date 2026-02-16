import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://devtarun.com"),
  title: {
    default: "Tarun Singh - Full Stack Developer",
    template: "%s | Tarun Singh",
  },
  description: "Portfolio of Tarun Singh, a Full Stack Developer specializing in MERN stack, Next.js, and Cloud Architecture.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "MERN Stack", "Cloud Architecture", "Tarun Singh", "Developer Portfolio"],
  authors: [{ name: "Tarun Singh", url: "https://devtarun.com" }],
  creator: "Tarun Singh",
  publisher: "Tarun Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devtarun.com",
    siteName: "Tarun Singh Portfolio",
    title: "Tarun Singh - Full Stack Developer",
    description: "Portfolio of Tarun Singh, a Full Stack Developer specializing in MERN stack, Next.js, and Cloud Architecture.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tarun Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Singh - Full Stack Developer",
    description: "Portfolio of Tarun Singh, a Full Stack Developer specializing in MERN stack, Next.js, and Cloud Architecture.",
    site: "@devtarun",
    creator: "@devtarun",
    images: ["/opengraph-image"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

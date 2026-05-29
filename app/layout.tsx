import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://cedriccreed.vercel.app"),
  title: "Cedric Lavin — Full Stack Developer",
  description:
    "Full Stack Developer especializado en React, TypeScript y Node.js. Experiencia en ciberseguridad y desarrollo de aplicaciones modernas. Concepción, Chile.",
  keywords: [
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Chile",
    "Concepción",
    "cedriccreed",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cedric Lavin — Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, TypeScript y Node.js. Concepción, Chile.",
    url: "https://cedriccreed.vercel.app",
    siteName: "Cedric Lavin Portfolio",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedric Lavin — Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, TypeScript y Node.js. Concepción, Chile.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${inter.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

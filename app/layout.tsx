import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "No FUD Ventures",
  description: "No FUD Ventures is a Miami based startup studio that leverages emergent technologies to transform markets. We are entrepreneurs, investors, and technologists who are passionate about building the future of business.",
  generator: "No FUD Ventures",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/`,
  },
  openGraph: {
    title: "No FUD Ventures",
    description:
      "No FUD Ventures is a Miami based startup studio leveraging emergent technologies to transform markets.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/`,
    siteName: "No FUD Ventures",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`,
        width: 1200,
        height: 630,
        alt: "No FUD Ventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No FUD Ventures",
    description:
      "No FUD Ventures is a Miami based startup studio leveraging emergent technologies to transform markets.",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

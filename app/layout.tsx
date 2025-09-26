import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Manual Interactivo - Mantenimiento Preventivo PC | ETI La Victoria",
  description:
    "Manual interactivo completo sobre mantenimiento preventivo de computadoras para el Laboratorio de Informática de la ETI La Victoria, Estado Aragua",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

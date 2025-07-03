
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CCORIGINS - Interior Design & Advertising Agency",
  description: "Premium interior design and creative advertising services under one roof",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>

  )
}

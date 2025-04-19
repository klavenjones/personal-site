import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Container } from "@/components/ui/container"
import { AnimatedLayout } from "@/components/ui/animated-layout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Klaven Jones",
  description: "Software Engineer",
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true} className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
          <AnimatedLayout>
            <Container>
                {children}
            </Container>
          </AnimatedLayout>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  )
}


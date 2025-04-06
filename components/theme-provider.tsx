"use client"

import { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // set default theme to dark
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <div className="w-9 h-9"></div> // Placeholder to avoid layout shift
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}


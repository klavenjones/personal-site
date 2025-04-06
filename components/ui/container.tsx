'use client'

import { useTheme } from 'next-themes';
import { Header } from './header';
import { Footer } from './footer';

export function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`${isDark ? "bg-background" : "bg-white"} ${isDark ? "text-white" : "text-black"} flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0`}>
        <Header />
        {children}
        <Footer />
    </main>
  )
}

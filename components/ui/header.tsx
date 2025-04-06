'use client'

import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { useTheme } from 'next-themes';

const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
] 

export function Header() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
  <header className="mb-14 max-w-xl tracking-tight">
    <div className="lg:sticky lg:top-20 flex flex-row justify-between items-center">
      <nav className="flex flex-row justify-between items-center w-full relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <div className="flex flex-row gap-6 justify-between">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"} transition-colors`}
            >
              {item.label}  
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </div>
  </header>
  )
}   


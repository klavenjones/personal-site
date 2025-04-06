'use client'

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';

const footerLinks = [
  {
    href: 'https://github.com/klavenjones',
    text: 'github',
    icon: ArrowUpRight,
  },
  {
    href: 'https://www.linkedin.com/in/klaven-jones/',
    text: 'linkedin',
    icon: ArrowUpRight,
  },
  {
    href: 'https://x.com/KlavenJ',
    text: 'twitter',
    icon: ArrowUpRight,
  },
  {
    href: 'https://bsky.app/profile/klavenj.bsky.social',
    text: 'bluesky',
    icon: ArrowUpRight,
  }  
]

// Footer component
export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className="w-full max-w-lg py-12 space-y-6">
    <div className="flex gap-4 md:gap-6 justify-start">
      {footerLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"} transition-colors flex items-center gap-1`}
        >
          <link.icon className="h-4 w-4" />
          <span>{link.text}</span>
        </Link>
      ))}
    </div>

    <div className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>© 2024 MIT Licensed</div>
  </footer>
  )
}

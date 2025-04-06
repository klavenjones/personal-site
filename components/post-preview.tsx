'use client'

import type { Post } from "@/types/post"
import Link from 'next/link'
import { useTheme } from "next-themes"

interface PostProps {
  post: Post
}

export default function PostPreview({ post }: PostProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  return (  
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>{post.date}</span>
        <Link
          href={`/blog/${post.slug}`}
          className={`${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"} transition-colors`}
        >
          {post.title}
        </Link>
      </div>
  )
}

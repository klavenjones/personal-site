"use client"

import { useTheme } from "next-themes"
import { Post } from "@/types/post"
import PostPreview from "@/components/post-preview"

interface PortfolioProps {
  posts: Post[]
}

export default function Portfolio({ posts }: PortfolioProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
      <main className="w-full max-w-xl flex-1">
        <h1 className="text-3xl font-bold mb-6">Klaven Jones</h1>
        <p className={`${isDark ? "text-gray-200" : "text-gray-800"} mb-12 leading-relaxed`}>
          I'm a software engineer based in New York. I currently work at <a href="https://www.linkedin.com/company/jpmorgan" className="text-blue-500 hover:text-blue-600">JP Morgan Chase</a> where I focus on building human-centered products that improve workflow and efficiency for our sales and research professionals. 
        </p>

        <div className="space-y-4">
          {
            posts?.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))
          }
        </div>
      </main>
  )
}


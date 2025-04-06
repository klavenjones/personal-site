"use client"

import { useTheme } from "next-themes"
import { Post } from "@/types/post"
import PostPreview from "@/components/post-preview"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

interface PortfolioProps {
  posts: Post[]
}

export default function Portfolio({ posts }: PortfolioProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <FadeIn duration={0.5}>
      <main className="w-full max-w-xl flex-1">
        <StaggerContainer>
          <StaggerItem>
            <h1 className="text-3xl font-bold mb-6">Klaven Jones</h1>
          </StaggerItem>
          <StaggerItem>
            <p className={`${isDark ? "text-gray-200" : "text-gray-800"} mb-12 leading-relaxed`}>
              I'm a software engineer based in New York. I currently work at <a href="https://www.linkedin.com/company/jpmorgan" className="text-blue-500 hover:text-blue-600">JP Morgan Chase</a> where I focus on building human-centered products that improve workflow and efficiency for our sales and research professionals. 
            </p>
          </StaggerItem>
         <div className="space-y-4">
          {
            posts?.map((post) => (
              <StaggerItem key={post.slug}>
                <PostPreview key={post.slug} post={post} />
              </StaggerItem>
            ))
              }
            </div>
        </StaggerContainer>
      </main>
  </FadeIn>
  )
}


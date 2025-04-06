import { getAllPosts } from "@/lib/api"   
import PostPreview from '@/components/post-preview'
import { StaggerContainer, StaggerItem } from '@/components/animations'

export default function Blog() {
  const posts = getAllPosts()
  return (
    <StaggerContainer>
     <div className="space-y-4 w-full">
      {
        posts?.map((post) => (
          <StaggerItem key={post.slug}>
            <PostPreview key={post.slug} post={post} />
          </StaggerItem>
        ))
      }
    </div>
  </StaggerContainer>
  )
}

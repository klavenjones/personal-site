import { getAllPosts } from "@/lib/api"   
import PostPreview from '@/components/post-preview'

export default function Blog() {
  const posts = getAllPosts()
  return (
    <div className="space-y-4 w-full">
      {
        posts?.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))
      }
    </div>
  )
}

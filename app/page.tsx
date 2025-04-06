import Portfolio from "@/components/home"
import { getAllPosts } from "@/lib/api"
export default function Home() {
  const posts = getAllPosts()
  return <Portfolio posts={posts} />
}

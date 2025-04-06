import { getAllPosts, getPostBySlug } from '@/lib/api';
import { markdownToHtml } from '@/lib/utils';
import '@/components/blog-post.css';

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
} 

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'content',
  ])

const content = await markdownToHtml(post.content || '')

return (
  <article className="bg-inherit">
    <h1 className="text-2xl md:text-4xl mb-4 font-bold leading-snug">{post.title}</h1>
    <p className="text-gray-400 mb-8">{post.date}</p>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
  </article>
  )
}



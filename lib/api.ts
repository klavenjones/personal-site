import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { Post } from '@/types/post'
const postsDirectory = join(process.cwd(), 'posts')

/**
 * Retrieves a list of all post slugs (URL-friendly identifiers)
 * @returns Array of post slugs
 */
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

/**
 * Retrieves a blog post by its slug (URL-friendly identifier)
 * @param slug - The unique identifier for the post
 * @returns Post object containing metadata (from frontmatter) and content
 */
// @eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}    

/**
 * Retrieves a blog post by its slug (URL-friendly identifier)
 * @param slug - The unique identifier for the post
 * @returns Post object containing metadata (from frontmatter) and content
 */

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, ['date']))
    // sort posts by date in descending order
    .sort(sortPostsByDate);
  return posts;
}

/**
 * Sorts two blog posts by their dates in descending order (newest first)
 * @param post1 - First post to compare
 * @param post2 - Second post to compare
 * @returns Negative number if post1 is newer, positive if post2 is newer, 0 if equal
 */

export function sortPostsByDate(post1: Post, post2: Post) {
  const date1 = new Date(post1.date);
  const date2 = new Date(post2.date);
  return date2.getTime() - date1.getTime();
}

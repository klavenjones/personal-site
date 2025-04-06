import { type ClassValue, clsx } from "clsx"
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS classes with clsx
 * @param inputs - Tailwind CSS classes
 * @returns Merged classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts markdown to HTML using remark
 * @param markdown - Markdown string
 * @returns HTML string
 */
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .process(markdown)
  return result.toString()
}

import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: Author;
  content: string;
  excerpt: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  preview?: boolean;
};

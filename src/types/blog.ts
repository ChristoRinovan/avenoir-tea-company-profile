export type Blog = {
  objectId?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date | string | number;
  ownerId?: string;
  created?: Date | string | number;
  updated?: Date | string | number;
};
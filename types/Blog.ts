import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Blog extends ParsedContent {
  imageUrl?: string;
  createdAt?: string;
}

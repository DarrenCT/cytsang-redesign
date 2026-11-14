import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const iconNames = [
  'scales', 'briefcase', 'family', 'star', 'injury', 'document', 'seal', 'rings',
  'house', 'shield', 'users', 'globe', 'chart', 'lock', 'will',
] as const;

const practice = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/practice' }),
  schema: z.object({
    title: z.string(),
    /** Display order on the practice index and homepage. */
    order: z.number(),
    icon: z.enum(iconNames),
    /** Picks the default "Our approach" steps. */
    kind: z.enum(['contentious', 'advisory', 'service']),
    /** Shown in the homepage grid. */
    featured: z.boolean().default(false),
    /** One line for cards. */
    summary: z.string(),
    /** Intro under the page title. */
    lede: z.string(),
    matters: z.array(z.string()),
    /** People ids from src/data/people.ts */
    contacts: z.array(z.string()),
    /** Slugs of related practice areas. */
    related: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    cta: z.object({ heading: z.string(), text: z.string() }).optional(),
  }),
});

export const collections = { practice };

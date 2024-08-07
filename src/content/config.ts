import {z, defineCollection } from 'astro:content';
import CourseLayout from '../layouts/courseLayout.astro';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        featured: z.boolean().optional(),
      }),
})

const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.number(),
    description: z.string(), 
  })
})




export const collections = {
    'blogs': blogCollection,
    'courses': courseCollection,
  };
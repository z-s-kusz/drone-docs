import { defineCollection, z } from 'astro:content';

const drones = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        manufacturer: z.string(),
        price: z.number()
    }),
});

export const collections = {
    drones,
};

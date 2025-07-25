import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
	blog: defineCollection({
		loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
		schema: z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			author: z.string(),
			image: z.object({
				url: z.string(),
				alt: z.string(),
			}),
			tags: z.array(z.string())
		}),
	}),
};

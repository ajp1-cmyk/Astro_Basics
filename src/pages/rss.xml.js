import rss, { pagesGlobToRssItems } from "@astrojs/rss"
export async function GET(context){

	return rss({
		title: 'Astro Blog',
		description: "journey of building blog",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>en-us</language>`,
	})
}

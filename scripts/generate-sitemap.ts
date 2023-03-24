import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import { siteMetadata } from '~/data/siteMetadata';

let SITE_URL = siteMetadata.siteUrl;

(async () => {
	console.log('Generating sitemap...');
	let prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
	let pages = await globby([
		'pages/*.tsx',
		'public/rss/tags/**/*.en.xml',
		'!pages/_*.tsx',
		'!pages/api',
	]);
	let viDynamicPages = await globby([
		'data/blog/vi/**/*.mdx',
		'data/blog/vi/**/*.md',
		'data/promotions/vi/**/*.mdx',
		'data/promotions/vi/**/*.md',
	]);
	let enDynamicPages = await globby([
		'data/blog/en/**/*.mdx',
		'data/blog/en/**/*.md',
		'data/promotions/en/**/*.mdx',
		'data/promotions/en/**/*.md',
	]);

	let sitemap = `
			<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
				${['en', 'vi'].map((lang) =>
					pages
						.map((page) => {
							let path = page
								.replace('pages/', '/')
								.replace('public/rss/', '/')
								.replace('.tsx', '')
								.replace('.ts', '')
								.replace(`/feed.en.xml`, '');
							let route = path === '/index' ? '' : path;
							if (page === `pages/404.ts` || page === `pages/blog/[...slug].ts`) {
								return;
							}
							return `<url><loc>${SITE_URL}/${lang}${route}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
						})
						.join('')
				)}
				${enDynamicPages
					.map((page) => {
						let path = page
							.replace('data/blog/en', '/blog')
							.replace('data/promotions/en', '/blog')
							.replace('.mdx', '')
							.replace('.md', '');
						let route = path === '/index' ? '' : path;

						return `<url><loc>${SITE_URL}/en${route}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
					})
					.join('')}
				${viDynamicPages
					.map((page) => {
						let path = page
							.replace('data/blog/vi', '/blog')
							.replace('data/promotions/vi', '/blog')
							.replace('.mdx', '')
							.replace('.md', '');
						let route = path === '/index' ? '' : path;

						return `<url><loc>${SITE_URL}/vi${route}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
					})
					.join('')}
			</urlset>
    `;

	let formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	});

	// eslint-disable-next-line no-sync
	fs.writeFileSync('public/sitemap.xml', formatted);

	console.log('Sitemap generated successfully in `public/sitemap.xml`.');
})();

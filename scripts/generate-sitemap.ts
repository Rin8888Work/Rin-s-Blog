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
		'data/blog/**/*.en.mdx',
		'data/blog/**/*.en.md',
		'data/promotions/**/*.en.mdx',
		'data/promotions/**/*.en.md',
		'data/snippets/**/*.en.mdx',
		'data/snippets/**/*.en.md',
		'public/rss/tags/**/*.en.xml',
		'!pages/_*.tsx',
		'!pages/api',
	]);

	let sitemap = `
			<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				${['en', 'vi'].map((lang) =>
					pages
						.map((page) => {
							let path = page
								.replace('pages/', '/')
								.replace('data/blog', '/blog')
								.replace('data/promotions', '/blog')
								.replace('data/snippets', '/blog')
								.replace('public/rss/', '/')
								.replace('.tsx', '')
								.replace('.ts', '')
								.replace('.en.mdx', '')
								.replace('.en.md', '')
								.replace('/feed.en.xml', '');
							let route = path === '/index' ? '' : path;
							if (page === `pages/404.ts` || page === `pages/blog/[...slug].ts`) {
								return;
							}
							return `<url><loc>${SITE_URL}/${lang}${route}</loc></url>\n`;
						})
						.join('')
				)}
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

import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import { siteMetadata } from '~/data/siteMetadata';

let SITE_URL = siteMetadata.siteUrl;
let locationSitemap = 'public';
let siteMapName = 'sitemap.xml';
let globalSiteMapName = 'sitemap-global.xml';

(async () => {
	console.log('Generating sitemap...');
	let prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
	let pages = await globby([
		'pages/*.tsx',
		'public/rss/tags/**/*.vi.xml',
		'!pages/_*.tsx',
		'!pages/api',
	]);
	let viDynamicPages = await globby([
		'data/blog/vi/**/*.mdx',
		'data/blog/vi/**/*.md',
		'data/promotions/vi/**/*.mdx',
		'data/promotions/vi/**/*.md',
	]);

	let sitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
		<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<sitemap>
			<loc>${SITE_URL}/${globalSiteMapName}</loc>
		</sitemap>
	</sitemapindex>
	`;

	let sitemapGlobal = `
	<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
		${pages
			.map((page) => {
				let path = page
					.replace('pages/', '/')
					.replace('public/rss/', '/')
					.replace('.tsx', '')
					.replace('.ts', '')
					.replace(`/feed.vi.xml`, '');
				let route = path === '/index' ? '' : path;
				if (page === `pages/404.tsx` || page === `pages/blog/[...slug].tsx`) {
					return;
				}
				let lastmod = fs.statSync(page).mtime.toISOString().slice(0, 10);

				return `<url><loc>${SITE_URL}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
			})
			.join('')}
		${viDynamicPages
			.map((page) => {
				let path = page
					.replace('data/blog/vi', '/bai-viet')
					.replace('data/promotions/vi', '/bai-viet')
					.replace('.mdx', '')
					.replace('.md', '');
				let route = path === '/index' ? '' : path;
				let lastmod = fs.statSync(page).mtime.toISOString().slice(0, 10);
				return `<url><loc>${SITE_URL}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
			})
			.join('')}
	</urlset>
`;

	let formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	});

	let globalFormatted = prettier.format(sitemapGlobal, {
		...prettierConfig,
		parser: 'html',
	});

	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${siteMapName}`, formatted);
	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${globalSiteMapName}`, globalFormatted);

	console.log('Sitemap generated successfully in `public/sitemap.xml`.');
})();

import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import { siteMetadata } from '~/data/siteMetadata';
import { getProjectExternalLink } from '~/libs/go-external';

let SITE_URL = siteMetadata.siteUrl;
let locationSitemap = 'public';
let siteMapName = 'sitemap.xml';
let globalSiteMapName = 'sitemap-global.xml';
let demoSiteMapName = 'sitemap-sample-website.xml';
let postSiteMapName = 'sitemap-post.xml';

(async () => {
	console.log('Generating sitemap...');
	let prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
	let pages = await globby([
		'pages/*.tsx',
		'public/rss/tags/**/*.xml',
		'!pages/_*.tsx',
		'!pages/api',
	]);
	let viDynamicPages = await globby([
		'data/blog/**/*.mdx',
		'data/blog/**/*.md',
		'data/promotions/**/*.mdx',
		'data/promotions/**/*.md',
	]);

	const projectsPage = getProjectExternalLink();

	let sitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
		<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<sitemap>
			<loc>${SITE_URL}/${globalSiteMapName}</loc>
			<loc>${SITE_URL}/${demoSiteMapName}</loc>
			<loc>${SITE_URL}/${postSiteMapName}</loc>
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
					.replace(`/feed.xml`, '');
				let route = path === '/index' ? '' : path;
				if (
					page === `pages/404.tsx` ||
					page === `pages/bai-viet/[...slug].tsx` ||
					page === `pages/[demoSlug].tsx`
				) {
					return;
				}
				let lastmod = fs.statSync(page).mtime.toISOString().slice(0, 10);

				return `<url><loc>${SITE_URL}${route}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>\n`;
			})
			.join('')}
		</urlset>
	`;

	let sitemapDemo = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
			${projectsPage
				.map(({ key }) => {
					let path = key;
					let route = path === '/index' ? '' : `/${path}`;
					return `<url><loc>${SITE_URL}${route}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
				})
				.join('')}
		</urlset>
	`;

	let postSitemap = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
			${viDynamicPages
				.map((page) => {
					let path = page
						.replace('data/blog', '/bai-viet')
						.replace('data/promotions', '/bai-viet')
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

	let demoFormatted = prettier.format(sitemapDemo, {
		...prettierConfig,
		parser: 'html',
	});

	let postFormatted = prettier.format(postSitemap, {
		...prettierConfig,
		parser: 'html',
	});

	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${siteMapName}`, formatted);
	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${globalSiteMapName}`, globalFormatted);
	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${demoSiteMapName}`, demoFormatted);
	// eslint-disable-next-line no-sync
	fs.writeFileSync(`${locationSitemap}/${postSiteMapName}`, postFormatted);

	console.log('Sitemap generated successfully in `public/sitemap.xml`.');
})();

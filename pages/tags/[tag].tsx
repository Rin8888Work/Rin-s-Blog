import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import path from 'path';
import TagLayout from '~/layouts/TagLayout';
import { generateRss } from '~/libs/generate-rss';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import { getAllTags } from '~/libs/tags';
import type { BlogFrontMatter } from '~/types';
import { kebabCase } from '~/utils/kebab-case';

export function getStaticPaths({ locales }) {
	const paths = [];

	locales?.map((locale) => {
		let tags = getAllTags(`blog/${locale}`);

		Object.keys(tags).map((tag) =>
			paths.push({
				params: {
					tag,
				},
				locale,
			})
		);
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({
	locale,
	params,
}: {
	locale: string;
	params: { tag: string };
}) {
	let allPosts = getAllFilesFrontMatter(`blog/${locale}`);
	let filteredPosts = allPosts.filter(
		(post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
	);

	// rss
	let root = process.cwd();
	let rss = generateRss(filteredPosts, `rss/tags/${params.tag}/feed.${locale}.xml`, locale);
	let rssPath = path.join(root, 'public', 'rss', 'tags', params.tag);
	fs.mkdirSync(rssPath, { recursive: true });
	fs.writeFileSync(path.join(rssPath, `feed.${locale}.xml`), rss);

	return {
		props: {
			posts: filteredPosts,
			tag: params.tag,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header'])),
		},
	};
}

export default function Tag({ posts, tag }: { posts: BlogFrontMatter[]; tag: string }) {
	// Capitalize first letter and convert space to dash
	let title = tag[0] + tag.split(' ').join('-').slice(1);
	return (
		<>
			<TagLayout posts={posts} title={title} />
		</>
	);
}

import fs from 'fs';
import path from 'path';
import TagLayout from '~/layouts/TagLayout';
import { generateRss } from '~/libs/generate-rss';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import { getAllTags } from '~/libs/tags';
import type { BlogFrontMatter } from '~/types';
import { kebabCase } from '~/utils/kebab-case';

export function getStaticPaths() {
	const paths = [];

	let tags = getAllTags(`blog`);

	Object.keys(tags).map((tag) =>
		paths.push({
			params: {
				tag,
			},
		})
	);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { locale: string; params: { tag: string } }) {
	let allPosts = getAllFilesFrontMatter(`blog`);
	let filteredPosts = allPosts.filter(
		(post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
	);

	// rss
	let root = process.cwd();
	let rss = generateRss(filteredPosts, `rss/tags/${params.tag}/feed.xml`);
	let rssPath = path.join(root, 'public', 'rss', 'tags', params.tag);
	fs.mkdirSync(rssPath, { recursive: true });
	fs.writeFileSync(path.join(rssPath, `feed.xml`), rss);

	return {
		props: {
			posts: filteredPosts,
			tag: params.tag,
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

import fs from 'fs';
import path from 'path';
import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { PageTitle } from '~/components/PageTitle';
import { POSTS_PER_PAGE } from '~/constant';
import { getCommentConfigs } from '~/libs/comment';
import { formatSlug, getFiles } from '~/libs/files';
import { generateRss } from '~/libs/generate-rss';
import { getAllFilesFrontMatter, getFileBySlug } from '~/libs/mdx';
import type { AuthorFrontMatter, BlogProps, MdxScreenWidth } from '~/types';

let DEFAULT_LAYOUT: MdxScreenWidth = 'PostSimple';

export async function getStaticPaths() {
	const posts = [];
	getFiles(`blog`)
		.concat(getFiles(`promotions`))
		?.map((p: string) =>
			posts.push({
				params: {
					slug: formatSlug(p).split('/'),
				},
			})
		);

	return {
		paths: posts,
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}: {
	params: { slug: string[] };
	locale: 'en' | 'vi';
}) {
	let allPosts = getAllFilesFrontMatter(`blog`).concat(getAllFilesFrontMatter(`promotions`));
	let postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'));
	let prev = allPosts[postIndex + 1] || null;
	let next = allPosts[postIndex - 1] || null;
	let page = Math.ceil((postIndex + 1) / POSTS_PER_PAGE);
	let post = await getFileBySlug(
		allPosts[postIndex]?.cat === 'promotion' ? `promotions` : `blog`,
		params.slug.join('/')
	);

	let authors = post.frontMatter.authors || ['default'];
	let authorDetails = await Promise.all(
		authors.map(async (author) => {
			let authorData = await getFileBySlug(`authors`, author);
			// eslint-disable-next-line
			return authorData.frontMatter as unknown as AuthorFrontMatter;
		})
	);

	// rss
	let root = process.cwd();
	let rss = generateRss(allPosts, `rss/feed.xml`);
	let rssPath = path.join(root, 'public', 'rss');
	fs.mkdirSync(rssPath, { recursive: true });
	fs.writeFileSync(path.join(rssPath, `feed.xml`), rss);

	let commentConfig = getCommentConfigs();

	return {
		props: {
			post,
			authorDetails,
			prev,
			next,
			page,
			commentConfig,
		},
	};
}

export default function Blog(props: BlogProps) {
	let { post, ...rest } = props;
	let { mdxSource, frontMatter, toc } = post;

	return (
		<>
			{frontMatter.draft !== true ? (
				<MDXLayoutRenderer
					layout={frontMatter.layout || DEFAULT_LAYOUT}
					mdxSource={mdxSource}
					frontMatter={frontMatter}
					toc={toc}
					type="bai-viet"
					{...rest}
				/>
			) : (
				<div className="mt-24 text-center">
					<PageTitle>
						Under letruction{' '}
						<span role="img" aria-label="roadwork sign">
							🚧
						</span>
					</PageTitle>
				</div>
			)}
		</>
	);
}

import { POSTS_PER_PAGE } from '~/constant';
import { BlogLayout } from '~/layouts/BlogLayout';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogListProps } from '~/types';

export async function getStaticPaths() {
	const paths = [];

	let totalPosts = getAllFilesFrontMatter(`blog`);
	let totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);

	Array.from({ length: totalPages }, (_, i) =>
		paths.push({
			params: { page: (i + 1).toString() },
		})
	);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { locale: string; params: { page: string } }) {
	let { page } = params;
	let posts = getAllFilesFrontMatter(`blog`);
	let pageNumber = parseInt(page);
	let initialDisplayPosts = posts.slice(
		POSTS_PER_PAGE * (pageNumber - 1),
		POSTS_PER_PAGE * pageNumber
	);
	let pagination = {
		currentPage: pageNumber,
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	};

	return {
		props: {
			posts,
			initialDisplayPosts,
			pagination,
		},
	};
}

export default function PostPage(props: BlogListProps) {
	let { posts, initialDisplayPosts, pagination } = props;
	return (
		<>
			<BlogLayout
				posts={posts}
				initialDisplayPosts={initialDisplayPosts}
				pagination={pagination}
			/>
		</>
	);
}

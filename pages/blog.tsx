import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { POSTS_PER_PAGE } from '~/constant';
import { BlogLayout } from '~/layouts/BlogLayout';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogListProps } from '~/types';

export async function getStaticProps({ locale }) {
	let posts = getAllFilesFrontMatter('blog');
	let initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
	let pagination = {
		currentPage: 1,
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	};

	return {
		props: {
			posts,
			initialDisplayPosts,
			pagination,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'blog'])),
		},
	};
}

export default function Blog({ posts, initialDisplayPosts, pagination }: BlogListProps) {
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

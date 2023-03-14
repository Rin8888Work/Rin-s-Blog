import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { Pagination } from '~/components/Pagination';
import { PostListItem } from '~/components/PostListItem';
import { PostsSearch } from '~/components/PostsSearch';
import type { BlogLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';
import { siteMetadata } from '~/data/siteMetadata';
import { PageSeo } from '~/components/SEO';
import { ScrollTopButton } from '~/components/ScrollTopButton';

export function BlogLayout(props: BlogLayoutProps) {
	const { t } = useTranslation('blog');

	let { posts, initialDisplayPosts = [], pagination } = props;
	let [searchValue, setSearchValue] = useState('');
	let filteredBlogPosts = posts.filter((frontMatter) => {
		let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	// If initialDisplayPosts exist, display it if no searchValue is specified
	let displayPosts =
		initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

	return (
		<>
			<PageSeo
				title={`${t('title')} - ${siteMetadata.fullName} - ${t('leading')}`}
				description={siteMetadata.description}
			/>
			<PageTitle title={t('title')} leading={t('leading')} />
			<ScrollTopButton />

			<ScreenWidth>
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					<PostsSearch onChange={setSearchValue} />
					<ul className="space-y-10 py-12">
						{!filteredBlogPosts.length && 'No posts found.'}
						{displayPosts.map((frontMatter) => (
							<PostListItem key={frontMatter.slug} frontMatter={frontMatter} />
						))}
					</ul>
				</div>
				{pagination && pagination.totalPages > 1 && !searchValue && (
					<Pagination
						currentPage={pagination.currentPage}
						totalPages={pagination.totalPages}
					/>
				)}
			</ScreenWidth>
		</>
	);
}

export default BlogLayout;

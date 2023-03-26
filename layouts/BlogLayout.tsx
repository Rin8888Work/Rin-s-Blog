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
import { TAGS } from '~/data/tags';
import { useRouter } from 'next/router';
import { kebabCase } from '~/utils/kebab-case';
import { Link } from '~/components/Link';

export function BlogLayout(props: BlogLayoutProps) {
	const { t } = useTranslation(['blog', 'common']);
	const { locale } = useRouter();
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
				title={`${t('blog:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={t('blog:description')}
			/>
			<PageTitle title={t('blog:title')} leading={t('blog:leading')} />
			<ScrollTopButton />

			<ScreenWidth>
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					<div className="mb-5 flex w-full justify-center sm:mb-8">
						<PostsSearch onChange={setSearchValue} />
					</div>
					<div className="grid w-full gap-4 py-4 sm:py-10 xl:grid-cols-12">
						<div className="xl:col-span-9">
							<ul className="space-y-10">
								{!filteredBlogPosts.length && 'No posts found.'}
								{displayPosts.map((frontMatter) => (
									<PostListItem
										key={frontMatter.slug}
										frontMatter={frontMatter}
									/>
								))}
							</ul>
						</div>
						<div className="row-start-1 mb-4 xl:col-span-3">
							<h2 className="mb-3 text-xl font-bold uppercase ">
								{t('common:tags')}
							</h2>
							<div>
								{Object.keys(TAGS).map((key) => (
									<div className="mt-4" key={key}>
										<h3>{TAGS[key][locale]}</h3>
										<div className="mt-2 flex flex-wrap gap-2">
											{Object.keys(TAGS[key]['options']).map((k) => (
												<div
													className="rounded-xl bg-rose-600 p-1 text-sm hover:bg-rose-800 dark:bg-rose-700 hover:dark:bg-red-500"
													key={k}
												>
													<Link
														href={`/tags/${kebabCase(
															TAGS[key]['options'][k][locale]
														)}`}
													>
														<span className="umami--click--tag italic text-white ">
															#{TAGS[key]['options'][k][locale]}
														</span>
													</Link>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
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

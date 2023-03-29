import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PageTitle } from '~/components/PageTitle';
import { Pagination } from '~/components/Pagination';
import { PostListItem } from '~/components/PostListItem';
import { PostsSearch } from '~/components/PostsSearch';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import { TAGS } from '~/data/tags';
import type { BlogLayoutProps } from '~/types';
import { kebabCase } from '~/utils/kebab-case';
import ScreenWidth from './ScreenWidth';

interface TagLayoutProps extends BlogLayoutProps {
	title: string;
}

export function TagLayout(props: TagLayoutProps) {
	const { ...router } = useRouter();
	let { posts, title, initialDisplayPosts = [], pagination } = props;
	let [searchValue, setSearchValue] = useState('');
	let filteredBlogPosts = posts.filter((frontMatter) => {
		let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	// If initialDisplayPosts exist, display it if no searchValue is specified
	let displayPosts =
		initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

	const { tag } = router.query;

	return (
		<>
			<PageSeo
				title={`Tag | ${title} | ${siteMetadata.fullName}`}
				description={`${siteMetadata.description}`}
			/>
			<PageTitle title={title} />
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
							<h2 className="mb-3 text-xl font-bold uppercase ">Tags</h2>
							<div>
								{Object.keys(TAGS).map((key) => (
									<div className="mt-4" key={key}>
										<h3>{TAGS[key]['vi']}</h3>
										<div className="mt-2 flex flex-wrap gap-2">
											{Object.keys(TAGS[key]['options']).map((k) => (
												<div
													className={`rounded-sm bg-gradient-to-t ${
														tag === TAGS[key]['options'][k]['vi']
															? 'from-cyan-700 to-teal-500  text-white'
															: ''
													}  p-1 text-sm hover:from-teal-500 hover:to-cyan-700 hover:text-white`}
													key={k}
												>
													<Link
														href={`/tags/${kebabCase(
															TAGS[key]['options'][k]['vi']
														)}`}
													>
														<span className="umami--click--tag italic">
															{TAGS[key]['options'][k]['vi']}
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

export default TagLayout;

import { useState } from 'react';
import { Link } from '~/components/Link';
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

export function BlogLayout(props: BlogLayoutProps) {
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
				title={`${`Bài viết`} | ${siteMetadata.fullName}`}
				description={
					'Tổng hợp kinh nghiệm, các bài viết, kiến thức kinh doanh, kiếm tiền online, marketing chất lượng nhất không thể bỏ qua'
				}
			/>
			<PageTitle
				title={`Bài viết`}
				leading={`Mình chủ yếu viết về phát triển web, liên quan đến công nghệ, chia sẻ những cách kiếm tiền qua mạng và đôi khi về cuộc sống cá nhân của mình`}
			/>
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
							{pagination && pagination.totalPages > 1 && !searchValue && (
								<Pagination
									currentPage={pagination.currentPage}
									totalPages={pagination.totalPages}
								/>
							)}
						</div>
						<div className="row-start-1 mb-4 xl:col-span-3">
							<div className="sticky top-20">
								<h2 className="mb-3 text-xl font-bold uppercase ">Tags</h2>
								<div>
									{Object.keys(TAGS).map((key) => (
										<div className="mt-4" key={key}>
											<h3>{TAGS[key]['vi']}</h3>
											<div className="mt-2 flex flex-wrap gap-2">
												{Object.keys(TAGS[key]['options']).map((k) => (
													<div
														className="rounded-sm bg-gradient-to-t from-cyan-700 to-teal-500 p-1 text-sm hover:from-teal-500 hover:to-cyan-700"
														key={k}
													>
														<Link
															href={`/tags/${kebabCase(
																TAGS[key]['options'][k]['vi']
															)}`}
														>
															<span className="umami--click--tag italic text-white ">
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
				</div>
			</ScreenWidth>
		</>
	);
}

export default BlogLayout;

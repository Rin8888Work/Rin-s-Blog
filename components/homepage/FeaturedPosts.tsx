import Image from 'next/legacy/image';
import { FEATURED_POSTS } from '~/constant';
import type { BlogFrontMatter } from '~/types';
import { formatDate } from '~/utils/date';
import { Link } from '../Link';
import TitleSection from '../TitleSection';

export function FeaturedPosts({ posts }: { posts: BlogFrontMatter[] }) {
	return (
		<div className="border-t border-gray-200 dark:border-gray-700">
			<TitleSection>Latest Posts</TitleSection>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8 ">
				{!posts.length && 'No posts found.'}
				{posts.slice(0, FEATURED_POSTS).map((frontMatter) => {
					let { slug, date, title, summary, images } = frontMatter;
					return (
						<article key={slug}>
							<div className="flex flex-col">
								<div className=" relative h-52 w-full overflow-hidden rounded-md">
									<Link href={`/blog/${slug}`}>
										<Image
											src={images[0]}
											alt={title}
											title={title}
											layout="fill"
											objectFit="cover"
										></Image>
									</Link>
								</div>
								<dl className="py-3">
									<dt className="sr-only">Published on</dt>
									<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
										<time dateTime={date}>{formatDate(date)}</time>
									</dd>
								</dl>
								<div className="space-y-5 xl:col-span-3">
									<div className="space-y-3">
										<div>
											<h2 className="mb-1 text-xl font-bold tracking-tight">
												<Link
													href={`/blog/${slug}`}
													className="text-gray-900 dark:text-gray-100"
												>
													<span className="umami--click--featured-title line-clamp-1">
														{title}
													</span>
												</Link>
											</h2>
											{/* <BlogTags tags={tags} /> */}
										</div>
										<div className="prose max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
											{summary}
										</div>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
}

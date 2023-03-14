import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import type { BlogFrontMatter } from '~/types';
import { BlogTags } from '../blog/BlogTags';
import { Link } from '../Link';
import TitleSection from '../TitleSection';

export function PromotionNews({ posts }: { posts: BlogFrontMatter[] }) {
	const { t } = useTranslation(['promotion']);

	return (
		<div className="border-t border-gray-200 dark:border-gray-700">
			<TitleSection>{t('promotionNewsTitle')}</TitleSection>
			<Masonry
				breakpointCols={{
					default: 2,
					700: 1,
				}}
				className="promotions mt-4"
				columnClassName="promotions-column"
			>
				{!posts.length && 'No posts found.'}

				{posts.map((frontMatter) => {
					let { slug, title, images, tags } = frontMatter;
					return (
						<article key={slug}>
							<div className=" flex flex-col items-center bg-white">
								<div className=" relative w-full ">
									<Image
										className="absolute top-5 right-5 z-10"
										src={'/static/images/promotions/new.png'}
										alt={`hot---${title}`}
										width={80}
										height={80}
									></Image>
									<Link href={`/blog/${slug}`}>
										<Image
											src={images[0]}
											alt={title}
											title={title}
											layout="responsive"
											width={400}
											height={300}
										></Image>
									</Link>
								</div>

								<div className="relative z-10 -mt-4  w-11/12 space-y-5 bg-white p-4 xl:col-span-3">
									<div className="space-y-3">
										<div>
											<h2 className="mb-1 text-xl font-bold tracking-tight hover:underline">
												<Link
													href={`/blog/${slug}`}
													className="text-red-800"
												>
													<span className="umami--click--featured-title line-clamp-2">
														{title}
													</span>
												</Link>
											</h2>
											<BlogTags tags={tags} />
										</div>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</Masonry>
		</div>
	);
}

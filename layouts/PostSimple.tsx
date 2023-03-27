import Image from 'next/legacy/image';
import { BlogMeta } from '~/components/blog/BlogMeta';
import { BlogTags } from '~/components/blog/BlogTags';
import BlogToc from '~/components/blog/BlogToc';
import { Comments } from '~/components/comments';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { BlogSeo } from '~/components/SEO';
import { SocialButtons } from '~/components/SocialButtons';
import { siteMetadata } from '~/data/siteMetadata';
import type { PostSimpleLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PostSimple(props: PostSimpleLayoutProps) {
	let { frontMatter, type, children, authorDetails, commentConfig, toc } = props;
	let { date, title, slug, fileName, tags, readingTime } = frontMatter;
	let postUrl = `${siteMetadata.siteUrl}/${type}/${slug}`;

	return (
		<>
			<BlogSeo
				url={`${siteMetadata.siteUrl}/${type}/${slug}`}
				authorDetails={authorDetails}
				{...frontMatter}
			/>
			<ScrollTopButton />
			<article>
				<header>
					<div className="space-y-4">
						<PageTitle>
							<ScreenWidth>
								<h1 className="text-center text-2xl font-bold capitalize leading-9  text-gray-100 sm:leading-10 md:text-3xl md:leading-14 ">
									{title}
								</h1>
							</ScreenWidth>
						</PageTitle>
					</div>
				</header>
				<ScreenWidth>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
						<div className="lg:col-span-9">
							<div className=" mb-4 sm:mb-8">
								{authorDetails.map((author, index) => (
									<dl key={index}>
										<div className="flex items-center justify-start">
											<dt className="sr-only">Author by</dt>
											<div className="h-12 w-12 overflow-hidden rounded-full">
												<Image
													src={author.avatar}
													alt={author.name}
													width={30}
													height={30}
													layout="responsive"
												/>
											</div>
											<div className="ml-3 ">
												<div className="font-bold text-teal-500">
													{author.name}
												</div>
												<div className="flex justify-start ">
													<dt className="sr-only">Published on</dt>
													<BlogMeta
														date={date}
														slug={slug}
														readingTime={readingTime}
													/>
												</div>
											</div>
										</div>
									</dl>
								))}
							</div>
							<div className="pb-8" style={{ gridTemplateRows: 'auto 1fr' }}>
								<div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
									<div className="prose prose-lg max-w-none pb-8 dark:prose-dark md:prose-xl">
										{children}
									</div>
									<div className="mb-4 flex justify-start sm:mb-8">
										<span className="mr-3">Tags: </span>
										<BlogTags tags={tags} />
									</div>
									<div className="border-t border-gray-200 dark:border-gray-700">
										<SocialButtons
											postUrl={postUrl}
											title={title}
											fileName={fileName}
										/>
										<Comments
											frontMatter={frontMatter}
											config={commentConfig}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:col-span-3 lg:block">
							<BlogToc toc={toc} />
						</div>
					</div>
				</ScreenWidth>
			</article>
		</>
	);
}

export default PostSimple;

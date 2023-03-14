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
		<ScreenWidth>
			<BlogSeo
				url={`${siteMetadata.siteUrl}/${type}/${slug}`}
				authorDetails={authorDetails}
				{...frontMatter}
			/>
			<ScrollTopButton />
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
				<div className="lg:col-span-9">
					<article>
						<div>
							<header className="py-6 xl:pb-16 xl:pt-16">
								<div className="space-y-4">
									<BlogTags tags={tags} />
									<PageTitle>{title}</PageTitle>
									<dl>
										<div>
											<dt className="sr-only">Published on</dt>
											<BlogMeta
												date={date}
												slug={slug}
												readingTime={readingTime}
											/>
										</div>
									</dl>
								</div>
							</header>
							<div className="pb-8" style={{ gridTemplateRows: 'auto 1fr' }}>
								<div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
									<div className="prose prose-lg max-w-none pb-8 dark:prose-dark md:prose-xl">
										{children}
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
					</article>
				</div>
				<div className="hidden lg:col-span-3 lg:block">
					<BlogToc toc={toc} />
				</div>
			</div>
		</ScreenWidth>
	);
}

export default PostSimple;

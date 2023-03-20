import Image from 'next/image';
import type { MdxFrontMatter } from '~/types';
import { formatDate } from '~/utils/date';
import { BlogTags } from './blog/BlogTags';
import { Link } from './Link';

export function PostListItem({ frontMatter }: { frontMatter: MdxFrontMatter }) {
	let { slug: slugWithLocale, date, title, summary, images, tags } = frontMatter;

	const slug = slugWithLocale.split('.')[0];

	return (
		<article key={slug}>
			<div className="grid grid-cols-8 gap-6">
				<div className=" relative col-span-3 h-52 w-full overflow-hidden rounded-md">
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
				<div className="col-span-5 ">
					<div className="space-y-5 xl:col-span-3">
						<div className="flex flex-col space-y-3">
							<div>
								<h2 className="mb-1 text-xl font-bold tracking-tight">
									<Link
										href={`/blog/${slug}`}
										className="text-gray-900 hover:text-slate-900 dark:text-gray-100 dark:hover:text-slate-300"
										title={title}
									>
										<span className="umami--click--featured-title line-clamp-1">
											{title}
										</span>
									</Link>
								</h2>
							</div>
							<dl>
								<dt className="sr-only">Published on</dt>
								<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
									<time dateTime={date}>{formatDate(date)}</time>
								</dd>
							</dl>
							<div className="prose max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
								{summary}
							</div>
							<BlogTags tags={tags} />
							<div className="inline-flex">
								<Link
									className="flex items-center text-sm font-medium text-sky-500"
									title={title}
									href={`/blog/${slug}`}
								>
									<span className="relative">
										Đọc thêm
										<span className="sr-only">, {title}</span>
									</span>
									<svg
										className="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
										width="3"
										height="6"
										viewBox="0 0 3 6"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M0 0L3 3L0 6"></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

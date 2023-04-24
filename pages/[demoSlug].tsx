import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import HightLightTitle from '~/components/HightLightTitle';
import { Image } from '~/components/Image';
import Rating from '~/components/Rating';
import Twemoji from '~/components/Twemoji';
import { seedingLink, siteMetadata } from '~/data/siteMetadata';
import { DemoSiteLayout } from '~/layouts/DemoSiteLayout';
import { getNameCategory } from '~/utils';
import { SocialButtons } from '~/components/SocialButtons';

export async function getStaticPaths() {
	const root = process.cwd();
	const projectsJson = fs.readFileSync(path.join(root, 'data', 'hrefDemoData.json'), 'utf8');
	const projects = Object.entries(JSON.parse(projectsJson)).flatMap(([key, items]) =>
		(items as Array<any>).map((item) => ({ ...item, key }))
	);

	const paths = projects?.flatMap((pj) => [
		{
			params: {
				demoSlug: pj['slug'],
			},
		},
		{
			params: {
				demoSlug: pj['slug'].split('-')[pj['slug'].split('-').length - 1],
			},
		},
	]);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { demoSlug } }) {
	const root = process.cwd();
	const projectsJson = fs.readFileSync(path.join(root, 'data', 'hrefDemoData.json'), 'utf8');
	const data = JSON.parse(projectsJson);
	const projects = Object.entries(data).flatMap(([key, items]) =>
		(items as Array<any>).map((item) => ({ ...item, key }))
	);

	// Check if the demoSlug value is a product ID
	const isId = /^[a-f0-9]{10}$/.test(demoSlug);

	let currentItem;

	if (isId) {
		currentItem =
			projects.find(
				(item) => item['slug'].split('-')[item['slug'].split('-').length - 1] === demoSlug
			) ?? {};
		// Redirect to the demoSlug route
		if (currentItem && currentItem.slug) {
			return {
				redirect: {
					destination: `/${currentItem.slug}`,
					permanent: true,
				},
			};
		}
	} else {
		// Fetch the product data based on the demoSlug value
		currentItem = projects.find((item) => item['slug'] === demoSlug) ?? {};
	}

	const { key } = currentItem;

	const relatedItems = key
		? data[key]
				.filter(
					(item) =>
						item.slug !== demoSlug ||
						item['slug'].split('-')[item['slug'].split('-').length - 1] !== demoSlug
				)
				.sort(() => Math.random() - 0.5)
				.slice(0, 4)
		: [];

	return {
		props: {
			currentItem,
			relatedItems,
			relatedParent: getNameCategory(key),
		},
	};
}

const DemoDetail = ({ currentItem, relatedItems, relatedParent }) => {
	const { alt, meta, name, slug, src } = currentItem;

	if (!slug) return 'no item found';

	return (
		<DemoSiteLayout title={alt} desc={meta}>
			<section className="py-4">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
					<div className="sm:col-span-6">
						<Image
							showDesc={false}
							className="transition ease-in-out hover:scale-110"
							loading="lazy"
							src={src}
							width={295}
							height={295}
							alt={`${alt}`}
							title={`${alt}`}
							sizes="100vw"
							style={{
								width: '100%',
								height: 'auto',
							}}
						/>
					</div>
					<div className="border-l-2 sm:col-span-6">
						<div className="dynamic-info space-y-2 px-8">
							<p className="flex items-center space-x-2">
								<b>SKU:</b>{' '}
								<span className="dark:tex-rose-400 text-xl font-bold uppercase text-rose-600 sm:text-2xl">
									{slug.split('-')[slug.split('-').length - 1]}
								</span>
							</p>
							<h2 className="font-['JetBrains_Mono'] text-xl font-bold capitalize sm:text-2xl">
								Website {name}
							</h2>
							<div className="rating">
								<Rating />
								<span className="sr-only">5 stars of 872 review</span>
							</div>
							<div>
								Danh mục: <b>{relatedParent.hl}</b>
							</div>
							<div className="prose mb-5 max-w-none pb-8 dark:prose-dark ">
								<p>
									Đối với <b>{relatedParent.hl}</b> do mình ra lò là sự cam kết
									hoàn hảo về giao diện dễ sử dụng, chuẩn SEO và chuẩn Responsive.
								</p>
								<p>
									Nếu bạn đã xem{' '}
									<Link href={`/go/${slug}`} target="_blank">
										demo
									</Link>{' '}
									và muốn thêm hoặc bớt chức năng nào đó cho website <b>{name}</b>{' '}
									này. Tất nhiên, mình sẽ làm việc đó cho bạn
								</p>
								<blockquote className="!mt-5">
									<ul>
										<li>
											<b>
												<Twemoji emoji="check-mark-button" size="sm" />{' '}
												Chuẩn SEO, thích ứng mọi thiết bị
											</b>
										</li>
										<li>
											<b>
												<Twemoji emoji="check-mark-button" size="sm" /> Tốc
												độ load nhanh
											</b>
										</li>
										<li>
											<b>
												<Twemoji emoji="check-mark-button" size="sm" /> Quản
												trị dễ dàng
											</b>
										</li>
										<li>
											<b>
												<Twemoji emoji="check-mark-button" size="sm" /> Thời
												gian hoàn thành: 3-5 ngày
											</b>
										</li>
									</ul>
								</blockquote>
							</div>
							<div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:mt-6 sm:flex-row sm:space-x-8 sm:space-y-0">
								<Link
									href={`/go/${seedingLink.adviseLink.key}`}
									passHref
									legacyBehavior
								>
									<a
										target={`_blank`}
										href={`/go/${seedingLink.adviseLink.key}`}
										className={`umami--click--advise-thiet-ke-web inline-block  rounded bg-gradient-to-r  from-rose-500 to-orange-500 px-6 py-2.5 text-center text-base  leading-tight text-white transition-all duration-300 ease-in-out hover:from-orange-500  hover:to-rose-500 focus:outline-none focus:ring-0  sm:w-auto `}
									>
										{`Liên hệ`}
									</a>
								</Link>
								<Link href={`/go/${slug}`} passHref legacyBehavior>
									<a
										target="_blank"
										href={`/go/${slug}`}
										className={`umami--click--view-demo-${name.replaceAll(
											' ',
											''
										)} inline-block rounded bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
									>
										{`Xem demo`}
									</a>
								</Link>
							</div>
							<SocialButtons
								fileName=""
								title={`Thiết kế website ${name}`}
								postUrl={`${siteMetadata.siteUrl}/${slug}`}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-4">
				<HightLightTitle
					text={`Một số --${relatedParent.base}-- khác`}
					hl={relatedParent.hl}
				/>

				<ul className=" mt-4 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{relatedItems?.map((item, index) => (
						<li key={index}>
							<div>
								<Image
									showDesc={false}
									shouldOpenLightbox={false}
									className="transition ease-in-out hover:scale-110"
									loading="lazy"
									src={item.src}
									width={295}
									height={295}
									alt={`${index + 1} - ${item.alt}`}
									title={`${index + 1} - ${item.alt}`}
									sizes="100vw"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>
							<div className="mt-4 flex flex-col items-center sm:mt-6">
								<h3 className="text-base font-bold capitalize">
									{index + 1} - Website {item.name}
								</h3>
								<div className="sr-only">{item.meta}</div>
								<div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:mt-6 sm:flex-row sm:space-x-8 sm:space-y-0">
									<Link
										href={`/go/${seedingLink.adviseLink.key}`}
										passHref
										legacyBehavior
									>
										<a
											target={`_blank`}
											href={`/go/${seedingLink.adviseLink.key}`}
											className={`umami--click--advise-thiet-ke-web inline-block  rounded bg-gradient-to-r  from-rose-500 to-orange-500 px-6 py-2.5 text-center text-base  leading-tight text-white transition-all duration-300 ease-in-out hover:from-orange-500  hover:to-rose-500 focus:outline-none focus:ring-0  sm:w-auto `}
										>
											{`Liên hệ`}
										</a>
									</Link>
									<Link href={`/go/${item.slug}`} passHref legacyBehavior>
										<a
											target="_blank"
											href={`/go/${item.slug}`}
											className={`umami--click--view-demo-${item.name.replaceAll(
												' ',
												''
											)} inline-block rounded bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
										>
											{`Xem demo`}
										</a>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="mt-8 flex justify-center lg:mt-16">
					<Link href={`/mau-thiet-ke-web`} passHref legacyBehavior>
						<a
							href={`/mau-thiet-ke-web`}
							className={` inline-block w-3/4 rounded bg-gradient-to-r from-blue-500  to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0 sm:w-1/4 `}
						>
							{`Xem tất cả`}
						</a>
					</Link>
				</div>
			</section>
		</DemoSiteLayout>
	);
};

export default DemoDetail;

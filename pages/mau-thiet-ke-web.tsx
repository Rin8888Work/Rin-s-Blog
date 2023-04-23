import Image from 'next/image';
import Link from 'next/link';
import HightLightTitle from '~/components/HightLightTitle';
import { seedingLink } from '~/data/siteMetadata';
import ExpWebDesignLayout from '~/layouts/ExpWebDesignLayout';
import demoHref from '../data/hrefDemoData.json';
import BlogToc from '~/components/blog/BlogToc';

const getNameCategory = (key) => {
	switch (key) {
		case 'thoi-trang':
			return {
				base: 'Mẫu --thiết kế website thời trang--',
				hl: 'thiết kế website thời trang',
			};

		case 'ban-hang':
			return {
				base: 'Mẫu --thiết kế website bán hàng--',
				hl: 'thiết kế website bán hàng',
			};
		case 'bat-dong-san':
			return {
				base: 'Mẫu --thiết kế website bất động sản--',
				hl: 'thiết kế website bất động sản',
			};
		case 'my-pham':
			return {
				base: 'Mẫu --thiết kế website mỹ phẩm--',
				hl: 'thiết kế website mỹ phẩm',
			};
		case 'noi-that':
			return {
				base: 'Mẫu --thiết kế website nội thất--',
				hl: 'thiết kế website nội thất',
			};
		case 'doanh-nghiep':
			return {
				base: 'Mẫu --thiết kế website doanh nghiệp--',
				hl: 'thiết kế website doanh nghiệp',
			};

		case 'du-lich-khach-san':
			return {
				base: 'Mẫu --thiết kế website du lịch & khách sạn--',
				hl: 'thiết kế website du lịch & khách sạn',
			};

		case 'giao-duc':
			return {
				base: 'Mẫu --thiết kế website giáo dục--',
				hl: 'thiết kế website giáo dục',
			};

		default:
			return {
				base: 'Mẫu --thiết kế website khác--',
				hl: 'thiết kế website khác',
			};
	}
};

export async function getStaticProps() {
	const projects = Object.keys(demoHref).map((k) => ({
		slug: k,
		name: getNameCategory(k),
		projects: demoHref[k].splice(0, 6),
	}));

	return {
		props: {
			projects,
		},
	};
}

const ExpWebDesign = ({ projects }) => {
	console.log({ projects });
	return (
		<ExpWebDesignLayout>
			<div className="relative grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-12 xl:relative xl:col-span-2">
					<BlogToc
						toc={projects.map((pj, index) => ({
							value: `0${index + 1}. ${pj.name.base
								.replaceAll('--', '')
								.replace('Mẫu thiết kế website ', '')}`,
							url: pj.slug,
							depth: 2,
							children: [],
						}))}
					/>

					{/* <ul className="sticky top-[60px]">
						{projects?.map((demo, idx) => (
							<li key={idx} className="px-2 py-3 font-bold uppercase">
								<Link href={`#${demo.slug}`} className="">
									{demo.name.base
										.replaceAll('--', '')
										.replace('Mẫu thiết kế website ', '')}
								</Link>
							</li>
						))}
					</ul> */}
				</div>
				<div className="col-span-12 xl:col-span-10">
					{projects?.map((demo, idx) => (
						<section key={idx} className="p-4">
							<div className="custom-heading" id={demo.slug}></div>
							<HightLightTitle text={demo.name.base} hl={demo.name.hl} />
							<ul className=" mt-4 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
								{demo.projects?.map(({ src, href, external, name, alt }, index) => (
									<li key={index} data-etnl={external}>
										<div>
											<div className="overflow-hidden rounded-sm">
												<Image
													loading="lazy"
													src={src}
													width={295}
													height={295}
													alt={`${index + 1} - ${alt}`}
													title={`${index + 1} - ${alt}`}
													sizes="100vw"
													style={{
														width: '100%',
														height: 'auto',
													}}
												/>
											</div>
											<div className="mt-4 flex flex-col items-center sm:mt-6">
												<h3 className="text-base font-bold capitalize">
													{index + 1} - {name}
												</h3>
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
													<Link href={href} passHref legacyBehavior>
														<a
															target="_blank"
															href={href}
															className={`umami--click--view-demo-${name.replaceAll(
																' ',
																''
															)} inline-block rounded bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
														>
															{`Xem demo`}
														</a>
													</Link>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
							{/* <div className="mt-4 flex justify-center sm:mt-8">
								<Link href={`tel:0365610561`} passHref legacyBehavior>
									<a
										href={`tel:0365610561`}
										className={`umami--click--advise inline-block w-3/4 rounded bg-gradient-to-r from-blue-500  to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0 sm:w-1/4 `}
									>
										{`Xem tất cả`}
									</a>
								</Link>
							</div> */}
						</section>
					))}
				</div>
			</div>
		</ExpWebDesignLayout>
	);
};

export default ExpWebDesign;

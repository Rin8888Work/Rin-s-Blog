import { PageSeo } from 'components/SEO';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlogLinks } from '~/components/homepage/BlogLinks';
import { FeaturedPosts } from '~/components/homepage/FeaturedPosts';
import { Greeting } from '~/components/homepage/Greeting';
import { Heading } from '~/components/homepage/Heading';
import HomeService from '~/components/homepage/Service';
import { TypedBios } from '~/components/homepage/TypedBios';
import ParticlesBg from '~/components/Particles';
import { ProfileCard } from '~/components/ProfileCard';
import TitleSection from '~/components/TitleSection';
import WebsitePricing from '~/components/WebsitePricing';
import { particlesData } from '~/data/particlesData';
import { homeServices } from '~/data/servicesData';
import { seedingLink, siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from '~/layouts/ScreenWidth';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogFrontMatter } from '~/types';

export const getStaticProps: GetStaticProps = async () => {
	let posts = getAllFilesFrontMatter(`blog`);
	return {
		props: {
			posts,
		},
	};
};

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
	return (
		<>
			<PageSeo title={siteMetadata.title} description={siteMetadata.description} />
			<ParticlesBg options={particlesData.header}>
				<ScreenWidth>
					<div className="mt-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-4">
						<div className="grid space-y-2 md:my-4 md:grid-cols-1 md:space-y-5 md:pb-8 md:pt-6 xl:grid-cols-2">
							<div className="md:pr-8">
								<Greeting />
								<div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
									<Heading />
									<TypedBios />
									<BlogLinks />
									<Link
										href={`/go/${seedingLink.adviseLink.key}`}
										passHref
										legacyBehavior
									>
										<a
											className="mb-8 mt-8 inline-block rounded bg-teal-700  bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base  uppercase leading-tight text-white transition-all duration-300 ease-in-out  hover:from-teal-500 hover:to-blue-500 focus:outline-none focus:ring-0 sm:mb-3 "
											target={`_blank`}
											href={`/go/${seedingLink.adviseLink.key}`}
										>
											Kết nối với mình
										</a>
									</Link>
								</div>
							</div>
							<div className="lg:items-center lg:justify-center xl:col-span-1 xl:flex">
								<ProfileCard />
							</div>
						</div>
					</div>
				</ScreenWidth>
			</ParticlesBg>
			<ScreenWidth>
				<section className="my-5 border-t border-gray-200 dark:border-gray-700 sm:my-10">
					<TitleSection>Dịch vụ của tôi</TitleSection>
					<HomeService services={homeServices} i18name={'home'} />
				</section>
				<section className="my-5 border-t border-gray-200 text-gray-800 dark:border-gray-700 sm:my-10">
					<TitleSection>Bảng báo giá thiết kế website</TitleSection>
					<WebsitePricing />
				</section>
				<FeaturedPosts posts={posts} />
			</ScreenWidth>
		</>
	);
}

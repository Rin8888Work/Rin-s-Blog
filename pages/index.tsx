import { PageSeo } from 'components/SEO';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FeaturedPosts } from '~/components/homepage/FeaturedPosts';
import { Greeting } from '~/components/homepage/Greeting';
import { Heading } from '~/components/homepage/Heading';
import { ShortDescription } from '~/components/homepage/ShortDescription';
import { TypedBios } from '~/components/homepage/TypedBios';
import ParticlesBg from '~/components/Particles';
import { ProfileCard } from '~/components/ProfileCard';
import { Twemoji } from '~/components/Twemoji';
import { particlesData } from '~/data/particlesData';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from '~/layouts/ScreenWidth';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogFrontMatter } from '~/types';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	let posts = getAllFilesFrontMatter('blog');
	return {
		props: {
			posts,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'home', 'header'])),
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
						<div className="grid space-y-2 md:my-4 md:grid-cols-1 md:space-y-5 md:pt-6 md:pb-8 xl:grid-cols-2">
							<div className="md:pr-8">
								<Greeting />
								<div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
									<Heading />
									<TypedBios />
									<ShortDescription />
									{/* <BlogLinks /> */}
									<p className="my-8 flex">
										<span className="mr-2">Happy reading</span>
										<Twemoji emoji="clinking-beer-mugs" />
									</p>
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
				<FeaturedPosts posts={posts} />
			</ScreenWidth>
		</>
	);
}

import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { PromotionNews } from '~/components/promotions/News';
import { affiliatesLink } from '~/data/siteMetadata';
import PromotionLayout from '~/layouts/PromotionLayout';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogFrontMatter } from '~/types';

export const getStaticProps: GetStaticProps = async () => {
	let posts = getAllFilesFrontMatter(`promotions`);

	return {
		props: {
			posts,
		},
	};
};

export default function Promotion({ posts }: { posts: BlogFrontMatter[] }) {
	return (
		<PromotionLayout>
			<Masonry
				breakpointCols={{
					default: 3,
					700: 2,
					500: 1,
				}}
				className="promotions mt-4"
				columnClassName="promotions-column"
			>
				{Object.keys(affiliatesLink)?.map((key) => {
					const item = affiliatesLink[key];

					return (
						<div key={item.key} className="relative overflow-hidden rounded-md">
							<Link href={`/go/${item.key}`} passHref legacyBehavior>
								<a target={`_blank`} href={`/go/${item.key}`}>
									<Image
										className={`umami--click--aff-${item.key}`}
										src={item.banner}
										alt={item.label}
										title={item.label}
										width={360}
										height={360}
										sizes="100vw"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</a>
							</Link>
						</div>
					);
				})}
			</Masonry>
			<PromotionNews posts={posts} />
		</PromotionLayout>
	);
}

import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { PromotionNews } from '~/components/promotions/News';
import { affiliatesLink } from '~/data/siteMetadata';
import PromotionLayout from '~/layouts/PromotionLayout';
import { getAllFilesFrontMatter } from '~/libs/mdx';
import type { BlogFrontMatter } from '~/types';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	let posts = getAllFilesFrontMatter('promotions');

	return {
		props: {
			posts,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'promotion', 'header'])),
		},
	};
};

export default function Promotion({ posts }: { posts: BlogFrontMatter[] }) {
	const { t } = useTranslation(['common', 'promotion']);

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
										alt={t(`promotion:${item.label}`)}
										title={t(`promotion:${item.label}`)}
										layout="responsive"
										width={360}
										height={360}
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

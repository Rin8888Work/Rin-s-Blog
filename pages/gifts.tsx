import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { giftsLink } from '~/data/siteMetadata';
import GiftLayout from '~/layouts/GiftLayout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'gift', 'header'])),
		},
	};
};

export default function Gifts() {
	const { t } = useTranslation(['common', 'gift']);

	return (
		<GiftLayout>
			<Masonry
				breakpointCols={{
					default: 3,
					700: 2,
					500: 1,
				}}
				className="promotions mt-4"
				columnClassName="promotions-column"
			>
				{Object.keys(giftsLink)?.map((key) => {
					const item = giftsLink[key];

					return (
						<div key={item.key} className="relative overflow-hidden rounded-md">
							<Link href={`/go/${item.key}`} passHref legacyBehavior>
								<a target={`_blank`} href={`/go/${item.key}`}>
									<Image
										className={`umami--click--aff-gift-${item.key}`}
										src={item.banner}
										alt={t(`gift:${item.label}`)}
										title={t(`gift:${item.label}`)}
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
							{item.title && (
								<h2 className="mb-1 mt-3 text-xl font-bold tracking-tight hover:underline">
									<Link
										href={`/go/${item.key}`}
										passHref
										legacyBehavior
										className="text-red-800"
									>
										<a target={`_blank`} href={`/go/${item.key}`}>
											<span className={`umami--click--gift-${item.key}`}>
												{t(`gift:${item.title}`)}
											</span>
										</a>
									</Link>
								</h2>
							)}
						</div>
					);
				})}
			</Masonry>
		</GiftLayout>
	);
}

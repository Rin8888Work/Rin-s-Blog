import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link } from '~/components/Link';
import { PageSeo } from '~/components/SEO';
import { Twemoji } from '~/components/Twemoji';
import { siteMetadata } from '~/data/siteMetadata';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header'])),
		},
	};
};

export default function FourZeroFour() {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<>
			<PageSeo
				title={`${t('notFound')} | ${t(siteMetadata.title)}`}
				description={t(siteMetadata.description)}
			/>

			<div className="flex flex-col items-center justify-center pt-4 md:pt-10 xl:pt-20">
				<div>
					<Image
						src={'/static/images/404.png'}
						alt="404"
						width={500}
						height={500}
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</div>
				<div className="space-x-2 pt-8 md:space-y-5 md:pt-12 xl:pt-16">
					<div className="max-w-md text-center">
						<p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
							{t('notFoundT')} <Twemoji emoji={'face-with-monocle'} />
						</p>
						<p className="mb-8">{t('notFoundContent')}</p>
						<button
							onClick={() => router.back()}
							className="focus:shadow-outline-blue mr-5 inline rounded-lg border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500"
						>
							{t('notFoundButtonBack')}
						</button>
						<Link href="/">
							<button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
								{t('notFoundButton')}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

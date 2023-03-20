import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from './ScreenWidth';

export function RulesLayout({ children }: any) {
	const { t } = useTranslation(['rules', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('rules:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('rules:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('rules:title')} leading={t('rules:leading')} />

			<ScreenWidth>
				<div className="prose-lg dark:prose-dark ">{children}</div>
			</ScreenWidth>
		</>
	);
}

export default RulesLayout;

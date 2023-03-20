import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from './ScreenWidth';

export function PrivacyLayout({ children }: any) {
	const { t } = useTranslation(['privacy', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('privacy:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('privacy:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('privacy:title')} leading={t('privacy:leading')} />

			<ScreenWidth>
				<div className="prose-lg dark:prose-dark ">{children}</div>
			</ScreenWidth>
		</>
	);
}

export default PrivacyLayout;

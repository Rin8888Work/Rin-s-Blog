import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function WebsiteServiceLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['website', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('website:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('website:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('website:title')} leading={t('website:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default WebsiteServiceLayout;

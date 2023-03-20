import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ServiceLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['service', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('service:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('service:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('service:title')} leading={t('service:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ServiceLayout;

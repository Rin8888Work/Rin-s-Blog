import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ServiceLayout({ children }: PageLayoutProps) {
	let description = 'My professional career, experience, and skills.';
	const { t } = useTranslation('service');

	return (
		<>
			<PageSeo
				title={`${t('title')} - ${siteMetadata.fullName} - ${description}`}
				description={`${t('title')} - ${siteMetadata.fullName} - ${description}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('title')} leading={t('leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ServiceLayout;

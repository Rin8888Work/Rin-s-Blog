import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PromotionLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation('gift');

	return (
		<>
			<PageSeo
				title={`${t('title')} - ${siteMetadata.fullName} - ${t('description')}`}
				description={`${t('title')} - ${siteMetadata.fullName} - ${t('description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('title')} leading={t('leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PromotionLayout;

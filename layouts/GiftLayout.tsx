import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PromotionLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['gift', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('gift:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('gift:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('gift:title')} leading={t('gift:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PromotionLayout;

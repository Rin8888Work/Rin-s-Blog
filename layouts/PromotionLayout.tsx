import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PromotionLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['promotion', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('promotion:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('promotion:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('promotion:title')} leading={t('promotion:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PromotionLayout;

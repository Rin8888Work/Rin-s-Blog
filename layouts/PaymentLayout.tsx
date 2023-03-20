import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PaymentLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['payment', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('payment:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('payment:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('payment:title')} leading={t('payment:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PaymentLayout;

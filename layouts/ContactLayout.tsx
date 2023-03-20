import { PageSeo } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ContactLayout({ children }: PageLayoutProps) {
	const { t } = useTranslation(['contact', 'common']);

	return (
		<>
			<PageSeo
				title={`${t('contact:title')} | ${t(`common:${siteMetadata.fullName}`)}`}
				description={`${t('contact:description')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('contact:title')} leading={t('contact:leading')} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ContactLayout;

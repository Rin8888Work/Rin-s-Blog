import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ServiceLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`Dịch vụ mạng xã hội | ${siteMetadata.fullName}`}
				description={`Những dì mình có thể giúp bạn? Facebook, Instagram, Tiktok, Shopee, Youtube, ...`}
			/>
			<ScrollTopButton />
			<PageTitle title={`Dịch vụ mạng xã hội`} leading={`Những dì mình có thể giúp bạn?`} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ServiceLayout;

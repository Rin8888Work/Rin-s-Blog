import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function WebsiteServiceLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`Thiết kế website chuyên nghiệp, trọn gói | ${siteMetadata.fullName}`}
				description={`Dịch vụ thiết kế website đa ngành nghề & lĩnh vực`}
			/>
			<ScrollTopButton />
			<PageTitle
				title={`Thiết kế website chuyên nghiệp, trọn gói`}
				leading={`Dịch vụ thiết kế website đa ngành nghề & lĩnh vực`}
			/>
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default WebsiteServiceLayout;

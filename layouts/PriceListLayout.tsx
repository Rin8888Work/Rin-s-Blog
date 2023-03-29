import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PriceListLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`Bảng giá - ${siteMetadata.fullName}`}
				description={`Bảng giá tham khảo cho các dịch vụ tại ${siteMetadata.siteUrl}`}
			/>
			<ScrollTopButton />
			<PageTitle title={`Bảng giá`} leading={``} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PriceListLayout;

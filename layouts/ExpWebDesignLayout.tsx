import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ExpWebDesignLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`${`Mẫu thiết kế website`} | ${siteMetadata.fullName}`}
				description={`Tổng hợp các mẫu thiết kế website phổ biến trong các lĩnh vực như: thiết kế website bán hàng, thiết kế website bất động sản, thiết kế website thời trang,...`}
			/>
			<ScrollTopButton />
			<PageTitle
				title={`Mẫu thiết kế website`}
				leading={`Tổng hợp các mẫu thiết kế website phổ biến đa lĩnh vực`}
			/>
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ExpWebDesignLayout;

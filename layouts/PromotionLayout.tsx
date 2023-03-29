import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PromotionLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`Khuyến mãi Domain, Hosting, VPS/Server | ${siteMetadata.fullName}`}
				description={`Khuyến mãi giảm giá, Mã giảm giá, Coupon khi mua Hosting, Domain, VPS/Server cập nhật hàng ngày.`}
			/>
			<ScrollTopButton />
			<PageTitle
				title={`Khuyến mãi Domain, Hosting, VPS/Server`}
				leading={`Khuyến mãi giảm giá, Mã giảm giá, Coupon khi mua Hosting, Domain, VPS/Server cập nhật hàng ngày.`}
			/>
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PromotionLayout;

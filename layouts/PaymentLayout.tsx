import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function PaymentLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`Thông Tin Thanh Toán | ${siteMetadata.fullName}`}
				description={`Bạn có thể thanh toán cho các dịch vụ thông qua một trong các phương thức sau`}
			/>
			<ScrollTopButton />
			<PageTitle
				title={`Thông Tin Thanh Toán`}
				leading={`Bạn có thể thanh toán cho các dịch vụ thông qua một trong các phương thức sau`}
			/>
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PaymentLayout;

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
				title={`${`Quà tặng`} | ${siteMetadata.fullName}`}
				description={`Trang này sẽ liệt kê những quà tặng miễn phí mà mình dành cho bạn về kiếm tiền online, công nghệ...`}
			/>
			<ScrollTopButton />
			<PageTitle title={`Quà tặng`} leading={`Quà tặng miễn phí mình dành cho bạn`} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default PromotionLayout;

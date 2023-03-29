import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

export function ContactLayout({ children }: PageLayoutProps) {
	return (
		<>
			<PageSeo
				title={`${`Liên hệ`} | ${siteMetadata.fullName}`}
				description={`Vui lòng liên hệ thông qua những phương thức được liệt kê trong trang này hoặc gửi thông tin liên hệ của bạn nếu bạn có bất kì thắc mắc nào. `}
			/>
			<ScrollTopButton />
			<PageTitle
				title={`Liên hệ`}
				leading={`Nếu bạn có bất kì thắc mắc nào. Vui lòng liên hệ thông qua những phương thức bên dưới hoặc gửi thông tin liên hệ của bạn`}
			/>
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default ContactLayout;

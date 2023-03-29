import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from './ScreenWidth';

export function PrivacyLayout({ children }: any) {
	return (
		<>
			<PageSeo
				title={`Chính sách bảo mật |${siteMetadata.fullName}`}
				description={`Chính sách bảo mật của ${siteMetadata.siteUrl}`}
			/>
			<ScrollTopButton />
			<PageTitle title={`Chính sách bảo mật`} leading={``} />

			<ScreenWidth>
				<div className="prose-lg dark:prose-dark ">{children}</div>
			</ScreenWidth>
		</>
	);
}

export default PrivacyLayout;

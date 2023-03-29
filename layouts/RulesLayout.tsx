import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from './ScreenWidth';

export function RulesLayout({ children }: any) {
	return (
		<>
			<PageSeo
				title={`Điều khoản sử dụng | ${siteMetadata.fullName}`}
				description={`Diều khoản sử dụng của ${siteMetadata.siteUrl}`}
			/>
			<ScrollTopButton />
			<PageTitle title={`Điều khoản sử dụng`} leading={``} />

			<ScreenWidth>
				<div className="prose-lg dark:prose-dark ">{children}</div>
			</ScreenWidth>
		</>
	);
}

export default RulesLayout;

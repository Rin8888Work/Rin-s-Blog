import { PageSeo } from 'components/SEO';
import { PageTitle } from '~/components/PageTitle';
import { ScrollTopButton } from '~/components/ScrollTopButton';
import { siteMetadata } from '~/data/siteMetadata';
import type { PageLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';

interface DemoSiteLayout extends PageLayoutProps {
	title: string;
	desc: string;
}
export function DemoSiteLayout({ children, title, desc }: DemoSiteLayout) {
	return (
		<>
			<PageSeo title={`${title} | ${siteMetadata.fullName}`} description={desc} />
			<ScrollTopButton />
			<PageTitle title={title} leading={``} />
			<ScreenWidth>{children}</ScreenWidth>
		</>
	);
}

export default DemoSiteLayout;

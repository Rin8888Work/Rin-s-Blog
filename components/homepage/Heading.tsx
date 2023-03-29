import { Twemoji } from '~/components/Twemoji';
import { siteMetadata } from '~/data/siteMetadata';

export function Heading() {
	return (
		<h1 className="text-neutral-900 dark:text-neutral-200">
			Mình là <span className="font-medium">{siteMetadata.fullName}</span> - một người đam mê
			kiếm tiền online tại
			<span className="sr-only font-medium">TP. Hồ Chí Minh, Việt Nam</span>
			<span className="absolute ml-2 inline-flex pt-[3px]">
				<Twemoji emoji="flag-vietnam" />
			</span>
		</h1>
	);
}

import { useTranslation } from 'next-i18next';
import { Link } from '../Link';
import { Twemoji } from '../Twemoji';

export function BlogLinks() {
	const { t } = useTranslation('home');

	return (
		<div className="mt-4 flex flex-col space-y-1.5 ">
			<Link href="/social-services" className="inline-block hover:underline">
				<Twemoji emoji="hammer-and-wrench" />
				<span className="umami--click--home-link-social-services ml-1.5">
					{t('internalLink.socialService')}
				</span>
			</Link>
			<Link href="/website-services" className="inline-block hover:underline">
				<Twemoji emoji="hammer-and-wrench" />
				<span className="umami--click--home-link-website-services ml-1.5">
					{t('internalLink.websiteService')}
				</span>
			</Link>
			<Link href="/blog" className="inline-block hover:underline">
				<Twemoji emoji="memo" />
				<span className="umami--click--home-link-blog ml-1.5">
					{t('internalLink.blog')}
				</span>
			</Link>
			<Link href="/promotion-domain-hosting-vps" className="inline-block hover:underline">
				<Twemoji emoji="face-with-monocle" />
				<span className="umami--click--home-link-promotion-domain-hosting-vps ml-1.5">
					{t('internalLink.promotion')}
				</span>
			</Link>
			<Link href="/about" className="inline-block hover:underline">
				<Twemoji emoji="card-index" />
				<span className="umami--click--home-link-about ml-1.5">
					{t('internalLink.about')}
				</span>
			</Link>
			<Link href="/payment" className="inline-block hover:underline">
				<Twemoji emoji="ticket" />
				<span className="umami--click--home-link-payment ml-1.5">
					{t('internalLink.payment')}
				</span>
			</Link>
			<Link href="/contact" className="inline-block hover:underline">
				<Twemoji emoji="link" />
				<span className="umami--click--home-link-contact ml-1.5">
					{t('internalLink.contact')}
				</span>
			</Link>
		</div>
	);
}

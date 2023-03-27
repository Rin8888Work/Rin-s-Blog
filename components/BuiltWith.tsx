import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { siteMetadata } from '~/data/siteMetadata';
import { DevIcon } from './DevIcon';
import { Link } from './Link';

export function BuiltWith() {
	const router = useRouter();
	const { t } = useTranslation();
	return (
		<div className="flex items-center space-x-1">
			<span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
			<div className="flex space-x-1.5">
				<Link href="https://nextjs.org/" aria-label={t('ariaLabel.nextjs')}>
					<DevIcon type="NextJS" className="h-5 w-5" />
				</Link>
				<Link href="https://tailwindcss.com/" aria-label={t('ariaLabel.tailwindcss')}>
					<DevIcon type="TailwindCSS" className="h-5 w-5" />
				</Link>
				<Link href="https://www.prisma.io/" aria-label={t('ariaLabel.prisma')}>
					<DevIcon type="Prisma" className="h-5 w-5" />
				</Link>
				<Link
					href="https://www.typescriptlang.org/"
					aria-label={t('ariaLabel.typescriptlang')}
				>
					<DevIcon type="Typescript" className="h-5 w-5" />
				</Link>
				<Link href="https://umami.is/" className="pl-px" aria-label={t('ariaLabel.umami')}>
					<DevIcon type="Umami" className="h-5 w-5" />
				</Link>
				<Link
					className="dmca-badge pl-px"
					href={`https://dmca.com/Protection/Status.aspx?ID=fde0a6d4-3c92-4914-bccb-f1c7ded156b8&refurl=${siteMetadata.siteUrl}${router.pathname}`}
					aria-label={t('ariaLabel.dmca')}
				>
					<img
						src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-07.png?ID=fde0a6d4-3c92-4914-bccb-f1c7ded156b8"
						alt="DMCA.com Protection Status"
					/>
				</Link>
			</div>
		</div>
	);
}

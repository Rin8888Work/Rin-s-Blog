import { DevIcon } from './DevIcon';
import { Link } from './Link';

export function BuiltWith() {
	return (
		<div className="flex items-center space-x-1">
			<span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
			<div className="flex space-x-1.5">
				<Link href="https://nextjs.org/">
					<DevIcon type="NextJS" className="h-5 w-5" />
				</Link>
				<Link href="https://tailwindcss.com/">
					<DevIcon type="TailwindCSS" className="h-5 w-5" />
				</Link>
				<Link href="https://www.prisma.io/">
					<DevIcon type="Prisma" className="h-5 w-5" />
				</Link>
				<Link href="https://www.typescriptlang.org/">
					<DevIcon type="Typescript" className="h-5 w-5" />
				</Link>
				<Link href="https://umami.is/" className="pl-px">
					<DevIcon type="Umami" className="h-5 w-5" />
				</Link>
				<Link
					href="https://www.dmca.com/Protection/Status.aspx?id=5909999d-dcd1-4b33-b205-f6ad9e79f1c9"
					title="DMCA.com Protection Status"
					className="dmca-badge pl-px"
				>
					<img
						src="//images.dmca.com/Badges/dmca-badge-w100-5x1-04.png?ID=//www.dmca.com/Protection/Status.aspx?id=5909999d-dcd1-4b33-b205-f6ad9e79f1c9"
						alt="DMCA.com Protection Status"
					/>
				</Link>
			</div>
		</div>
	);
}

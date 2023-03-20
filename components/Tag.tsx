import Link from 'next/link';
import { kebabCase } from '~/utils/kebab-case';

export function Tag({ text }: { text: string }) {
	return (
		<Link
			href={`/tags/${kebabCase(text)}`}
			className="mr-3 text-sm font-medium text-rose-500 hover:text-rose-600 md:text-base"
		>
			<span className="umami--click--tag">#{text.split(' ').join('-')}</span>
		</Link>
	);
}

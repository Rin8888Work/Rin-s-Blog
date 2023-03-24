import Link from 'next/link';
import { kebabCase } from '~/utils/kebab-case';

export function Tag({ text }: { text: string }) {
	return (
		<Link
			href={`/tags/${kebabCase(text)}`}
			className="mr-3 rounded-lg bg-gray-300 px-1 text-sm font-medium italic text-rose-500 hover:bg-gray-100 hover:text-rose-600 "
		>
			<span className="umami--click--tag">#{text.split(' ').join('-')}</span>
		</Link>
	);
}

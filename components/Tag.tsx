import Link from 'next/link';
import { kebabCase } from '~/utils/kebab-case';

export function Tag({ text }: { text: string }) {
	return (
		<Link
			href={`/tags/${kebabCase(text)}`}
			className="mr-3 rounded-sm bg-gray-300 bg-gradient-to-t from-cyan-700 to-teal-500 p-1 text-sm font-medium italic text-white hover:from-teal-500 hover:to-cyan-700"
		>
			<span className="umami--click--tag">{text.split(' ').join('-')}</span>
		</Link>
	);
}

import type React from 'react';
import type { PropsWithChildren } from 'react';

interface TitleSectionProps {
	sx?: string;
}
const TitleSection: React.FC<PropsWithChildren<TitleSectionProps>> = ({ children, sx = '' }) => {
	return (
		<h2
			className={`relative m-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-center text-2xl font-bold uppercase leading-[60px] tracking-tight text-transparent  dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600 sm:py-4 md:text-4xl ${sx}`}
		>
			<span className="inline-block after:table after:h-8  after:w-full after:bg-[url('/static/images/line.png')] after:bg-center after:bg-no-repeat">
				{children}
			</span>
		</h2>
	);
};

export default TitleSection;

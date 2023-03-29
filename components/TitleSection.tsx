import type React from 'react';
import type { PropsWithChildren } from 'react';

interface TitleSectionProps {
	sx?: string;
}
const TitleSection: React.FC<PropsWithChildren<TitleSectionProps>> = ({ children, sx = '' }) => {
	return (
		<h2 className={`relative m-4  flex justify-center`}>
			<span
				className={`${sx} inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text  text-center text-2xl font-bold uppercase leading-[60px] tracking-tight text-transparent after:table after:h-8 after:w-full  after:bg-[url('/static/images/line.png')] after:bg-center after:bg-no-repeat dark:bg-gradient-to-r dark:from-blue-300  dark:to-teal-500 sm:py-4 md:text-4xl`}
			>
				{children}
			</span>
		</h2>
	);
};

export default TitleSection;

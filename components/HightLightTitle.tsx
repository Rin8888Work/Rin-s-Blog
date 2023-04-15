import type React from 'react';
import type { PropsWithChildren } from 'react';

interface HightLightTitleProps {
	text: string;
	hl?: string | string[];
}
const HightLightTitle: React.FC<PropsWithChildren<HightLightTitleProps>> = ({ text, hl = '' }) => {
	return (
		<h2 className={`title-section relative m-4 flex justify-center`}>
			<span
				className={`inline-block text-center text-2xl font-bold capitalize leading-[35px] tracking-tight after:table  after:h-8 after:w-full after:bg-[url('/static/images/line.png')]  after:bg-center after:bg-no-repeat sm:py-4 md:text-4xl`}
			>
				{text.split('--')?.map((t, index) => {
					return t === hl || hl.includes(t) ? (
						<b
							key={index}
							className=" bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-300  dark:to-teal-500"
						>
							{t}
						</b>
					) : (
						t
					);
				})}
			</span>
		</h2>
	);
};

export default HightLightTitle;

import Image from 'next/legacy/image';
import { siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from '~/layouts/ScreenWidth';
import type { PageTitleProps } from '~/types';

export function PageTitle({ children, title, leading = '' }: PageTitleProps) {
	return (
		<div className="relative mb-4 sm:mb-10">
			<div className="absolute top-0 -z-20 h-full w-full after:absolute after:block after:h-full after:w-full after:bg-neutral-800/50">
				<Image
					src={'/static/images/bg-head.jpg'}
					layout="fill"
					objectFit="cover"
					alt={`Background header of ${siteMetadata.title}`}
				/>
				{/* <div className="before:absolute before:block before:bg-pink-500"></div> */}
			</div>
			<ScreenWidth>
				{children ? (
					<div className="space-y-1 pt-6 pb-8 md:space-y-2">
						{children}
						<div className="flex justify-center">
							<div className="w-2/4 border-b  border-gray-100/50 py-2"></div>
						</div>
					</div>
				) : (
					<div className="space-y-1 pt-6 pb-8 md:space-y-2">
						<h1 className="text-center text-2xl font-extrabold capitalize leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
							{title}
						</h1>
						{leading && (
							<p className="px-8 text-center text-lg leading-7 text-gray-300">
								{leading}
							</p>
						)}
						<div className="flex justify-center">
							<div className="w-2/4 border-b  border-gray-100/50 py-2"></div>
						</div>
					</div>
				)}
			</ScreenWidth>
		</div>
	);
}

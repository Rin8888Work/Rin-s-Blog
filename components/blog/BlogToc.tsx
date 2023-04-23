import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getIconTocLevel } from '~/utils';
import Twemoji from '../Twemoji';

const mapChildrenTOC = (toc, activeHeading) => {
	const handleClick = async (event, hash) => {
		event.preventDefault();
		await import('../../utils/scrollToHash').then((module) => {
			module.scrollToHash(`#${hash}`, 60);
		});
	};

	return toc?.map((t) => (
		<li className={`${t.depth > 2 ? 'ml-4' : ''} py-2`} key={t.url}>
			<div className="flex items-center">
				<span
					className={`${
						activeHeading === t.url ? 'bg-teal-500' : ''
					} mr-2 h-2.5 w-2.5 flex-shrink-0  border-2 !border-teal-600  dark:border-teal-500`}
				></span>
				<Link
					title={t.value}
					href={`#${t.url}`}
					className={`${
						activeHeading === t.url ? 'text-teal-600 dark:text-teal-500' : ''
					} flex cursor-pointer items-center gap-1`}
					onClick={(event) => handleClick(event, t.url)}
				>
					<span className="w-6">
						<Twemoji emoji={getIconTocLevel(t.depth - 1)} />
					</span>
					<span className="capitalize">{t.value}</span>
				</Link>
			</div>
			{t.children && <ul>{mapChildrenTOC(t.children, activeHeading)} </ul>}
		</li>
	));
};

function BlogToc({ toc }) {
	const [activeHeading, setActiveHeading] = useState(null);
	const [readMore, setReadMore] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 200) {
				setIsFixed(true);
				setIsOpen(false);
			} else {
				setIsFixed(false);
				setIsOpen(true);
			}

			const headings = document.querySelectorAll('h2, h3, h4, h5, h6, .custom-heading');
			let activeHeading = null;
			for (let i = 0; i < headings.length; i++) {
				const heading = headings[i];
				const rect = heading.getBoundingClientRect();
				if (rect.top >= 50 && rect.bottom <= window.innerHeight / 2) {
					activeHeading = heading.getAttribute('id');
				}
			}
			activeHeading && setActiveHeading(activeHeading);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`transition duration-500 ease-in-out ${
				isFixed ? 'fixed left-5 top-[70px] z-40 drop-shadow-xl' : 'top-24'
			} max-h-[calc(60vh)] overflow-y-auto overflow-x-hidden rounded-lg ${
				isFixed ? 'bg-slate-100' : 'bg-slate-100/70'
			} p-2 py-4 text-sm dark:bg-slate-800 xl:sticky`}
		>
			{isFixed && (
				<button
					className="flex justify-center"
					onClick={() => setIsOpen(!isOpen)}
					onKeyDown={() => false}
				>
					<Twemoji emoji="scroll" size="2x" />
				</button>
			)}

			<ul
				className={`relative ${
					readMore ? '' : 'max-h-48 overflow-hidden'
				} transition duration-500 ease-in-out lg:max-h-[unset] lg:overflow-visible ${
					isOpen ? '' : 'h-0 w-0 xl:h-auto xl:w-auto'
				}`}
			>
				{!readMore && (
					<div
						className={`absolute bottom-0 left-0 h-16 w-full  bg-gradient-to-t from-slate-100 to-transparent transition dark:from-slate-800 lg:hidden`}
					></div>
				)}

				<ul>{mapChildrenTOC(toc, activeHeading)}</ul>
			</ul>
			<div
				className={`mx-auto text-center transition duration-500 ease-in-out lg:hidden ${
					isOpen ? 'w-full' : 'h-0 w-0 overflow-hidden xl:h-auto xl:w-auto'
				}`}
			>
				<button
					className={`space-x-2 ${
						readMore ? '' : '-my-4'
					} mx-auto flex items-center border-none p-4 font-semibold tracking-widest text-gray-400`}
					onClick={() => setReadMore(!readMore)}
				>
					<span>{readMore ? 'Thu lại' : `Xem thêm`}</span>
					<span className={readMore ? 'rotate-180' : ''}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="ml-2 h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
							></path>
						</svg>
					</span>
				</button>
			</div>
		</nav>
	);
}

export default BlogToc;

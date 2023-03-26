import { useTranslation } from 'next-i18next';
import Scrollspy from 'react-scrollspy';

function BlogToc({ toc }) {
	const { t } = useTranslation('common');

	return (
		<nav className="sticky top-24 rounded-lg bg-slate-100/70 p-2 py-4 text-sm dark:bg-slate-800 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">
			<ul className="relative max-h-48 overflow-hidden lg:max-h-[unset] lg:overflow-visible">
				<div className="absolute bottom-0 left-0 h-16 w-full  bg-gradient-to-t from-slate-100 to-transparent transition-all dark:from-slate-800 lg:hidden"></div>

				<Scrollspy
					items={toc.map((t) => t.url)}
					currentClassName="active text-teal-600 dark:text-teal-500"
				>
					{toc?.map((t) => (
						<li className="group flex items-center py-2" key={t.url}>
							<span className=" mr-2 h-2.5 w-2.5 flex-shrink-0  border-2 !border-teal-600  bg-transparent group-[.active]:bg-teal-500  dark:border-teal-500"></span>
							<a title={t.value} href={`#${t.url}`} className={' cursor-pointer'}>
								{t.value}
							</a>
						</li>
					))}
				</Scrollspy>
			</ul>
			<div className="mx-auto w-full text-center lg:hidden">
				<button className="-my-4 mx-auto flex items-center border-none p-4 font-semibold tracking-widest text-gray-400">
					<span>{t('readMore')}</span>
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
				</button>
			</div>
		</nav>
	);
}

export default BlogToc;

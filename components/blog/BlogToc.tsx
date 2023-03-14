import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

export default function BlogToc({ toc }) {
	const { t } = useTranslation('common');
	//   const router = useRouter()
	//   const [activeHeading, setActiveHeading] = useState('')

	//   useEffect(() => {
	//     const urlWithoutHash = router.asPath.split('#')[0]
	//     if (activeHeading)
	//       router.replace(`${urlWithoutHash}${activeHeading}`, undefined, { shallow: true })
	//   }, [activeHeading])

	//   useEffect(() => {
	//     const handleScroll = () => {
	//       const scrollY = window.scrollY
	//       const newActiveHeading = toc.find((heading) => {
	//         const element = document.getElementById(heading.url.substring(1))
	//         if (element) {
	//           const elementTop = element.getBoundingClientRect().top + scrollY
	//           const elementBottom = element.getBoundingClientRect().bottom + scrollY
	//           console.log({ e: heading.url.substring(1), elementTop, scrollY, elementBottom })

	//           const isInView = elementTop <= scrollY && elementBottom > scrollY

	//           return isInView
	//         }
	//       })

	//       if (newActiveHeading) {
	//         setActiveHeading(newActiveHeading.url)
	//       }
	//     }

	//     window.addEventListener('scroll', handleScroll)

	//     return () => {
	//       window.removeEventListener('scroll', handleScroll)
	//     }
	//   })

	return (
		<nav className="sticky top-24 rounded-lg bg-slate-100/70 p-2 py-4 text-sm dark:bg-slate-800 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto">
			<ul className="relative max-h-48 overflow-hidden lg:max-h-[unset] lg:overflow-visible">
				<div className="absolute bottom-0 left-0 h-16 w-full  bg-gradient-to-t from-slate-100 to-transparent transition-all dark:from-slate-800 lg:hidden"></div>

				{toc?.map((t) => (
					<li className="py-2" key={t.url}>
						<div className="flex items-center">
							<span className=" mr-1.5 h-2.5 w-2.5 flex-shrink-0  border-2 !border-teal-600  bg-transparent bg-teal-600 dark:border-teal-500 dark:bg-teal-500"></span>
							<a
								title={t.value}
								href={t.url}
								// className={activeHeading === t.url ? 'text-teal-600 dark:text-teal-500' : ''}
							>
								{t.value}
							</a>
						</div>
					</li>
				))}
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

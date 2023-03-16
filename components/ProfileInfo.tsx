import { useTranslation } from 'next-i18next';
import { Twemoji } from '~/components/Twemoji';
import { siteMetadata } from '~/data/siteMetadata';

export function ProfileCardInfo({ direction }: { direction?: 'column' | 'row' }) {
	const { t } = useTranslation('common');
	return (
		<div className={`py-4 px-5 xl:block ${direction === 'column' ? '' : 'xl:w-2/4'} xl:px-6`}>
			<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
				{t(siteMetadata.fullName)}({siteMetadata.nickName})
			</h3>
			<h5 className="py-2 text-gray-700 dark:text-gray-400">
				Mmo person - Website developer
			</h5>
			<div className="mt-4 mb-2 space-y-4">
				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>

					<p className="px-2">
						CTO / Founder @
						<a
							target="_blank"
							href="https://cheapershopping.net"
							rel="noreferrer"
							className="hover:underline"
						>
							Cheapershopping
						</a>
					</p>
				</div>

				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>

					<p className="px-2">
						{siteMetadata.address}
						<span className="absolute ml-1 inline-flex pt-px">
							<Twemoji emoji="flag-vietnam" />
						</span>
					</p>
				</div>
				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<g>
							<path
								fillRule="nonzero"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"
							/>
						</g>
					</svg>

					<a className="px-2 hover:underline" href={`tel:${siteMetadata.phoneNumber}`}>
						{siteMetadata.phoneNumber}
					</a>
				</div>
				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					<a className="px-2 hover:underline" href={`mailto:${siteMetadata.email}`}>
						{siteMetadata.email}
					</a>
				</div>
				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<g>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"
							/>
						</g>
					</svg>

					<p className="flex space-x-1.5 px-2">
						<a
							target="_blank"
							href={siteMetadata.linkedin}
							rel="noreferrer"
							className="umami--click--profile-card-linkedin hover:underline"
						>
							in/{siteMetadata.socialAccounts.linkedin}
						</a>
					</p>
				</div>
				<div className="flex items-center text-gray-700 dark:text-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
						/>
					</svg>
					<p className="flex space-x-1.5 px-2">
						<a
							target="_blank"
							href={siteMetadata.twitter}
							rel="noreferrer"
							className="umami--click--profile-card-twitter hover:underline"
						>
							tw/{siteMetadata.socialAccounts.twitter}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

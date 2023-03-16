import { Image } from './Image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function ServiceItem({
	itemActive,
	name,
	price,
	description,
	openItem,
	externalLink,
	adviseLink,
	color,
}: {
	[x: string]: any;
}) {
	const { t } = useTranslation(['service']);

	return (
		<li>
			<div
				className={`${
					itemActive === name && 'z-10 bg-slate-800 text-white'
				} relative  transition-all duration-300 ease-in-out`}
			>
				<div
					className={`${
						itemActive !== name && 'border-b border-dashed border-slate-300'
					} flex items-center justify-center    p-4`}
				>
					<h3 className="ml-2 text-xl font-bold">{t(`service:${name}`)}</h3>
				</div>
				<div
					className={`absolute ${
						itemActive === name && 'z-10 bg-slate-800 pb-4 pl-4 pr-4'
					} left-0  w-full `}
				>
					<div
						className={`${
							itemActive === name ? '' : 'hidden'
						} transition-all duration-300 ease-in-out`}
					>
						{description && <p>{t(`service:${description}`)}</p>}
						{t(`service:${price}`) && (
							<div className="mt-2 flex items-center  justify-center ">
								<span>{t('service:price')}</span>
								<span className={`rounded-lg p-1 bg-${color} ml-2 text-sm`}>
									{t(`service:${price}`)}
								</span>
							</div>
						)}

						<div className="mt-3 flex justify-around">
							<Link href={`/go/${adviseLink}`} passHref legacyBehavior>
								<a
									target={`_blank`}
									href={`/go/${adviseLink}`}
									className={'rounded bg-rose-600 py-2 px-5'}
								>
									{t(`service:advise`)}
								</a>
							</Link>
							<Link href={`/go/${externalLink}`} passHref legacyBehavior>
								<a
									target={`_blank`}
									href={`/go/${externalLink}`}
									className={'rounded bg-sky-600 py-2 px-5'}
								>
									{t(`service:detail`)}
								</a>
							</Link>
						</div>
					</div>
					<div
						className={`absolute inset-x-2/4 -bottom-5 ${
							itemActive === name ? 'z-10' : ''
						} flex h-10 w-10 -translate-x-2/4 items-center justify-center`}
					>
						{/* eslint-disable */}
						<div
							className={`inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full hover:bg-rose-800 ${
								itemActive === name ? 'bg-rose-800' : 'bg-stone-200'
							} `}
							onClick={() => openItem(name)}
						>
							<Image
								className={`${
									itemActive === name ? 'rotate-180' : ''
								} transition-all duration-300 ease-in-out`}
								src="/static/images/icon-down.png"
								alt="Dropdown icon"
								width={8}
								height={8}
								shouldOpenLightbox={false}
							/>
						</div>
						{/* eslint-disable */}
					</div>
				</div>
			</div>
		</li>
	);
}

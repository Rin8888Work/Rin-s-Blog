import Image from 'next/image';
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
					<h3 className={`ml-2 ${itemActive === name ? 'text-xl' : 'text-base'} `}>
						{name}
					</h3>
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
						{description && <p>{description}</p>}
						{price && (
							<div className="mt-2 flex items-center  justify-center ">
								<span>Giá: </span>
								<span className={`rounded-lg p-1 bg-${color} ml-2 text-sm`}>
									{price}
								</span>
							</div>
						)}

						<div className="my-3 flex justify-around">
							<Link href={`/go/${adviseLink}`} passHref legacyBehavior>
								<a
									target={`_blank`}
									href={`/go/${adviseLink}`}
									className={`umami--click--advise-${name.replaceAll(
										'.',
										'-'
									)} rounded bg-rose-600 px-5 py-2`}
								>
									{`Tư vấn`}
								</a>
							</Link>
							{externalLink && (
								<Link href={`/go/${externalLink}`} passHref legacyBehavior>
									<a
										target={`_blank`}
										href={`/go/${externalLink}`}
										className={`umami--click--detail-${name.replaceAll(
											'.',
											'-'
										)} rounded bg-sky-600 px-5 py-2`}
									>
										{`Xem chi tiết`}
									</a>
								</Link>
							)}
						</div>
					</div>
					<div
						className={`absolute inset-x-2/4 -bottom-5 ${
							itemActive === name ? 'z-10' : ''
						} flex h-10 w-10 -translate-x-2/4 items-center justify-center`}
					>
						{/* eslint-disable */}
						<div
							className={`umami--click--view-${name.replaceAll(
								'.',
								'-'
							)} inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full hover:bg-rose-800 ${
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
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</div>
						{/* eslint-disable */}
					</div>
				</div>
			</div>
		</li>
	);
}

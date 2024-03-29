import Image from 'next/image';
import Link from 'next/link';
import { seedingLink } from '~/data/siteMetadata';
import type { HomeServiceType } from '~/types/services';

export default function HomeService({ services }: { services: HomeServiceType[] }) {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8  lg:grid-cols-3">
				{services?.map((service, index) => (
					<div key={index} className="flex flex-col items-center justify-center  sm:p-2">
						<div className="flex h-56 w-56 flex-col items-center justify-center">
							<Image
								src={service.image}
								alt={service.name}
								title={service.name}
								width={300}
								height={250}
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</div>
						<h3 className="mt-2 text-xl font-bold uppercase text-cyan-500">
							{service.name}
						</h3>
						<p className="mt-2 text-justify xl:px-10">{service.description}</p>
					</div>
				))}
			</div>

			<Link href={`/go/${seedingLink.adviseLink.key}`} passHref legacyBehavior>
				<a
					className="mb-3 mt-4 inline-block w-48 rounded bg-teal-700 bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5  text-center text-xl font-medium capitalize leading-tight text-white transition-all duration-300  ease-in-out hover:bg-teal-900 hover:from-rose-500 hover:to-pink-500 focus:outline-none focus:ring-0 "
					target={`_blank`}
					href={`/go/${seedingLink.adviseLink.key}`}
				>
					Liên hệ ngay
				</a>
			</Link>
		</div>
	);
}

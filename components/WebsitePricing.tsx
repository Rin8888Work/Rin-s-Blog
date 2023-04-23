import Link from 'next/link';
import { seedingLink } from '~/data/siteMetadata';

export default function WebsitePricing({ websitePriceList }) {
	return (
		<div className="grid lg:grid-cols-3 ">
			{websitePriceList?.map((item, index) => (
				<div className={`p-0 ${index == 1 ? '' : 'py-10 sm:py-12'}`} key={index}>
					<div
						className={`block h-full rounded-lg bg-white shadow-lg ${
							index == 1
								? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
								: ''
						} ${index == 0 ? 'lg:rounded-br-none lg:rounded-tr-none' : ''} ${
							index == 2 ? 'lg:rounded-bl-none lg:rounded-tl-none' : ''
						}`}
					>
						<div className=" p-6 text-center">
							<p className="mb-4 inline-block rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm uppercase ">
								<strong>{item.name}</strong>
							</p>
							<h3 className="mb-6 text-2xl">
								<strong>{item.price}</strong>
								<small className="text-sm text-dark">/website</small>
							</h3>

							<Link
								href={`/go/${seedingLink.adviseLink.key}`}
								passHref
								legacyBehavior
							>
								<a
									className="inline-block w-1/2 rounded  bg-teal-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-teal-900 focus:outline-none focus:ring-0 "
									target={`_blank`}
									href={`/go/${seedingLink.adviseLink.key}`}
								>
									{`Nhận tư vấn`}
								</a>
							</Link>
						</div>
						<div className="p-6">
							<h4 className=" pb-2 font-bold">{`Mô-đun trang`}</h4>
							<ol className="grid list-inside grid-cols-2 gap-x-3 border-t border-gray-300 pt-2">
								{item.moduleWebsite?.map((module, idx) => (
									<li
										className="mb-2 flex items-center justify-between"
										key={idx}
									>
										<span>{module.name}</span>

										{module.isAllow ? (
											<span className="mr-5 w-10 rounded-xl bg-white p-1 text-center text-xs text-green-700">
												{`Có`}
											</span>
										) : (
											<span className="1-4 mr-5 w-10 rounded-xl bg-white text-center text-xs text-red-900">
												{`Không`}
											</span>
										)}
									</li>
								))}
							</ol>
						</div>
						<div className="p-6">
							<h4 className=" pb-2 font-bold">{`Phần tích hợp`}</h4>
							<ol className="grid list-inside border-t border-gray-300 pt-2">
								{item.integralPart?.map((integralPart, i) => (
									<li className="mb-2 flex items-center justify-between" key={i}>
										<span>{integralPart.name}</span>

										{integralPart.isAllow ? (
											<span className="mr-5 w-10 rounded-xl bg-white p-1 text-center text-xs text-green-700">
												{`Có`}
											</span>
										) : (
											<span className="1-4 mr-5 w-10 rounded-xl bg-white text-center text-xs text-red-900">
												{`Không`}
											</span>
										)}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

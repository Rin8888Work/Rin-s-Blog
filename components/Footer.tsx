import Link from 'next/link';
import { seedingLink, siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from '~/layouts/ScreenWidth';
import { BuiltWith } from './BuiltWith';

export function Footer() {
	return (
		<footer className="sm:mt-15 mt-10">
			<ScreenWidth>
				<div className="divide-y divide-slate-200 border-t border-t-slate-200 pt-10  dark:divide-slate-700 dark:border-t-slate-700 md:px-5">
					<div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2 xl:grid-cols-4">
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								Giới thiệu
							</h2>
							<p className="mt-3 text-justify">
								Phát triển bởi Nguyễn Văn Phước vào năm 2023, là website cá nhân
								cung cấp các dịch vụ về website và seeding mạng xã hội và chia sẻ
								kiến thức IT, Marketing giúp mọi người level up kỹ năng của bản thân
								nhanh nhất. Mình tự tin đáp ứng mọi yêu cầu của bạn, giúp bạn có thể
								tiếp cận tốt hơn đến khách hàng của mình trên internet
							</p>
						</div>
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								Liên kết
							</h2>
							<ul className="mt-3 space-y-2">
								<li>
									<Link
										href={`/go/${seedingLink.socialSeeding.key}`}
										passHref
										legacyBehavior
									>
										<a
											target={`_blank`}
											href={`/go/${seedingLink.socialSeeding.key}`}
											className={`umami--click--detail-seeding-page hover:text-slate-900 dark:hover:text-slate-300`}
											aria-label={`Link seeding của ${siteMetadata.siteUrl}`}
										>
											Seeding
										</a>
									</Link>
								</li>
								<li>
									<a
										title="Facebook"
										href={siteMetadata.facebook}
										target="_blank"
										rel="noreferrer"
										className="hover:text-slate-900 dark:hover:text-slate-300"
										aria-label={`Link facebook của ${siteMetadata.fullName}`}
									>
										Facebook
									</a>
								</li>
								<li>
									<a
										href={siteMetadata?.youtube || '#'}
										title="Youtube"
										target="_blank"
										rel="noreferrer"
										className="hover:text-slate-900 dark:hover:text-slate-300"
										aria-label={`Link youtube của ${siteMetadata.fullName}`}
									>
										Youtube
									</a>
								</li>
								<li>
									<a
										href={siteMetadata?.github || '#'}
										title="Github"
										target="_blank"
										rel="noreferrer"
										className="hover:text-slate-900 dark:hover:text-slate-300"
										aria-label={`Link githup của ${siteMetadata.fullName}`}
									>
										Github
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								Chính sách &amp; Điều khoản
							</h2>
							<ul className="mt-3 space-y-2">
								<li>
									<Link
										title={`Chính sách bảo mật`}
										className="hover:text-slate-900 dark:hover:text-slate-300"
										href="/chinh-sach-bao-mat"
										aria-label={`Link policy của ${siteMetadata.siteUrl}`}
									>
										{`Chính sách bảo mật`}
									</Link>
								</li>
								<li>
									<Link
										title={`Điều khoản sử dụng`}
										className="hover:text-slate-900 dark:hover:text-slate-300"
										href="/dieu-khoan-su-dung"
										aria-label={`Link rules của ${siteMetadata.siteUrl}`}
									>
										{`Điều khoản sử dụng`}
									</Link>
								</li>
								<li>
									<Link
										href={`${siteMetadata.siteUrl}/rss/feed.xml`}
										passHref
										legacyBehavior
									>
										<a
											title="RSS"
											className="hover:text-slate-900 dark:hover:text-slate-300"
											href={`${siteMetadata.siteUrl}/rss/feed.xml`}
											target={'_blank'}
											aria-label={`Rss của ${siteMetadata.siteUrl}`}
										>
											RSS
										</a>
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								Fanpage
							</h2>
							<div className="mt-3 space-y-2">
								<iframe
									className="bg-transparent"
									title={`Fanpage of ${siteMetadata.fullName}`}
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnguyenvanphuoc.page&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=433728550505340"
									style={{ border: 'none', overflow: 'hidden' }}
									width={'340'}
									height={130}
								></iframe>
							</div>
						</div>
					</div>
					<div className="mt-4 flex flex-col items-center justify-center py-10">
						<BuiltWith />
						<div className="my-2 mt-6 flex flex-col items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
							<div>{`Copyright © ${new Date().getFullYear()}`}</div>
							<span>{` • `}</span>

							<span className="text-center">{siteMetadata.footerTitle}</span>
						</div>
					</div>
				</div>
			</ScreenWidth>
		</footer>
	);
}

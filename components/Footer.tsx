import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { seedingLink, siteMetadata } from '~/data/siteMetadata';
import ScreenWidth from '~/layouts/ScreenWidth';
import { BuiltWith } from './BuiltWith';

export function Footer() {
	const { locale } = useRouter();
	const { t } = useTranslation('common');

	return (
		<footer className="sm:mt-15 mt-10">
			<ScreenWidth>
				<div className="divide-y divide-slate-200 border-t border-t-slate-200 px-4 pt-10 dark:divide-slate-700 dark:border-t-slate-700 md:px-5">
					<div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2 xl:grid-cols-4">
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								{t('introduce')}
							</h2>
							<p className="mt-3 text-justify">{t(siteMetadata.introduceWebsite)}</p>
						</div>
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								{t('link')}
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
									>
										Github
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="font-semibold text-slate-900 dark:text-slate-100">
								{t('policy')} &amp; {t('rules')}
							</h2>
							<ul className="mt-3 space-y-2">
								<li>
									<Link
										title={t('privacyPolicy')}
										className="hover:text-slate-900 dark:hover:text-slate-300"
										href="/privacy-policy"
									>
										{t('privacyPolicy')}
									</Link>
								</li>
								<li>
									<Link
										title={t('rules')}
										className="hover:text-slate-900 dark:hover:text-slate-300"
										href="/rules"
									>
										{t('rules')}
									</Link>
								</li>
								<li>
									<Link
										href={`${siteMetadata.siteUrl}/rss/feed.${locale}.xml`}
										passHref
										legacyBehavior
									>
										<a
											title="RSS"
											className="hover:text-slate-900 dark:hover:text-slate-300"
											href={`${siteMetadata.siteUrl}/rss/feed.${locale}.xml`}
											target={'_blank'}
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
									title={`Fanpage of ${t(siteMetadata.fullName)}`}
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnguyenvanphuoc.page&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=433728550505340"
									style={{ border: 'none', overflow: 'hidden' }}
									width={'100%'}
									height={271}
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								></iframe>
							</div>
						</div>
					</div>
					<div className="mt-4 flex flex-col items-center justify-center py-10">
						<BuiltWith />
						<div className="my-2 mt-6 flex flex-col items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
							<div>{`Copyright © ${new Date().getFullYear()}`}</div>
							<span>{` • `}</span>

							<span className="text-center">{t(siteMetadata.footerTitle)}</span>
						</div>
					</div>
				</div>
			</ScreenWidth>
		</footer>
	);
}

import React from 'react';
import { useTranslation } from 'next-i18next';
import { PageTitle } from '~/components/PageTitle';
import { ProfileCard } from '~/components/ProfileCard';
import { PageSeo } from '~/components/SEO';
import { siteMetadata } from '~/data/siteMetadata';
import type { AuthorLayoutProps } from '~/types';
import ScreenWidth from './ScreenWidth';
import { ScrollTopButton } from '~/components/ScrollTopButton';

export function AuthorLayout({ children }: AuthorLayoutProps) {
	const { t } = useTranslation('author');

	return (
		<>
			<PageSeo
				title={`${t('title')} - ${siteMetadata.author} - ${siteMetadata.title}`}
				description={`${t('title')} - ${siteMetadata.title} - ${t('leading')}`}
			/>
			<ScrollTopButton />
			<PageTitle title={t('title')} leading={t('leading')} />

			<ScreenWidth>
				<div className="items-start space-y-2 pt-8 xl:grid xl:grid-cols-12 xl:space-y-0">
					<div className="h-full xl:col-span-3">
						<div className="sticky top-20 z-10">
							<ProfileCard direction="column" />
						</div>
					</div>
					<div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-9 xl:pl-10">
						{children}
					</div>
				</div>
			</ScreenWidth>
		</>
	);
}

export default AuthorLayout;

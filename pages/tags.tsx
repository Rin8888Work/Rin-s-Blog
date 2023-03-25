import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Link } from '~/components/Link';
import { PageSeo } from '~/components/SEO';
import { Tag } from '~/components/Tag';
import { siteMetadata } from '~/data/siteMetadata';
import { getAllTags } from '~/libs/tags';
import type { TagsCount } from '~/types';
import { kebabCase } from '~/utils/kebab-case';

export async function getStaticProps({ locale }) {
	let tags = getAllTags(`blog/${locale}`);
	return {
		props: { tags, ...(await serverSideTranslations(locale ?? 'en', ['common', 'header'])) },
	};
}

export default function Tags({ tags }: { tags: TagsCount }) {
	const { t } = useTranslation();
	let sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

	return (
		<>
			<PageSeo
				title={`Tags - ${t(siteMetadata.fullName)}`}
				description={t(siteMetadata.description)}
			/>
			<div className=" flex w-full flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
				<div className="space-x-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
						Tags
					</h1>
				</div>
				<div className="flex max-w-lg flex-wrap">
					{Object.keys(tags).length === 0 && 'No tags found.'}
					{sortedTags.map((tag) => {
						return (
							<div key={tag} className="mt-2 mb-2 mr-5">
								<Tag text={tag} />
								<Link
									href={`/tags/${kebabCase(tag)}`}
									className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									({tags[tag]})
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

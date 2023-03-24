import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { getFileBySlug } from '~/libs/mdx';
import type { MdxFileData } from '~/types';

export async function getStaticProps({ locale }) {
	let privacyData = await getFileBySlug(`policy-rules/${locale}`, `policy`);
	return {
		props: {
			privacyData,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'privacy'])),
		},
	};
}

export default function Privacy({ privacyData }: { privacyData: MdxFileData }) {
	let { mdxSource, frontMatter } = privacyData;
	return (
		<MDXLayoutRenderer
			layout={frontMatter.layout}
			mdxSource={mdxSource}
			frontMatter={frontMatter}
		/>
	);
}

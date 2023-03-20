import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { getFileBySlug } from '~/libs/mdx';
import type { MdxFileData } from '~/types';

export async function getStaticProps({ locale }) {
	let rulesData = await getFileBySlug('policy-rules', 'rules', locale);
	return {
		props: {
			rulesData,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'rules'])),
		},
	};
}

export default function Rules({ rulesData }: { rulesData: MdxFileData }) {
	let { mdxSource, frontMatter } = rulesData;
	return (
		<MDXLayoutRenderer
			layout={frontMatter.layout}
			mdxSource={mdxSource}
			frontMatter={frontMatter}
		/>
	);
}

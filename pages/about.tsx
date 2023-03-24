import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { getFileBySlug } from '~/libs/mdx';
import type { MdxFileData } from '~/types';

export async function getStaticProps({ locale }) {
	let resumeData = await getFileBySlug(`authors/${locale}`, 'default');
	return {
		props: {
			resumeData,
			...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'author'])),
		},
	};
}

export default function About({ resumeData }: { resumeData: MdxFileData }) {
	let { mdxSource, frontMatter } = resumeData;
	return (
		<MDXLayoutRenderer
			layout={frontMatter.layout}
			mdxSource={mdxSource}
			frontMatter={frontMatter}
		/>
	);
}

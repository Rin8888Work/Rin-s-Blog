import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { getFileBySlug } from '~/libs/mdx';
import type { MdxFileData } from '~/types';

export async function getStaticProps() {
	let privacyData = await getFileBySlug(`policy-rules`, `policy`);
	return {
		props: {
			privacyData,
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

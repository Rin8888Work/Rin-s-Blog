import { MDXLayoutRenderer } from '~/components/MDXComponents';
import { getFileBySlug } from '~/libs/mdx';
import type { MdxFileData } from '~/types';

export async function getStaticProps() {
	let rulesData = await getFileBySlug(`policy-rules`, 'rules');
	return {
		props: {
			rulesData,
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

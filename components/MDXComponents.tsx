import { getMDXComponent } from 'mdx-bundler/client';
import React, { useMemo } from 'react';
import type { MdxLayoutRendererProps } from '~/types';
import { Image } from './Image';
import { Link } from './Link';
import { Pre } from './Pre';

type MDXComponentMap = {
	[key: string]: React.ComponentType<any>;
	wrapper: React.ComponentType<MdxLayoutRendererProps>;
};

const MDXComponents: MDXComponentMap = {
	Image,

	a: Link,
	pre: Pre,
	wrapper: ({ components, layout, ...rest }: MdxLayoutRendererProps) => {
		console.log({ components });
		let Layout = require(`../layouts/${layout}`).default;
		return <Layout {...rest} />;
	},
};

export function MDXLayoutRenderer({ layout, mdxSource, ...rest }: MdxLayoutRendererProps) {
	let MDXLayout = useMemo(() => {
		return getMDXComponent(mdxSource);
	}, [mdxSource]);
	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
}

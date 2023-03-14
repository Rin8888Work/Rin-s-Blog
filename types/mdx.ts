import type readingTime from 'reading-time';
import type { DevIconsMap } from '~/components/DevIcon';

export type MdxScreenWidth =
	| 'AuthorLayout'
	| 'ListLayout'
	| 'PostLayout'
	| 'PostSimple'
	| 'ResumeLayout'
	| 'SnippetLayout';

export interface MdxFrontMatter {
	layout?: MdxScreenWidth;
	title: string;
	name?: string;
	date: string;
	lastmod?: string;
	tags: string[];
	draft?: boolean;
	summary: string;
	images?: string[] | string;
	authors?: string[];
	slug: string;
	cat?: 'blog' | 'promotion';
}

export type ReadingTime = ReturnType<typeof readingTime>;

export interface BlogFrontMatter extends MdxFrontMatter {
	readingTime: ReadingTime;
	fileName: string;
}

export interface SnippetFrontMatter extends BlogFrontMatter {
	heading: string;
	type: keyof typeof DevIconsMap;
}

export interface AuthorFrontMatter extends MdxFrontMatter {
	avatar: string;
	github?: string;
}

export interface MdxFileData {
	mdxSource: string;
	frontMatter: BlogFrontMatter;
	toc: unknown[];
}

export interface MdxLayoutRendererProps {
	layout: MdxScreenWidth;
	mdxSource: string;
	frontMatter: MdxFrontMatter;
	[key: string]: any;
}

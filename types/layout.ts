import type React from 'react'
import type { CommentConfigType } from './components'
import type { AuthorFrontMatter, BlogFrontMatter, MdxFrontMatter, SnippetFrontMatter } from './mdx'
import type { PaginationType } from './server'

export interface PageLayoutProps {
  children: React.ReactNode
}
export interface AuthorLayoutProps {
  children: React.ReactNode
  frontMatter: BlogFrontMatter
}

export interface BlogLayoutProps {
  posts: BlogFrontMatter[]
  initialDisplayPosts?: BlogFrontMatter[]
  pagination?: PaginationType
}

export interface PostSimpleLayoutProps {
  frontMatter: BlogFrontMatter
  type: string
  children: React.ReactNode
  authorDetails: AuthorFrontMatter[]
  commentConfig: CommentConfigType
  page: number
}

export type PostLayoutProps = PostSimpleLayoutProps

export interface SnippetLayoutProps {
  snippets: SnippetFrontMatter[]
  description: string
}

export interface ResumeLayoutProps {
  children: React.ReactNode
  frontMatter: MdxFrontMatter
}

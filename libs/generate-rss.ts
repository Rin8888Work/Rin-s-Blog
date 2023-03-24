import { siteMetadata } from '~/data/siteMetadata';
import type { BlogFrontMatter } from '~/types';
import { escape } from '~/utils/html-escaper';

const author = {
	en: 'Phuoc Nguyen',
	vi: 'Nguyễn Văn Phước',
};
const title = {
	en: 'Phuoc Nguyen | Website design - Social seeding | Prestige - Professionalism - Responsibility',
	vi: 'Nguyễn Văn Phước | Thiết kế website - Seeding mạng xã hội | Uy Tín - Chuyên Nghiệp - Trách nhiệm',
};

const description = {
	en: 'Phuoc Nguyen is a frontend engineer in Ho Chi Minh City. He is a developer ‍💻, blogger ️ and a business enthusiast, making money online',
	vi: 'Nguyễn Văn Phước là một kỹ sư frontend tại thành phố Hồ Chí Minh. Anh là developer ‍💻, blogger ️ và là người đam mê kinh doanh, kiếm tiền online',
};

const language = {
	en: 'en',
	vi: 'vi',
};

function generateRssItem(post: BlogFrontMatter, locale: any) {
	return `
  <item>
    <guid>${siteMetadata.siteUrl}/${locale}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/${locale}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${author[locale]})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`;
}

export function generateRss(posts: BlogFrontMatter[], page, locale: any) {
	return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(title[locale])}</title>
      <link>${siteMetadata.siteUrl}/${locale}/blog</link>
      <description>${escape(description[locale])}</description>
      <language>${language[locale]}</language>
      <managingEditor>${siteMetadata.email} (${author[locale]})</managingEditor>
      <webMaster>${siteMetadata.email} (${author[locale]})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(post, locale)).join('')}
    </channel>
  </rss>
`;
}

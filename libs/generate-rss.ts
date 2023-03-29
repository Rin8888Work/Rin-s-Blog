import { siteMetadata } from '~/data/siteMetadata';
import type { BlogFrontMatter } from '~/types';
import { escape } from '~/utils/html-escaper';

const author = {
	vi: 'Nguyễn Văn Phước',
};
const title = {
	vi: 'Nguyễn Văn Phước | Thiết kế website - Seeding mạng xã hội',
};

const description = {
	vi: 'Nguyễn Văn Phước là một kỹ sư frontend tại thành phố Hồ Chí Minh. Anh là developer ‍💻, blogger ️ và là người đam mê kinh doanh, kiếm tiền online',
};

const language = {
	vi: 'vi',
};

function generateRssItem(post: BlogFrontMatter) {
	return `
  <item>
    <guid>${siteMetadata.siteUrl}/bai-viet/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/bai-viet/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${author['vi']})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`;
}

export function generateRss(posts: BlogFrontMatter[], page) {
	return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(title['vi'])}</title>
      <link>${siteMetadata.siteUrl}/bai-viet</link>
      <description>${escape(description['vi'])}</description>
      <language>${language['vi']}</language>
      <managingEditor>${siteMetadata.email} (${author['vi']})</managingEditor>
      <webMaster>${siteMetadata.email} (${author['vi']})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(post)).join('')}
    </channel>
  </rss>
`;
}

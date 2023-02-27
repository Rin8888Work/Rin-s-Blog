export let siteMetadata = {
  phoneNumber: '+84365610561',
  title: "Rin's blog - Frontend engineer",
  author: 'Rin',
  fullName: 'Phuoc Nguyen Van',
  nickName: 'Rin',
  headerTitle: "Rin's blog - Frontend engineer",
  footerTitle: "Rin's blog - Frontend engineer",
  description:
    'Phuoc Nguyen Van is a frontend engineer at Ho Chi Minh city. He is a developer 👨‍💻, blogger ✒️ and a person who is passionate about business and making money online',
  language: 'en-us',
  siteUrl: 'https://www.phuocnv.com',
  siteRepo: '',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'work.rin8888@pm.me',
  github: 'https://github.com/rin8888work',
  twitter: 'https://twitter.com/rin8888work',
  facebook: 'https://facebook.com/nguyenvanphuoc.vn',
  youtube: 'https://www.youtube.com/@rin8888work',
  linkedin: 'https://www.linkedin.com/in/rin8888work/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.leohuynh.dev/share/AwnJYH6n/leohuynh.dev',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '32292c48-85c6-4338-85ff-a8d37482bb99', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'rin8888work',
    twitter: 'rin8888work',
    linkedin: 'rin8888work',
  },
  address: 'Dist 12, Ho Chi Minh city',
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	env: {
		GISCUS_REPO: process.env.GISCUS_REPO,
		GISCUS_REPOSITORY_ID: process.env.GISCUS_REPOSITORY_ID,
		GISCUS_CATEGORY: process.env.GISCUS_CATEGORY,
		GISCUS_CATEGORY_ID: process.env.GISCUS_CATEGORY_ID,
		UTTERANCES_REPO: process.env.UTTERANCES_REPO,
		DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,

		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
		DATABASE_URL: process.env.DATABASE_URL,
		GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
		GG_ANALYTIC_ID: process.env.GG_ANALYTIC_ID,
		FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
		UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
		UMAMI_PUBLIC_URL: process.env.UMAMI_PUBLIC_URL,
		DMCA_VERIFY_ID: process.env.DMCA_VERIFY_ID,
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	eslint: {
		dirs: ['components', 'constant', 'layouts', 'libs', 'pages', 'scripts', 'utils'],
	},
	images: {
		domains: ['drive.inet.vn'],
	},
	typescript: { tsconfigPath: './tsconfig.json' },
	// webpack: (config, { dev, isServer }) => {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|mp4)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: '/_next',
						name: 'static/media/[name].[hash].[ext]',
					},
				},
			],
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
});

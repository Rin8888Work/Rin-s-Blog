import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	render() {
		return (
			<Html lang={'vi'}>
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/favicons/apple-touch-icon.png"
					/>
					<link rel="icon" sizes="32x32" href="/static/favicons/favicon.ico" />
					<link rel="manifest" href="/static/favicons/site.webmanifest" />
					<link rel="mask-icon" href="/static/favicons/favicon.svg" color="#fff" />
					<meta name="msapplication-TileColor" content="#000000" />
					<meta name="theme-color" content="#000000" />
					<link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preload" href="/fonts/iCielVAG.ttf" as="font" type="font/ttf" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
						rel="stylesheet"
					/>
					<meta
						name="google-site-verification"
						content="Oe_jBmLFr3-ptKg0iBAH3OO7PrhevAUb_Q-mC9h923E"
					/>
				</Head>
				<body className="bg-white text-black antialiased dark:bg-slate-900 dark:text-white">
					<Main />
					<NextScript />
					<script
						src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
						async
					></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;

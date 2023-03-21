import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { withTranslation } from 'next-i18next';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			locale: ctx.locale || '',
		};
	}

	render() {
		const { locale }: any = this.props;
		return (
			<Html lang={locale} className="dark">
				<Head>
					<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/hat.png" />
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicons/hat.png"
					/>
					<link
						rel="icon"
						type="image/jpg"
						sizes="16x16"
						href="/static/favicons/hat.jpg"
					/>
					<link rel="manifest" href="/static/favicons/site.webmanifest" />
					<link rel="mask-icon" href="/static/favicons/hat.png" color="#fff" />
					<meta name="msapplication-TileColor" content="#000000" />
					<meta name="theme-color" content="#000000" />
					<link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
				</Head>
				<body className="bg-white text-black antialiased dark:bg-slate-900 dark:text-white">
					<Main />
					<NextScript />
					<script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js" async></script>
				</body>
			</Html>
		);
	}
}

export default withTranslation()(MyDocument);

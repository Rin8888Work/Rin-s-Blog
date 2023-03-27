import '~/assets/css/custom.css';
import '~/assets/css/tailwind.css';
import '~/assets/css/twemoji.css';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Analytics } from '~/components/analytics';
import { LayoutWrapper } from '~/components/LayoutWrapper';

function App({ Component, pageProps }) {
	return (
		// @ts-ignore
		<ThemeProvider attribute="class">
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			<Analytics />
			<LayoutWrapper>
				<Component {...pageProps} />
			</LayoutWrapper>
		</ThemeProvider>
	);
}

export default appWithTranslation(App);

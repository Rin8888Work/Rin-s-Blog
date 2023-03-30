import Script from 'next/script';
import { siteMetadata } from '~/data/siteMetadata';

export function GAScript() {
	return (
		<>
			<Script
				async
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
			/>
			<Script strategy="afterInteractive" id="gtag-init">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
			</Script>
		</>
	);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function logEvent(action: string, category: string, label: string, value: string) {
	// @ts-ignore
	window.gtag?.('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
}

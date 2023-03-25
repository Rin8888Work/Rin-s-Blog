import Script from 'next/script';
import { useTranslation } from 'next-i18next';
import { siteMetadata } from '~/data/siteMetadata';

let isProduction = process.env.NODE_ENV === 'production';

function Facebook() {
	const { t } = useTranslation();

	if (!isProduction) return null;

	return (
		<div>
			<div id="fb-root"></div>

			<div id="fb-customer-chat" className="fb-customerchat"></div>

			<Script id="fb-plugin-chat-init" strategy="afterInteractive">
				{`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "${siteMetadata.liveChat.facebookPageId}");
            chatbox.setAttribute("attribution", "biz_inbox");
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v14.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/${t('language')}/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
			</Script>
		</div>
	);
}

export default Facebook;

import { useTranslation } from 'next-i18next';
import React from 'react';
import Typed from 'typed.js';
import { siteMetadata } from '~/data/siteMetadata';

export function TypedBios() {
	let el = React.useRef(null);
	let typed = React.useRef(null);
	const { t } = useTranslation('home');

	React.useEffect(() => {
		typed.current = new Typed(el.current, {
			stringsElement: '#bios',
			typeSpeed: 40,
			backSpeed: 10,
			loop: true,
			backDelay: 1000,
		});
		return () => typed.current.destroy();
	}, [t]);

	return (
		<div>
			<ul id="bios" className="hidden">
				<li>{t('bios.nickName', { nickName: siteMetadata.nickName })}</li>
				<li>{t('bios.place')}</li>
				<li>{t('bios.mainWork')}</li>
				<li>{t('bios.supWork')}</li>
				<li>{t('bios.thankyou')}</li>
			</ul>
			<span ref={el} className="text-neutral-900 dark:text-neutral-200" />
		</div>
	);
}

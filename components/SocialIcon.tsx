import type { AnchorHTMLAttributes } from 'react';
import type { SocialIconProps } from '~/types';
import Facebook from '~/assets/icons/facebook.svg';
import Github from '~/assets/icons/github.svg';
import Linkedin from '~/assets/icons/linkedin.svg';
import Mail from '~/assets/icons/mail.svg';
import Twitter from '~/assets/icons/twitter.svg';
import Youtube from '~/assets/icons/youtube.svg';

export let SocialIconsMap = {
	Mail,
	Github,
	Facebook,
	Youtube,
	Linkedin,
	Twitter,
};

export function SocialIcon({ name, href }: SocialIconProps) {
	let SocialSvg = SocialIconsMap[name];
	let attrs: AnchorHTMLAttributes<HTMLAnchorElement> = {
		href,
		target: name !== 'Mail' ? '_blank' : '_self',
		rel: 'noopener noreferrer',
	};

	return (
		<a className="text-sm text-gray-500 transition hover:text-gray-600" {...attrs}>
			<span className="sr-only">{name}</span>
			<SocialSvg
				className={`h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400`}
			/>
		</a>
	);
}

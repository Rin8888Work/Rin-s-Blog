import { FacebookShareButton, TwitterShareButton } from 'react-share';
import TwitterIcon from '~/assets/icons/twitter.svg';
import FacebookIcon from '~/assets/icons/facebook.svg';
import { siteMetadata } from '~/data/siteMetadata';
import { Link } from './Link';
import type { SocialButtonsProps } from '~/types';

export function SocialButtons({ postUrl, title }: SocialButtonsProps) {
	let createDiscussonTwitterUrl = (postUrl: string) =>
		`https://twitter.com/search?q=${encodeURIComponent(postUrl)}`;

	return (
		<div className="items-center justify-between pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300 md:flex">
			<div className="mb-6 md:mb-0">
				<Link
					href={createDiscussonTwitterUrl(postUrl)}
					rel="nofollow"
					className="hover:underline"
				>
					{'Tìm kiếm trên Twitter'}
				</Link>
			</div>
			<div className="flex items-center">
				<span className="sr-only mr-3"> Share with:</span>
				<TwitterShareButton
					url={postUrl}
					title={title}
					via={siteMetadata.socialAccounts.twitter}
					className="mr-2 flex items-center overflow-hidden rounded !bg-twitter !p-1.5 hover:opacity-90"
				>
					<TwitterIcon className="h-5 w-5" fill="#fff" />
					<span className="ml-2.5 mr-1.5 font-extrabold text-white">Tweet</span>
				</TwitterShareButton>
				<FacebookShareButton
					url={postUrl}
					quote={title}
					className="mr-2 flex items-center overflow-hidden rounded !bg-facebook !p-1.5 hover:opacity-90"
				>
					<FacebookIcon className="h-5 w-5" fill="#fff" />
					<span className="ml-2.5 mr-1.5 font-extrabold text-white">Share</span>
				</FacebookShareButton>
			</div>
		</div>
	);
}

import { BLUR_IMAGE_DATA_URL, LOGO_IMAGE_PATH } from 'constant';
import NextImage from 'next/image';
import { useState } from 'react';
import type { ImageProps } from 'types';
import { ImageLightbox } from './ImageLightbox';
import clsx from 'clsx';

export function Image({ shouldOpenLightbox = true, ...rest }: ImageProps) {
	let blurDataURL = '';
	if (rest.src !== LOGO_IMAGE_PATH) {
		blurDataURL = BLUR_IMAGE_DATA_URL;
	}

	let [openLightbox, setOpenLightbox] = useState(false);
	let handleOpenLightbox = () => {
		if (!shouldOpenLightbox) return;
		document.documentElement.classList.add('lightbox-loading');
		setOpenLightbox(true);
	};
	let className = clsx(
		`flex justify-center flex-col items-center`,
		shouldOpenLightbox && 'cursor-zoom-in',
		rest.id === 'thumbnail-image' && 'thumbnail-image umami--click--view-post-thumbnail',
		rest.alt.includes('thumbnail-image') && 'thumbnail-image umami--click--view-post-thumbnail'
	);

	let imgClassName = clsx(
		`flex justify-center flex-col items-center`,
		rest.alt.includes('w-full') && 'w-full sm:w-4/5',
		rest.alt.includes('w-mobile') && 'w-96'
	);

	return (
		<>
			<figure className={className}>
				<NextImage
					{...rest}
					loading="lazy"
					blurDataURL={blurDataURL}
					onClick={handleOpenLightbox}
					className={imgClassName}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
				{rest.alt.replaceAll('thumbnail-image', '') && (
					<figcaption className="text-center italic">
						<span>
							{rest.alt
								.replaceAll('thumbnail-image', '')
								.replaceAll('w-full', '')
								.replaceAll('w-mobile', '')}
						</span>
					</figcaption>
				)}
			</figure>
			{openLightbox && (
				<ImageLightbox closeLightbox={() => setOpenLightbox(false)} src={rest.src} />
			)}
		</>
	);
}

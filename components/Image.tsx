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
		`flex justify-center flex-col`,
		shouldOpenLightbox && 'cursor-zoom-in',
		rest.id === 'thumbnail-image' && 'thumbnail-image umami--click--view-post-thumbnail',
		rest.alt.includes('thumbnail-image') && 'thumbnail-image umami--click--view-post-thumbnail'
	);

	return (
		<>
			<figure className={className}>
				<NextImage {...rest} blurDataURL={blurDataURL} onClick={handleOpenLightbox} />
				{rest.alt.replaceAll('thumbnail-image', '') && (
					<figcaption className="text-center italic">
						<span>{rest.alt.replaceAll('thumbnail-image', '')}</span>
					</figcaption>
				)}
			</figure>
			{openLightbox && (
				<ImageLightbox closeLightbox={() => setOpenLightbox(false)} src={rest.src} />
			)}
		</>
	);
}

import { useState } from 'react';
import { seedingLink } from '~/data/siteMetadata';
import ServiceItem from './ServiceItem';

export default function ServiceList({ list, description, color, isExternalLink = true }: any) {
	const [itemActive, setItemActive] = useState('');

	const openItem = (item) => {
		item === itemActive ? setItemActive('') : setItemActive(item);
	};

	return (
		<div>
			{description && <div className="mb-4 text-xl font-bold sm:text-xl">{description}</div>}
			<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				{list?.map((item, index) => (
					<ServiceItem
						{...item}
						color={color}
						key={index}
						itemActive={itemActive}
						openItem={openItem}
						externalLink={isExternalLink ? seedingLink.socialSeeding.key : undefined}
						adviseLink={seedingLink.adviseLink.key}
					/>
				))}
			</ul>
		</div>
	);
}

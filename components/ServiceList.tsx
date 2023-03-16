import ServiceItem from './ServiceItem';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { seedingLink } from '~/data/siteMetadata';

export default function ServiceList({ list, description, color }: any) {
	const { t } = useTranslation(['service']);
	const [itemActive, setItemActive] = useState('');

	const openItem = (item) => {
		item === itemActive ? setItemActive('') : setItemActive(item);
	};

	return (
		<div>
			<div className="mb-4 text-xl font-bold sm:text-xl">{t(`service:${description}`)}</div>
			<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				{list?.map((item, index) => (
					<ServiceItem
						{...item}
						color={color}
						key={index}
						itemActive={itemActive}
						openItem={openItem}
						externalLink={seedingLink.socialSeeding.key}
						adviseLink={seedingLink.adviseLink.key}
					/>
				))}
			</ul>
		</div>
	);
}

import { affiliatesLink, seedingLink, refLink } from '~/data/siteMetadata';

const allLink = { ...affiliatesLink, ...seedingLink, ...refLink };

export function getKeysGoExternal() {
	return Object.keys(allLink)?.map((key) => allLink[key].key);
}

export function getLinkFromKey(key) {
	const linkObj = Object.keys(allLink)
		?.filter((k) => key === allLink[k]['key'])
		?.map((k) => ({ ...allLink[k] }));

	return linkObj?.length > 0 ? linkObj[0]['link'] : 'not-found';
}

import { affiliatesLink, seedingLink, refLink } from '~/data/siteMetadata';
import fs from 'fs';
import path from 'path';

function getProjectExternalLink() {
	const root = process.cwd();
	const projectsJson = fs.readFileSync(path.join(root, 'data', 'hrefDemoData.json'), 'utf8');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const projectLinks = Object.entries(JSON.parse(projectsJson)).flatMap(([_, items]) =>
		(items as Array<any>).map((item) => ({ key: item.slug, link: item.href }))
	);

	return projectLinks;
}

const allLink = { ...affiliatesLink, ...seedingLink, ...refLink, ...getProjectExternalLink() };

export function getKeysGoExternal() {
	return Object.keys(allLink)?.map((key) => allLink[key].key);
}

export function getLinkFromKey(key) {
	const linkObj = Object.keys(allLink)
		?.filter((k) => key === allLink[k]['key'])
		?.map((k) => ({ ...allLink[k] }));

	return linkObj?.length > 0 ? linkObj[0]['link'] : 'not-found';
}

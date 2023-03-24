export function kebabCase(str: string): string {
	return str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[đĐ]/g, 'd')
		.replace(/([^0-9a-z-\s])/g, '-')
		.replace(/(\s+)/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '');
}

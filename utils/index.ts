export const randomNumberInRange = (min, max) => {
	// 👇️ get number between min (inclusive) and max (inclusive)
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomTextColor = () => {
	const classes = [
		'dark:text-lime-600',
		'dark:text-emerald-600',
		'dark:text-sky-600',
		'dark:text-indigo-600',
		'dark:text-fuchsia-600',
		'dark:text-pink-600',
		'dark:text-rose-600',
	];

	return classes[randomNumberInRange(0, classes.length)];
};

export const getIconTocLevel = (level: number | string) => {
	switch (level) {
		case 1:
			return '1st-place-medal';

		case 2:
			return '2nd-place-medal';

		case 3:
			return '3rd-place-medal';

		case 'h2':
			return '1st-place-medal';

		case 'h3':
			return '2nd-place-medal';

		case 'h4':
			return '3rd-place-medal';

		default:
			return '1st-place-medal';
	}
};

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

export const getNameCategory = (key) => {
	switch (key) {
		case 'thoi-trang':
			return {
				base: 'Mẫu --thiết kế website thời trang--',
				hl: 'thiết kế website thời trang',
			};

		case 'ban-hang':
			return {
				base: 'Mẫu --thiết kế website bán hàng--',
				hl: 'thiết kế website bán hàng',
			};
		case 'bat-dong-san':
			return {
				base: 'Mẫu --thiết kế website bất động sản--',
				hl: 'thiết kế website bất động sản',
			};
		case 'my-pham':
			return {
				base: 'Mẫu --thiết kế website mỹ phẩm--',
				hl: 'thiết kế website mỹ phẩm',
			};
		case 'noi-that':
			return {
				base: 'Mẫu --thiết kế website nội thất--',
				hl: 'thiết kế website nội thất',
			};
		case 'doanh-nghiep':
			return {
				base: 'Mẫu --thiết kế website doanh nghiệp--',
				hl: 'thiết kế website doanh nghiệp',
			};

		case 'du-lich-khach-san':
			return {
				base: 'Mẫu --thiết kế website du lịch & khách sạn--',
				hl: 'thiết kế website du lịch & khách sạn',
			};

		case 'giao-duc':
			return {
				base: 'Mẫu --thiết kế website giáo dục--',
				hl: 'thiết kế website giáo dục',
			};

		default:
			return {
				base: 'Mẫu --thiết kế website khác--',
				hl: 'thiết kế website khác',
			};
	}
};

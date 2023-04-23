const fs = require('fs');
const https = require('https');

function downloadImages(imageUrls, directory, category) {
	// Check if the data file already exists
	const dataFilePath = 'D:/WORK/MAKE/phuocnv.com/data/hrefDemoData.json';
	let existingData = {};
	if (fs.existsSync(dataFilePath)) {
		// If it exists, read the file and parse the JSON data
		const existingDataString = fs.readFileSync(dataFilePath);
		existingData = JSON.parse(existingDataString);
	}

	// Add the new image data to the existing data object
	const newData = imageUrls.map((imageUrl) => {
		const filePath = `${directory}/${imageUrl.chitiet
			.replace('https://muathemewp.vn/theme-wordpress-', '')
			.replace('/', '')}.jpg`;
		return {
			src: filePath.replace('D:/WORK/MAKE/phuocnv.com/public', ''),
			href: imageUrl.href,
			external: imageUrl.chitiet.replace('https://muathemewp.vn/', ''),
			name: imageUrl.title
				.replace('Theme WordPress', '')
				.replace(/\d+/g, '')
				.replace('Theme wordpress', ''),
			alt:
				'Thiết kế webite' +
				imageUrl.title
					.replace('Theme WordPress', '')
					.replace('Theme wordpress', '')
					.replace(/\d+/g, ''),
		};
	});

	// Add the new data to the existing data object under the category key
	if (!existingData[category]) {
		existingData[category] = newData;
	} else {
		existingData[category] = existingData[category].concat(newData);
	}

	// Download the images and save the data file when finished
	const promises = imageUrls.map((imageUrl) => {
		return new Promise((resolve, reject) => {
			https.get(imageUrl.image, { timeout: 5000 }, (response) => {
				const filePath = `${directory}/${imageUrl.chitiet
					.replace('https://muathemewp.vn/theme-wordpress-', '')
					.replace('/', '')}.jpg`;
				const fileStream = fs.createWriteStream(filePath);
				response.pipe(fileStream);
				fileStream.on('finish', () => {
					console.log(`Downloaded ${filePath}`);
					resolve();
				});
				fileStream.on('error', (err) => {
					reject(err);
				});
			});
		});
	});

	Promise.all(promises).then(() => {
		const jsonData = JSON.stringify(existingData);
		fs.writeFile(dataFilePath, jsonData, (err) => {
			if (err) throw err;
			console.log(`Data saved to images.json`);
		});
	});
}

// Usage example:
const imageUrls = [
	{
		title: 'Theme WordPress khóa học kinh doanh online',
		image: 'https://muathemewp.vn/wp-content/uploads/2023/04/khoahockdol.jpg',
		href: 'http://khoahockdol.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-kinh-doanh-online/',
	},
	{
		title: 'Theme WordPress khóa học đầu tư',
		image: 'https://muathemewp.vn/wp-content/uploads/2023/03/khoahocdautu-1.jpg',
		href: 'http://khoahocdautu.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-dau-tu-2/',
	},
	{
		title: 'Theme WordPress khóa học sức khỏe',
		image: 'https://muathemewp.vn/wp-content/uploads/2023/03/healthcoach.jpg',
		href: 'http://healthcoach.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-suc-khoe/',
	},
	{
		title: 'Theme WordPress trung tâm dạy nhạc',
		image: 'https://muathemewp.vn/wp-content/uploads/2023/02/daynhac.jpg',
		href: 'http://daynhac.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-day-nhac/',
	},
	{
		title: 'Theme WordPress đào tạo doanh nhân 02',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/daotao2.jpg',
		href: 'http://daotao2.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dao-tao-doanh-nhan-02/',
	},
	{
		title: 'Theme WordPress trung tâm học tiếng anh',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/hoctienganh.jpg',
		href: 'http://hoctienganh.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-hoc-tieng-anh/',
	},
	{
		title: 'Theme WordPress khóa học cho trẻ em',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edukid.jpg',
		href: 'http://edukid.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-cho-tre-em/',
	},
	{
		title: 'Theme WordPress đào tạo cử nhân',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/daotao.jpg',
		href: 'http://daotao.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dao-tao-cu-nhan/',
	},
	{
		title: 'Theme WordPress khóa học đào tạo',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu11.jpg',
		href: 'http://edu11.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-dao-tao/',
	},
	{
		title: 'Theme WordPress giới thiệu Trường Học',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/truonghoc.jpg',
		href: 'http://truonghoc.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-truong-hoc/',
	},
	{
		title: 'Theme WordPress đào tạo chủ Spa',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu10.jpg',
		href: 'http://edu10.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dao-tao-chu-spa/',
	},
	{
		title: 'Theme WordPress giáo dục anh ngữ 08',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu8.jpg',
		href: 'http://edu8.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-giao-duc-anh-ngu-08/',
	},
	{
		title: 'Theme WordPress trung tâm đào tạo anh ngữ, du học',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu6.maugiaodien.com_.jpg',
		href: 'http://edu6.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-dao-tao-anh-ngu-du-hoc/',
	},
	{
		title: 'Theme WordPress bán đồ chơi, thiết bị giáo dục cho trẻ',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu7.maugiaodien.com_.jpg',
		href: 'http://edu7.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-ban-do-choi-thiet-bi-giao-duc-cho-tre/',
	},
	{
		title: 'Theme WordPress công ty du học Hàn Quốc',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/duhochanquoc.maugiaodien.com_.jpg',
		href: 'http://duhochanquoc.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-cong-ty-du-hoc-han-quoc/',
	},
	{
		title: 'Theme WordPress trung tâm đào tạo tiếng Đức',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/hoctiengduc.maugiaodien.com_.jpg',
		href: 'http://hoctiengduc.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-dao-tao-tieng-duc/',
	},
	{
		title: 'Theme WordPress dịch vụ sinh trắc vân tay',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/sinhtracvantay.maugiaodien.com_.jpg',
		href: 'http://sinhtracvantay.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dich-vu-sinh-trac-van-tay/',
	},
	{
		title: 'Theme WordPress trung tâm luyện thi',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/luyenthi.maugiaodien.com_.jpg',
		href: 'http://luyenthi.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-luyen-thi/',
	},
	{
		title: 'Theme WordPress trung tâm học tiếng Nhật',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/hoctiengnhat.maugiaodien.com_.jpg',
		href: 'http://hoctiengnhat.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-hoc-tieng-nhat/',
	},
	{
		title: 'Theme WordPress đào tạo học đàn',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/hocdan.maugiaodien.com_.jpg',
		href: 'http://hocdan.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dao-tao-hoc-dan/',
	},
	{
		title: 'Theme WordPress trung tâm anh ngữ',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu4.maugiaodien.com_.jpg',
		href: 'http://edu4.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-anh-ngu-2/',
	},
	{
		title: 'Theme WordPress trung tâm anh ngữ',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/anhngu.maugiaodien.com_.jpg',
		href: 'http://anhngu.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-trung-tam-anh-ngu/',
	},
	{
		title: 'Theme WordPress giới thiệu khóa học làm đẹp',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/hoclamdep.maugiaodien.com_.jpg',
		href: 'http://hoclamdep.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-khoa-hoc-lam-dep/',
	},
	{
		title: 'Theme WordPress giới thiệu sách, bán sách',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/education.maugiaodien.com_.jpg',
		href: 'http://education.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-sach-ban-sach/',
	},
	{
		title: 'Theme WordPress giới thiệu khóa học kinh doanh online',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu3.maugiaodien.com_.jpg',
		href: 'http://edu3.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-khoa-hoc-kinh-doanh-online/',
	},
	{
		title: 'Theme WordPress đào tạo, khóa học piano, nhạc cụ',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/pianocenter.maugiaodien.com_.jpg',
		href: 'http://pianocenter.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-dao-tao-khoa-hoc-piano-nhac-cu/',
	},
	{
		title: 'Theme WordPress giới thiệu khóa học tiếng anh',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu5.maugiaodien.com_.jpg',
		href: 'http://edu5.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-khoa-hoc-tieng-anh/',
	},
	{
		title: 'Theme WordPress khóa học nghệ thuật',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/edu.maugiaodien.com_.jpg',
		href: 'http://edu.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-nghe-thuat/',
	},
	{
		title: 'Theme WordPress khóa học dạy trang điểm',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/daytrangdiem.maugiaodien.com_.jpg',
		href: 'http://daytrangdiem.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-khoa-hoc-day-trang-diem/',
	},
	{
		title: 'Theme wordpress giới thiệu Artiste School',
		image: 'https://muathemewp.vn/wp-content/uploads/2022/12/art.maugiaodien.com_.jpg',
		href: 'http://art.maugiaodien.com',
		chitiet: 'https://muathemewp.vn/theme-wordpress-gioi-thieu-artiste-school/',
	},
];

const directory = 'D:/WORK/MAKE/phuocnv.com/public/static/images/demo/giao-duc';
downloadImages(imageUrls, directory, 'giao-duc');

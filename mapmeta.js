const fs = require('fs');
const crypto = require('crypto');
function kebabCase(str) {
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

// Read data object from JSON file
const dataFile = 'D:/WORK/MAKE/phuocnv.com/data/hrefDemoData.json';
const dataRaw = fs.readFileSync(dataFile);
const data = JSON.parse(dataRaw);

// Read alt_dict object from JSON file
const altDictFile = 'D:/WORK/MAKE/phuocnv.com/data/meta.json';
const altDictRaw = fs.readFileSync(altDictFile);
const alt_dict = Object.fromEntries(
	Object.entries(JSON.parse(altDictRaw)).map(([k, v]) => [k.replace(/\s/g, '').toLowerCase(), v])
);

let count = 0;
// Loop through data object and add new_key if alt matches a key in alt_dict
for (const key in data) {
	if (data.hasOwnProperty(key)) {
		const arr = data[key];
		for (let i = 0; i < arr.length; i++) {
			const obj = arr[i];
			const alt = obj.alt.replace(/\s/g, '').toLowerCase();

			const randomNumber = crypto.randomBytes(5).toString('hex');
			Object.assign(obj, { slug: kebabCase(obj.alt) + '-' + randomNumber });

			if (alt in alt_dict) {
				Object.assign(obj, { meta: alt_dict[alt] });
				count++;
			} else {
				Object.assign(obj, {
					meta: `Xem ngay mẫu giao diện website có thể cải thiện doanh số bán hàng của bạn. Với một ${obj.alt} chuyên nghiệp giúp dễ dàng thu hút khách hàng tiềm năng.`,
				});
			}
		}
	}
}

// Write updated data object back to data file
fs.writeFile(dataFile, JSON.stringify(data, null, 2), (err) => {
	if (err) throw err;
	console.log('Data file updated!');
});

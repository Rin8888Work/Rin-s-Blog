import type { HomeServiceType } from '~/types/services';

const websitePackage = {
	basic: {
		name: 'Cơ bản',
		price: '3 triệu - 5 triệu',
	},
	pro: {
		name: 'Pro',
		price: '5 triệu - 8 triệu',
	},
	highClass: {
		name: 'Cao cấp',
		price: 'Từ 8 triệu',
	},
};

export const getSocialServicesData = () => {
	const servicesData = [
		{
			name: `Facebook`,
			color: 'sky-900',
			description: `Tổng hợp các dịch vụ Facebook Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ bán hàng Facebook hãy liên hệ với chúng tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng lượt thích bài viết',
					description:
						'Lượt thích và lượt chia sẻ sẽ đưa bài đăng của bạn đến gần hơn với nhiều người hơn. Theo nghiên cứu thì mỗi 1 lượt thích, bình luận và chia sẻ sẽ giúp bài đăng của bạn tiếp cận thêm với khoảng 6 - 7 người dùng mới. Các tương tác tương tác là cách tăng cận kề mà không mất thêm chi phí.',
					price: '1000/120k',
				},
				{
					name: 'Tăng lượt thích bình luận',
					description:
						'Lượt thích và lượt chia sẻ sẽ đưa bài đăng của bạn đến gần hơn với nhiều người hơn. Theo nghiên cứu thì mỗi 1 lượt thích, bình luận và chia sẻ sẽ giúp bài đăng của bạn tiếp cận thêm với khoảng 6 - 7 người dùng mới. Các tương tác tương tác là cách tăng cận kề mà không mất thêm chi phí.',
					price: '1000/120k',
				},
				{
					name: 'Tăng bình luận bài viết',
					description:
						'Lượt thích và lượt chia sẻ sẽ đưa bài đăng của bạn đến gần hơn với nhiều người hơn. Theo nghiên cứu thì mỗi 1 lượt thích, bình luận và chia sẻ sẽ giúp bài đăng của bạn tiếp cận thêm với khoảng 6 - 7 người dùng mới. Các tương tác tương tác là cách tăng cận kề mà không mất thêm chi phí.',
					price: '100/120k',
				},
				{
					name: 'Tăng lượt chia sẻ bài viết',
					description:
						'Lượt thích và lượt chia sẻ sẽ đưa bài đăng của bạn đến gần hơn với nhiều người hơn. Theo nghiên cứu thì mỗi 1 lượt thích, bình luận và chia sẻ sẽ giúp bài đăng của bạn tiếp cận thêm với khoảng 6 - 7 người dùng mới. Các tương tác tương tác là cách tăng cận kề mà không mất thêm chi phí.',

					price: '1000/150k',
				},
				{
					name: 'Tăng lượt theo dõi trang cá nhân',
					price: '1000/220k',
					description:
						'Vì con số bạn bè bị giới hạn có 5000 người , điều đó chưa đủ để bạn có thể kinh doanh hiệu quả được do vậy tăng theo dõi là cách hiệu quả dành cho nick facebook của bạn. Việc tăng theo dõi sẽ là cơ hội để có đa dạng đối tượng người dùng biết đến bạn hơn và trong số đó sẽ có những khách hàng tiềm năng cho bạn. Bạn có thể thấy với những người nổi tiếng hay với những cá nhân có lượng follow khủng mỗi bài viết họ đăng lên nhận được rất nhiều sự quan tâm tương tác của người dùng. Đây là 1 điều quan trọng nếu như bạn muốn phát triển kênh bán hàng trên facebook cá nhân.',
				},
				{
					name: 'Tăng nhận xét/đánh giá fanpage',
					price: '100/300k',
					description:
						'Lợi ích của việc tăng đánh giá fanpage facebook: Khi đánh giá Fanpage của bạn, người dùng sau khi sử dụng sản phẩm, dịch vụ của bạn sẽ quay lại để có thể đánh giá chất lượng và chia sẻ trải nghiệm của họ trên fanpage. Từ đó, page của bạn trở nên uy tín hơn với Facebook cũng như khách hàng',
				},
				{
					name: 'Tăng lượt theo dõi fanpage',
					price: '1000/220k',
					description:
						'Lượt thích và lượt chia sẻ sẽ đưa bài đăng của bạn đến gần hơn với nhiều người hơn. Theo nghiên cứu thì mỗi 1 lượt thích, bình luận và chia sẻ sẽ giúp bài đăng của bạn tiếp cận thêm với khoảng 6 - 7 người dùng mới. Các tương tác tương tác là cách tăng cận kề mà không mất thêm chi phí.',
				},
				{
					name: 'Tăng mắt live stream',
					price: '100/120k',
					description:
						'Tăng mắt livestream giúp buổi livestream của bạn thu hút hơn nổi bật hơn, và điều quan trọng nhất là nó kích thích được nhu cầu của người tiêu dùng Việt Nam chúng ta đó chính là ngày càng đông càng tốt uy tín và chất lượng, đó chính là hiệu ứng đám đông mà việc tăng mắt livestream đến với các bạn.',
				},
				{
					name: 'Tăng thành viên nhóm',
					price: '1000/200k',
					description:
						'Giúp nhóm của bạn nổi bật và tăng độ uy tín, thu hút nhiều thành viên gia nhập hơn về sau',
				},
				{
					name: 'Tự động like tháng',
					price: 'Liên hệ',
					description:
						'Nếu bạn bán hàng và muốn tăng độ uy tín thu hút người mua, bạn có thể sử dụng gói này. hệ thống sẽ tự động like các bài đăng của bạn trong khoảng thời gian bạn đăng kí. (5 bài viết mỗi ngày + số lượng like bạn muốn)',
				},
				{
					name: 'Tự động bình luận tháng',
					price: 'Liên hệ',
					description:
						'Nếu bạn bán hàng và muốn tăng độ uy tín thu hút người mua, bạn có thể sử dụng gói này. hệ thống sẽ tự động bình luận các bài đăng của bạn trong khoảng thời gian bạn đăng kí. (5 bài viết mỗi ngày + số lượng like bạn muốn + nội dung bạn muốn bình luận)',
				},
			],
		},
		{
			name: `Instagram`,
			color: 'pink-700',
			description: `Tổng hợp các dịch vụ Instagram Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ Instagram để bán hàng, hãy liên hệ với chúng tôi để được tư vấn ngay`,
			list: [
				{
					name: 'Tăng lượt thích',
					price: '',
				},
				{
					name: 'Tăng lượt bình luận',
					price: '',
				},
				{
					name: 'Tăng lượt theo dõi',
					price: '',
				},
				{
					name: 'Tự động like tháng',
					price: '',
				},
			],
		},
		{
			name: `Tiktok`,
			color: 'rose-900',
			description: `Tổng hợp các dịch vụ TikTok Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ Tik Tok hãy liên hệ ngay với tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng lượt thích',
					price: '',
				},
				{
					name: 'Tăng lượt bình luận',
					price: '',
				},
				{
					name: 'Tăng lượt theo dõi',
					price: '',
				},
				{
					name: 'Tự động like tháng',
					price: '',
				},
				{
					name: 'Tăng lượt xem video',
					price: '',
				},
				{
					name: 'tăng tim video',
					price: '',
				},
			],
		},
		{
			name: `Youtube`,
			color: 'rose-600',
			description: `Tổng hợp các dịch vụ Youtube Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ Youtube hãy liên hệ ngay với tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng lượt thích video',
					price: '',
				},
				{
					name: 'Tăng bình luận video',
					price: '',
				},
				{
					name: 'Tăng lượt theo dõi kênh',
					price: '',
				},
				{
					name: 'Tăng lượt xem video',
					price: '',
				},
			],
		},
		{
			name: `Shopee`,
			color: 'orange-500',
			description: `Tổng hợp các dịch vụ Shopee Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ Shopee, hãy liên hệ ngay với tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng lượt thích sản phẩm',
					price: '',
				},
				{
					name: 'Tăng lượt theo dõi shop',
					price: '',
				},
			],
		},
		{
			name: `Twitter`,
			color: 'sky-700',
			description: `Tổng hợp các dịch vụ Twitter Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ Twitter hãy liên hệ ngay với tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng lượt thích',
					price: '',
				},
				{
					name: 'Tăng bình luận',
					price: '',
				},
				{
					name: 'Tăng lượt theo dõi',
					price: '',
				},
				{ name: 'Tăng lượt trích dẫn', price: '' },
			],
		},
		{
			name: `Tăng truy cập website`,
			color: 'blue-300',
			description: `Hiện tại chúng tôi có hơn 250.000 thành viên, bạn có thể sử dụng nó để đẩy SEO từ khóa lên Top hoặc tiếp cận người dùng để tăng độ nhận biết cho doanh nghiệp của mình.`,
			list: [
				{
					name: 'Thông qua google search',
					price: '',
				},
				{
					name: 'Thông qua backlink',
					price: '',
				},
				{
					name: 'Truy cập trực tiếp',
					price: '',
				},
				{
					name: 'Click',
					price: '',
				},
			],
		},
		{
			name: `Tăng nhận xét GGMap/Ứng dụng`,
			color: 'indigo-200',
			description: `Chúng tôi hiện có hơn 30.000 thành viên, bạn có thể sử dụng số lượng thành viên này để nâng cao danh tiếng cho doanh nghiệp của mình`,
			list: [
				{
					name: 'Đánh giá google map',
					price: '',
				},
				{
					name: 'Đánh giá ứng dụng',
					price: '',
				},
			],
		},
		{
			name: `Lazada`,
			color: 'red-600',
			description: `Tổng hợp các dịch vụ Lazada Marketing chất lượng nhất, giá tốt nhất. Nếu bạn cần dịch vụ của Lazada, hãy liên hệ ngay với tôi để được tư vấn`,
			list: [
				{
					name: 'Tăng like sản phẩm',
					price: '',
				},
				{
					name: 'Tăng follow shop',
					price: '',
				},
			],
		},
		{
			name: `DV khác`,
			color: 'yellow-600',
			description: `Một số dịch vụ khác mình cung cấp`,
			list: [],
		},
	];

	return { servicesData };
};

export const getWebsiteServicesData = () => {
	const listName = [
		{
			name: 'Thiết kế website theo yêu cầu',
			description:
				'Xây dựng giao diện web, tính năng theo yêu cầu của khách hàng. Sử dụng nhiều công nghệ, ngôn ngữ lập trình web để tạo ra sản phẩm đáp ứng mong muốn và vận hành hiệu quả trong thời gian dài.',
			price: '',
		},
		{
			name: 'Thiết kế website giá rẻ',
			description:
				'Dịch vụ thiết kế website với giá rẻ, nhưng chất lượng và độ hiệu quả cao. Vì mình có giải pháp và công nghệ riêng cho khách hàng, sản phẩm web của chúng tôi giá rẻ so với chất lượng nhận được. Có sẵn các giao diện mẫu website để khách hàng chọn sử dựng hoặc lấy thêm ý tưởng.',
			price: '',
		},
		{
			name: 'Thiết kế website giới thiệu',
			description:
				'Mình chuyên thiết kế web cho doanh nghiệp, giới thiệu công ty các lĩnh vực với đặc điểm nhận diện riêng, nổi bật và không thể thiếu những tính năng phù hợp với từng loại website, từng mục đích.',
			price: '',
		},
		{
			name: 'Thiết kế website bán hàng',
			description:
				'Thiết kế trang web bán hàng chuẩn SEO, những tính năng không thể thiếu bao gồm: đặt hàng, giỏ hàng, thanh toán trực tuyến. Tích hợp các nền tảng live chat, hỗ trợ trực tuyến để phản hồi kịp thời, giải đáp mong muốn của khách hàng ngay khi họ cần.',
			price: '',
		},
		{
			name: 'Thiết kế website bất động sản',
			price: '',
			description:
				'Thiết kế web BĐS đa dạng bao gồm: giới thiệu dự án, giới thiệu công ty - chủ thầu BĐS, website rao vặt - môi giới BĐS, website các dạng BĐS cho thuê... với những tính năng phù hợp cho từng loại, khả năng phân quyền người dùng, tạo tài khoản và đặt banner quảng cáo, mọi thứ đều có thể phát triển dễ dàng.',
		},
		{
			name: 'Thiết kế website Thẩm mỹ - Làm đẹp',
			price: '',
			description:
				'Xây dựng thương hiệu ngay trên Internet với 1 website spa - làm đẹp và là nơi khách hàng đánh giá, nhận định, đặt lịch khi họ cần tìm. TÍch hợp với Local SEO để tiếp cận khác hàng trong khu vực của bạn. Đặc biệt còn phát triển hệ thống web app quản lý đặt lịch, quản lý nhân viên và hệ thống ngay trên website.',
		},
		{
			name: 'Thiết kế website du lịch',
			price: '',
			description:
				'Đẹp, thẩm mỹ cao và tương thích di động là những điều quan trọng nhất khi thiết kế web du lịch, đặc biệt là tính năng đặt tour du lịch trực tuyến. Đặc biệt chúng tôi còn tích hợp - phát triển phần mềm web app quản lý du lịch cho các công ty du lịch, lữ hành.',
		},
		{
			name: 'Thiết kế website khách sạn',
			price: '',
			description:
				'Sang trọng, nổi bật và tích hợp tính năng đặt phòng, booking hoàn hảo là điều tạo nên 1 website khách sạn - nhà hàng tuyệt vời - bạn dễ dàng tích hợp Booking với bên thứ 3 và thanh toán Online để khách hàng đặt cọc. Tất nhiên tính năng chuẩn SEO và di động luôn là tiêu chí được đảm bảo.',
		},
		{
			name: 'Thiết kế website Wordpress',
			price: '',
			description:
				'Website Wordpress là 1 nền tảng phổ biến trên toàn thế giới và chiếm phần lớn nhất. Web làm bằng Wordpress không chỉ đảm bảo về mặt thẩm mỹ, tính năng mà đặc biệt còn dễ dàng sử dụng, phát triển và hỗ trợ SEO tốt nhất trong các nền tảng.',
		},
		{
			name: 'Thiết kế website nội thất',
			price: '',
			description:
				'Web nội thất sở hữu phong cách riêng, độc đáo. Có nhiều loại website như: website bán đồ nội thất, web kiến trúc xây dựng, website công ty nội thất,... với hơn 500+ mẫu web cho bạn tham khảo để lấy ý tưởng và phát triển riêng 1 trang cho mục đích kinh doanh của mình.',
		},
		{
			name: 'Thiết kế website tin tức',
			price: '',
			description:
				'Bạn sẽ sở hữu 1 toàn soạn báo Online, hoặc trang tin tức - báo điện tử thu hút người dùng, Cập nhập thông tin nhanh chóng, tiếp cận đọc giả ngay và hơn hết là khả năng kiếm thêm thu nhập với Ads và đặt banner quảng cáo. Tính năng phân quyền cho tác giả đăng bài và quản trị cực kỳ dễ dàng trên website.',
		},
		{
			name: 'Thiết kế website công ty Luật',
			price: '',
			description:
				'Website ngành luật là 1 mảng đặc biệt với phong cách xây dựng giao diện web khác hoàn toàn với những đơn vị khác. Phải luôn giữ được nét nghiêm túc, chỉnh chu nhưng vẫn toát ra sự chuyên nghiệp, tạo niềm tin cho khách hàng mà không mang không khí ảm đạm.',
		},
		{
			name: 'Thiết kế website rao vặt',
			price: '',
			description:
				'Thiết kế trang web rao vặt đa ngành nghề - đặc biệt là khả năng chuẩn SEO để thu hút lượng lớn người truy cập. TÍnh năng tạo tài khoản người dùng, phân chia quyền hạn và đăng tải banner để quảng cáo cho khác hàng.',
		},
		{
			name: 'Thiết kế website du học',
			price: '',
			description:
				'Đẹp, thẩm mỹ cao và tương thích di động là những điều quan trọng nhất khi thiết kế web du lịch, đặc biệt là tính năng đặt tour du lịch trực tuyến. Đặc biệt chúng tôi còn tích hợp - phát triển phần mềm web app quản lý du lịch cho các công ty du lịch, lữ hành.',
		},
	];

	const servicesData = [
		{
			name: `Đa ngành nghề, đa công nghệ`,
			color: 'emerald-600',
			description: ``,
			list: listName?.map((item) => ({
				name: item.name,
				price: item.price,
				description: item.description,
			})),
		},
	];

	const moduleWebsite = [
		{
			name: 'Quản trị',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Trang chủ',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Banner',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Danh mục',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Tin tức',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Liên hệ',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Giới thiệu',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'Giỏ hàng', allow: [websitePackage.highClass] },
		{ name: 'Sản phẩm', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'Chi tiết sản phẩm', allow: [websitePackage.pro, websitePackage.highClass] },
	];

	const integralPart = [
		{
			name: 'Trò chuyện trực tuyến',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'Đa ngôn ngữ', allow: [websitePackage.highClass] },
		{
			name: 'Tương thích với phiên bản di động/tablet',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Bàn giao mã nguồn',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Thiết kế banner miễn phí',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Hỗ trợ đăng bài',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Hỗ trợ đăng sản phẩm',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{ name: 'Tối ưu hóa tốc độ', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'Bảo mật SSL miễn phí', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'Cài đặt phân tích google', allow: [websitePackage.pro, websitePackage.highClass] },
		{ name: 'Sao lưu tự động', allow: [websitePackage.pro, websitePackage.highClass] },
		{
			name: 'Thiết Kế Chuẩn SEO',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Miễn phí hosting 1 năm',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Tùy biến giao diện',
			allow: [websitePackage.pro, websitePackage.highClass],
		},

		{
			name: 'Thiết kế theo mẫu',
			allow: [websitePackage.basic, websitePackage.pro, websitePackage.highClass],
		},
		{
			name: 'Thiết kế đặc biệt theo yêu cầu',
			allow: [websitePackage.highClass],
		},
	];

	const websitePriceList = Object.keys(websitePackage)?.map((key) => ({
		name: websitePackage[key].name,
		description: ``,
		price: websitePackage[key].price,
		moduleWebsite: moduleWebsite?.map((item) => ({
			name: item.name,
			isAllow: item.allow.includes(websitePackage[key]),
		})),
		integralPart: integralPart?.map((item) => ({
			name: item.name,
			isAllow: item.allow.includes(websitePackage[key]),
		})),
	}));

	return { servicesData, websitePriceList };
};

export const homeServices: HomeServiceType[] = [
	{
		name: 'THIẾT KẾ WEBSITE',
		description:
			'Giao diện đẹp, thiết kế chuyên nghiệp, khoa học, đảm bảo chất lượng. Website chuẩn SEO giá rẻ, giao diện hiển thị máy tính, điện thoại. Tốc độ load siêu nhanh. Miễn phí hosting, tên miền quốc tế. Bảo hành vĩnh viễn.',
		image: `/static/images/services/website.png`,
	},
	{
		name: 'Seeding mạng xã hội',
		description:
			'Tăng lượng tiếp cận với khách hàng tiềm năng. Thu hút nhiều lượng truy cập chất lượng. Nội dung thu hút giúp tăng nhận diện thương hiệu. Xây dựng thông tin tốt về mạng xã hội của các thương hiệu.',
		image: `/static/images/services/seeding.png`,
	},
	{
		name: 'TÊN MIỀN',
		description:
			'Tên miền quốc gia Việt Nam, tên miền Quốc tế đăng ký thông tin chủ thể đầy đủ. Tên miền có giá bán hợp lý, phí duy trì hàng năm theo quy định của Nhà nước. Hỗ trợ tư vấn và hướng dẫn cấu hình quản trị, xử lý các vấn đề kỹ thuật 24/7.',
		image: `/static/images/services/domain.png`,
	},
	{
		name: 'CHĂM SÓC WEBSITE',
		description:
			'Khi xây dựng xong 1 website chúng ta nên đầu tư nội dung và vận hành nó trong giai đoạn sau giúp thương hiệu phát triển hơn nữa.',
		image: `/static/images/services/takeCare.png`,
	},
	{
		name: 'HOSTING / VPS Xịn GIÁ RẺ',
		description:
			'Các gói hosting, VPS khủng giá rẻ hấp dẫn, tối ưu chi phí cho bạn. Có sẵn mọi yếu tố cần thiết để giúp bạn khởi động dự án, quản lý và host website.',
		image: `/static/images/services/hosting.png`,
	},
	{
		name: 'XÂY DỰNG NỘI DUNG CHẤT LƯỢNG',
		description:
			'Sử dụng các tiêu chuẩn để viết bài theo chuẩn SEO. Xây dựng các liên kết đang và sẽ tiếp tục là một thành phần rất quan trọng của Search Engine Optimization (SEO).',
		image: `/static/images/services/qualityContent.png`,
	},
];

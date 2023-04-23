import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import FAQWebDesign from '~/components/FAGWebDesign';
import HightLightTitle from '~/components/HightLightTitle';
import ServiceList from '~/components/ServiceList';
import { Tab, Tabs } from '~/components/Tabs';
import Twemoji from '~/components/Twemoji';
import WebsitePricing from '~/components/WebsitePricing';
import { getWebsiteServicesData } from '~/data/servicesData';
import { seedingLink } from '~/data/siteMetadata';
import WebsiteServiceLayout from '~/layouts/WebsiteServiceLayout';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export async function getStaticProps() {
	const { servicesData, websitePriceList } = getWebsiteServicesData();

	const icons = [
		{
			url: '/static/images/wp-icon.png',
			classNames:
				'animate-bounce-custom-1 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] bottom-[5%] left-[5%]',
		},
		{
			url: '/static/images/push-icon.png',
			classNames:
				'animate-bounce-custom-2 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] bottom-[50%] left-[9%]',
		},
		{
			url: '/static/images/user-icon.png',
			classNames:
				'animate-bounce-custom-3 w-[40px] h-[40px]  sm:w-[60px] sm:h-[60px] left-[46%] -top-[12%]',
		},
		{
			url: '/static/images/analytic-icon.png',
			classNames:
				'animate-bounce-custom-4 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] bottom-[50%] right-[9%]',
		},
		{
			url: '/static/images/cart-icon.png',
			classNames:
				'animate-bounce-custom-5 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] bottom-[5%] right-[5%]',
		},
	];

	const criterias = [
		{
			title: 'Giao diện website bắt mắt và hấp dẫn',
			desc: 'Website được thiết kế với giao diện nhìn chuyên nghiệp, đẹp và thẩm mỹ, hình ảnh chăm chút, font chữ sáng tạo là những yếu tố quan trọng giúp giữ chân khách hàng lâu hơn và trải nghiệm nhiều hơn. --Thiết kế website chuyên nghiệp-- còn cân nhắc các yếu tố về sự phù hợp với từng ngành nghề riêng biệt.',
			hl: ['Thiết kế website chuyên nghiệp'],
		},
		{
			title: 'Nội dung website đặc thù',
			desc: 'Nội dung được ví là --"KING"-- trong “lĩnh vực" thiết kế web cao cấp. Nội dung website không chỉ cần trau chuốt mà phải giúp khách hàng nắm bắt được bạn là ai? và bạn đang làm gì? bạn kinh doanh món hàng gì? trong thời gian ngắn nhất.',
			hl: ['"KING"', 'Nội dung website'],
		},
		{
			title: 'Thiết kế website phù hợp đa nền tảng',
			desc: 'Máy tính, tablet, điện thoại di động,... là những công cụ phổ để truy cập internet hiện nay. Vì vậy, --thiết kế web phù hợp đa nền tảng-- sẽ giúp tăng khả năng tiếp cận với đông đảo người dùng hiện tại, và dù sử dụng bất kỳ giao diện nào, người dùng đều cảm nhận được sự hoàn thiện của mọi yếu tố trên website với trải nghiệm tốt.',
			hl: ['thiết kế web phù hợp đa nền tảng'],
		},
		{
			title: 'Sử dụng công nghệ hiện đại để thiết kế website',
			desc: 'Ngôn ngữ lập trình đóng góp một phần quan trọng tạo nên tính hiệu quả của website. Tùy vào tính đặc thù của website và mình hoặc bạn có thể lựa chọn ngôn ngữ lập trình cho website, ví dụ như: Wordpress, Reactjs, NextJs, NodeJs, PHP....',
		},
		{
			title: 'Website tối ưu SEO',
			desc: '--Thiết kế website chuẩn SEO-- hay tối ưu công cụ tìm kiếm là website phải tối ưu về mặt kỹ thuật như code web, thiết kế giao diện, tốc độ tải trang nhanh,… Điều này cũng giúp website của bạn có thể được thứ hạng cao trên các công cụ tìm kiếm',
			hl: ['Thiết kế website chuẩn SEO'],
		},
		{
			title: 'Tốc độ tải trang tốt',
			desc: 'Một website quá “chậm chạp” mỗi khi truy cập chắc chắn khiến người dùng nản chí và không có mong muốn được quay lại. Rất nhiều yếu tố góp phần làm tốc độ trang của bạn chậm đi. Một --website hiệu quả và chuyên nghiệp-- cần hết sức lưu ý điều này.',
			hl: ['website hiệu quả và chuyên nghiệp'],
		},
		{
			title: 'Quản trị website dễ sử dụng',
			desc: 'Toàn bộ tính năng quản trị đều thuộc về khách hàng. --Phần mềm quản trị-- bên trong đảm bảo được thiết kế một cách tối giản và tiện dụng để hỗ trợ cho quá trình nhập liệu, thêm - xóa - sửa dữ liệu.',
			hl: ['Phần mềm quản trị'],
		},
	];

	const procedures = [
		{
			name: 'Thu thập - phân tích thông tin từ khách hàng cung cấp',
			image: '/static/images/thu-thap-thong-tin-tu-khach-hang.jpg',
			desc: 'Bước đầu tiên và là một trong những bước quan trọng nhất để chúng tôi có thể hiểu chính xấc hơn về yêu cầu từ khách hàng',
		},
		{
			name: 'Lập kế hoạch cụ thể cho các cột mốc',
			image: '/static/images/lap-ke-hoach-cu-the.png',
			desc: 'Một bước quan trọng tiếp theo giúp dự án đi đúng tiến độ và chất lượng tốt nhất',
		},
		{
			name: 'Tiến hành thiết kế website và thử nghiệm',
			image: '/static/images/tien-hanh-lap-trinh.jpg',
			desc: 'Các tuyệt chiêu sẽ được thực hiện trong bước này, Quá trình này luôn trong trạng thái tăng tốc để chạy về đích.',
		},
		{
			name: 'Tối ưu website',
			image: '/static/images/toi-uu-hoa-website.jpg',
			desc: 'Website đã hoàn thiện lên đến 90% và tiến hành điều chỉnh theo ý kiến khách hàng, tối ưu cho website chạy hoàn hảo nhất.',
		},
		{
			name: 'Bàn giao - hướng dẫn sử dụng website',
			image: '/static/images/ban-giao-website.jpg',
			desc: 'Source code website và tài khoản quản trị sẽ được cung cấp và hướng dẫn quản trị website bằng cách trực tiếp hoặc video. Chế độ bảo hành sẽ được kích hoạt.',
		},
	];

	const fags = [
		{
			q: 'Lĩnh vực nào và tại sao bạn cần thiết kế website?',
			a: 'Trong bất kỳ lĩnh vực nào, việc thiết kế một trang web phù hợp là rất quan trọng. Với sự bùng nổ của các kênh Marketing online, đây là xu hướng dẫn đầu trong những năm tới. Người tiêu dùng đang dần chuyển từ việc mua sắm tại cửa hàng sang mua sắm trực tuyến và đang có xu hướng ưa chuộng hơn. Do đó, nếu bạn không có một trang web hoàn hảo, bạn có thể bỏ lỡ cơ hội để tận dụng những nguồn lợi lớn trong tương lai.',
		},
		{
			q: 'Có phải tất cả website đều trong khoảng giá ở trên?',
			a: 'Mỗi loại thiết kế website đều có mức giá khác nhau. Ví dụ thiết kế website bán hàng là loại thiết kế đặc thù với nhiều tính năng phức tạp hơn, ví dụ như cho phép khách hàng xem hàng, đưa vào giỏ hàng, thanh toán trực tuyến hoặc tính toán độc lập. Chi phí cho thiết kế bán hàng phụ thuộc vào nhu cầu thực tiễn của bạn.',
		},
		{
			q: 'Mất bao lâu để thiết kế website hoàn chỉnh?',
			a: 'Tùy thuộc vào tính đặc thù và chức năng của website là dì thì thời gian hoàn thiện website cơ bản có thể trong 1 tuần.',
		},
		{
			q: 'Tôi có thể quản trị website như thế nào?',
			a: 'Vâng, bạn sẽ có một CMS admin quyền cao nhất để quản trị toàn bộ website của bạn.',
		},
		{
			q: 'Ngoài chi phí thiết kế website, tôi cần phải trả chi phí khác không?',
			a: 'KHÔNG, bạn không cần trả thêm bất kì khoản phí nào vì các gói thiết kế website của Nguyễn Văn Phước đẫ bao gồm tất cả.',
		},
		{
			q: 'Khi thiết kế website xong có được bảo trì không? Thời gian bảo trì trong bao lâu?',
			a: 'Có, Nguyễn Văn Phước sẽ bảo trì, chỉnh sửa những yêu cầu nhỏ của bạn trong vòng 1 tháng sau khi bàn giao đầy đủ. Sau đó, bạn có thể tự quản trị website hoặc mình sẽ quản trị với 1 khoản phí khác.',
		},
	];

	return {
		props: {
			servicesData,
			websitePriceList,
			icons,
			criterias,
			procedures,
			fags,
		},
	};
}

export default function WebsiteServices({
	servicesData,
	websitePriceList,
	icons,
	criterias,
	procedures,
	fags,
}) {
	return (
		<WebsiteServiceLayout>
			<section>
				<HightLightTitle
					text="Mình - --Nguyễn Văn Phước-- sẽ mang đến cho bạn dịch vụ --thiết kế website chuyên nghiệp - uy tín--"
					hl={['Nguyễn Văn Phước', 'thiết kế website chuyên nghiệp - uy tín']}
				/>
				<div className="relative mb-10 mt-10 flex items-center justify-center sm:mt-20">
					<Image
						loading="lazy"
						src={'/static/images/nguyen-van-phuoc-thiet-ke-website-tphcm.png'}
						alt={'Nguyễn Văn Phước - Thiết kế website tại thành phố Hồ Chí Minh'}
						title={'Nguyễn Văn Phước - Thiết kế website tại thành phố Hồ Chí Minh'}
						width={1000}
						height={590}
						sizes="100vw"
						style={{
							width: '70%',
							height: 'auto',
						}}
					/>
					<div className="absolute left-0 top-0 mx-auto h-full w-full">
						{icons.map((icon, index) => (
							<div key={index} className={`absolute ${icon.classNames} `}>
								<Image
									loading="lazy"
									src={icon.url}
									alt={
										'Nguyễn Văn Phước - Thiết kế website tại thành phố Hồ Chí Minh'
									}
									title={
										'Nguyễn Văn Phước - Thiết kế website tại thành phố Hồ Chí Minh'
									}
									width={360}
									height={360}
									sizes="100vw"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="prose mb-5 max-w-none pb-8 dark:prose-dark ">
					Hầu hết các nhà kinh doanh hoặc doanh nghiệp đều mong muốn sẽ sở hữu một{' '}
					<b>website chuyên nghiệp, hiệu quả</b>, <b>hỗ trợ đẩy mạnh doanh thu</b>,{' '}
					<b>đáp ứng tốt nhất về SEO</b>, <b>giao diện thiết kế ấn tượng – bắt mắt</b>,
					phù hợp với đặc điểm ngành nghề của họ với mức chi phí hợp lí nhất. Mình,{' '}
					<b>Nguyễn Văn Phước</b> - cung cấp dịch vụ{' '}
					<b>thiết kế website chuyên nghiệp tại thành phố Hồ Chí Minh</b> luôn tìm những
					giải pháp tối ưu nhất cho những kỳ vọng của khách hàng, mình sẵn sàng là người
					đồng hành đáng tin cậy cho quý khách hàng.
					<blockquote className="!mt-5">
						“Mình luôn chú trọng đến sự trải nghiệm của người dùng khi sử dụng website.
						100% các website được “ra lò” bởi mình đều đảm bảo đáp ứng tốt việc hiển thị
						trên đa thiết bị (Pc, Mobile, Tablet…), tốc độ load trang nhanh, bắt kịp xu
						hướng <b>thiết kế web </b>mới nhất của thế giới.” - <b>Nguyễn Văn Phước</b>{' '}
						.
					</blockquote>
				</div>
			</section>
			<section>
				<HightLightTitle
					text="Tại sao bạn cần phải --thiết kế website thật chuyên nghiệp--?"
					hl={['thiết kế website thật chuyên nghiệp']}
				/>
				<div className="grid grid-cols-1 items-center md:mb-5 md:grid-cols-12">
					<div className="col-span-5">
						<p>
							Mình hiểu rằng có rất nhiều dịch vụ{' '}
							<b>thiết kế website chuyên nghiệp</b> ngoài kia, thế nhưng để phù hợp
							với chi phí, nhu cầu hoặc ngành nghề của từng khách hàng thì mình có thể
							tự tin đáp ứng đầy đủ và cho ra lò một{' '}
							<b>website thật chuyên nghiệp và hữu dụng.</b>
						</p>
						<h3 className="mt-5 text-xl">
							Một số lý do bạn cần <b>thiết kế website chuyên nghiệp:</b>
						</h3>
						<ul className="ml-10 mt-3 list-disc">
							<li>Thiết lập sự hiện diện trực tuyến của bạn</li>
							<li>Quảng bá thương hiệu của bạn</li>
							<li>Giảm chi phí quảng cáo</li>
							<li>Nâng cao uy tín và tính chuyên nghiệp</li>
							<li>Tương tác tốt hơn với khách hàng của bạn</li>
							<li>...</li>
						</ul>
						<div className="mt-2">
							Các bạn có thể xem chi tiết hơn về những lý do trên tại bài viết của
							mình -{' '}
							<Link
								href={
									'/bai-viet/10-ly-do-thuyet-phuc-ban-nen-xay-dung-trang-web-rieng'
								}
								className={'text-teal-700 underline dark:text-teal-500'}
							>
								<b>10 lý do nên xây dựng website</b>
							</Link>
						</div>
					</div>

					<div className="col-span-7 row-start-1 md:row-start-auto">
						<Image
							loading="lazy"
							src={
								'/static/images/tai-sao-can-phai-thiet-ke-web-site-that-chuyen-nghiep.png'
							}
							alt={'Tại sao bạn cần thiết kế website thật chuyên nghiệp?'}
							title={'Tại sao bạn cần thiết kế website thật chuyên nghiệp?'}
							width={624}
							height={305}
							sizes="100vw"
							style={{
								width: '100%',
								height: 'auto',
							}}
						/>
					</div>
				</div>

				<div className="prose mb-5 mt-5 max-w-none pb-8 dark:prose-dark">
					<blockquote>
						Trong thời đại 4.0, 5.0 hiện nay, chắc chắn các bạn có thể thấy nhu cầu tìm
						kiếm của người dùng qua internet là rất lớn. Cụ thể, Theo đánh giá của Bộ
						Công thương, năm 2022, hoạt động thương mại điện tử (TMĐT) Việt Nam tiếp tục
						phát triển, trở thành kênh phân phối quan trọng. Quy mô thị trường TMĐT bán
						lẻ Việt Nam năm 2022 ước đạt 16,4 tỷ USD, chiếm 7,5% doanh thu hàng hóa và
						dịch vụ tiêu dùng của cả nước. Ước tính, có khoảng 57 - 60 triệu người Việt
						mua sắm trực tuyến với giá trị mua sắm bình quân đầu người 260 - 285 USD
						trong năm 2022. - Trích tin nhanh chứng khoán
					</blockquote>
				</div>
			</section>
			<section className="mb-4 sm:mb-10">
				<HightLightTitle
					text="--Thiết kế website-- bên mình đảm bảo những tiêu chí nào?"
					hl={['Thiết kế website']}
				/>
				<div className="flex justify-center">
					<p className="max-w-[80%] text-center">
						<b>“Thiết kế website chuyên nghiệp, chuẩn SEO, hiệu quả có khó không?”</b>.
						Vâng, bạn sẽ nhận được câu trả lời là “KHÔNG”, việc thiết kế website có thể
						chỉ diễn ra trong 1 tuần hoặc 1 vài ngày cho các website cơ bản. Nhưng dịch
						vụ thiết kế web chuyên nghiệp, mang lại giá trị về tương tác, tiếp cận, bán
						được hàng hoá sẽ không đơn thuần là tạo ra một website đẹp và đầy đủ nội
						dung là đủ. Dưới đây là những tiêu chí mà website được ra lò từ mình có thể
						đáp ứng.
					</p>
				</div>
				<div className="my-5 sm:my-10">
					<Carousel
						swipeable
						draggable
						showDots={false}
						responsive={responsive}
						minimumTouchDrag={80}
						ssr
						infinite
						autoPlay
						autoPlaySpeed={2000}
						containerClass="carousel-container"
						removeArrowOnDeviceType={['tablet', 'mobile']}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
						pauseOnHover
					>
						{criterias.map((criteria, index) => (
							<div key={index} className="space-y-2 px-2 text-center sm:px-4">
								<p className="text-4xl font-bold">0{index + 1}.</p>
								<h3 className="text-2xl font-bold">{criteria.title}</h3>
								<p>
									{criteria.desc
										.split('--')
										.map((t, idx) =>
											criteria.hl && criteria.hl.includes(t) ? (
												<b key={idx}>{t}</b>
											) : (
												t
											)
										)}
								</p>
							</div>
						))}
					</Carousel>
				</div>
				<div className="mb-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
					<Link href={`/go/${seedingLink.adviseLink.key}`} passHref legacyBehavior>
						<a
							target={`_blank`}
							href={`/go/${seedingLink.adviseLink.key}`}
							className={`umami--click--advise inline-block w-3/4  rounded bg-teal-700 bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
						>
							{`Nhận tư vấn từ mình`}
						</a>
					</Link>
					<Link href={`tel:0365610561`} passHref legacyBehavior>
						<a
							href={`tel:0365610561`}
							className={`umami--click--advise inline-block w-3/4 rounded bg-teal-700 bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
						>
							{`Gọi ngay cho mình`}
						</a>
					</Link>
				</div>
			</section>
			<section>
				<HightLightTitle
					text="Dịch vụ --Thiết kế website đa ngành nghề--"
					hl={['Thiết kế website đa ngành nghề']}
				/>
				<Tabs>
					{servicesData?.map((service, index) => {
						return (
							<Tab
								// @ts-ignore
								component={
									<ServiceList
										{...service}
										color={service.color}
										isExternalLink={false}
									/>
								}
								key={index}
							>
								Đa ngành nghề, đa công nghệ
							</Tab>
						);
					})}
				</Tabs>
			</section>
			<section className="py-5">
				<HightLightTitle
					text="Quy trình --Thiết kế website chuyên nghiệp-- của --Nguyễn Văn Phước--"
					hl={['Thiết kế website chuyên nghiệp', 'Nguyễn Văn Phước']}
				/>
				<div>
					{procedures.map((procedure, index) => {
						const isReverse = index % 2 !== 0;

						return (
							<div key={index}>
								<div
									className={`flex flex-col md:flex-row ${
										index + 1 !== procedures.length ? 'mb-4' : ''
									}`}
								>
									<div
										className={`flex flex-1 flex-col items-center justify-center md:px-5 ${
											isReverse ? 'md:order-2' : 'md:order-1'
										}`}
									>
										<div className="lg:w-3/4">
											<p className="text-4xl font-bold">Bước 0{index + 1}.</p>
											<h3 className="mt-2 text-2xl font-bold">
												{procedure.name}
											</h3>
											<p className="mt-3 text-sm">{procedure?.desc}</p>
										</div>
									</div>
									<div
										className={`mt-5 flex flex-1 flex-col items-center justify-center md:mt-0 ${
											isReverse ? 'md:order-1' : 'md:order-2'
										}`}
									>
										<div className="h-[300px] w-auto overflow-hidden rounded-3xl md:w-[400px]">
											<Image
												loading="lazy"
												src={procedure.image}
												alt={procedure.name}
												title={procedure.name}
												width={600}
												height={400}
												sizes="100vw"
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-center md:py-4">
									{index + 1 !== procedures.length && (
										<Twemoji emoji="red-triangle-pointed-down" size="twa-3x" />
									)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
					<Link href={`/go/${seedingLink.adviseLink.key}`} passHref legacyBehavior>
						<a
							target={`_blank`}
							href={`/go/${seedingLink.adviseLink.key}`}
							className={`umami--click--advise inline-block w-3/4  rounded bg-teal-700 bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
						>
							{`Nhận tư vấn từ mình`}
						</a>
					</Link>
					<Link href={`tel:0365610561`} passHref legacyBehavior>
						<a
							href={`tel:0365610561`}
							className={`umami--click--advise inline-block w-3/4 rounded bg-teal-700 bg-gradient-to-r  from-blue-500 to-teal-500 px-6 py-2.5 text-center text-base uppercase  leading-tight text-white transition-all duration-300 ease-in-out hover:from-teal-500  hover:to-blue-500 focus:outline-none focus:ring-0  sm:w-auto `}
						>
							{`Gọi ngay cho mình`}
						</a>
					</Link>
				</div>
			</section>
			<section className="my-10">
				<HightLightTitle
					text="--Giá Thiết kế website-- bao nhiêu?"
					hl={['Giá Thiết kế website']}
				/>
				<div className="text-gray-800">
					<WebsitePricing websitePriceList={websitePriceList} />
				</div>
			</section>
			<FAQWebDesign fags={fags} />
		</WebsiteServiceLayout>
	);
}

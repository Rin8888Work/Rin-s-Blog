import { useState } from 'react';
import HightLightTitle from './HightLightTitle';

const FAQWebDesign = () => {
	const [activeAccordion, setActiveAccordion] = useState();

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

	const handleAccordion = (id) => {
		setActiveAccordion(id);
	};

	return (
		<section className="my-10">
			<HightLightTitle
				text="Câu hỏi thường gặp khi --Thiết kế website--"
				hl={['Thiết kế website']}
			/>
			<div>
				{fags.map((fag, index) => (
					<div
						key={index}
						className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-[#222]"
					>
						<h3 className="mb-0 text-2xl">
							<button
								className="group relative flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white"
								type="button"
								onClick={() => handleAccordion(fag.q)}
							>
								{fag.q}
								<span
									className={`ml-auto h-5 w-5 shrink-0 ${
										activeAccordion === fag.q
											? 'rotate-[0deg]'
											: 'rotate-[180deg]'
									} fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</span>
							</button>
						</h3>
						<div className={activeAccordion === fag.q ? '!visible' : 'hidden'}>
							<div className="px-5 py-4">{fag.a}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQWebDesign;

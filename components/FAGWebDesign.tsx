import { useState } from 'react';
import HightLightTitle from './HightLightTitle';

const FAQWebDesign = ({ fags }) => {
	const [activeAccordion, setActiveAccordion] = useState();

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
						<h3 className="mb-0 text-base font-bold sm:text-xl">
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

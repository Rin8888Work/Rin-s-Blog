import PaymentItem from '~/components/PaymentItem';
import { siteMetadata } from '~/data/siteMetadata';
import PaymentLayout from '~/layouts/PaymentLayout';

export default function Payment() {
	return (
		<PaymentLayout>
			<div
				className="mt-4 flex rounded-lg bg-green-100 p-4 text-sm text-green-700 sm:mt-8"
				role="alert"
			>
				<svg
					className="mr-3 inline h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
						clipRule="evenodd"
					></path>
				</svg>
				<div>
					<span className="font-medium">Lưu ý: </span> Nội dung chuyển khoản: Tên + Số
					điện thoại. Sẽ hoàn tiền nếu nội dung không như CAM KẾT. Vui lòng liên hệ mình
					nếu chuyển sai.
				</div>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8">
				{siteMetadata.payments?.map((item, index) => (
					<PaymentItem {...item} key={index} />
				))}
			</div>
		</PaymentLayout>
	);
}

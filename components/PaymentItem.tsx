import clsx from 'clsx';
import Image from 'next/image';
import type { PaymentItemProps } from '~/types/payments';
import { Copy } from './Copy';

export default function PaymentItem({
	methodName,
	name,
	bankNumber,
	branch,
	logo,
}: PaymentItemProps) {
	return (
		<h2 className="rounded-xl bg-dark p-5 text-center text-white dark:bg-slate-100 dark:text-black">
			<div className="flex h-28 items-center justify-center">
				<Image
					src={logo}
					title={methodName}
					alt={methodName}
					width={methodName === 'Ví Điện Tử MoMo' ? 100 : 200}
					height={100}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</div>
			<div className="text-center">
				<p className={clsx('text-teal-500', 'font-bold')}>{methodName}</p>
			</div>
			<ul className="mt-2 flex flex-col items-center justify-center">
				<li className="flex space-x-2">
					<span>Tên tài khoản: </span>
					<span className=" font-bold">
						<Copy>{name}</Copy>
					</span>
				</li>
				<li className="mt-2 flex space-x-2">
					<span>Số tài khoản:</span>
					<span className="font-bold">
						<Copy>{bankNumber}</Copy>
					</span>
				</li>
				{branch && (
					<li className="mt-2 flex space-x-2">
						<span>Chi nhánh: </span>
						<span className=" font-bold">{branch}</span>
					</li>
				)}
			</ul>
		</h2>
	);
}

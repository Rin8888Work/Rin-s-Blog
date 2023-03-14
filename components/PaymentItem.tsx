import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
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
	const { t } = useTranslation(['payment']);

	return (
		<h2 className="rounded-xl bg-dark p-5 text-center text-white dark:bg-slate-100 dark:text-black">
			<div className="flex h-28 items-center justify-center">
				<Image
					src={logo}
					title={t(methodName)}
					alt={t(methodName)}
					width={methodName === 'momo' ? 100 : 200}
					height={100}
				/>
			</div>
			<div className="text-center">
				<p className={clsx('text-teal-500', 'font-bold')}>{t(methodName)}</p>
			</div>
			<ul className="mt-2 flex flex-col items-center justify-center">
				<li className="flex space-x-2">
					<span>{t('accountName')}</span>
					<span className=" font-bold">
						<Copy>{t(name)}</Copy>
					</span>
				</li>
				<li className="mt-2 flex space-x-2">
					<span>{t('accountNumber')}</span>
					<span className="font-bold">
						<Copy>{bankNumber}</Copy>
					</span>
				</li>
				{branch && (
					<li className="mt-2 flex space-x-2">
						<span>{t('branch')}</span>
						<span className=" font-bold">{t(branch)}</span>
					</li>
				)}
			</ul>
		</h2>
	);
}

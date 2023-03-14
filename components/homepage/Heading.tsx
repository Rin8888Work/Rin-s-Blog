import { useTranslation } from 'next-i18next';
import { Twemoji } from '~/components/Twemoji';

export function Heading() {
	const { t } = useTranslation('home');
	return (
		<h1 className="text-neutral-900 dark:text-neutral-200">
			{t('introduceMyself1')} <span className="font-medium">{t('fullName')}</span>{' '}
			{t('introduceMyself2')}
			<span className="hidden font-medium">{t('introduceMyself3')}</span>
			<span className="absolute ml-2 inline-flex pt-[3px]">
				<Twemoji emoji="flag-vietnam" />
			</span>
		</h1>
	);
}

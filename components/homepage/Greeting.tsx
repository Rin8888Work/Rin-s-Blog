import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

export function Greeting() {
  const { t } = useTranslation('home')

  let className = clsx(
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'sm:mb-8 mb-4 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )
  return (
    <div className={className}>
      {t('welcome')}! <i className="twa twa-waving-hand"></i>
    </div>
  )
}

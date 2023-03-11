import type { PageTitleProps } from '~/types'

export function PageTitle({ children, title, leading = '' }: PageTitleProps) {
  return (
    <>
      {children ? (
        <h1 className="text-[34px] font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl md:leading-14 lg:text-[54px] lg:leading-[64px]">
          {children}
        </h1>
      ) : (
        <div className="space-y-1 pt-6 pb-8 md:space-y-2">
          <h1 className="text-center text-2xl font-extrabold capitalize leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          {leading && (
            <p className="px-8 text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
              {leading}
            </p>
          )}
          <div className="flex justify-center">
            <div className="w-2/4 border-b border-slate-900/10  py-2 dark:border-slate-300/10"></div>
          </div>
        </div>
      )}
    </>
  )
}

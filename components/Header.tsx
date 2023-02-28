import clsx from 'clsx'
import { headerNavLinks } from 'data/headerNavLinks'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import ScreenWidth from '~/layouts/ScreenWidth'
import { AnalyticsLink } from './AnalyticsLink'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  let router = useRouter()
  return (
    <>
      <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 overflow-x-hidden border-b border-slate-900/10 bg-white/75 py-3  backdrop-blur dark:border-slate-300/10  dark:bg-dark/75 ">
        <ScreenWidth sx=" flex max-w-3xl items-center justify-between">
          <div>
            <Link href="/" aria-label="Leo's Blog">
              <div className="umami--click--logo flex items-center justify-between">
                <div className="mr-3 flex items-center justify-center">
                  <NextImage
                    src="/static/images/logo.jpg"
                    alt="Leo's Blog logo"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden space-x-2 sm:block">
              {headerNavLinks.map((link) => {
                let className = clsx(
                  'inline-block rounded font-medium text-gray-900 dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
                  router.pathname === link.href
                    ? 'bg-gray-200 dark:bg-gray-700'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700',
                  `umami--click--nav-${link.href.replace('/', '')}`
                )
                return (
                  <Link key={link.title} href={link.href}>
                    <span className={className}>{link.title}</span>
                  </Link>
                )
              })}
            </div>
            <AnalyticsLink />
            <ThemeSwitcher />
            <button
              className="umami--click--mobile-nav-toggle ml-2 mr-1 h-8 w-8 rounded sm:hidden"
              type="button"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </ScreenWidth>
      </header>
      <div className="relative bg-gradient-to-r from-yellow-800 to-red-800 px-4 py-3 pr-14 text-white  dark:from-emerald-700 dark:to-lime-600">
        <p className="text-center text-sm font-medium sm:text-center">Enjoy this moment!!!</p>
      </div>
    </>
  )
}

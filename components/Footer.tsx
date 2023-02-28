import { siteMetadata } from '~/data/siteMetadata'
import ScreenWidth from '~/layouts/ScreenWidth'
import { BuiltWith } from './BuiltWith'

export function Footer() {
  return (
    <footer className="mt-20 ">
      <ScreenWidth>
        <div className="divide-y divide-slate-200 border-t border-t-slate-200 px-4 pt-10 dark:divide-slate-700 dark:border-t-slate-700 md:px-5">
          <div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-2 xl:grid-cols-4">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Giới thiệu</h2>
              <p className="mt-3">{siteMetadata.introduceWebsite}</p>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Hệ sinh thái</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    title="Facebook"
                    href={siteMetadata.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata?.youtube || '#'}
                    title="Youtube"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata?.tiktok || '#'}
                    title="Tiktok"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata?.github || '#'}
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Chính sách &amp; Điều khoản
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    title="Chính sách bảo mật"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="/chinh-sach-bao-mat"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    title="Điều khoản"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="/dieu-khoan"
                  >
                    Điều khoản
                  </a>
                </li>
                <li>
                  <a
                    title="Điều khoản"
                    className="hover:text-slate-900 dark:hover:text-slate-300"
                    href="/rss/feed.xml"
                  >
                    RSS Feed
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Fanpage</h2>
              <div className="mt-3 space-y-2">
                <iframe
                  title="Fanpage of mine"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnguyenvanphuoc.page&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=433728550505340"
                  style={{ border: 'none', overflow: 'hidden' }}
                  width={'100%'}
                  height={271}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center py-10">
            <BuiltWith />
            <div className="my-2 mt-6 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>{`Copyright © ${new Date().getFullYear()}`}</div>
              <span>{` • `}</span>
              <span>{siteMetadata.footerTitle}</span>
            </div>
          </div>
        </div>
      </ScreenWidth>
    </footer>
  )
}

import type React from 'react'
import type { PropsWithChildren } from 'react'

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-5xl  px-3 xl:max-w-7xl  xl:px-0">{children}</div>
}

export default PageLayout

import type React from 'react'
import type { PropsWithChildren } from 'react'

interface TitleSectionProps {
  sx?: string
}
const TitleSection: React.FC<PropsWithChildren<TitleSectionProps>> = ({ children, sx = '' }) => {
  return (
    <h2
      className={`m-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-center text-3xl font-extrabold leading-[60px] tracking-tight text-transparent dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600 md:text-4xl ${sx}`}
    >
      {children}
    </h2>
  )
}

export default TitleSection

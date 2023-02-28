import React from '~/assets/icons/react.svg'
import Git from '~/assets/icons/git.svg'
import Javascript from '~/assets/icons/javascript.svg'
import Typescript from '~/assets/icons/typescript.svg'
import Node from '~/assets/icons/nodejs.svg'
import Bash from '~/assets/icons/bash.svg'
import Liquid from '~/assets/icons/liquid.svg'
import Markdown from '~/assets/icons/markdown.svg'
import NextJS from '~/assets/icons/nextjs.svg'
import TailwindCSS from '~/assets/icons/tailwind.svg'
import Prisma from '~/assets/icons/prisma.svg'
import Umami from '~/assets/icons/umami.svg'
import Vercel from '~/assets/icons/vercel.svg'
import Railway from '~/assets/icons/railway.svg'

export let DevIconsMap = {
  React,
  Git,
  Javascript,
  Typescript,
  Node,
  Bash,
  Liquid,
  Markdown,
  NextJS,
  TailwindCSS,
  Prisma,
  Umami,
  Vercel,
  Railway,
}

export function DevIcon(props: { type: keyof typeof DevIconsMap; className?: string }) {
  let { type, className } = props
  let Icon = DevIconsMap[type]
  if (!Icon) return <div>Missing icon</div>

  let defaultClass = 'h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24'
  return <Icon className={className || defaultClass} fill="currentColor" />
}

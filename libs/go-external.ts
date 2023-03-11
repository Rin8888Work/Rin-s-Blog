import { affiliatesLink } from '~/data/siteMetadata'

export function getKeysGoExternal() {
  return Object.keys(affiliatesLink)?.map((key) => affiliatesLink[key].key)
}

export function getLinkFromKey(key) {
  const linkObj = Object.keys(affiliatesLink)
    ?.filter((k) => key === affiliatesLink[k]['key'])
    ?.map((k) => ({ ...affiliatesLink[k] }))

  return linkObj?.length > 0 ? linkObj[0]['link'] : 'not-found'
}

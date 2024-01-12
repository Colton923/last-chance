export const RevertLink = (link: string) => {
  return link.replace(/%20/g, ' ').replace(/%26/g, '&').replace(/%2F/g, '/')
}

export const RevertLink = (link: string) => {
  const replaced = link
    .replace(/%20/g, ' ')
    .replace(/%26/g, '&')
    .replace(/%2F/g, '/')
    .replace(/~/g, '/')
  try {
    return decodeURIComponent(replaced)
  } catch {
    return replaced
  }
}

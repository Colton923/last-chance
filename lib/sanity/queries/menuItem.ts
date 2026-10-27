export const menuItem = (id: string) => {
  const escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
  return `*[_type == "menuItems" && (_id == "${escaped}" || lower(title) == lower("${escaped}"))] {
  _id,
  title,
  description,
  price,
  image,
}`
}

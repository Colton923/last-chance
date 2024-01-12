export const menuItem = (
  title: string
) => `*[_type == "menuItems" && title == "${title}"] {
  title,
  description,
  price,
  image,
}`

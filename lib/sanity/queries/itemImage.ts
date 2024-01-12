export const itemImage = (
  title: string
) => `*[_type == "menuItems" && title == "${title}"] {
  image,
}`

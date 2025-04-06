export const menuItem = (id: string) => `*[_type == "menuItems" && _id == "${id}"] {
  _id,
  title,
  description,
  price,
  image,
}`

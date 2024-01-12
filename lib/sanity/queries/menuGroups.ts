export const menuGroups = `*[_type == "menuGroups"] {
  title,
  "menuItems": *[_type == "menuItems" && menuGroup._ref == ^._id] {
    title,
    description,
    price,
    image,
  }
}`

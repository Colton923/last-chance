export const menuGroups = `*[_type == "menuGroups"] | order(order asc) {
  _id,
  title,
  order,
  "menuItems": *[_type == "menuItems" && references(^._id)] | order(order asc) {
    _id,
    title,
    description,
    price,
    image,
    order
  }
}`

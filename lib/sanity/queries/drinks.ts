export const drinks = `*[_type == "drinkGroups"] | order(order asc) {
  title,
  "drinkItems": *[_type == "drinkItems" && drinkGroup._ref == ^._id] | order(order asc) {
    title,
    price,
    description,
    image,
    order
  }
}`

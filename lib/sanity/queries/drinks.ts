export const drinks = `*[_type == "drinkGroups"] {
  title,
  "drinkItems": *[_type == "drinkItems" && drinkGroup._ref == ^._id] {
    title,
    price
  }
}`

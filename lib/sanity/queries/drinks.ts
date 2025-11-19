export const drinks = `*[_type == "drinkGroups" && (!defined(visible) || visible == true)] | order(order asc) {
  title,
  logo,
  description,
  "drinkItems": *[_type == "drinkItems" && drinkGroup._ref == ^._id && (!defined(available) || available == true)] | order(order asc) {
    title,
    slug,
    price,
    description,
    logo,
    image,
    abv,
    volume,
    featured,
    available,
    order
  }
}`

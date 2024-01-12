export const menuGroup = (
  title: string
) => `*[_type == "menuGroups" && title == "${title}"] {
  title,
}`

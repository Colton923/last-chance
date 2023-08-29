// Drink Groups
export type DrinkGroups = {
  title: string
}

// Drink Items
export type DrinkItems = {
  title: string
  price: number
  drinkGroup: SanityReference<DrinkGroups>
}

// Hours
type DayHours = {
  open?: string
  close?: string
}

export type Hours = {
  kitchen?: boolean
  bar?: boolean
  monday?: DayHours
  tuesday?: DayHours
  wednesday?: DayHours
  thursday?: DayHours
  friday?: DayHours
  saturday?: DayHours
  sunday?: DayHours
}

// Menu Groups
export type MenuGroups = {
  title: string
}

// Menu Items
export type MenuItems = {
  title: string
  description?: string
  price: number
  image?: any
  menuGroup: SanityReference<MenuGroups>
}

// Specials
export type Specials = {
  title: string
  description?: string
}

type SanityReference<T> = {
  _id: string
  _type: string
}

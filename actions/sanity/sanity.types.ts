export type DrinkGroups = {
  title: string
}

export type DrinkItem = {
  title: string
  price: number
  drinkGroup: SanityReference
}

export type DayHours = {
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

export type MenuGroups = {
  title: string
}

export type MenuItems = {
  title: string
  description?: string
  price: number
  image?: any
  menuGroup: SanityReference
}

// Specials
export type Specials = {
  title: string
  description?: string
}

export type SanityReference = {
  _id: string
  _type: string
}

export type Item = {
  _id: string
  title: string
  description?: string
  price: string
  image?: any
  likes?: number
}

export type Group = {
  _id: string
  title: string
  menuItems: Item[]
}

export type MenuItemsWithLikes = {
  _id: string
  menuItems: Item[]
  title: string
}[]

export type PDF = {
  menuPDF: string
}[]

export type Drinks = {
  title: string
  drinkItems: DrinkItem[]
}[]

export type SanitySpecials = {
  title: string
  description: string
}[]

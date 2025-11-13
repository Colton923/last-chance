export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export type DrinkGroups = {
  title: string
  logo?: SanityImage
  description?: string
}

export type DrinkItem = {
  title: string
  slug?: {
    current: string
  }
  price: number
  drinkGroup: SanityReference
  description?: string
  image?: SanityImage
  logo?: SanityImage
  abv?: number
  volume?: string
  featured?: boolean
  available?: boolean
  order?: number
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
  image?: SanityImage
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
  image?: SanityImage
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
  logo?: SanityImage
  drinkItems: DrinkItem[]
}[]

export type SanitySpecials = {
  title: string
  description: string
}[]

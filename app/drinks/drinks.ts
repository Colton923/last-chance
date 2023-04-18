import { StaticImageData } from 'next/image'

export type Beverages = {
  [key: string]: BeverageMenu[]
}

export type BeverageMenu = {
  [key: string]: Beverage[]
}

export type Beverage = {
  name: string
  price: string
}

const Drinks: Beverages = {
  '2023-04-18T02:09:00': [
    {
      beer: [
        { name: 'Budweiser', price: '$5' },
        { name: 'Coors Light', price: '$5' },
        { name: 'Miller Lite', price: '$5' },
        { name: 'Yuengling', price: '$5' },
        { name: 'Sam Adams', price: '$6' },
        { name: 'Blue Moon', price: '$6' },
        { name: 'Shock Top', price: '$6' },
        { name: 'Sierra Nevada', price: '$6' },
        { name: 'Guinness', price: '$6' },
        { name: 'Stella Artois', price: '$6' },
        { name: 'Corona', price: '$6' },
        { name: 'Heineken', price: '$6' },
        { name: 'Bud Light', price: '$6' },
        { name: 'Michelob Ultra', price: '$6' },
      ],
    },
    {
      wine: [
        { name: 'White', price: '$6' },
        { name: 'Red', price: '$6' },
        { name: 'Rose', price: '$6' },
        { name: 'Champagne', price: '$6' },
      ],
    },
    {
      liquor: [
        { name: 'Whiskey', price: '$6' },
        { name: 'Vodka', price: '$6' },
        { name: 'Gin', price: '$6' },
        { name: 'Rum', price: '$6' },
        { name: 'Tequila', price: '$6' },
        { name: 'Brandy', price: '$6' },
        { name: 'Cognac', price: '$6' },
        { name: 'Scotch', price: '$6' },
        { name: 'Bourbon', price: '$6' },
        { name: 'Cordials', price: '$6' },
        { name: 'Liqueurs', price: '$6' },
        { name: 'Schnapps', price: '$6' },
        { name: 'Cocktails', price: '$6' },
      ],
    },
    {
      nonalcoholic: [
        { name: 'Soda', price: '$2' },
        { name: 'Juice', price: '$2' },
        { name: 'Water', price: '$2' },
        { name: 'Coffee', price: '$2' },
        { name: 'Tea', price: '$2' },
      ],
    },
  ],
}

export default Drinks

'use client'

import { useMemo, memo, createContext, useContext, useState, useEffect } from 'react'
import type * as sanityTypes from 'types/sanity'

interface Props {
  children: React.ReactNode
}

export interface SiteContextScope {
  screenWidth: number
  hours: sanityTypes.Hours[]
  specials: sanityTypes.Specials
  loading: boolean
  menuItems: sanityTypes.MenuItems[]
  drinkItems: sanityTypes.DrinkItems[]
}

export const SiteContext = createContext<SiteContextScope | null>(null)
const menuGroupsQuery = `*[_type == "menuGroups"] {
  title,
  "menuItems": *[_type == "menuItems" && menuGroup._ref == ^._id] {
    title,
    description,
    price,
    image,
  }
}`

const drinkGroupsQuery = `*[_type == "drinkGroups"] {
  title,
  "drinkItems": *[_type == "drinkItems" && drinkGroup._ref == ^._id] {
    title,
    price
  }
}`
const hoursQuery = `*[_type == "hours"] {
  kitchen,
  bar,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}`
const specialsQuery = `*[_type == "specials"] {
  title,
  description
}`

import client from 'lib/sanity/client'

export const SiteContextProvider = (props: Props) => {
  const { children } = props
  const [screenWidth, setScreenWidth] = useState(0)
  const [hours, setHours] = useState<sanityTypes.Hours[]>([])
  const [specials, setSpecials] = useState<sanityTypes.Specials>({
    title: '',
    description: '',
  })
  const [loading, setLoading] = useState(true)
  const [menuItems, setMenuItems] = useState<sanityTypes.MenuItems[]>([])
  const [drinkItems, setDrinkItems] = useState<sanityTypes.DrinkItems[]>([])

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
    const fetchData = async () => {
      try {
        const getMenuItems = await client.fetch(menuGroupsQuery)
        const getDrinkItems = await client.fetch(drinkGroupsQuery)
        const getHours = await client.fetch(hoursQuery)
        const getSpecials = await client.fetch(specialsQuery)

        setMenuItems(getMenuItems)
        setDrinkItems(getDrinkItems)
        setHours(getHours)
        setSpecials(getSpecials[0])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
      })
    }
  }, [])

  const contextValue = useMemo<SiteContextScope | null>(
    () => ({
      screenWidth,
      menuItems,
      drinkItems,
      hours,
      specials,
      loading,
    }),
    [screenWidth, menuItems, drinkItems, hours, specials, loading]
  )

  return (
    <SiteContext.Provider value={contextValue as SiteContextScope}>
      {children}
    </SiteContext.Provider>
  )
}

export default memo(SiteContextProvider)

export const useSiteContext = () => {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSiteContext must be used within a SiteContextProvider')
  }
  return context
}

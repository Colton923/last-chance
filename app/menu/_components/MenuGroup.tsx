'use client'

import styles from '../Menu.module.scss'
import MenuItem from './MenuItem'
import { FixTitle } from '../../../lib/fns/FixTitle'
import { useState } from 'react'

export type Group = {
  title: string
  menuItems: Item[]
}

export type Item = {
  title: string
  description: string
  image: string
  price: string
  index: number
  likes: number
}

const MenuGroup = ({ title, menuItems }: Group) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      className={styles.group}
      style={
        collapsed
          ? {
              maxHeight: '300px',
            }
          : {
              maxHeight: '10000px',
            }
      }
    >
      <div
        className={styles.groupNameBox}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <h3 className={styles.groupName}>{FixTitle(title)}</h3>
        <div
          className={styles.arrow}
          style={
            collapsed
              ? {
                  transform: 'rotate(0deg)',
                }
              : {
                  transform: 'rotate(180deg)',
                }
          }
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <ul
        className={styles.items}
        style={
          collapsed
            ? {
                display: 'none',
              }
            : {
                display: 'flex',
              }
        }
      >
        {menuItems.map((item: Item, index: any) => (
          <MenuItem
            key={'item' + index}
            index={index}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            likes={item.likes}
          />
        ))}
      </ul>
    </div>
  )
}

export default MenuGroup

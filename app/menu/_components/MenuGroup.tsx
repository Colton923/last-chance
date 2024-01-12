'use client'

import styles from '../Menu.module.scss'
import MenuItem from './MenuItem'
import { MakeLink } from 'utils'
import { useState } from 'react'
import type { Group, Item } from 'actions/sanity'
import { useRouter } from 'next/navigation'
const MenuGroup = ({ title, menuItems, link, initialState }: Group) => {
  const [collapsed, setCollapsed] = useState(initialState)
  const router = useRouter()

  const handleCollapse = () => {
    if (!initialState) return
    setCollapsed(!collapsed)
  }
  return (
    <div
      className={styles.group}
      style={
        initialState
          ? collapsed
            ? {
                maxHeight: '300px',
              }
            : {
                maxHeight: '10000px',
              }
          : {
              maxHeight: '10000px',
            }
      }
    >
      <div className={styles.groupNameBox} onClick={handleCollapse}>
        <h3 className={styles.groupName}>{title}</h3>
        {initialState ? (
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
        ) : (
          <div
            className={styles.back}
            onClick={() => {
              router.back()
            }}
          >
            BACK
          </div>
        )}
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
        {menuItems.map((item: Item, index: number) => (
          <MenuItem
            key={'item_' + index}
            link={link ? `${link}/${MakeLink(item.title)}` : undefined}
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

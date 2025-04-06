'use client'

import styles from '../../app/main.module.scss'
import MenuItem from './MenuItem'
import { Text } from '../Text'
import type { Group } from '../../actions/sanity'

const MenuGroup = ({ title, menuItems }: Group) => {
  return (
    <div className={styles.group}>
      <Text as="h2" className={styles.groupName}>
        {title}
      </Text>
      <div className={styles.items}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={`menu-item-${index}`}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            likes={item.likes}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuGroup

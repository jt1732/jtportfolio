import React from 'react'
import styles from './stackedList.module.css'

interface Item {
    title: string;
    subTitle: string;
    description: string;
}

interface ListItemProps {
    item: Item;
}

const ListItem = ({ item}: ListItemProps) => {
    
  return (
    <div className={styles.listItem}> 
      <div className={styles.itemText}>
        <p>{item.title}</p>
        <p>{item.subTitle}</p>
        <p>{item.description}</p>
        </div>
    </div>
  )
}

export default ListItem

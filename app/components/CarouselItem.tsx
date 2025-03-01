import React from 'react'
import styles from './Carousel.module.css'

const CarouselItem = ({ item }) => {
    
  return (
    <div className={styles.carouselItem}> 
      <div className={styles.CarouselText}>
        <p>{item.title}</p>
        <p>{item.subTitle}</p>
        <p>{item.description}</p>
        </div>
    </div>
  )
}

export default CarouselItem

"use client";

import React, { useState } from "react";
import CarouselItem from './CarouselItem'
import styles from './Carousel.module.css'

const Carousel = () => {
    const [activeIndex,SetActiveIndex] = useState(0)
    const items = [
        {
            description:"Test",
            title:"Test",
            subTitle:"Test",
        }
    ]
    return (
        <div className={styles.carousel}>
            <div className={styles.inner} style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {items.map((item, index) => {
                return <CarouselItem key={index} item={item} />;
            })}
            </div>
        </div>
    )
}

export default Carousel

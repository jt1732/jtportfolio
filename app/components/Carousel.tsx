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
        },
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
            <div className={styles.arrowButtons}>
                <button className={styles.buttonArrow}>
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <div className={styles.indicators}>
                    {items.map((item,index)=>{
                        return (
                            <button className={styles.buttonIndicator}>
                                <span className="material-symbols-outlined">radio_button_unchecked</span>
                            </button>
                        )
                    })}   
                </div>
                <button className={styles.buttonArrow}>
                    <span className="material-symbols-outlined" >arrow_forward_ios</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel

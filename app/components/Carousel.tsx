"use client";

import React, { useState } from "react";
import CarouselItem from './CarouselItem'
import styles from './Carousel.module.css'

const Carousel = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const items = [
        {
            description:"Test3",
            title:"Test1",
            subTitle:"Test",
        },
        {
            description:"Test",
            title:"Test2",
            subTitle:"Test",
        },
        {
            description:"Test",
            title:"Test2",
            subTitle:"Test",
        }
    ]

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0){
            newIndex = 0;
        } else if (newIndex >= items.length){
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex)
    }
    return (
        <div className={styles.carousel}> 
            <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {items.map((item, index) => {
                return <CarouselItem key={index} item={item} />;
            })}
            </div>
            <div className={styles.arrowButtons}>
                <button onClick={()=>{
                    updateIndex(activeIndex-1);
                }} className={styles.buttonArrow}>
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <div className={styles.indicators}>
                    {items.map((item,index)=>{
                        return (
                            <button onClick={()=>{
                                updateIndex(index)
                            }} key={index} className={styles.buttonIndicator}>
                                <span className={`material-symbols-outlined ${index === activeIndex? styles.indicatorSymbolActive:styles.indicatorSymbol}`}>radio_button_unchecked</span>
                            </button>
                        )
                    })}   
                </div>
                <button onClick={()=>{
                    updateIndex(activeIndex+1);
                }} className={styles.buttonArrow}>
                    <span className="material-symbols-outlined" >arrow_forward_ios</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel

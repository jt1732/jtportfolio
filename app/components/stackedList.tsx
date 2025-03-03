"use client";

import React, { useState } from "react"
import styles from './stackedList.module.css'
import ListItem from "./listItem";

const StackedList = () => {

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

    return (
        <div className={styles.itemList}> 
            <div className={styles.inner} >
            {items.map((item, index) => {
                return <ListItem key={index} item={item} />;
            })}
            </div>
            
        </div>
    )
}

export default StackedList
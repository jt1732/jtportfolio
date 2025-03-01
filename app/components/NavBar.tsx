import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>

      <Link className={styles.siteName} href='./'>Home</Link>
      <ul>
        <li>
            <Link href='./about'>About Me</Link>
        </li>
        <li>
            <Link href=''>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default 
NavBar

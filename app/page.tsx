import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/NavBar'; 
import styles from './components/homepage.module.css'
import Footer from './components/Footer';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.authorName}>
        <h1 className={styles.authorName}>Jacob Turnbull<br></br> Portfolio</h1>
        <div className={styles.shimmer}></div> 
        </div>
        <p className={styles.subText}>BSci(CompSci)/BCom (Finance) Conjoint Student at the University of Auckland</p>
        <div>
          <Link href="" >About Me</Link>
          <Link href="" >Contact Me</Link>
        </div>
        <Carousel></Carousel>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

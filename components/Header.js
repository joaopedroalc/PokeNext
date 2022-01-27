import Image from "next/image";
import Navbar from "./Navbar";

import styles from '../styles/Header.module.css';

export default function Header(){
  return(
    <div className={styles.header}>
      <div className={styles.titleHeader}>
      <Image src="/assets/pokeball.png" width={60} height={60} alt="pokeball" objectFit="cover" layout="intrinsic"></Image>      
      <h1>PokeNext</h1>
      </div>
      <Navbar />
    </div>
  )
}
import Link from "next/link";
import styles from '../styles/Navbar.module.css';

export default function Navbar(){
  return(
    <>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.navItems}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className={styles.navItems}>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
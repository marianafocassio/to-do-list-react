import styles from './Header.module.css'

import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
   return (
      <header className={styles.header}>
         <img src={rocketLogo} alt="Logotipo" />

         <h1><span className={styles.color1}>to</span><span className={styles.color2}>do</span></h1>
      </header>
   )
}
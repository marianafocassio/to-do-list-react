import styles from './Task.module.css'

import checkIcon from '../assets/check.svg'
import emptyCheckIcon from '../assets/empty-check.svg'
import trashIcon from '../assets/trash-icon.svg'

export function Task() {
   return (
      <div className={styles.task}>
         <img src={emptyCheckIcon} alt="" />
         <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
         <img src={trashIcon} alt="" />
      </div>
   )
}
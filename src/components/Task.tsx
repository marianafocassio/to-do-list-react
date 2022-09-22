import styles from './Task.module.css'

import checkIcon from '../assets/check.svg'
import emptyCheckIcon from '../assets/empty-check.svg'
import trashIcon from '../assets/trash-icon.svg'

interface TaskProps {
   title: string,
   isIncomplete: boolean,
}

export function Task({ title, isIncomplete = true }: TaskProps) {
   return (
      <div className={styles.task}>
         <button title='Mudar status da tarefa'>
            <img 
            src={isIncomplete ? emptyCheckIcon : checkIcon}
            />
         </button>
         <p className={isIncomplete ? styles.taskIsIncomplete : styles.taskIsComplete}>{title}</p>
         <button title='Deletar tarefa'>
            <img src={trashIcon} />
         </button>
      </div>
   )
}
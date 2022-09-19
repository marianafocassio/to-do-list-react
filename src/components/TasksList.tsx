import styles from './TasksList.module.css'

import clipboard from '../assets/clipboard.svg'

export function TasksList() {
   return (
      <div className={styles.tasksList}>
         <div className={styles.infosContainer}>
            <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
            <p className={styles.completedTasks}>Concluídas <span>0</span></p>
         </div>
         <div className={styles.tasksContainer}>
            <img src={clipboard} alt="" />
            <p><span>Você ainda não tem tarefas cadastradas</span></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
         </div>
      </div>
   )
}
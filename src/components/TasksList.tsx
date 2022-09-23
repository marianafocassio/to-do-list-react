import { v4 as uuidv4 } from 'uuid'

import { Task } from './Task'

import clipboard from '../assets/clipboard.svg'

import styles from './TasksList.module.css'

const tasks = [
   {
     id: uuidv4(),
     title: 'Terminar o desafio',
     isIncomplete: true,
   },
   {
      id: uuidv4(),
      title: 'Terminar o curso de React',
      isIncomplete: true,
    },
    {
      id: uuidv4(),
      title: 'Almoçar',
      isIncomplete: false,
    },
    {
      id: uuidv4(),
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fugiat ab a nemo aliquam incidunt corrupti omnis impedit officia sit fuga at quisquam ex illum sequi atque maxime repellendus quod!',
      isIncomplete: false,
    },
 ]

 

export function TasksList() {
   return (
      <div className={styles.tasksList}>
         <div className={styles.infosContainer}>
            <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
            <p className={styles.completedTasks}>Concluídas <span>0</span></p>
         </div>
         <div className={styles.tasksContainer}>
            {/* <img src={clipboard} alt="" />
            <p><span>Você ainda não tem tarefas cadastradas</span></p>
            <p>Crie tarefas e organize seus itens a fazer</p> */}
            {tasks.map(task => {
               return (
                  <Task
                     key = {task.id}
                     title = {task.title}
                     isIncomplete = {task.isIncomplete}
                  /> 
               )
            })}
         </div>
      </div>
   )
}
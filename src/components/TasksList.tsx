import styles from './TasksList.module.css'

import clipboard from '../assets/clipboard.svg'

export function TasksList() {
   return (
      <div>
         <div>
            <p>Tarefas criadas <span>0</span></p>
            <p>Concluídas <span>0</span></p>
         </div>
         <div>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
         </div>
      </div>
   )
}
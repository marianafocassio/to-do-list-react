import styles from './Task.module.css';

import checkIcon from '../assets/check.svg';
import emptyCheckIcon from '../assets/empty-check.svg';
import trashIcon from '../assets/trash-icon.svg';

interface TaskProps {
   id: string,
   title: string,
   isIncomplete: boolean,
   //função que recebe id como parâmetro mas que começa vazia
   onDeleteTask: (id: string) => void,
}

export function Task({ id, title, isIncomplete, onDeleteTask}: TaskProps) {

   function handleDeleteTask() {
      onDeleteTask(id);
   }
   
   return (
      <div className={styles.task}>
         <button title='Mudar status da tarefa'>
            <img 
            src={isIncomplete ? emptyCheckIcon : checkIcon}
            />
         </button>
         {/* condition ? exprTrue : exprFalse */}
         <p className={isIncomplete ? styles.taskIsIncomplete : styles.taskIsComplete}>{title}</p>
         <button title='Deletar tarefa' onClick={handleDeleteTask}>
            <img src={trashIcon} />
         </button>
      </div>
   );
}
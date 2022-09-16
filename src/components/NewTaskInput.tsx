import { FormEvent } from 'react'

import styles from './NewTaskInput.module.css'

import addIcon from '../assets/add-icon.svg'

export function NewTaskInput() {
   function handleCreateNewTask (event: FormEvent) {

   }

   const isNewTaskEmpty = 0;
   
   return (
      <div>
         <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

            <textarea
               name='comment'
               placeholder='Adicione uma nova tarefa'
               // value={}
               // onChange={}
               // onInvalid={}
               required
            />

            <button type='submit' 
            // disabled={isNewTaskEmpty}
            >
                  Criar
                  <img src={addIcon} alt="" />
            </button>
         </form>

         {/* <div className={styles.commentList}>
            {comments.map(comment => {
               return (
                  <Comment
                     key={comment}
                     content={comment}
                     onDeleteComment={deleteComment}
                  />
               ) */}
            {/* })} */}


      </div>
   )
}
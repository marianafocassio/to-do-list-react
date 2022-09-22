import { FormEvent } from 'react'

import styles from './NewTaskInput.module.css'

import addIcon from '../assets/add-icon.svg'


export function NewTaskInput() {
   function handleCreateNewTask (event: FormEvent) {
      event.preventDefault()

      
   }
   
   return (
      <div className={styles.taskInput}>
         <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

            <textarea
               name='comment'
               placeholder='Adicione uma nova tarefa'
               // value={}
               // onChange={}
               // onInvalid={}
               required
            />

            <button type='submit'>
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
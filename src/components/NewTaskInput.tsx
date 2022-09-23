import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './NewTaskInput.module.css'

import addIcon from '../assets/add-icon.svg'


export function NewTaskInput() {
   const [tasks, setTasks] =  useState([])

   // const [newTask, setNewTask] = useState('')
   
   function handleCreateNewTask (event: FormEvent) {
      event.preventDefault()

      setTasks([...tasks, tasks.length + 1]);

      // setTasks([...tasks, newTask])
      // setNewTask('')
      
      // console.log(setNewTask)
   }

   // function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>) {
   //    event.target.setCustomValidity('')
   //    setNewTask(event.target.value)
   // }
   
   return (
      <div className={styles.taskInput}>
         <form onSubmit={handleCreateNewTask} className={styles.taskForm}>

            <textarea
               name='task'
               placeholder='Adicione uma nova tarefa'
               // value={newTask}
               // onChange={handleNewTaskChange}
               // onInvalid={}
               required
            />

            <button type='submit'>
               Criar
               <img src={addIcon} alt="" />
            </button>
         </form>

         {/* <div className={styles.commentList}>
            {tasks.map(comment => {
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
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";

import { Task } from './Task'

//import clipboard from '../assets/clipboard.svg'
import addIcon from "../assets/add-icon.svg";

import styles from './TasksList.module.css'
import stylesInput from "./NewTaskInput.module.css";

interface Task {
   id: string,
   title: string,
   isIncomplete: boolean,
}

export function TasksList() {

   //Constante para iniciar o estado
   const [tasks, setTasks] = useState<Task[]>([
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
   ]);

   //Iniciar input vazio
   const [newTaskTitle, setNewTaskTitle] = useState('');

   //Cria nova task na taskList
   function handleCreateNewTask() {
      const newTask = {
         id: uuidv4(),
         title: newTaskTitle,
         isIncomplete: true,
      }

      //Recebe as tasks antigas e insere uma nova
      setTasks([...tasks, newTask]);

      //Deixa input vazio novamente
      setNewTaskTitle('');
   }

   //Deletar tarefa
   function deleteTask(taskToDelete: string) {
      const tasksWithoutDeletedOne = tasks.filter((task) => {
         return task.id !== taskToDelete;
      });

      setTasks(tasksWithoutDeletedOne);
   }

   //Mudar status da tarefa
   function changeStatusTask(id: string) {
      const newTasks = tasks.map((task) => {
         if (task.id == id) {
            task.isIncomplete = !task.isIncomplete
         }
         
         return task;
      });

      setTasks(newTasks);
   }

   //Contar tarefas completas
   const tasksCompleted = tasks.filter((task) => task.isIncomplete == false).length;

   return (
      <>
         <div className={stylesInput.taskInput}>
            <div className={stylesInput.taskForm}>
               <textarea
                  name="task"
                  placeholder="Adicione uma nova tarefa"
                  required
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  //onInvalid={}
               />
               <button type="submit" onClick={handleCreateNewTask}>
                  Criar
                  <img src={addIcon} alt="" />
               </button>
            </div>
         </div>
      
         <div className={styles.tasksList}>
            <div className={styles.infosContainer}>
               <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
               <p className={styles.completedTasks}>Concluídas <span>{tasksCompleted + ' de ' + tasks.length}</span></p>
            </div>
            <div className={styles.tasksContainer}>
               {/* <img src={clipboard} alt="" />
               <p><span>Você ainda não tem tarefas cadastradas</span></p>
               <p>Crie tarefas e organize seus itens a fazer</p> */}
               {tasks.map(task => {
                  return (
                     <Task
                        key = {task.id}
                        id = {task.id}
                        title = {task.title}
                        isIncomplete = {task.isIncomplete}
                        onDeleteTask = {deleteTask}
                        changeStatusTask = {changeStatusTask}
                     /> 
                  )
               })}
            </div>
         </div>
      </>
   )
}
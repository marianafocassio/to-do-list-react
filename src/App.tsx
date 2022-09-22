import { Header } from './components/Header'
import { NewTaskInput } from './components/NewTaskInput'
import { TasksList } from './components/TasksList'

import { useState } from 'react'

import styles from '../src/App.module.css'

import './global.css'

export function App() {

  return (
    <div className={styles.headerContainer}>
      <Header />

      <main className={styles.mainContainer}>
        <NewTaskInput />
      
        <TasksList/>
      </main>
    </div>
  )
}

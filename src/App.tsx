import { Header } from './components/Header'
import { NewTaskInput } from './components/NewTaskInput'

import styles from '../src/App.module.css'

import './global.css'
import { TasksList } from './components/TasksList'

export function App() {

  return (
    <div className={styles.headerContainer}>
      <Header />

      <main className={styles.mainContainer}>
        <NewTaskInput />
      
        <TasksList />
      </main>
    </div>
  )
}

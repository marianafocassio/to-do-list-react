import { Header } from './components/Header'

import styles from '../src/App.module.css'

import './global.css'
import { NewTaskInput } from './components/NewTaskInput'

export function App() {

  return (
    <div>
      <Header />

      <div>
        <NewTaskInput />
      </div>
    </div>
  )
}

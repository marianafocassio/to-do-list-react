import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import styles from '../src/App.module.css';

import './global.css';

export function App() {

  return (
    <div className={styles.headerContainer}>
      <Header />

      <main className={styles.mainContainer}>
        <TasksList/>
      </main>
    </div>
  );
}

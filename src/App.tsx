import './styles/global.scss';
import styles from './App.module.scss';
import { useState } from 'react'

import { ToDoList } from './components/TaskList';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleCreateTask(task: string) {
    setTasks(state => [task, ...state]);
  }

  function handleDeleteTask(index: number){
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <CreateTask handleCreateTask={handleCreateTask} />
        <ToDoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  )
}

export default App

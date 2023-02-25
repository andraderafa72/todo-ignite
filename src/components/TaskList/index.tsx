import { useState } from 'react';
import styles from './styles.module.scss';
import { TaskItem } from '../TaskItem';

interface ToDoListProps {
  tasks: string[];
  handleDeleteTask: (index: number) => void;
}

export function ToDoList({ tasks, handleDeleteTask }: ToDoListProps) {
  const [checkedTasks, setCheckedTasks] = useState(0);
  const numberOfTasks = tasks.length;

  return (
    <div className={styles.list}>

      <div className={styles.listHeader}>
        <strong className={styles.createdTasks}>Tarefas criadas <span>{numberOfTasks}</span></strong>

        <strong className={styles.finishedTasks}>Concluídas <span>{checkedTasks} de {numberOfTasks}</span></strong>
      </div>

      <div className={styles.tasks}>
        {tasks.map((task, index) => (
          <TaskItem
            task={task}
            handleDelete={(wasChecked: boolean) => {
              wasChecked && setCheckedTasks(checkedTasks - 1);
              handleDeleteTask(index);
            }}
            postCheck={((isChecked: boolean) => isChecked ? setCheckedTasks(checkedTasks + 1) : setCheckedTasks(checkedTasks - 1))}
          />
        ))}
      </div>
    </div>
  );
}
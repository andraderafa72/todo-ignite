import { Check, Trash } from 'phosphor-react';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';

interface TaskItemProps {
  task: string;
  postCheck: (isChecked: boolean) => void;
  handleDelete: (wasChecked: boolean) => void;
}

export function TaskItem({ task, handleDelete, postCheck }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckTask(event: any) {
    console.log(event.target === buttonRef.current)
    if (event.target === buttonRef.current) return;
    setIsChecked(!isChecked);
    postCheck(!isChecked);
  }

  const id = String(Math.floor(Math.random() * 10000) + 1);

  const buttonRef = useRef(null)

  return (
    <div className={styles.task} onClick={handleCheckTask}>
      <div className={styles.inputGroup}>
        <input type="checkbox" name="" id={id} onChange={(e) => setIsChecked(e.target.checked)} />
        <label htmlFor={id} className={`${isChecked ? styles.checkbox : styles.emptyCircle}`}>
          {isChecked && <Check />}
        </label>
      </div>


      <p className={isChecked ? styles.checked : ''}>{task}</p>

      <button ref={buttonRef} className={styles.deleteTask} onClick={() => handleDelete(isChecked)}>
        <Trash size="24" />
      </button>
    </div>
  );
}
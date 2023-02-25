import { useState } from "react";
import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.scss';

interface CreateTaskProps {
  handleCreateTask: (task: string) => void;
}

export function CreateTask({ handleCreateTask }: CreateTaskProps) {
  const [content, setContent] = useState('');

  const isButtonDisabled = content.trim() === '';
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button
        className={styles.createTast}
        onClick={() => handleCreateTask(content)}
        disabled={isButtonDisabled}
      >
        Criar <PlusCircle size={32} />
      </button>
    </div>
  );
}
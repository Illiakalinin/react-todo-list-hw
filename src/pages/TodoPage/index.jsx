import React from 'react';
import TodoForm from '../../components/Forms/TodoForm';
import TodosList from '../../components/TodosList';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Todos List</h2>
        <TodoForm />
        <TodosList />
      </div>
    </div>
  );
}

export default TodoPage;

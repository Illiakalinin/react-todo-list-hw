import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/slices/todosSlice';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import styles from './TodosList.module.sass';

export const TodosList = ({ todos, remove, update }) => {
  const handleTodoChange = (id, isDone) => update(id, { isDone: !isDone });

  const handleComplete = t => {
    update(t.id, { isDone: !t.isDone });
  };

  return (
    <ul>
      {todos.map(t => (
        <li className={styles.items} key={t.id}>
          <input
            type='text'
            value={t.todo}
            className={styles.list}
            onChange={() => handleTodoChange(t.id, t.isDone)}
          />

          <button
            className={`
              ${styles.bttnComplete} 
              ${t.isDone ? styles.bttnInProgress : ''}
            `}
            onClick={() => handleComplete(t)}
          >
            <FaCheckCircle />
          </button>

          <button className={styles.bttnDelete} onClick={() => remove(t.id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todosList }) => todosList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteTodo(id)),
  update: (id, updatedData) => {
    console.log(id, updatedData);
    return dispatch(updateTodo({ id, updatedData }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

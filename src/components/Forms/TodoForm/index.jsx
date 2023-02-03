import { Formik, Form } from 'formik';
import React from 'react';
import Input from '../Input';
import styles from './TodoForm.module.sass';
import { connect } from 'react-redux';
import { createTodo } from '../../../store/slices/todosSlice';

function TodoForm ({ createNewTodo }) {
  const initialValues = { todo: '' };

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    // valid: styles.valid,
    // invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name='todo'
          placeholder='Enter a todo...'
          autoFocus
          classes={classes}
        />
        <button className={styles.submit} type='submit'>
          Add
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTodo: v => dispatch(createTodo(v)),
});

export default connect(null, mapDispatchToProps)(TodoForm);

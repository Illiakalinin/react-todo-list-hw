import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const storageTodos = JSON.parse(localStorage.getItem('storageTodos'));

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: !!storageTodos ? storageTodos : [] },
  reducers: {
    createTodo (state, action) {
      state.todos.push({
        ...action.payload,
        isDone: false,
        id: uuidv4(),
      });

      localStorage.setItem('storageTodos', JSON.stringify(state.todos));
    },
    deleteTodo (state, action) {
      state.todos = state.todos.filter(t => t.id !== action.payload);

      localStorage.setItem('storageTodos', JSON.stringify(state.todos));
    },

    updateTodo (state, action) {
      const index = state.todos.findIndex(
        item => item.id === action.payload.id
      );

      state.todos[index] = {
        ...state.todos[index],
        ...action.payload.updatedData,
      };

      localStorage.setItem('storageTodos', JSON.stringify(state.todos));
    },
  },
});

const { reducer, actions } = todosSlice;

export const { createTodo, deleteTodo, updateTodo } = actions;

export default reducer;

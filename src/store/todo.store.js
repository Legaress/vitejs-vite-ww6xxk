import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Piedra del Alma'),
    new Todo('Piedra del Tiempo'),
    new Todo('Piedra del Infinito'),
  ],
  Filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore ☻');
};

const loadStore = () => {
  throw new Error('Not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description) => {
  throw new Error('Not implemented');
}

/**
 * 
 * @param {String} id 
 */
const toggleTodo = (id) => {
  throw new Error('Not implemented');
}

const deleteTodo = (id) => {
  throw new Error('Not implemented');
}

const deleteCompleted = () => {
  throw new Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
}

const getCurrentFilter = () => {
  throw new Error('Not implemented');
}

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};

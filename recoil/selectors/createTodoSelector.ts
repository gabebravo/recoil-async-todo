import { selector } from 'recoil';
import { getAllTodos, createTodo } from '../../api/todo';
import todosAtom from '../atoms/TodosAtom';

type TodoInput = {};

const createTodoSelector = selector({
  key: 'createTodoSelector',
  get: () => {
    return null;
  },
  set: async ({ get, set }, rawTodo) => {
    const todos = get(todosAtom);
    const todoFromService = await createTodo(rawTodo);
    set(todosAtom, [...todos, todoFromService]);
  },
});

export default createTodoSelector;

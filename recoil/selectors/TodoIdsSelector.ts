import { selector } from 'recoil';
import getAllTodos from '../../api/getAllTodos';
import { Todo } from '../../types/TodoType';

const selectorAllTodos = selector<Todo[]>({
  key: 'todoList',
  get: async () => {
    return await getAllTodos();
  },
});

export default selectorAllTodos;

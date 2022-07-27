import { selector } from 'recoil';
import { getAllTodos } from '../../api/todo';
import { Todo } from '../../types/TodoType';

const allTodosSelector = selector<Todo[]>({
  key: 'todoList',
  get: async () => {
    return await getAllTodos();
  },
});

export default allTodosSelector;

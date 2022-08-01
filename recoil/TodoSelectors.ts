import { selector, selectorFamily } from 'recoil';
import { getAllTodos } from '../api/todo';
import { Todo, TodoCount } from '../types/TodoType';
import { todosAtom } from './TodoAtoms';

export const fetchTodosSelector = selector({
  key: 'fetchTodos',
  get: () => async () => {
    return await getAllTodos();
  },
});

const getCount = (todos: Todo[]): any => {
  const newCount: TodoCount = todos.reduce(
    (acc: TodoCount, todo: Todo) => {
      if (todo.done) {
        acc.complete++;
      } else {
        acc.incomplete++;
      }
      return acc;
    },
    { incomplete: 0, complete: 0 }
  );

  return newCount;
};

export const todoCountSelector = selector({
  key: 'todoCount',
  get: ({ get }) => {
    let todos = get(todosAtom);
    return getCount(todos);
  },
});

type filteredTodosParams = { enabled: boolean; status: string };
export const filteredTodosSelector = selectorFamily({
  key: 'filterTodos',
  get:
    ({ enabled, status }: filteredTodosParams) =>
    ({ get }) => {
      const currTodos = get(todosAtom);

      if (enabled && status) {
        return currTodos.filter(
          (td: Todo) => td.done === (status === 'done' ? true : false)
        );
      }
      return currTodos;
    },
});

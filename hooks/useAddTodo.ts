import { useRecoilCallback } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { Todo } from '../types/TodoType';

const useAddTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currTodos: Todo[]) => [...currTodos, todo]);
      },
    []
  );

export default useAddTodo;

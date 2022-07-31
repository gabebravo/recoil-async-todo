import { useRecoilCallback } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { Todo } from '../types/TodoType';

const useDeleteTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currTodos: Todo[]) =>
          currTodos.filter((td) => td.id !== todo.id)
        );
      },
    []
  );

export default useDeleteTodo;

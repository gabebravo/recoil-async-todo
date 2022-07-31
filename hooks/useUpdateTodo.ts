import { useRecoilCallback } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { Todo } from '../types/TodoType';

const useUpdateTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currTodos: Todo[]) =>
          currTodos.map((td) => (td.id === todo.id ? todo : td))
        );
      },
    []
  );

export default useUpdateTodo;

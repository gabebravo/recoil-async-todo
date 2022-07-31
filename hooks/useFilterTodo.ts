import { useRecoilCallback } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { filteredAtom } from '../recoil/FilterAtom';
import { Todo } from '../types/TodoType';

export const useFilterTodo = () =>
  useRecoilCallback(
    ({ snapshot, set }) =>
      async (status: string) => {
        const currTodos = await snapshot.getPromise(todosAtom);
        set(
          filteredAtom,
          currTodos.filter(
            (td) => td.done === (status === 'done' ? true : false)
          )
        );
      },
    []
  );

import { useRecoilCallback } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { Todo } from '../types/TodoType';

export const useAddTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currAtoms) => [...currAtoms, todo]);
      },
    []
  );

export const useDeleteTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currAtoms) =>
          currAtoms.filter((td) => td.id !== todo.id)
        );
      },
    []
  );

export const useUpdateTodo = () =>
  useRecoilCallback(
    ({ set }) =>
      (todo: Todo) => {
        set(todosAtom, (currAtoms) =>
          currAtoms.map((td) => (td.id === todo.id ? todo : td))
        );
      },
    []
  );

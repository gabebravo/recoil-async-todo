import { useSetRecoilState } from 'recoil';
import { todosAtom } from '../recoil/TodoAtoms';
import { Todo } from '../types/TodoType';

export const useAddTodo = () => {
  const setAtoms = useSetRecoilState(todosAtom);
  return (todo: Todo) => setAtoms((currAtoms) => [...currAtoms, todo]);
};

export const useDeleteTodo = () => {
  const setAtoms = useSetRecoilState(todosAtom);
  return (todo: Todo) =>
    setAtoms((currAtoms) => currAtoms.filter((td) => td.id !== todo.id));
};

export const useUpdateTodo = () => {
  const setAtoms = useSetRecoilState(todosAtom);
  return (todo: Todo) =>
    setAtoms((currAtoms) =>
      currAtoms.map((td) => (td.id === todo.id ? todo : td))
    );
};

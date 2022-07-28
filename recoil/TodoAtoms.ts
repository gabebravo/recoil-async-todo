import { atom } from 'recoil';
import { Todo } from '../types/TodoType';

export const todosAtom = atom<Todo[]>({
  key: 'Todos',
  default: [],
});
